import { useEffect, useState } from "react";

export default function Exams() {
  const [qcm, setQcm] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch("/exams/senegal.json")
      .then(r => r.json())
      .then(setQcm);
  }, []);

  const correction = () => {
    let s = 0;
    qcm.forEach(q => {
      if (q.user === q.answer) s++;
    });
    setScore(s);
  };

  return (
    <div style={{padding:"40px", background:"#111", color:"white", minHeight:"100vh"}}>
      <h1>📚 QCM – Sénégal</h1>

      {qcm.map((q, i)=>(
        <div key={i} style={{marginTop:"20px"}}>
          <p>{q.question}</p>
          {q.choices.map((c,j)=>(
            <label key={j} style={{display:"block"}}>
              <input type="radio" name={"q"+i} onChange={()=>q.user=j}/>
              {c}
            </label>
          ))}
        </div>
      ))}

      <button onClick={correction} style={{marginTop:"20px"}}>Corriger</button>

      {score !== null && <h2>Score : {score}/{qcm.length}</h2>}
    </div>
  );
}
