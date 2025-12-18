import re

file_path = r'c:\Users\Jules Sambou\Desktop\SymLab\src\components\Chimie2SSimulations.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add usePortal={false} to DraggableHtmlPanel that don't have it
pattern = r'(<DraggableHtmlPanel\s+(?!.*usePortal)([^>]*)>)'
replacement = r'<DraggableHtmlPanel usePortal={false} \2>'

content = re.sub(pattern, replacement, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Added usePortal={false} to all DraggableHtmlPanel instances in Chimie2SSimulations.js")
