import re

def extract_block(content, start_marker, end_marker=None, count_braces=False):
    start_idx = content.find(start_marker)
    if start_idx == -1:
        return None
    
    if count_braces:
        # Extract until the matching closing brace/bracket
        # Assuming start_marker points to the start of an object or array
        idx = start_idx
        open_braces = 0
        started = False
        
        while idx < len(content):
            char = content[idx]
            if char == '{' or char == '[':
                open_braces += 1
                started = True
            elif char == '}' or char == ']':
                open_braces -= 1
            
            if started and open_braces == 0:
                return content[start_idx:idx+1]
            idx += 1
        return None
    else:
        # Extract until end_marker
        end_idx = content.find(end_marker, start_idx)
        if end_idx == -1:
            return None
        return content[start_idx:end_idx]

def get_lesson_content(content, title_marker):
    # Find the start of the lesson object containing this title
    # We look for "title: 'Title Marker'" and then search backwards for the opening brace
    title_idx = content.find(f"title: '{title_marker}")
    if title_idx == -1:
        print(f"Warning: Could not find lesson '{title_marker}'")
        return ""
    
    # Search backwards for the opening brace of this lesson object
    # It should be the first '{' before the title that is at the same indentation level
    # A simple heuristic: look for the last '{' before title_idx
    start_idx = content.rfind('{', 0, title_idx)
    
    # Now count braces forward to find the end
    idx = start_idx
    open_braces = 0
    started = False
    
    while idx < len(content):
        char = content[idx]
        if char == '{':
            open_braces += 1
            started = True
        elif char == '}':
            open_braces -= 1
        
        if started and open_braces == 0:
            return content[start_idx:idx+1]
        idx += 1
    return ""

# Read files
with open('curriculum_chapter1.js', 'r', encoding='utf-8') as f:
    source = f.read()

with open('curriculum_template.js', 'r', encoding='utf-8') as f:
    template = f.read()

# --- Define Lessons for each Chapter ---

# Chapter 1: Intro
c1_lessons = [
    get_lesson_content(source, "Histoire et philosophie de Python"),
    get_lesson_content(source, "Pourquoi Python pour les sciences ?"),
    get_lesson_content(source, "Variables et types de données"),
    get_lesson_content(source, "Opérateurs arithmétiques"),
    get_lesson_content(source, "Structures de contrôle : if/elif/else"),
    get_lesson_content(source, "Boucles for et while")
]

# Chapter 2: Data Structures
c2_lessons = [
    get_lesson_content(source, "Listes : Collections ordonnées"),
    get_lesson_content(source, "Dictionnaires : Données structurées"),
    get_lesson_content(source, "Tuples et ensembles")
]

# Chapter 3: Functions & Modules
# Note: "Fichiers et Modules" is originally in Chapter 6, we move it here
c3_lessons = [
    get_lesson_content(source, "Fonctions : Réutiliser votre code"),
    get_lesson_content(source, "Fichiers et Modules")
]

# Chapter 4: Numerical Python
c4_lessons = [
    get_lesson_content(source, "NumPy : Calcul numérique ultra-rapide"),
    get_lesson_content(source, "Matplotlib : Visualisation de données"),
    get_lesson_content(source, "Pandas : Analyse de données tabulaires")
]

# Chapter 5: SymPy
c5_lessons = [
    get_lesson_content(source, "Introduction au calcul symbolique"),
    get_lesson_content(source, "Algèbre : Simplification et manipulation"),
    get_lesson_content(source, "Résolution d\\'équations algébriques"), # Escape quote if needed, or adjust search
    get_lesson_content(source, "Calcul différentiel : Dérivées"),
    get_lesson_content(source, "Calcul intégral : Primitives et intégrales"),
    get_lesson_content(source, "Équations différentielles ordinaires (EDO)"),
    get_lesson_content(source, "Algèbre linéaire symbolique"),
    get_lesson_content(source, "Limites et continuité"),
    get_lesson_content(source, "Séries et développements")
]
# Fix for "Résolution d'équations" which might have a single quote
if not c5_lessons[2]:
    c5_lessons[2] = get_lesson_content(source, "Résolution d'équations algébriques")


# Chapter 6: SciPy & Advanced
# Note: "Programmation Orientée Objet" and "Gestion des erreurs" from original Ch 6
c6_lessons = [
    get_lesson_content(source, "SciPy : Algorithmes scientifiques avancés"),
    get_lesson_content(source, "Programmation Orientée Objet (POO)"),
    get_lesson_content(source, "Gestion des erreurs (Exceptions)")
]

# Chapter 7: Projects
c7_lessons = [
    get_lesson_content(source, "Projet 1 : Trajectoire d\\'un projectile"),
    get_lesson_content(source, "Projet 2 : Analyse de données climatiques"),
    get_lesson_content(source, "Projet 3 : Visualisation 3D d\\'une molécule")
]
# Fix for quotes
if not c7_lessons[0]: c7_lessons[0] = get_lesson_content(source, "Projet 1 : Trajectoire d'un projectile")
if not c7_lessons[2]: c7_lessons[2] = get_lesson_content(source, "Projet 3 : Visualisation 3D d'une molécule")


# --- Assembly ---

def insert_lessons(template_content, chapter_id, lessons_list):
    # Find the lessons array for the given chapter id
    # We look for "id: 'chapter_id'" then the next "lessons: []"
    
    # Split by lines to find the correct block
    lines = template_content.split('\n')
    new_lines = []
    
    in_target_chapter = False
    inserted = False
    
    for line in lines:
        if f"id: '{chapter_id}'" in line:
            in_target_chapter = True
        
        if in_target_chapter and "lessons: []" in line and not inserted:
            # Found the target spot
            indent = line.split('lessons')[0]
            new_lines.append(f"{indent}lessons: [")
            
            # Add lessons joined by commas
            valid_lessons = [l for l in lessons_list if l]
            for i, lesson in enumerate(valid_lessons):
                # Indent the lesson content
                lesson_lines = lesson.split('\n')
                indented_lesson = '\n'.join([f"{indent}    {l}" for l in lesson_lines])
                
                separator = "," if i < len(valid_lessons) - 1 else ""
                new_lines.append(f"{indented_lesson}{separator}")
            
            new_lines.append(f"{indent}]")
            
            in_target_chapter = False # Done with this chapter
            inserted = True
        else:
            new_lines.append(line)
            
    return '\n'.join(new_lines)

# Apply insertions
current_content = template
current_content = insert_lessons(current_content, 'intro', c1_lessons)
current_content = insert_lessons(current_content, 'data-structures', c2_lessons)
current_content = insert_lessons(current_content, 'functions-modules', c3_lessons)
current_content = insert_lessons(current_content, 'numerical-python', c4_lessons)
current_content = insert_lessons(current_content, 'sympy', c5_lessons)
current_content = insert_lessons(current_content, 'scipy', c6_lessons)
current_content = insert_lessons(current_content, 'projects', c7_lessons)

# Write result
with open('src/app/programming/curriculum.js', 'w', encoding='utf-8') as f:
    f.write(current_content)

print("✅ Curriculum built successfully!")
