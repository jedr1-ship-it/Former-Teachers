import csv, re, matplotlib
matplotlib.use('Agg'); import matplotlib.pyplot as plt
from matplotlib.patches import Patch

D={}
for r in csv.DictReader(open('figure_data.csv')):
    D.setdefault(r['indicator'],{})[r['country']]=r['value']
def num(v):
    if v is None: return None
    m=re.match(r'^-?\d+(?:\.\d+)?', str(v).strip())
    return float(m.group(0)) if m else None

# ---------- FIGURA 1: salida y su composicion ----------
rate=D['D8.4_attrition_rate_prePrimary_to_upperSecondary']
res =D['D8.4_leavers_resigned_share_prePrimary_to_upperSecondary']
ret =D['D8.4_leavers_retired_share_prePrimary_to_upperSecondary']
rows=[]
for c,v in rate.items():
    r=num(v)
    if r is None or c.lower().startswith(('oecd','eu2','average')): continue
    a,b=num(res.get(c)),num(ret.get(c))
    if a is None or b is None: continue
    rows.append((c,r,a,b))
rows.sort(key=lambda t:t[1])
avg=num(rate.get('OECD average') or rate.get('OECD Average') or '6.5')

fig,ax=plt.subplots(figsize=(9.4,6.2))
ys=range(len(rows))
resign=[r*a/100 for _,r,a,b in rows]; retire=[r*b/100 for _,r,a,b in rows]
ax.barh(list(ys),resign,color='#0E5A8A',height=0.62,label='Resignation')
ax.barh(list(ys),retire,left=resign,color='#D98C2B',height=0.62,label='Retirement')
ax.axvline(avg,color='#6B6B72',lw=1.1,ls=(0,(4,3)),zorder=4)
ax.text(avg+0.12,len(rows)-0.6,f'OECD average {avg}%',fontsize=8.4,color='#4A4A50',va='center')
ax.set_yticks(list(ys)); ax.set_yticklabels([c for c,_,_,_ in rows],fontsize=9)
ax.set_xlabel('Teachers leaving the profession in 2022/23, as a percentage of all teachers',fontsize=9.6,labelpad=8)
for s in ('top','right','left'): ax.spines[s].set_visible(False)
ax.spines['bottom'].set_color('#B9B9B2'); ax.tick_params(length=0)
ax.xaxis.grid(True,color='#EAEAE4',lw=0.9); ax.set_axisbelow(True)
ax.legend(handles=[Patch(color='#0E5A8A',label='Resignation'),Patch(color='#D98C2B',label='Retirement')],
          loc='lower right',frameon=False,fontsize=9)
plt.tight_layout(); plt.savefig('fig_attrition.png',dpi=220,bbox_inches='tight',facecolor='white'); plt.close()
print('fig_attrition:',len(rows),'paises')

# ---------- FIGURA 2: salario relativo ----------
pay=D['D3.2_teacher_pay_ratio_primary_vs_tertiary_educated']
rows2=[]
for c,v in pay.items():
    x=num(v)
    if x is None or c.lower().startswith(('oecd','eu2','average')): continue
    rows2.append((c,x))
rows2.sort(key=lambda t:t[1])
oecd=num(pay.get('OECD average') or '0.83')
fig,ax=plt.subplots(figsize=(9.4,7.4))
cols=['#B23A48' if x<1 else '#2E7D5B' for _,x in rows2]
ax.barh(range(len(rows2)),[x for _,x in rows2],color=cols,height=0.64)
ax.axvline(1.0,color='#26262B',lw=1.2)
ax.axvline(oecd,color='#6B6B72',lw=1.1,ls=(0,(4,3)))
ax.text(oecd-0.02,len(rows2)-0.4,f'OECD average {oecd}',fontsize=8.4,color='#4A4A50',ha='right')
ax.text(1.02,len(rows2)-0.4,'Parity with other tertiary-educated workers',fontsize=8.4,color='#26262B')
ax.set_yticks(range(len(rows2))); ax.set_yticklabels([c for c,_ in rows2],fontsize=8.6)
ax.set_xlabel('Primary teachers’ actual earnings relative to other tertiary-educated workers',fontsize=9.6,labelpad=8)
for s in ('top','right','left'): ax.spines[s].set_visible(False)
ax.spines['bottom'].set_color('#B9B9B2'); ax.tick_params(length=0)
ax.xaxis.grid(True,color='#EAEAE4',lw=0.9); ax.set_axisbelow(True)
plt.tight_layout(); plt.savefig('fig_pay.png',dpi=220,bbox_inches='tight',facecolor='white')
print('fig_pay:',len(rows2),'paises')
