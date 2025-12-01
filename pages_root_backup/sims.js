import { useState } from "react";

export default function Sims() {
  const [x, setX] = useState(0);

  return (
    <div style={{padding:"40px", color:"white", background:"#111", minHeight:"100vh", fontFamily:"Arial"}}>
      <h1>🔬 Simulations – Symlabsn</h1>

      <h2>1. Fonction Sinus</h2>
      <input type="range" min="0" max="6.28" step="0.01" value={x}
        onChange={(e)=>setX(e.target.value)}/>
      <p>sin(x) = {Math.sin(x).toFixed(4)}</p>

      <svg width="300" height="150" style={{background:"#222", marginTop:"20px"}}>
        <line x1="0" y1="75" x2="300" y2="75" stroke="white" />
        <circle cx={50 + 40*x} cy={75 - 40*Math.sin(x)} r="6" fill="red"/>
      </svg>
    </div>
  );
}
