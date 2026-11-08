# Outil de contrôle — fragments arabes cités (« … ») absents du corpus source.
# Usage : python3 fragcheck.py <fichier de fiches .js> <corpus.txt (pages Shamela recopiées)>
import re,sys
def norm(s):
    s=re.sub(r'[ً-ْٰـ]','',s)
    s=re.sub(r'[أإآ]','ا',s).replace('ى','ي')
    s=re.sub(r'[^؀-ۿ]+',' ',s)
    return ' '.join(s.split())
C=norm(open(sys.argv[2],encoding='utf-8').read())
t=open(sys.argv[1],encoding='utf-8').read()
fr=re.findall(r'«\s*([^»]*?)\s*»',t)
seen=set(); bad=[]; n=0
for f in fr:
    for part in f.split('…'):
        a=norm(part)
        if len(a.replace(' ',''))<6 or a in seen: continue
        seen.add(a); n+=1
        if a not in C: bad.append(part.strip())
print(n,'fragments ;',len(bad),'non trouvés')
for b in bad: print(' -',b)
