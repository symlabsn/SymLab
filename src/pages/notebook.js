'use client';

import { useEffect, useRef, useState } from 'react';
import HeroSection from '@/components/HeroSection';

export default function Notebook() {
  const [pyodide, setPyodide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
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
        // Try to load sympy (available as a pyodide package)
        try {
          await py.loadPackage('sympy');
        } catch (e) {
          // fallback: use micropip to install sympy if not present
          try {
            await py.loadPackage('micropip');
            const mp = py.pyimport('micropip');
            await mp.install('sympy');
          } catch (err) {
            console.warn('Could not install sympy automatically', err);
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

    const code = codeRef.current?.value || '';
    // Wrap to capture stdout
    const wrapped = `import sys, io\n_old_stdout = sys.stdout\nsys.stdout = io.StringIO()\ntry:\n` +
      code.split('\n').map((l) => '    ' + l).join('\n') +
      `\n    output = sys.stdout.getvalue()\nfinally:\n    sys.stdout = _old_stdout\n`;

    try {
      await pyodide.runPythonAsync(wrapped);
      // get the output
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

  const example = `import sympy as sp\n
# Définition symbolique\nx = sp.symbols('x')\nexpr = sp.integrate(sp.sin(x)**2, (x, 0, sp.pi))\nprint('Intégrale de sin^2 de 0 à pi =', expr)`;

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
            <textarea
              ref={codeRef}
              defaultValue={example}
              className="w-full min-h-[360px] p-4 bg-slate-800 rounded text-sm font-mono text-gray-100"
            />

            <div className="mt-4 space-x-2">
              <button onClick={runCode} disabled={loading || running} className="px-4 py-2 bg-indigo-600 rounded">{running ? 'Exécution...' : 'Run'}</button>
              <button onClick={() => { codeRef.current.value = example; }} className="px-4 py-2 bg-slate-700 rounded">Charger exemple</button>
              <button onClick={() => { codeRef.current.value = ''; setOutput(''); }} className="px-4 py-2 bg-slate-700 rounded">Effacer</button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Sortie</h3>
            <pre className="whitespace-pre-wrap bg-slate-900 p-4 rounded min-h-[360px] text-sm">{output}</pre>
            <p className="text-xs text-gray-400 mt-3">Astuces: utilisez <code className="bg-slate-800 px-1 rounded">print()</code> pour afficher des résultats. SymPy est disponible via <code className="bg-slate-800 px-1 rounded">import sympy as sp</code>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
