import { useState, useEffect } from "react";

export default function Code() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState("import math\nprint(f'sin(π) = {math.sin(3.14159):.4f}')");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const py = await window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"});
        setPyodide(py);
        setLoading(false);
      } catch (err) {
        setResult("Erreur : Pyodide n'a pas pu charger. " + err.toString());
        setLoading(false);
      }
    }
    load();
  }, []);

  const runCode = async () => {
    if (!pyodide) return;
    setResult("Exécution...");
    try {
      const out = pyodide.runPython(code);
      setResult(out.toString());
    } catch (err) {
      setResult("❌ Erreur : " + err.toString());
    }
  };

  const examples = [
    { label: "Hello World", code: 'print("Hello, SymLab!")' },
    { label: "Mathématiques", code: 'import math\nprint(f"√16 = {math.sqrt(16)}")' },
    { label: "Listes", code: 'nombres = [1, 2, 3, 4, 5]\nprint(f"Somme : {sum(nombres)}")' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            🐍 Python Lab
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Programmez en Python directement dans votre navigateur. Pas d'installation requise !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Editor */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
              {/* Toolbar */}
              <div className="bg-slate-900 border-b border-slate-700 p-4 flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-400">Éditeur Python</span>
                <button
                  onClick={runCode}
                  disabled={loading}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded transition-all disabled:opacity-50"
                >
                  {loading ? "Chargement..." : "▶ Exécuter"}
                </button>
              </div>

              {/* Code Editor */}
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 bg-slate-800 text-green-400 font-mono text-sm p-4 focus:outline-none resize-none"
                style={{ fontFamily: 'monospace' }}
              />
            </div>

            {/* Output */}
            <div className="mt-6 bg-slate-800 border border-slate-700 rounded-lg p-4">
              <div className="text-sm font-semibold text-gray-400 mb-3">Résultat :</div>
              <pre className="bg-slate-900 rounded p-4 text-green-400 text-sm font-mono overflow-x-auto min-h-24 max-h-64 overflow-y-auto">
                {result || "Exécutez du code pour voir le résultat..."}
              </pre>
            </div>
          </div>

          {/* Sidebar - Examples */}
          <div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">📚 Exemples</h3>
              <div className="space-y-3">
                {examples.map((ex, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCode(ex.code)}
                    className="w-full text-left px-4 py-3 bg-slate-900 hover:bg-purple-900/50 border border-slate-600 hover:border-purple-400 rounded transition-all"
                  >
                    <div className="font-semibold text-white text-sm">{ex.label}</div>
                  </button>
                ))}
              </div>

              {/* Tips */}
              <div className="mt-8 p-4 bg-purple-900/20 border border-purple-800 rounded-lg">
                <h4 className="font-semibold text-purple-300 mb-2">💡 Conseils</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Importez les bibliothèques : math, numpy, etc.</li>
                  <li>• Utilisez print() pour afficher des résultats</li>
                  <li>• Exécutez du code Python valide</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js"></script>
    </main>
  );
}
