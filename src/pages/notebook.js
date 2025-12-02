 'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';

export default function Notebook() {
  const [pyodide, setPyodide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const codeRef = useRef(null);
  const [code, setCode] = useState('');
  const [plotSrc, setPlotSrc] = useState('');

  // Monaco Editor (client-only)
  const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

  useEffect(() => {
    // load saved code from localStorage if present
    try {
      const saved = localStorage.getItem('symlab_notebook_code');
      if (saved) {
        setCode(saved);
        if (codeRef.current) codeRef.current.value = saved;
      }
    } catch (e) {
      // ignore if localStorage isn't available
    }
    // Load Pyodide from CDN and prepare SymPy
    const load = async () => {
      setLoading(true);
      try {
        if (!window.loadPyodide) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js';
          script.async = true;
          document.body.appendChild(script);
          await new Promise((res) => (script.onload = res));
        }

        const py = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/' });
        // Load common packages: numpy, sympy, matplotlib
        try {
          await py.loadPackage(['numpy', 'sympy', 'matplotlib']);
        } catch (e) {
          // try micropip fallback for packages not in the distribution
          try {
            await py.loadPackage('micropip');
            const mp = py.pyimport('micropip');
            await mp.install('sympy');
            await mp.install('matplotlib');
          } catch (err) {
            console.warn('Could not install some packages automatically', err);
          }
        }

        setPyodide(py);
      } catch (err) {
        console.error('Pyodide load failed', err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const runCode = async () => {
    if (!pyodide || running) return;
    setRunning(true);
    setOutput('Exécution...');

    const codeToRun = code || (codeRef.current ? codeRef.current.value : '');
    // Wrap to capture stdout
    const wrapped = `import sys, io\n_old_stdout = sys.stdout\nsys.stdout = io.StringIO()\ntry:\n` +
      codeToRun.split('\n').map((l) => '    ' + l).join('\n') +
      `\n    output = sys.stdout.getvalue()\nfinally:\n    sys.stdout = _old_stdout\n`;

    try {
      await pyodide.runPythonAsync(wrapped);
      const outProxy = pyodide.globals.get('output');
      const text = outProxy ? outProxy.toString() : '';
      setOutput(text || '— (Pas de sortie — utilisez print())');
      try { pyodide.globals.del('output'); } catch (e) { }
    } catch (err) {
      setOutput(String(err));
    } finally {
      setRunning(false);
    }
  };

  const runPlot = async () => {
    if (!pyodide || running) return;
    setRunning(true);
    setOutput('Génération du graphique...');
    setPlotSrc('');

    const plotCode = `import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io, base64\n\nx = np.linspace(0, 2*np.pi, 200)\ny = np.sin(x)\nplt.figure(figsize=(6,3))\nplt.plot(x,y)\nplt.title('sin(x)')\nbuf = io.BytesIO()\nplt.savefig(buf, format='png', bbox_inches='tight')\nbuf.seek(0)\nplot_png_b64 = base64.b64encode(buf.read()).decode('ascii')`;

    try {
      await pyodide.runPythonAsync(plotCode);
      const b64 = pyodide.globals.get('plot_png_b64');
      if (b64) {
        setPlotSrc('data:image/png;base64,' + b64.toString());
        try { pyodide.globals.del('plot_png_b64'); } catch (e) { }
        setOutput('Graphique généré.');
      } else {
        setOutput('Erreur: pas de données de graphique.');
      }
    } catch (err) {
      setOutput(String(err));
    } finally {
      setRunning(false);
    }
  };

  const example = `import sympy as sp\n\n# Définition symbolique\nx = sp.symbols('x')\nexpr = sp.integrate(sp.sin(x)**2, (x, 0, sp.pi))\nprint('Intégrale de sin^2 de 0 à pi =', expr)`;

  return (
    <main className="bg-slate-950 min-h-screen text-gray-300">
      <HeroSection
        title="Notebook (Pyodide + SymPy)"
        subtitle="Un mini-notebook côté client pour exécuter du Python et du calcul symbolique avec SymPy."
        cta="Charger un exemple"
        ctaHref="#editor"
      />

      <section id="editor" className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Éditeur Python</h3>
              <div className="text-sm text-gray-400">{loading ? 'Pyodide: chargement...' : 'Pyodide prêt'}</div>
            </div>
            <div className="w-full min-h-[360px] p-0 bg-slate-800 rounded overflow-hidden">
              <MonacoEditor
                height="360px"
                defaultLanguage="python"
                defaultValue={example}
                value={code}
                onChange={(value) => setCode(value || '')}
                options={{ fontSize: 13, minimap: { enabled: false }, tabSize: 4 }}
              />
            </div>
            <textarea ref={codeRef} defaultValue={example} className="hidden" />

            <div className="mt-4 space-x-2">
              <button onClick={runCode} disabled={loading || running} className="px-4 py-2 bg-indigo-600 rounded">{running ? 'Exécution...' : 'Run'}</button>
              <button onClick={() => { setCode(example); if (codeRef.current) codeRef.current.value = example; }} className="px-4 py-2 bg-slate-700 rounded">Charger exemple</button>
              <button onClick={() => { setCode(''); if (codeRef.current) codeRef.current.value = ''; setOutput(''); setPlotSrc(''); }} className="px-4 py-2 bg-slate-700 rounded">Effacer</button>
              <button onClick={runPlot} disabled={loading || running} className="px-4 py-2 bg-emerald-600 rounded">Générer un graphique</button>
              <button onClick={() => {
                try {
                  const content = code || (codeRef.current ? codeRef.current.value : '');
                  localStorage.setItem('symlab_notebook_code', content);
                  setOutput('Sauvegardé localement.');
                } catch (e) { setOutput('Erreur de sauvegarde: ' + String(e)); }
              }} className="px-4 py-2 bg-yellow-600 rounded">Sauvegarder</button>
              <button onClick={() => {
                try {
                  const content = code || (codeRef.current ? codeRef.current.value : '');
                  const blob = new Blob([content], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'notebook.py';
                  a.click();
                  URL.revokeObjectURL(url);
                } catch (e) { setOutput('Erreur export: ' + String(e)); }
              }} className="px-4 py-2 bg-slate-600 rounded">Télécharger</button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Sortie</h3>
            <pre className="whitespace-pre-wrap bg-slate-900 p-4 rounded min-h-[240px] text-sm">{output}</pre>
            {plotSrc && (
              <div className="mt-4 bg-slate-900 p-3 rounded">
                <img src={plotSrc} alt="plot" className="w-full" />
              </div>
            )}
            <p className="text-xs text-gray-400 mt-3">Astuces: utilisez <code className="bg-slate-800 px-1 rounded">print()</code> pour afficher des résultats. SymPy est disponible via <code className="bg-slate-800 px-1 rounded">import sympy as sp</code>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

// Monaco is loaded dynamically; no CodeMirror fallback remains.
