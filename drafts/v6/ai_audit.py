#!/usr/bin/env python3
"""Mechanical AI-syntax audit. Implements the Tier-1 checks of AI_SYNTAX_PROTOCOL.md
(Reinhart et al. PNAS 2025; Herbold et al. 2023; Desaire et al. 2023)."""
import re, sys, statistics

def body_prose(text):
    out=[]
    skip=False
    for ln in text.split('\n'):
        s=ln.strip()
        if s.startswith(':::'): skip = not skip if s==':::box' or s==':::' else skip
        if s.startswith('|') or s.startswith('Note:') or s.startswith('Source:'): continue
        if s.startswith('#') or s.startswith('- ') or s.startswith('**Table') or s.startswith('**Box'): continue
        if s.startswith('[^'): continue
        out.append(ln)
    return '\n'.join(out)

def sentences(t):
    t=re.sub(r'\((?:[^()]*?,\s*(?:19|20)\d\d[a-z]?)\)','',t)      # quitar citas
    t=re.sub(r'\b(?:No|no|vol|pp|Art|Sch|St|Mr|Dr|e\.g|i\.e|cf)\.','',t)
    return [s.strip() for s in re.split(r'(?<=[.!?])\s+', t) if len(s.strip())>15]

CHECKS = [
 ("1 participio final (5.3x en IA, d=1.38)", r',\s+(?:\w+ly\s+)?\w+ing\b[^.!?]{5,}[.!?]'),
 ("1b participio de relleno", r',\s+(?:highlighting|reflecting|underscoring|emphasising|emphasizing|marking|signalling|signaling|showcasing|demonstrating|ensuring|allowing|creating|leaving|offering|revealing|shaping|driving|fostering)\b'),
 ("3 that-clause extrapuesta (2.6x)", r'\b(?:It is (?:important|worth|clear|evident|notable|essential|crucial)(?: to note| noting)? that|The fact that)\b'),
 ("4 coordinacion de modificadores (1.9x)", r'\b(?:clear and consistent|robust and|comprehensive and|effective and|significant and|broad and|complex and|diverse and|varied and)\w*\b'),
 ("10 paralelismo negativo", r'\bnot (?:just|only|merely|simply)\b[^.!?]{0,80}\bbut\b|\b\w+ rather than \w+'),
 ("11 triadas", r'\b(\w+), (\w+),? and (\w+)\b'),
 ("12 evasion de la copula", r'\b(?:serves as|stands as|functions as|emerges as|acts as|embodies|underscores|stands out as|represents a)\b'),
 ("13 abstraccion como agente", r'\b(?:figure|pattern|shift|rise|trend|landscape|framework|approach|dynamic|initiative|evidence|record|table)\s+that\s+(?:conceals|reveals|betrays|hides|masks|belies|speaks to|hints at|demonstrates|highlights|underscores|signals)\b'),
 ("14 relativa de frase con which", r',\s+which\b'),
 ("18 conector en cabeza", r'(?m)^(?:However|Moreover|Furthermore|Additionally|Consequently|Nevertheless|Notably|Importantly)\b'),
 ("19 hedges apilados", r'\b(?:may|might|could)\s+(?:potentially|possibly|perhaps)\b|\bcan help to\b|\bmay serve to\b'),
 ("31 rango decorativo from-to", r'\bfrom \w+[^.,]{0,25} to \w+\b'),
 ("32 cierre de resumen", r'(?m)^(?:In (?:conclusion|summary|short)|Overall|Ultimately|Taken together)\b'),
 ("33 formula Despite", r'\bDespite (?:its|the|these)\b[^.]{5,60},'),
 ("34 atribucion vaga", r'\b(?:experts (?:say|argue)|is widely regarded as|is seen as|has been described as)\b'),
 ("em dash en prosa", r'—'),
 ("dos puntos retoricos", r'\w+:\s+[a-z]'),
]

def audit(path):
    raw=open(path).read()
    t=body_prose(raw)
    words=len(t.split()); k=words/1000
    print(f"== {path}: {words} palabras de prosa ==\n")
    print("MARCADORES (conteo | por 1.000 palabras)")
    total=0
    for name,pat in CHECKS:
        n=len(re.findall(pat,t))
        if name.startswith(("1 ","1b","3 ","4 ","10","12","13")): total+=n
        flag=" <<<" if n/k>2 and not name.startswith(("11","14")) else ""
        print(f"  {name:42s} {n:4d} | {n/k:5.1f}{flag}")
    print(f"\n  DENSIDAD TIER-1 (humano ~2.8 / IA ~26.7 por 1.000): {total/k:.1f}")
    ss=sentences(t); L=[len(s.split()) for s in ss]
    print(f"\nRITMO: {len(ss)} frases | media {statistics.mean(L):.1f} | DE {statistics.pstdev(L):.1f}")
    print(f"  frases <11 palabras: {sum(1 for x in L if x<11)} | >34 palabras: {sum(1 for x in L if x>34)}")
    bad=0
    for i in range(0,len(L)-19,20):
        w=L[i:i+20]
        if not (any(x<11 for x in w) and any(x>34 for x in w)): bad+=1
    print(f"  tramos de 20 frases sin corta Y larga (test Desaire): {bad}")
    paras=[p for p in re.split(r'\n\s*\n', t) if len(p.split())>25]
    P=[len(p.split()) for p in paras]
    if P: print(f"PARRAFOS: {len(P)} | media {statistics.mean(P):.0f} | DE {statistics.pstdev(P):.0f} | min {min(P)} max {max(P)}")
    nom=len(re.findall(r'\b\w{4,}(?:tion|sion|ment|ness|ity|ance|ence|ism)s?\b',t))
    print(f"NOMINALIZACION: {nom} ({100*nom/words:.1f}% de palabras; objetivo <5%)")
    conc=len(re.findall(r'\b(?:although|though|whereas|albeit|even though)\b',t,re.I))
    print(f"CONCESIVOS (infrautilizados por IA, subir): {conc} | {conc/k:.1f} por 1.000")
    print(f"PUNTUACION HUMANA: ; {t.count(';')} | ( {t.count('(')} | ? {t.count('?')}")

for p in sys.argv[1:]: audit(p); print()
