
import fs from 'fs';
import { challengesEnriched } from './src/app/challenges/challengeDataEnriched.js';

const OUTPUT_DIR = './challenges';

const generateHTML = (challenge, allChallenges, prevId, nextId) => {
    // ToC
    const tocItems = allChallenges.map(c => {
        const active = c.id === challenge.id ? 'font-weight:700; color:#0ea5e9; border-left:3px solid #0ea5e9; padding-left:5px' : '';
        const isProj = c.title.startsWith('PROJET') ? 'color:#f59e0b;' : '';
        return `<li><a href="${c.id}.html" style="${active}; ${isProj}">Jour ${String(c.dayNumber).padStart(3, '0')} — ${c.title.replace('PROJET : ', '')}</a></li>`;
    }).join('\n');

    const dayString = String(challenge.dayNumber).padStart(3, '0');

    return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Jour ${dayString} — ${challenge.title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-python.min.js"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<style>
:root{ --bg:#0f172a; --panel:#1e293b; --accent:#06b6d4; --text:#e2e8f0; --muted:#94a3b8; --border:#334155; }
body{margin:0;font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);line-height:1.6}
a{color:var(--accent);text-decoration:none;transition:all 0.2s} a:hover{color:#38bdf8}
.header{background:linear-gradient(90deg, #0f172a, #1e293b);padding:20px;border-bottom:1px solid var(--border);position:sticky;top:0;z-index:50}
.container{max-width:1400px;margin:0 auto;padding:0 20px;display:grid;grid-template-columns:300px 1fr;gap:30px}
.toc{height:calc(100vh - 80px);overflow-y:auto;padding-right:15px;position:sticky;top:80px}
.toc ul{list-style:none;padding:0;font-size:14px}
.toc li{margin-bottom:8px}
.card{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:25px;margin-bottom:25px}
pre{border-radius:8px;margin:0!important}
.btn{display:inline-flex;align-items:center;padding:10px 20px;background:var(--accent);color:white;border-radius:8px;font-weight:600;margin-top:20px}
.nav-buttons{display:flex;justify-content:space-between;margin-top:50px}
@media(max-width:1000px){.container{display:block}.toc{display:none}}
</style>
</head>
<body>
<header class="header">
    <div style="max-width:1400px;margin:0 auto;display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:800;font-size:20px">SymLab <span style="opacity:0.5">Challenges</span></div>
        <div><a href="recap.html">Mode Récapitulatif</a> | <a href="index.html">Index</a></div>
    </div>
</header>
<div class="container">
    <aside class="toc"><ul>${tocItems}</ul></aside>
    <main style="padding:30px 0;max-width:900px">
        <span style="background:rgba(6,182,212,0.1);color:var(--accent);padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">Jour ${dayString}</span>
        <h1 style="font-size:2.5rem;margin:10px 0 30px 0">${challenge.title}</h1>
        
        ${challenge.africanAnalogy ? `<div style="background:#1e293b;border-left:4px solid #f59e0b;padding:20px;margin:20px 0;border-radius:0 8px 8px 0"><strong style="color:#f59e0b;display:block;margin-bottom:5px">🌍 Analogie</strong>${challenge.africanAnalogy}</div>` : ''}

        <div class="card">
            <h2>Théorie</h2>
            <p>${challenge.theory?.content || ''}</p>
        </div>

        <div class="card">
            <h2>Code</h2>
            <pre><code class="language-python">${challenge.code}</code></pre>
            <div style="margin-top:15px;padding:15px;background:#0f172a;border-radius:8px;border-left:4px solid var(--accent)"><strong>Sortie :</strong> ${challenge.output}</div>
        </div>

        <div class="card">
            <h2>Exercices</h2>
            <ul>${challenge.exercises.map(ex => `<li>${ex}</li>`).join('')}</ul>
        </div>

        <div class="nav-buttons">
            ${prevId ? `<a href="${prevId}.html" class="btn" style="background:var(--panel)">← Précédent</a>` : '<div></div>'}
            ${nextId ? `<a href="${nextId}.html" class="btn">Suivant →</a>` : '<div></div>'}
        </div>
    </main>
</div>
</body>
</html>`;
};

// Régénération simple
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);
challengesEnriched.forEach((challenge, index) => {
    const prev = index > 0 ? challengesEnriched[index - 1].id : null;
    const next = index < challengesEnriched.length - 1 ? challengesEnriched[index + 1].id : null;
    fs.writeFileSync(`${OUTPUT_DIR}/${challenge.id}.html`, generateHTML(challenge, challengesEnriched, prev, next));
});
console.log('Pages HTML regénérées avec succès (Jours 1-100) !');
