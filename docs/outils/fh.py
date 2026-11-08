# Outil — empreintes FNV-1a (7 caractères hexadécimaux) des fragments normalisés produits par frags.py, à passer à __fcheck dans le navigateur.
# Usage : python3 fh.py frags.json
import json,sys
def fnv(s):
    h=0x811c9dc5
    for c in s:
        h^=ord(c); h=(h*0x01000193)&0xffffffff
    return '%08x'%h
L=json.load(open(sys.argv[1],encoding='utf-8'))
print('maxmots',max(len(x.split()) for x in L),file=sys.stderr)
print(','.join(fnv(x)[:7] for x in L))
