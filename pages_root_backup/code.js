import { useState, useEffect } from "react";

export default function Code() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState("import math\nmath.sin(3.14)");
  const [result, setResult] = useState("");

  useEffect(() => {
    async function load() {
      const py = await window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"});
      setPyodide(py);
    }
    load();
  }, []);

  const runCode = async () => {
    if (!pyodide) return;
    try {
      const out = pyodide.runPython(code);
      setResult(out.toString());
    } catch (err) {
      setResult(err.toString());
    }
  };

  return (
    <div style={{padding:"40px", background:"#111", color:"white", minHeight:"100vh", fontFamily:"Arial"}}>
      <h1>🐍 Python Lab – Symlabsn</h1>

      <textarea value={code} onChange={(e)=>setCode(e.target.value)}
        style={{width:"100%", height:"150px", background:"#222", color:"white"}}/>

      <button onClick={runCode} style={{marginTop:"10px", padding:"10px"}}>Run</button>

      <pre style={{background:"#222", marginTop:"20px", padding:"20px"}}>{result}</pre>

      <script src="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js"></script>
    </div>
  );
}
