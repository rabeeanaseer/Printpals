
const S = (style: React.CSSProperties): React.CSSProperties => style;

export function AlphabetIcon() {
  return (
    <div style={S({ position: 'relative', width: 120, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
      <div style={S({ position: 'absolute', width: 78, height: 78, borderRadius: '50%', background: 'linear-gradient(135deg,#ddd6fe,#c4b5fd)', top: 4, left: 10 })} />
      <div style={S({ position: 'absolute', width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#a855f7)', bottom: 6, right: 8 })} />
      <span style={S({ position: 'relative', fontWeight: 900, fontSize: '2.4rem', color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.18)', letterSpacing: '-2px', zIndex: 1 })}>Aa</span>
    </div>
  );
}

export function NumbersIcon() {
  return (
    <div style={S({ position: 'relative', width: 120, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 })}>
      {['1','2','3'].map((n, i) => (
        <div key={n} style={S({ width: 32, height: 38, borderRadius: 10, background: i === 1 ? 'linear-gradient(135deg,#3b82f6,#60a5fa)' : 'linear-gradient(135deg,#bfdbfe,#93c5fd)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: i === 1 ? '1.5rem' : '1.2rem', color: i === 1 ? 'white' : '#1e40af', boxShadow: i === 1 ? '0 4px 14px rgba(59,130,246,0.35)' : 'none', transform: i === 1 ? 'scale(1.15) translateY(-4px)' : '' })}>
          {n}
        </div>
      ))}
    </div>
  );
}

export function MathIcon() {
  const syms = ['+','–','×','÷','=','%'];
  return (
    <div style={S({ width: 120, height: 110, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, padding: 10 })}>
      {syms.map((s,i) => (
        <div key={i} style={S({ borderRadius: 8, background: i%2===0 ? 'linear-gradient(135deg,#fef08a,#fde047)' : 'white', border: '1.5px solid #fde047', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.1rem', color: '#78350f', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' })}>
          {s}
        </div>
      ))}
    </div>
  );
}

export function ShapesIcon() {
  return (
    <div style={S({ width: 120, height: 110, position: 'relative' })}>
      <div style={S({ position: 'absolute', top: 8, left: 8, width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,#fb7185,#f43f5e)', boxShadow: '0 3px 10px rgba(244,63,94,0.3)' })} />
      <div style={S({ position: 'absolute', top: 10, right: 8, width: 42, height: 42, borderRadius: 8, background: 'linear-gradient(135deg,#34d399,#10b981)', boxShadow: '0 3px 10px rgba(16,185,129,0.3)' })} />
      <div style={S({ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '28px solid transparent', borderRight: '28px solid transparent', borderBottom: '46px solid #f59e0b', filter: 'drop-shadow(0 3px 6px rgba(245,158,11,0.35))' })} />
    </div>
  );
}

export function AnimalsIcon() {
  return (
    <div style={S({ width: 120, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' })}>
      <div style={S({ width: 82, height: 82, borderRadius: '50%', background: 'linear-gradient(135deg,#fbbf24,#f59e0b)', position: 'relative', boxShadow: '0 4px 18px rgba(245,158,11,0.35)' })}>
        <div style={S({ position: 'absolute', top: -10, left: 10, width: 22, height: 22, borderRadius: '50%', background: '#d97706' })} />
        <div style={S({ position: 'absolute', top: -10, right: 10, width: 22, height: 22, borderRadius: '50%', background: '#d97706' })} />
        <div style={S({ position: 'absolute', top: 22, left: '50%', transform: 'translateX(-50%)', width: 58, height: 58, borderRadius: '50%', background: '#fde68a' })} />
        <div style={S({ position: 'absolute', top: 30, left: 20, width: 12, height: 10, borderRadius: '50%', background: '#92400e' })} />
        <div style={S({ position: 'absolute', top: 30, right: 20, width: 12, height: 10, borderRadius: '50%', background: '#92400e' })} />
        <div style={S({ position: 'absolute', top: 46, left: '50%', transform: 'translateX(-50%)', width: 14, height: 9, borderRadius: '50%', background: '#b45309' })} />
      </div>
    </div>
  );
}

export function FruitsIcon() {
  return (
    <div style={S({ width: 120, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' })}>
      <div style={S({ position: 'relative', width: 74, height: 78 })}>
        <div style={S({ position: 'absolute', top: 0, left: 28, width: 4, height: 14, background: '#92400e', borderRadius: 3 })} />
        <div style={S({ position: 'absolute', top: -4, left: 30, width: 20, height: 14, background: '#16a34a', borderRadius: '0 50% 50% 0', transform: 'rotate(-25deg)', transformOrigin: 'left bottom' })} />
        <div style={S({ position: 'absolute', top: 10, left: 0, width: 74, height: 68, borderRadius: '48% 48% 45% 45%', background: 'radial-gradient(circle at 38% 32%, #f87171, #dc2626 55%, #b91c1c)', boxShadow: '0 6px 20px rgba(220,38,38,0.35)' })} />
        <div style={S({ position: 'absolute', top: 18, left: 16, width: 14, height: 24, borderRadius: 99, background: 'rgba(255,255,255,0.22)', transform: 'rotate(-20deg)' })} />
      </div>
    </div>
  );
}

export function VegetablesIcon() {
  return (
    <div style={S({ width: 120, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' })}>
      <div style={S({ position: 'relative', width: 60, height: 95 })}>
        <div style={S({ position: 'absolute', top: 0, left: 16, width: 28, height: 28, borderRadius: '50% 50% 0 0', background: '#16a34a' })} />
        <div style={S({ position: 'absolute', top: 4, left: 6, width: 20, height: 20, borderRadius: '50% 50% 0 0', background: '#22c55e', transform: 'rotate(-20deg)' })} />
        <div style={S({ position: 'absolute', top: 4, right: 6, width: 20, height: 20, borderRadius: '50% 50% 0 0', background: '#22c55e', transform: 'rotate(20deg)' })} />
        <div style={S({ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: 40, height: 72, borderRadius: '6px 6px 40px 40px', background: 'linear-gradient(180deg,#f97316,#ea580c 60%,#fed7aa)', boxShadow: '0 6px 18px rgba(249,115,22,0.35)' })} />
        <div style={S({ position: 'absolute', top: 28, left: 10, width: 20, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.25)' })} />
        <div style={S({ position: 'absolute', top: 40, left: 10, width: 24, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.2)' })} />
        <div style={S({ position: 'absolute', top: 52, left: 12, width: 18, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.18)' })} />
      </div>
    </div>
  );
}

export function AnatomyIcon() {
  return (
    <div style={S({ width: 120, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
      <div style={S({ position: 'relative', width: 86, height: 82 })}>
        <div style={S({ position: 'absolute', top: 0, left: 4, width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#f87171,#ef4444)' })} />
        <div style={S({ position: 'absolute', top: 0, right: 4, width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#f87171,#ef4444)' })} />
        <div style={S({ position: 'absolute', top: 20, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg,#ef4444,#dc2626)', clipPath: 'polygon(50% 100%, 0 30%, 50% 22%, 100% 30%)', boxShadow: '0 6px 20px rgba(239,68,68,0.4)' })} />
        <div style={S({ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 60, height: 55, background: 'transparent', border: 'none' })}>
          <div style={S({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg,rgba(255,255,255,0.18),transparent)', borderRadius: '50% 50% 0 0' })} />
        </div>
        <div style={S({ position: 'absolute', top: 14, left: 14, width: 18, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' })} />
      </div>
    </div>
  );
}

export function PlannersIcon() {
  return (
    <div style={S({ width: 120, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
      <div style={S({ width: 82, height: 88, borderRadius: 12, background: 'white', border: '2px solid #818cf8', boxShadow: '0 4px 16px rgba(99,102,241,0.18)', overflow: 'hidden' })}>
        <div style={S({ background: 'linear-gradient(90deg,#6366f1,#818cf8)', height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 })}>
          {[0,1,2,3,4,5,6].map(i => (
            <div key={i} style={S({ width: 6, height: 6, borderRadius: '50%', background: i===2?'white':'rgba(255,255,255,0.5)' })} />
          ))}
        </div>
        <div style={S({ padding: 6, display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2 })}>
          {Array.from({length: 35}, (_, i) => (
            <div key={i} style={S({ height: 8, borderRadius: 2, background: i===9||i===15||i===22 ? '#6366f1' : i===14||i===21 ? '#c7d2fe' : '#f1f5f9' })} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function MasterIcon() {
  return (
    <div style={S({ width: 120, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
      <div style={S({ width: 90, height: 90, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 })}>
        {[
          { bg: '#fef3c7', border: '#fcd34d', label: 'A-Z' },
          { bg: '#dbeafe', border: '#93c5fd', label: '1-9' },
          { bg: '#dcfce7', border: '#86efac', label: '🍎' },
          { bg: '#fce7f3', border: '#f9a8d4', label: '🦁' },
        ].map((c, i) => (
          <div key={i} style={S({ borderRadius: 8, background: c.bg, border: `1.5px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', color: '#374151' })}>
            {c.label}
          </div>
        ))}
      </div>
    </div>
  );
}
