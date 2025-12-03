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
            className={`group relative mb-4 transition-all duration-300 ${isActive ? 'ring-2 ring-[#00F5D4]/30' : 'hover:bg-white/5'} rounded-xl overflow-hidden border border-white/10 bg-[#0F1115]`}
            onClick={() => setActive(cell.id)}
        >
            {/* Barre latérale de statut */}
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${cell.status === 'running' ? 'bg-yellow-400 animate-pulse' :
                cell.status === 'success' ? 'bg-[#00F5D4]' :
                    cell.status === 'error' ? 'bg-red-500' :
                        'bg-gray-700'
                }`} />

            <div className="flex">
                {/* Numéro d'entrée (In [ ]) */}
                <div className="w-16 flex-shrink-0 pt-4 text-right pr-3 font-mono text-xs text-gray-500 select-none">
                    {cell.type === 'code' ? `In [${cell.executionCount || ' '}]:` : ''}
                </div>

                {/* Contenu de la cellule */}
                <div className="flex-1 min-w-0 pt-2 pb-2 pr-2">

                    {/* Zone d'édition ou Rendu Markdown */}
                    {cell.type === 'markdown' && !cell.isEditing ? (
                        <div
                            className="prose prose-invert max-w-none p-2 cursor-text min-h-[2rem]"
                            onDoubleClick={() => updateCell(cell.id, { isEditing: true })}
                        >
                            <RichText>{cell.content || '*Double-cliquez pour éditer*'}</RichText>
                        </div>
                    ) : (
                        <div className="relative">
                            <textarea
                                ref={textareaRef}
                                value={cell.content}
                                onChange={(e) => updateCell(cell.id, { content: e.target.value })}
                                className={`w-full bg-transparent text-gray-200 font-mono text-sm p-2 focus:outline-none resize-none ${cell.type === 'markdown' ? 'font-sans' : 'text-[#00F5D4]'
                                    }`}
                                placeholder={cell.type === 'code' ? 'Entrez votre code Python ici...' : 'Entrez du Markdown...'}
                                spellCheck="false"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && e.shiftKey) {
                                        e.preventDefault();
                                        runCell(cell.id);
                                    }
                                }}
                            />
                        </div>
                    )}

                    {/* Zone de Sortie (Output) */}
                    {cell.output && (
                        <div className="mt-2 mb-2 ml-2">
                            {cell.output.type === 'text' && (
                                <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">{cell.output.data}</pre>
                            )}
                            {cell.output.type === 'error' && (
                                <pre className="font-mono text-sm text-red-400 whitespace-pre-wrap">{cell.output.data}</pre>
                            )}
                            {cell.output.type === 'image' && (
                                <img src={cell.output.data} alt="Output" className="max-w-full h-auto rounded bg-white" />
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Barre d'outils (visible au survol ou actif) */}
            <div className={`absolute top-2 right-2 flex gap-1 transition-opacity duration-200 ${isActive || 'group-hover:opacity-100 opacity-0'}`}>
                <button
                    onClick={() => runCell(cell.id)}
                    className="p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-[#00F5D4] transition-colors"
                    title="Exécuter (Shift+Enter)"
                >
                    ▶
                </button>
                <button
                    onClick={() => updateCell(cell.id, { type: cell.type === 'code' ? 'markdown' : 'code' })}
                    className="p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-xs font-bold w-8"
                    title="Changer le type"
                >
                    {cell.type === 'code' ? 'PY' : 'MD'}
                </button>
                <button
                    onClick={() => moveCell(index, -1)}
                    className="p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    title="Monter"
                >
                    ↑
                </button>
                <button
                    onClick={() => moveCell(index, 1)}
                    className="p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    title="Descendre"
                >
                    ↓
                </button>
                <button
                    onClick={() => deleteCell(cell.id)}
                    className="p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-red-500 transition-colors"
                    title="Supprimer"
                >
                    ✕
                </button>
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
            // Rediriger stdout pour capturer les print()
            // On utilise runPythonAsync pour supporter asyncio si besoin

            // 1. Rediriger stdout
            await pyodide.runPythonAsync(`
                import sys
                from io import StringIO
                sys.stdout = StringIO()
            `);

            // 2. Exécuter le code utilisateur
            await pyodide.runPythonAsync(cell.content);

            // 3. Récupérer stdout
            const stdout = await pyodide.runPythonAsync("sys.stdout.getvalue()");

            updateCell(id, {
                status: 'success',
                output: { type: 'text', data: stdout || '✓ Exécuté (pas de sortie)' },
                executionCount: (cell.executionCount || 0) + 1
            });

        } catch (err) {
            updateCell(id, {
                status: 'error',
                output: { type: 'error', data: err.toString() }
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
                    <h1 className="font-bold text-lg">Sans Titre.ipynb</h1>
                    <span className="text-xs text-gray-500">Dernière sauvegarde : à l'instant</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <div className={`w-2 h-2 rounded-full ${kernelStatus === 'ready' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`} />
                        <span className="text-xs font-mono text-gray-300">Python 3.11 (Pyodide)</span>
                    </div>
                    <button className="bg-[#00F5D4] text-black px-4 py-1.5 rounded font-bold text-sm hover:bg-[#00F5D4]/90 transition-colors">
                        Partager
                    </button>
                </div>
            </header>

            {/* Toolbar */}
            <div className="mt-16 h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-[#0F1115] sticky top-16 z-40">
                <button onClick={() => addCell(cells.length - 1, 'code')} className="p-2 hover:bg-white/10 rounded text-gray-300" title="Ajouter Code">
                    + Code
                </button>
                <button onClick={() => addCell(cells.length - 1, 'markdown')} className="p-2 hover:bg-white/10 rounded text-gray-300" title="Ajouter Texte">
                    + Texte
                </button>
                <div className="h-6 w-px bg-white/10 mx-2" />
                <button className="p-2 hover:bg-white/10 rounded text-gray-300" title="Exécuter tout">
                    ▶ Tout exécuter
                </button>
                <button className="p-2 hover:bg-white/10 rounded text-gray-300" title="Redémarrer le noyau">
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
                                <button onClick={() => addCell(index, 'code')} className="text-[10px] bg-[#00F5D4]/10 text-[#00F5D4] px-2 py-0.5 rounded border border-[#00F5D4]/20 hover:bg-[#00F5D4]/20">
                                    + Code
                                </button>
                                <button onClick={() => addCell(index, 'markdown')} className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded border border-white/10 hover:bg-white/20">
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
