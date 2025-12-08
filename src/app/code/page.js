'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import RichText from '@/components/RichText';

// Composant pour une cellule individuelle
const NotebookCell = ({
    cell,
    index,
    updateCell,
    deleteCell,
    moveCell,
    runCell,
    isActive,
    setActive
}) => {
    const textareaRef = useRef(null);

    // Ajuster la hauteur du textarea automatiquement
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [cell.content]);

    return (
        <div
            className={`group flex gap-2 mb-4 transition-all duration-200 ${isActive ? '' : 'opacity-90 hover:opacity-100'}`}
            onClick={() => setActive(cell.id)}
        >
            {/* Colonne de gauche (In [ ]) */}
            <div className="w-16 flex-shrink-0 flex flex-col items-end pt-2 gap-1 select-none">
                {cell.type === 'code' && (
                    <span className={`font-mono text-xs ${cell.status === 'running' ? 'text-yellow-400' : 'text-gray-500'}`}>
                        {cell.status === 'running' ? '[*]:' : `[${cell.executionCount || ' '}]:`}
                    </span>
                )}
            </div>

            {/* Contenu principal */}
            <div className="flex-1 min-w-0 flex flex-col gap-2">
                {/* Zone d'entrée (Code ou Markdown) */}
                <div className={`relative rounded-lg border transition-all duration-200 overflow-hidden
                    ${isActive
                        ? 'border-[#00F5D4] shadow-[0_0_0_1px_rgba(0,245,212,0.3)] bg-[#0F1115]'
                        : 'border-white/10 bg-[#0F1115] hover:border-white/20'
                    }
                `}>
                    {/* Indicateur de type (petit badge) */}
                    <div className="absolute top-0 right-0 p-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] uppercase font-bold text-gray-600 bg-black/50 px-1.5 py-0.5 rounded">
                            {cell.type}
                        </span>
                    </div>

                    <div className="flex">
                        {/* Marge colorée état */}
                        {cell.type === 'code' && (
                            <div className={`w-1 flex-shrink-0 ${cell.status === 'running' ? 'bg-yellow-400 animate-pulse' :
                                cell.status === 'success' ? 'bg-transparent' :
                                    cell.status === 'error' ? 'bg-red-500' :
                                        'bg-transparent'
                                }`} />
                        )}

                        <div className="flex-1 p-3">
                            {cell.type === 'markdown' && !cell.isEditing ? (
                                <div
                                    className="prose prose-invert max-w-none min-h-[1.5rem] cursor-text"
                                    onDoubleClick={() => updateCell(cell.id, { isEditing: true })}
                                >
                                    <RichText>{cell.content || '<span class="text-gray-600 italic">Double-cliquez pour ajouter du texte...</span>'}</RichText>
                                </div>
                            ) : (
                                <textarea
                                    ref={textareaRef}
                                    value={cell.content}
                                    onChange={(e) => updateCell(cell.id, { content: e.target.value })}
                                    className={`w-full bg-transparent focus:outline-none resize-none font-mono text-sm leading-relaxed ${cell.type === 'code' ? 'text-[#e0e0e0]' : 'text-gray-300 font-sans'
                                        }`}
                                    placeholder={cell.type === 'code' ? 'print("Hello World")' : '# Titre...'}
                                    spellCheck="false"
                                    autoFocus={cell.isEditing}
                                    onBlur={() => cell.type === 'markdown' && updateCell(cell.id, { isEditing: false })}
                                    onKeyDown={(e) => {
                                        // Exécution : Shift + Enter
                                        if (e.key === 'Enter' && e.shiftKey) {
                                            e.preventDefault();
                                            runCell(cell.id);
                                            return;
                                        }

                                        // Indentation : Tab
                                        if (e.key === 'Tab') {
                                            e.preventDefault();
                                            const start = e.target.selectionStart;
                                            const end = e.target.selectionEnd;
                                            const value = e.target.value;
                                            const newValue = value.substring(0, start) + "    " + value.substring(end);

                                            updateCell(cell.id, { content: newValue });

                                            // Restaurer curseur
                                            setTimeout(() => {
                                                if (textareaRef.current) {
                                                    textareaRef.current.selectionStart = start + 4;
                                                    textareaRef.current.selectionEnd = start + 4;
                                                }
                                            }, 0);
                                            return;
                                        }

                                        // Auto-close : (, [, {, ", '
                                        const pairs = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'" };
                                        if (pairs[e.key]) {
                                            e.preventDefault();
                                            const start = e.target.selectionStart;
                                            const end = e.target.selectionEnd;
                                            const value = e.target.value;
                                            const char = e.key;
                                            const closeChar = pairs[char];

                                            const newValue = value.substring(0, start) + char + closeChar + value.substring(end);
                                            updateCell(cell.id, { content: newValue });

                                            setTimeout(() => {
                                                if (textareaRef.current) {
                                                    textareaRef.current.selectionStart = start + 1;
                                                    textareaRef.current.selectionEnd = start + 1;
                                                }
                                            }, 0);
                                            return;
                                        }

                                        // Backspace sur une paire vide
                                        if (e.key === 'Backspace') {
                                            const start = e.target.selectionStart;
                                            const value = e.target.value;
                                            const prevChar = value[start - 1];
                                            const nextChar = value[start];
                                            const pairMap = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'" };

                                            if (prevChar && pairMap[prevChar] === nextChar) {
                                                e.preventDefault();
                                                const newValue = value.substring(0, start - 1) + value.substring(start + 1);
                                                updateCell(cell.id, { content: newValue });
                                                setTimeout(() => {
                                                    if (textareaRef.current) {
                                                        textareaRef.current.selectionStart = start - 1;
                                                        textareaRef.current.selectionEnd = start - 1;
                                                    }
                                                }, 0);
                                                return;
                                            }
                                        }
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    {/* Barre d'actions flottante */}
                    <div className={`absolute top-1 right-1 flex gap-0.5 bg-[#1A1D24] rounded-md border border-white/10 shadow-xl transition-all duration-200 z-20 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                        }`}>
                        <button onClick={() => runCell(cell.id)} className="p-1.5 hover:bg-white/10 text-[#00F5D4]" title="Exécuter (Shift+Enter)">▶</button>
                        <div className="w-px bg-white/10 my-1" />
                        <button onClick={() => moveCell(index, -1)} className="p-1.5 hover:bg-white/10 text-gray-400 hover:text-white">↑</button>
                        <button onClick={() => moveCell(index, 1)} className="p-1.5 hover:bg-white/10 text-gray-400 hover:text-white">↓</button>
                        <div className="w-px bg-white/10 my-1" />
                        <button onClick={() => deleteCell(cell.id)} className="p-1.5 hover:bg-white/10 text-gray-400 hover:text-red-400">✕</button>
                    </div>
                </div>

                {/* Zone de Sortie (Output) Améliorée pour Multi-Types */}
                {cell.output && (
                    <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300 mt-2 border-t border-white/5 pt-2">
                        <div className="flex gap-2">
                            <div className="w-16 flex-shrink-0 text-right pr-3 font-mono text-xs text-red-400/50 select-none pt-1">
                                {cell.output.error ? 'Error' : `[${cell.executionCount || '?'}]`}
                            </div>
                            <div className={`flex-1 overflow-x-auto min-h-[1.5rem] ${cell.output.error ? 'bg-red-500/10 border-l-2 border-red-500 p-3 rounded-r text-red-400' : 'text-gray-200'}`}>

                                {/* Affichage des tous les contenus s'ils sont présents */}

                                {/* 1. Erreur */}
                                {cell.output.error && (
                                    <pre className="font-mono text-sm whitespace-pre-wrap mb-2">{cell.output.error}</pre>
                                )}

                                {/* 2. Texte Standard (Stdout / Result) */}
                                {cell.output.text && (
                                    <pre className="font-mono text-sm whitespace-pre-wrap mb-2">{cell.output.text}</pre>
                                )}

                                {/* 3. LaTeX */}
                                {cell.output.latex && (
                                    <div className="p-2 bg-white/5 rounded overflow-x-auto mb-2">
                                        <RichText>{`$$${cell.output.latex}$$`}</RichText>
                                    </div>
                                )}

                                {/* 4. Image */}
                                {cell.output.image && (
                                    <div className="bg-white p-2 rounded inline-block">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={cell.output.image} alt="Output" className="max-w-full h-auto" />
                                    </div>
                                )}

                                {/* Indicateur si vide */}
                                {!cell.output.text && !cell.output.image && !cell.output.latex && !cell.output.error && (
                                    <span className="text-gray-500 italic text-xs">✓ Exécuté (aucune sortie)</span>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function NotebookPage() {
    const [cells, setCells] = useState([
        {
            id: '1',
            type: 'markdown',
            content: '# Bienvenue dans SymLab Notebook 🐍\n\nEnvironnement **prêt à l\'emploi** avec NumPy, Pandas, Matplotlib, SymPy.\n\n### Raccourcis :\n- **Shift + Enter** : Exécuter\n- **Tab** : Indenter\n- **Auto-close** : Parenthèses et guillemets',
            status: 'idle',
            output: null,
            isEditing: false
        },
        {
            id: '2',
            type: 'code',
            content: '# Exemple: Matrice NumPy et Plot\nX = np.linspace(0, 10, 100)\nY = np.sin(X)\n\nplt.figure(figsize=(10, 4))\nplt.plot(X, Y, label="Sinus", color="#00F5D4")\nplt.title("Test Graphique")\nplt.legend()\nplt.show()',
            status: 'idle',
            output: null,
            executionCount: null
        }
    ]);
    const [activeCellId, setActiveCellId] = useState(null);
    const [kernelStatus, setKernelStatus] = useState('loading');
    const [pyodide, setPyodide] = useState(null);

    // Initialisation de Pyodide (SSR Protected)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const loadPyodide = async () => {
            try {
                if (!window.loadPyodide) {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
                    script.async = true;
                    script.onload = async () => {
                        const py = await window.loadPyodide();
                        await py.loadPackage(['micropip', 'numpy', 'matplotlib', 'pandas', 'scipy', 'sympy', 'scikit-learn']);
                        const initCode = `
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import scipy
import sympy
from sympy import *
import sklearn
import sys
import io
import json
print("Kernel Initialized")
`;
                        await py.runPythonAsync(initCode);
                        setPyodide(py);
                        setKernelStatus('ready');
                    };
                    document.body.appendChild(script);
                } else if (!pyodide) {
                    setKernelStatus('loading');
                    const py = await window.loadPyodide();
                    await py.loadPackage(['micropip', 'numpy', 'matplotlib', 'pandas', 'scipy', 'sympy', 'scikit-learn']);
                    const initCode = `
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import scipy
import sympy
from sympy import *
import sklearn
`;
                    await py.runPythonAsync(initCode);
                    setPyodide(py);
                    setKernelStatus('ready');
                }
            } catch (err) {
                console.error("Erreur chargement Pyodide:", err);
                setKernelStatus('error');
            }
        };
        loadPyodide();
        return () => setKernelStatus('loading');
    }, []);

    const updateCell = (id, updates) => setCells(cells.map(c => c.id === id ? { ...c, ...updates } : c));

    const addCell = (index, type = 'code') => {
        const newCell = {
            id: Date.now().toString(),
            type,
            content: '',
            status: 'idle',
            output: null,
            executionCount: null,
            isEditing: true
        };
        const newCells = [...cells];
        newCells.splice(index + 1, 0, newCell);
        setCells(newCells);
        setActiveCellId(newCell.id);
    };

    const deleteCell = (id) => {
        if (cells.length > 1) setCells(cells.filter(c => c.id !== id));
    };

    const moveCell = (index, direction) => {
        if (index + direction >= 0 && index + direction < cells.length) {
            const newCells = [...cells];
            const temp = newCells[index];
            newCells[index] = newCells[index + direction];
            newCells[index + direction] = temp;
            setCells(newCells);
        }
    };

    const restartKernel = async () => {
        setKernelStatus('loading');
        if (pyodide) {
            await pyodide.runPythonAsync(`globals().clear()
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import scipy
import sympy
from sympy import *
import sklearn
import sys
import io
import json`);
            setCells(cells.map(c => ({ ...c, status: 'idle', output: null, executionCount: null })));
            setKernelStatus('ready');
        }
    };

    const runCell = async (id) => {
        const cell = cells.find(c => c.id === id);
        if (!cell || cell.type === 'markdown') {
            if (cell) updateCell(id, { isEditing: false });
            return;
        }

        if (!pyodide) return alert("Kernel en chargement...");

        updateCell(id, { status: 'running' });
        setKernelStatus('busy');

        try {
            const pythonCode = `
import sys
import io
import json
import base64
import matplotlib.pyplot as plt

sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

# Cleanup plots
plt.close('all')
plt.clf()

code = ${JSON.stringify(cell.content)}
result = None

try:
    import ast
    tree = ast.parse(code)
    if not tree.body:
        pass
    elif isinstance(tree.body[-1], ast.Expr):
        last_expr = tree.body.pop()
        if tree.body:
            exec(compile(tree, filename="<cell>", mode="exec"), globals())
        result = eval(compile(ast.Expression(last_expr.value), filename="<cell>", mode="eval"), globals())
    else:
        exec(code, globals())
except Exception as e:
    import traceback
    traceback.print_exc()

# Capture Plot
img_str = None
if plt.get_fignums():
    buf = io.BytesIO()
    plt.savefig(buf, format='png', bbox_inches='tight', transparent=True, dpi=120)
    buf.seek(0)
    img_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')
    plt.close('all')

# Capture LaTeX
latex_str = None
if result is not None:
    if hasattr(result, '_repr_latex_'):
        latex_str = result._repr_latex_()
    elif hasattr(result, 'latex'):
        latex_str = result.latex()

stdout_val = sys.stdout.getvalue()
stderr_val = sys.stderr.getvalue()

json.dumps({
    "stdout": stdout_val,
    "stderr": stderr_val,
    "result": str(result) if result is not None else None,
    "image": img_str,
    "latex": latex_str
})
`;
            const responseStr = await pyodide.runPythonAsync(pythonCode);
            const response = JSON.parse(responseStr);

            // Structure de sortie multi-Champs
            const out = {};

            // 1. Erreur
            if (response.stderr && response.stderr.includes('Traceback')) {
                out.error = response.stderr;
            } else if (response.stderr) {
                // Warnings
                out.text = (response.stdout || '') + '\n⚠️ ' + response.stderr;
            }

            // 2. Texte
            let text = response.stdout || '';
            if (response.result && response.result !== 'None' && !response.image && !response.latex) {
                text += (text ? '\n' : '') + `[Out]: ${response.result}`;
            }
            if (!out.error && text.trim()) {
                out.text = (out.text || '') + text;
            }

            // 3. LaTeX
            if (response.latex) out.latex = response.latex;

            // 4. Image
            if (response.image) out.image = response.image;

            updateCell(id, {
                status: 'success',
                output: out,
                executionCount: (cell.executionCount || 0) + 1
            });

        } catch (err) {
            console.error("Exec Error:", err);
            updateCell(id, {
                status: 'error',
                output: { error: err.toString() }
            });
        } finally {
            setKernelStatus('ready');
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex flex-col">
            <header className="h-16 border-b border-white/10 flex items-center justify-between px-4 bg-[#0F1115] fixed w-full z-50">
                <div className="flex items-center gap-4">
                    <Link href="/programming" className="text-gray-400 hover:text-white transition-colors">← Retour</Link>
                    <div className="h-6 w-px bg-white/10" />
                    <h1 className="font-bold text-lg">SymLab Notebook</h1>
                    <span className="text-xs text-gray-500">Python 3.11 (Pyodide)</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <div className={`w-2 h-2 rounded-full ${kernelStatus === 'ready' ? 'bg-green-500' : kernelStatus === 'error' ? 'bg-red-500' : 'bg-yellow-500 animate-pulse'} `} />
                        <span className="text-xs font-mono text-gray-300">{kernelStatus === 'loading' ? 'Init...' : kernelStatus === 'busy' ? 'Run...' : 'Prêt'}</span>
                    </div>
                    <button className="bg-[#00F5D4] text-black px-4 py-1.5 rounded font-bold text-sm hover:bg-[#00F5D4]/90 transition-colors">Partager</button>
                </div>
            </header>

            <div className="mt-16 h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-[#0F1115] sticky top-16 z-40">
                <button onClick={() => addCell(cells.length - 1, 'code')} className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/10 rounded text-gray-300 transition-colors"><span className="text-[#00F5D4] font-bold">+</span> Code</button>
                <button onClick={() => addCell(cells.length - 1, 'markdown')} className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/10 rounded text-gray-300 transition-colors"><span className="text-gray-400 font-bold">+</span> Texte</button>
                <div className="h-6 w-px bg-white/10 mx-2" />
                <button onClick={() => restartKernel()} className="p-2 hover:bg-white/10 rounded text-gray-300 transition-colors">↻ Restart</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-5xl mx-auto w-full pb-32">
                {cells.map((cell, index) => (
                    <div key={cell.id} className="group/add">
                        <NotebookCell
                            cell={cell}
                            index={index}
                            updateCell={updateCell}
                            deleteCell={deleteCell}
                            moveCell={moveCell}
                            runCell={runCell}
                            isActive={activeCellId === cell.id}
                            setActive={setActiveCellId}
                        />
                        <div className="h-4 -mt-4 mb-2 flex items-center justify-center opacity-0 group-hover/add:opacity-100 transition-opacity z-10 relative pointer-events-none group-hover/add:pointer-events-auto">
                            <div className="absolute inset-x-0 h-px bg-[#00F5D4]/20" />
                            <div className="flex gap-2 bg-black px-2 relative z-20">
                                <button onClick={() => addCell(index, 'code')} className="text-[10px] bg-[#00F5D4]/10 text-[#00F5D4] px-2 py-0.5 rounded border border-[#00F5D4]/20 hover:bg-[#00F5D4]/20">+ Code</button>
                                <button onClick={() => addCell(index, 'markdown')} className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded border border-white/10 hover:bg-white/20">+ Texte</button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="h-32 border-2 border-dashed border-white/5 rounded-xl flex items-center justify-center text-gray-600 hover:border-[#00F5D4]/30 hover:text-[#00F5D4]/50 transition-all cursor-pointer" onClick={() => addCell(cells.length - 1, 'code')}>Cliquez pour ajouter</div>
            </div>
        </main>
    );
}
