import os
import re
import json

challenges_dir = r"c:\Users\Jules Sambou\Desktop\SymLab\challenges"
output_file = r"c:\Users\Jules Sambou\Desktop\SymLab\src\app\challenges\challengeData.js"

challenges = []

# Lister les fichiers day_XXX.html
files = [f for f in os.listdir(challenges_dir) if f.startswith("day_") and f.endswith(".html")]
files.sort()

for filename in files:
    filepath = os.path.join(challenges_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extraire l'ID (day_001)
    day_id = filename.replace(".html", "")
    
    # Extraire le titre
    title_match = re.search(r"<h1[^>]*>(.*?)</h1>", content)
    title = title_match.group(1).replace("&amp;", "&").replace("&#x27;", "'") if title_match else f"Jour {day_id.split('_')[1]}"
    # Nettoyer le titre des balises HTML
    title = re.sub(r'<[^>]+>', '', title).strip()
    
    # Extraire le code
    code_match = re.search(r'<code[^>]*>(.*?)</code>', content, re.DOTALL)
    if not code_match:
        code_match = re.search(r'<pre[^>]*>(.*?)</pre>', content, re.DOTALL)
    code = code_match.group(1).strip() if code_match else ""
    # Nettoyer les entités HTML
    code = code.replace("&amp;", "&").replace("&#x27;", "'").replace("&lt;", "<").replace("&gt;", ">").replace("<code class=\"language-python\">", "").replace("</code>", "")
    
    # Extraire la sortie attendue
    output_match = re.search(r'<div class="output"[^>]*>(.*?)</div>', content, re.DOTALL)
    output = output_match.group(1).strip() if output_match else ""
    # Nettoyer le HTML de la sortie
    output = re.sub(r'<[^>]+>', '', output)  # Enlever les balises HTML
    output = output.replace("Sortie attendue :", "").replace("Sortie attendue:", "").replace("&amp;", "&").strip()
    
    # Extraire les exercices
    exercises_match = re.search(r'<ol[^>]*>(.*?)</ol>', content, re.DOTALL)
    exercises = []
    if exercises_match:
        exercises_list = re.findall(r'<li[^>]*>(.*?)</li>', exercises_match.group(1), re.DOTALL)
        exercises = [re.sub(r'<[^>]+>', '', ex.strip()).replace("&#x27;", "'").replace("&amp;", "&") for ex in exercises_list]
    
    challenges.append({
        "id": day_id,
        "title": title,
        "code": code,
        "output": output,
        "exercises": exercises
    })

# Écrire le fichier JS
js_content = f"export const challenges = {json.dumps(challenges, indent=4, ensure_ascii=False)};"

with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"✅ {len(challenges)} challenges extraits vers {output_file}")
