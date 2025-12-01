export default function Home() {
  return (
    <div style={{padding:"40px", fontFamily:"Arial", color:"white", background:"#111", minHeight:"100vh"}}>
      <h1 style={{fontSize:"40px"}}>Symlabsn</h1>
      <p>Plateforme numérique d'expérimentation STEM (Maths, Physique, Ingénierie, Python, SymPy)</p>

      <ul style={{marginTop:"30px"}}>
        <li><a href="/sims">🔬 Simulations interactives</a></li>
        <li><a href="/code">🐍 Python Lab (Pyodide)</a></li>
        <li><a href="/exams">📚 QCM Sénégal</a></li>
        <li><a href="/ressources">🧪 Travaux pratiques</a></li>
        <li><a href="/apropos">ℹ️ À propos</a></li>
      </ul>
    </div>
  );
}
