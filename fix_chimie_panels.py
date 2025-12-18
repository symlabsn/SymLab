import re

file_path = r"c:\Users\Jules Sambou\Desktop\SymLab\src\components\Chimie1ereSimulations.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace <Html position={...}> with <Html transform={false}>
# This ensures HUD mode instead of 3D floating mode
content = re.sub(r'<Html position=\{[^}]+\}>', '<Html transform={false}>', content)

# 2. Add usePortal={false} to DraggableHtmlPanel if not present
# Regex looks for DraggableHtmlPanel and checks if usePortal is NOT already there in the tag
# Simple replace is safer if we assume standard formatting
content = content.replace('<DraggableHtmlPanel', '<DraggableHtmlPanel usePortal={false}')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed Chimie1ereSimulations.js panels.")
