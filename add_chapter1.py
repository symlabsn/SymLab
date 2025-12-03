import re
import json

# Lire le fichier original
with open('curriculum_original.js', 'r', encoding='utf-8') as f:
    original_content = f.read()

# Lire le template actuel
with open('src/app/programming/curriculum.js', 'r', encoding='utf-8') as f:
    template_content = f.read()

# Le fichier original a le chapitre 1 complet dans le commit c9fb763
# Récupérons-le depuis ce commit
import subprocess

result = subprocess.run(
    ['git', 'show', 'c9fb763:src/app/programming/curriculum.js'],
    capture_output=True,
    text=True,
    encoding='utf-8'
)

chapter1_content = result.stdout

# Extraire juste la partie "lessons" du chapitre 1
# Chercher entre "lessons: [" et la fermeture correspondante
match = re.search(r"lessons:\s*\[(.*?)\n\s*\]\s*\}", chapter1_content, re.DOTALL)

if match:
    lessons_content = match.group(1)
    
    # Maintenant, insérer ce contenu dans le template
    # Remplacer "lessons: []" du premier chapitre par "lessons: [" + contenu + "]"
    
    template_lines = template_content.split('\n')
    new_lines = []
    in_intro_chapter = False
    lessons_inserted = False
    
    for i, line in enumerate(template_lines):
        if "id: 'intro'" in line:
            in_intro_chapter = True
        
        if in_intro_chapter and "lessons: []" in line and not lessons_inserted:
            # Remplacer cette ligne par lessons: [ + contenu
            indent = ' ' * (len(line) - len(line.lstrip()))
            new_lines.append(indent + 'lessons: [')
            # Ajouter le contenu des lessons
            for lesson_line in lessons_content.split('\n'):
                new_lines.append(lesson_line)
            new_lines.append(indent + ']')
            lessons_inserted = True
            in_intro_chapter = False
        else:
            new_lines.append(line)
    
    # Écrire le nouveau contenu
    with open('src/app/programming/curriculum.js', 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    
    print("✅ Chapitre 1 ajouté avec succès!")
else:
    print("❌ Impossible de trouver les lessons du chapitre 1")
