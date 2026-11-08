# Outil — fragments « … » d'un fichier, normalisés comme fragcheck.py (ponctuation arabe ،؛؟ retirée en plus), en JSON.
# Usage : python3 frags.py <fichier> > frags.json   (puis fh.py frags.json → empreintes pour __fcheck dans le navigateur ; voir docs/reprise.md §3)
import re,sys,json
def norm(s):
    s=re.sub(r'[ً-ْٰـ]','',s); s=re.sub(r'[أإآ]','ا',s).replace('ى','ي'); s=re.sub(r'[^؀-ۿ]+|[،؛؟]',' ',s); return ' '.join(s.split())
t=open(sys.argv[1],encoding='utf-8').read()
out=[];seen=set()
for f in re.findall(r'«\s*([^»]*?)\s*»',t):
    for p in f.split('…'):
        a=norm(p)
        if len(a.replace(' ',''))<6 or a in seen: continue
        seen.add(a); out.append(a)
print(len(out),file=sys.stderr)
print(json.dumps(out,ensure_ascii=False))
