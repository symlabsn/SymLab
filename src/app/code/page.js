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
                                        if (e.key === 'Enter' && e.shiftKey) {
                                            e.preventDefault();
                                            runCell(cell.id);
                                        }
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    {/* Barre d'actions flottante (visible si actif ou survol) */}
                    <div className={`absolute top-1 right-1 flex gap-0.5 bg-[#1A1D24] rounded-md border border-white/10 shadow-xl transition-all duration-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                        }`}>
                        <button onClick={() => runCell(cell.id)} className="p-1.5 hover:bg-white/10 text-[#00F5D4]" title="Exécuter">▶</button>
                        <div className="w-px bg-white/10 my-1" />
                        <button onClick={() => moveCell(index, -1)} className="p-1.5 hover:bg-white/10 text-gray-400 hover:text-white">↑</button>
                        <button onClick={() => moveCell(index, 1)} className="p-1.5 hover:bg-white/10 text-gray-400 hover:text-white">↓</button>
                        <div className="w-px bg-white/10 my-1" />
                        <button onClick={() => deleteCell(cell.id)} className="p-1.5 hover:bg-white/10 text-gray-400 hover:text-red-400">✕</button>
                    </div>
                </div>

                {/* Zone de Sortie (Output) */}
                {cell.output && (
                    <div className="flex gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="w-16 flex-shrink-0 text-right pr-3 font-mono text-xs text-red-400/50 select-none pt-1">
                            {cell.output.type !== 'error' ? `[${cell.executionCount}]:` : ''}
                        </div>
                        <div className={`flex-1 overflow-x-auto ${cell.output.type === 'error' ? 'bg-red-500/10 border-l-2 border-red-500 p-3 rounded-r' : ''
                            }`}>
                            {cell.output.type === 'text' && (
                                <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">{cell.output.data}</pre>
                            )}
                            {cell.output.type === 'error' && (
                                <pre className="font-mono text-sm text-red-400 whitespace-pre-wrap">{cell.output.data}</pre>
                            )}
                            {cell.output.type === 'image' && (
                                <div className="bg-white p-2 rounded inline-block">
                                    <img src={cell.output.data} alt="Output" className="max-w-full h-auto" />
                                </div>
                            )}
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
            content: '# Bienvenue dans SymLab Notebook 🐍\n\nCeci est un environnement interactif **Python** complet. Vous pouvez écrire du code, des équations et visualiser des données.\n\n### Raccourcis :\n- **Shift + Enter** : Exécuter la cellule\n- **Double-clic** : Éditer une cellule Markdown',
            status: 'idle',
            output: null,
            isEditing: false
        },
        {
            id: '2',
            type: 'code',
            content: 'import numpy as np\n\n# Création d\'un tableau\nx = np.linspace(0, 10, 100)\nprint(f"Tableau créé avec {len(x)} points !")',
            status: 'idle',
            output: null,
            executionCount: null
        }
    ]);
    const [activeCellId, setActiveCellId] = useState(null);
    const [kernelStatus, setKernelStatus] = useState('loading'); // ready, busy, error, loading
    const [pyodide, setPyodide] = useState(null);

    // Initialisation de Pyodide
    useEffect(() => {
        const loadPyodide = async () => {
            try {
                // Vérifier si le script est déjà là
                if (!window.loadPyodide) {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
                    script.async = true;
                    script.onload = async () => {
                        const py = await window.loadPyodide();
                        // Charger les packages scientifiques complets
                        await py.loadPackage(['numpy', 'matplotlib', 'pandas', 'scipy', 'sympy']);
                        setPyodide(py);
                        setKernelStatus('ready');
                    };
                    document.body.appendChild(script);
                } else {
                    const py = await window.loadPyodide();
                    await py.loadPackage(['numpy', 'matplotlib', 'pandas', 'scipy', 'sympy']);
                    setPyodide(py);
                    setKernelStatus('ready');
                }
            } catch (err) {
                console.error("Erreur chargement Pyodide:", err);
                setKernelStatus('error');
            }
        };
        loadPyodide();
    }, []);

    // Gestion des cellules
    const updateCell = (id, updates) => {
        setCells(cells.map(c => c.id === id ? { ...c, ...updates } : c));
    };

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
        if (cells.length > 1) {
            setCells(cells.filter(c => c.id !== id));
        }
    };

    const moveCell = (index, direction) => {
        if (index + direction < 0 || index + direction >= cells.length) return;
        const newCells = [...cells];
        const temp = newCells[index];
        newCells[index] = newCells[index + direction];
        newCells[index + direction] = temp;
        setCells(newCells);
    };

    // Exécution réelle avec Pyodide
    const runCell = async (id) => {
        const cell = cells.find(c => c.id === id);
        if (!cell) return;

        if (cell.type === 'markdown') {
            updateCell(id, { isEditing: false });
            return;
        }

        if (!pyodide) {
            alert("Python est en cours de chargement, veuillez patienter...");
            return;
        }

        updateCell(id, { status: 'running' });
        setKernelStatus('busy');

        try {
            // Script wrapper pour capturer stdout, stderr et les plots matplotlib
            // On utilise une astuce pour capturer la dernière expression (comme Jupyter)
            const pythonCode = `
import sys
import io
import base64
import matplotlib.pyplot as plt

# Redirection stdout/stderr
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

# Nettoyer les plots précédents
plt.clf()

# Exécution du code utilisateur
code = ${JSON.stringify(cell.content)}
result = None
try:
    # On compile pour voir si c'est une expression ou des statements
    import ast
    tree = ast.parse(code)
    if tree.body and isinstance(tree.body[-1], ast.Expr):
        # Si la dernière ligne est une expression, on la sépare
        last_expr = tree.body.pop()
        # On exécute tout sauf la dernière ligne
        exec(compile(tree, filename="<cell>", mode="exec"), globals())
        # On évalue la dernière ligne
        result = eval(compile(ast.Expression(last_expr.value), filename="<cell>", mode="eval"), globals())
    else:
        exec(code, globals())
except Exception as e:
    raise e

# Capture des plots
img_str = None
if plt.get_fignums():
    buf = io.BytesIO()
    plt.savefig(buf, format='png', bbox_inches='tight', transparent=True)
    buf.seek(0)
    img_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')
    plt.close('all')

# Capture stdout/stderr
stdout_val = sys.stdout.getvalue()
stderr_val = sys.stderr.getvalue()

# Retourner un objet JSON
import json
json.dumps({
    "stdout": stdout_val,
    "stderr": stderr_val,
    "result": str(result) if result is not None else None,
    "image": img_str
})
`;
            // Exécution
            const responseStr = await pyodide.runPythonAsync(pythonCode);
            const response = JSON.parse(responseStr);

            // Construction de la sortie
            let outputData = '';
            if (response.stdout) outputData += response.stdout;
            if (response.stderr) outputData += \`\n⚠️ \${response.stderr}\`;
            if (response.result) outputData += \`\n[Out]: \${response.result}\`;

            // Déterminer le type de sortie
            let output = null;
            if (response.image) {
                output = { type: 'image', data: response.image };
            } else if (outputData) {
                output = { type: 'text', data: outputData.trim() };
            } else {
                output = { type: 'text', data: '✓ Exécuté' };
            }

            updateCell(id, { 
                status: 'success', 
                output, 
                executionCount: (cell.executionCount || 0) + 1 
            });

        } catch (err) {
            // Gestion d'erreur améliorée
            let errorMsg = err.toString();
            // Essayer d'extraire le traceback Python si possible
            if (err.message && err.message.includes("PythonError")) {
                errorMsg = err.message;
            }
            
            updateCell(id, { 
                status: 'error', 
                output: { type: 'error', data: errorMsg } 
            });
        } finally {
            setKernelStatus('ready');
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex flex-col">
            {/* Navbar Notebook */}
            <header className="h-16 border-b border-white/10 flex items-center justify-between px-4 bg-[#0F1115] fixed w-full z-50">
                <div className="flex items-center gap-4">
                    <Link href="/programming" className="text-gray-400 hover:text-white transition-colors">
                        ← Retour
                    </Link>
                    <div className="h-6 w-px bg-white/10" />
                    <h1 className="font-bold text-lg">SymLab Notebook</h1>
                    <span className="text-xs text-gray-500">Python 3.11</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <div className={`w - 2 h - 2 rounded - full ${ kernelStatus === 'ready' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse' } `} />
                        <span className="text-xs font-mono text-gray-300">Kernel: {kernelStatus}</span>
                    </div>
                    <button className="bg-[#00F5D4] text-black px-4 py-1.5 rounded font-bold text-sm hover:bg-[#00F5D4]/90 transition-colors">
                        Partager
                    </button>
                </div>
            </header>

            {/* Toolbar */}
            <div className="mt-16 h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-[#0F1115] sticky top-16 z-40">
                <button onClick={() => addCell(cells.length - 1, 'code')} className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/10 rounded text-gray-300 transition-colors" title="Ajouter Code">
                    <span className="text-[#00F5D4] font-bold">+</span> Code
                </button>
                <button onClick={() => addCell(cells.length - 1, 'markdown')} className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/10 rounded text-gray-300 transition-colors" title="Ajouter Texte">
                    <span className="text-gray-400 font-bold">+</span> Texte
                </button>
                <div className="h-6 w-px bg-white/10 mx-2" />
                <button className="p-2 hover:bg-white/10 rounded text-gray-300 transition-colors" title="Exécuter tout">
                    ▶ Tout exécuter
                </button>
                <button className="p-2 hover:bg-white/10 rounded text-gray-300 transition-colors" title="Redémarrer le noyau">
                    ↻ Redémarrer
                </button>
            </div>

            {/* Zone de contenu */}
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
                        {/* Bouton discret pour ajouter entre les cellules */}
                        <div className="h-4 -mt-4 mb-2 flex items-center justify-center opacity-0 group-hover/add:opacity-100 transition-opacity z-10 relative">
                            <div className="absolute inset-x-0 h-px bg-[#00F5D4]/20" />
                            <div className="flex gap-2 bg-black px-2 relative z-20">
                                <button onClick={() => addCell(index, 'code')} className="text-[10px] bg-[#00F5D4]/10 text-[#00F5D4] px-2 py-0.5 rounded border border-[#00F5D4]/20 hover:bg-[#00F5D4]/20 transition-colors">
                                    + Code
                                </button>
                                <button onClick={() => addCell(index, 'markdown')} className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded border border-white/10 hover:bg-white/20 transition-colors">
                                    + Texte
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Zone vide en bas pour cliquer et ajouter */}
                <div 
                    className="h-32 border-2 border-dashed border-white/5 rounded-xl flex items-center justify-center text-gray-600 hover:border-[#00F5D4]/30 hover:text-[#00F5D4]/50 transition-all cursor-pointer"
                    onClick={() => addCell(cells.length - 1, 'code')}
                >
                    Cliquez pour ajouter une cellule
                </div>
            </div>
        </main>
    );
}
