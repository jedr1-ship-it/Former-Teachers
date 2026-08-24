import matplotlib; matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch
from matplotlib.lines import Line2D

FAM = [
 ('The work itself', '#0E5A8A', ['Purpose and commitment','Autonomy over the work',
                                 'Professional standing','Conflict and\nlegal exposure']),
 ('The load',        '#1F9AA8', ['Working hours','Intensity of the week',
                                 'Administrative demands','Pupil behaviour']),
 ('The people',      '#5E9E3E', ['School leadership','Collegial support',
                                 'School climate','Isolation in post']),
 ('The livelihood',  '#D98C2B', ['Pay against\noutside options','Pension design\nand timing',
                                 'Contract security','Cost of the commute\nor a move']),
 ('The life',        '#8A5FA8', ['Family formation\nand care','Health','Partner and geography',
                                 'Career stage']),
]

# ---------- FIGURA 1: mapa, sin jerarquia ----------
fig, ax = plt.subplots(figsize=(12.6, 4.5))
W, GAP = 2.45, 0.26
for i,(name,col,items) in enumerate(FAM):
    x = i*(W+GAP)
    ax.add_patch(FancyBboxPatch((x,1.05), W, 3.0, boxstyle="round,pad=0.02,rounding_size=0.06",
                                facecolor='#FAFAF7', edgecolor=col, linewidth=1.6))
    ax.add_patch(FancyBboxPatch((x,3.62), W, 0.43, boxstyle="round,pad=0.02,rounding_size=0.06",
                                facecolor=col, edgecolor=col, linewidth=1.6))
    ax.text(x+W/2, 3.83, name, ha='center', va='center', color='white', fontsize=10.6, weight='bold')
    for j,it in enumerate(items):
        ax.text(x+0.13, 3.42-j*0.60, '•', color=col, fontsize=11, va='top')
        ax.text(x+0.30, 3.44-j*0.60, it, fontsize=8.7, va='top', color='#26262B', wrap=True,
                linespacing=1.3)
ax.set_xlim(-0.2, len(FAM)*(W+GAP)); ax.set_ylim(0.55, 4.25); ax.axis('off')
ax.text(-0.2, 0.92, 'Note: The families group reasons by what the motive attaches to. Within any family a reason may operate as a choice or as a constraint.\nSource: Authors, from the literature reviewed in Section 2.',
        fontsize=7.6, color='#55555C', va='top')
plt.tight_layout()
plt.savefig('figure1_map.png', dpi=220, bbox_inches='tight', facecolor='white')
plt.close()

# ---------- FIGURA 2: jerarquia por fuerza de evidencia ----------
COL = {n:c for n,c,_ in FAM}
# (motivo, familia, banda de evidencia 0-2, quien puede actuar)
R = [
 ('School leadership',              'The people',      2, 'School'),
 ('Pupil behaviour',                'The load',        2, 'School'),
 ('Pay against outside options',    'The livelihood',  2, 'Outside'),
 ('Pension design and timing',      'The livelihood',  2, 'Outside'),
 ('Career stage',                   'The life',        2, 'Ministry'),
 ('Collegial support',              'The people',      1, 'School'),
 ('Working hours',                  'The load',        1, 'School'),
 ('Family formation and care',      'The life',        1, 'Outside'),
 ('Administrative demands',         'The load',        1, 'Ministry'),
 ('Contract security',              'The livelihood',  1, 'Outside'),
 ('Autonomy over the work',         'The work itself', 1, 'School'),
 ('Purpose and commitment',         'The work itself', 0, 'Ministry'),
 ('Professional standing',          'The work itself', 0, 'Ministry'),
 ('Conflict and legal exposure',    'The work itself', 0, 'Outside'),
 ('Health, partner and geography',  'The life',        0, 'Outside'),
]
BAND = {2:'Robust', 1:'Mixed', 0:'Limited'}
MARK = {'School':'o','Ministry':'s','Outside':'D'}
fig, ax = plt.subplots(figsize=(9.6, 6.4))
y=0; ticks=[]; labels=[]
for band in (2,1,0):
    rows=[r for r in R if r[2]==band]
    ax.text(3.5, y+len(rows)-1, BAND[band], fontsize=10.5, weight='bold', color='#9A9AA0',
            ha='right', va='center')
    for m,fam,_,act in rows:
        ax.scatter([band+1], [y], s=150, color=COL[fam], marker=MARK[act], zorder=3,
                   edgecolor='white', linewidth=1.2)
        ax.hlines(y, 0, band+1, color='#DCDCD5', lw=1.1, zorder=1)
        ticks.append(y); labels.append(m); y+=1
    y+=0.7
ax.set_yticks(ticks); ax.set_yticklabels(labels, fontsize=9.3)
ax.set_xlim(0,3.6); ax.set_xticks([1,2,3]); ax.set_xticklabels(['Limited','Mixed','Robust'], fontsize=9.6)
ax.set_xlabel('Strength of the evidence linking the reason to observed exit', fontsize=10, labelpad=8)
for s in ('top','right','left'): ax.spines[s].set_visible(False)
ax.spines['bottom'].set_color('#B9B9B2'); ax.tick_params(length=0)
h1=[Line2D([0],[0],marker='o',color='w',markerfacecolor=c,markersize=9,label=n) for n,c,_ in FAM]
h2=[Line2D([0],[0],marker=MARK[k],color='w',markerfacecolor='#8A8A90',markersize=9,
           label={'School':'School leaders and employers','Ministry':'Education ministries','Outside':'Authorities outside education'}[k]) for k in MARK]
leg1=ax.legend(handles=h1, loc='upper center', bbox_to_anchor=(0.5,-0.11), ncol=5, frameon=False, fontsize=8.6, columnspacing=1.3)
ax.add_artist(leg1)
ax.legend(handles=h2, loc='upper center', bbox_to_anchor=(0.5,-0.185), ncol=3, frameon=False, fontsize=8.6, columnspacing=1.6)
plt.tight_layout()
plt.savefig('figure2_hierarchy.png', dpi=220, bbox_inches='tight', facecolor='white')
print('dos figuras escritas')
