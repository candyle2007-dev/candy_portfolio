"""Bundle src/ into a single preview.html that runs without Node.js.

React and Babel load from a CDN, so you can double-click preview.html to view the site.
Re-run after editing anything in src/:  python3 build_preview.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / 'src'
ORDER = [
    'data.js', 'hooks.js', 'components/Icon.jsx', 'components/ui.jsx', 'components/Navbar.jsx',
    'components/HeroCanvas.jsx', 'components/Hero.jsx', 'components/Work.jsx',
    'components/Experience.jsx', 'components/Skills.jsx', 'components/About.jsx',
    'components/Contact.jsx', 'components/Footer.jsx', 'App.jsx',
]


def strip_modules(code):
    code = re.sub(r'^import .*?;\s*$', '', code, flags=re.M)
    code = re.sub(r'^export default ', '', code, flags=re.M)
    return re.sub(r'^export ', '', code, flags=re.M)


scripts = '\n'.join(f'// ---- {name} ----\n{strip_modules((SRC / name).read_text())}' for name in ORDER)
# Vite serves public/ at the site root; the preview file sits beside public/ instead.
scripts = scripts.replace("resumeUrl: 'resume.pdf'", "resumeUrl: 'public/resume.pdf'")
css = (SRC / 'index.css').read_text()
head = (ROOT / 'index.html').read_text().split('<head>')[1].split('</head>')[0]

html = f"""<!doctype html>
<html lang="en">
<head>{head}
<style>
{css}
</style>
</head>
<body>
<div id="root"></div>
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.25.6/babel.min.js"></script>
<script type="text/babel" data-presets="react">
const {{ useState, useEffect, useRef, useCallback }} = React;
{scripts}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
</body>
</html>
"""
(ROOT / 'preview.html').write_text(html)
print('Wrote preview.html')
