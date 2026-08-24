import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D

# OECD-ish palette
FAM = {
 'The work itself': '#0E5A8A',
 'The load':        '#1F9AA8',
 'The people':      '#8CC841',
 'The livelihood':  '#E8A33D',
 'The life':        '#9A6FB0',
}
# (label, x = who can act 0..3, y = evidence on observed exit 0..3, family)
M = [
 ('Loss of purpose\nand commitment',      1.20, 0.95, 'The work itself'),
 ('Professional standing,\nconflict and legal exposure', 1.78, 0.62, 'The work itself'),
 ('Autonomy over\nthe work',              0.80, 1.22, 'The work itself'),
 ('Working hours\nand intensity',         1.02, 1.58, 'The load'),
 ('Administrative and\naccountability demands', 1.62, 1.28, 'The load'),
 ('Pupil behaviour',                      0.60, 2.45, 'The load'),
 ('School leadership',                    0.42, 2.68, 'The people'),
 ('Collegial support\nand climate',       0.55, 1.88, 'The people'),
 ('Pay relative to\noutside options',     2.15, 2.55, 'The livelihood'),
 ('Pension design and\nretirement timing', 2.72, 2.35, 'The livelihood'),
 ('Contract insecurity',                  2.30, 1.10, 'The livelihood'),
 ('Family formation\nand care',           2.60, 1.55, 'The life'),
 ('Career stage and\nearly-career exit',  1.35, 2.05, 'The life'),
 ('Health, partner\nand geography',       2.72, 0.58, 'The life'),
]

fig, ax = plt.subplots(figsize=(10.4, 6.6))
# bandas horizontales de evidencia
for y0,y1,c in [(0,1,'#F7F7F5'),(1,2,'#EFEFEA'),(2,3,'#E6E6DE')]:
    ax.axhspan(y0,y1,color=c,zorder=0)
for x in (1,2):
    ax.axvline(x, color='white', lw=2, zorder=1)

for label,x,y,fam in M:
    ax.scatter([x],[y], s=190, color=FAM[fam], zorder=3, edgecolor='white', linewidth=1.4)
    LEFT  = ('Collegial support\nand climate',)
    RIGHT = ('Working hours\nand intensity',)
    below = label in ('Pupil behaviour','Loss of purpose\nand commitment','Contract insecurity',
                      'Health, partner\nand geography','Autonomy over\nthe work')
    if label in LEFT:
        ax.annotate(label,(x,y),textcoords='offset points',xytext=(-13,0),ha='right',va='center',
                    fontsize=8.2,color='#26262B',linespacing=1.25,zorder=4)
    elif label in RIGHT:
        ax.annotate(label,(x,y),textcoords='offset points',xytext=(13,0),ha='left',va='center',
                    fontsize=8.2,color='#26262B',linespacing=1.25,zorder=4)
    else:
        ax.annotate(label,(x,y),textcoords='offset points',xytext=(0,-15 if below else 13),
                    ha='center',va='top' if below else 'bottom',fontsize=8.2,color='#26262B',
                    linespacing=1.25,zorder=4)

ax.set_xlim(0,3); ax.set_ylim(0.25,3)
ax.set_xticks([0.5,1.5,2.5])
ax.set_xticklabels(['School leaders\nand employers','Education\nministries','Authorities outside\neducation'], fontsize=9.2)
ax.set_yticks([0.5,1.5,2.5])
ax.set_yticklabels(['Limited','Mixed','Robust'], fontsize=9.2)
ax.set_xlabel('Who can act on the motive', fontsize=10, labelpad=9)
ax.set_ylabel('Evidence linking the motive to observed exit', fontsize=10, labelpad=9)
for s in ('top','right'): ax.spines[s].set_visible(False)
for s in ('left','bottom'): ax.spines[s].set_color('#B9B9B2')
ax.tick_params(length=0)
ax.set_axisbelow(True)

handles=[Line2D([0],[0],marker='o',color='w',markerfacecolor=c,markersize=9,label=k) for k,c in FAM.items()]
ax.legend(handles=handles, loc='upper center', bbox_to_anchor=(0.5,-0.16), ncol=5,
          frameon=False, fontsize=9, handletextpad=0.4, columnspacing=1.6)
plt.tight_layout()
plt.savefig('figure1_motives.png', dpi=220, bbox_inches='tight', facecolor='white')
print('figura escrita')
