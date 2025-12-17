import re

file_path = "src/components/Physique1ereSimulations.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Remove <Html ...> wrapper around <DraggableHtmlPanel ...>
# Pattern: <Html ...>\n (indentation) <DraggableHtmlPanel
# We use capture group used to preserve indentation if needed, but DraggableHtmlPanel handles itself.
# Let's simple check for <Html position=...> before <DraggableHtmlPanel
content = re.sub(r'<Html[^>]*>\s*(<DraggableHtmlPanel)', r'\1', content)

# Remove </Html> after </DraggableHtmlPanel>
content = re.sub(r'(</DraggableHtmlPanel>)\s*</Html>', r'\1', content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
