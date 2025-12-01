import { useEffect, useState } from "react";

export default function Ressources() {
  const [tps, setTps] = useState([]);

  useEffect(()=>{
    fetch("/content/index.json")
      .then(r => r.json())
      .then(setTps);
  },[]);

  return (
    <div style={{padding:"40px", background:"#111", color:"white", minHeight:"100vh"}}>
      <h1>🧪 Travaux Pratiques – Symlabsn</h1>

      {tps.map((tp,i)=>(
        <div key={i} style={{marginTop:"20px"}}>
          <a href={"/content/" + tp.file}>{tp.title}</a>
        </div>
      ))}
    </div>
  );
}
