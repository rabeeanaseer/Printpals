import { useState } from "react";
import { Link } from "wouter";
import { Printer, Search, ChevronDown } from "lucide-react";
import { CATEGORY_META, ContentLibrary } from "@/lib/content-library";

const ALL_CATS = ['alphabet','numbers','math','shapes','animals','fruits','vegetables','anatomy','planners','master'] as const;

interface PageHeaderProps {
  searchValue?: string;
  onSearch?: (q: string) => void;
}

export default function PageHeader({ searchValue = '', onSearch }: PageHeaderProps) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const [menuOpen, setMenuOpen] = useState(false);
  const total = ContentLibrary.length;

  return (
    <header className="no-print" style={{ background: 'white', borderBottom: '1.5px solid #ede9fe', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 1px 6px rgba(124,58,237,0.07)' }}>
      <div style={{ background: 'linear-gradient(90deg,#7c3aed,#a855f7)', padding: '5px 0', textAlign: 'center' }}>
        <span style={{ color: 'white', fontSize: '0.76rem', fontWeight: 600, letterSpacing: '0.02em' }}>
          🎨 {total}+ Free Printable Worksheets — No Sign-up · No Login · Print Instantly
        </span>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: 12, height: 62 }}>
        <Link href={base + "/"} style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)', borderRadius: 11, padding: '7px 9px', display: 'flex' }}>
            <Printer style={{ width: 20, height: 20, color: 'white' }} />
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1a1a2e', lineHeight: 1 }}>PrintPals</div>
            <div style={{ fontSize: '0.6rem', color: '#7c3aed', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Free Printables</div>
          </div>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 2, marginLeft: 6, flexShrink: 0 }}>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 12px', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.86rem', color: '#1a1a2e', background: menuOpen ? '#f3f0ff' : 'transparent', transition: 'background 0.15s' }}
            >
              Categories <ChevronDown style={{ width: 13, height: 13, transform: menuOpen ? 'rotate(180deg)' : '', transition: 'transform 0.2s' }} />
            </button>
            {menuOpen && (
              <div
                style={{ position: 'fixed', top: 97, left: 0, right: 0, background: 'white', borderBottom: '2px solid #ede9fe', boxShadow: '0 8px 32px rgba(124,58,237,0.14)', zIndex: 200, padding: '20px 0' }}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(155px,1fr))', gap: 10 }}>
                  {ALL_CATS.map(cat => {
                    const meta = CATEGORY_META[cat];
                    const count = ContentLibrary.filter(i => i.category === cat).length;
                    return (
                      <Link
                        key={cat}
                        href={`${base}/category/${cat}`}
                        onClick={() => setMenuOpen(false)}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '12px 14px', borderRadius: 10, border: '1.5px solid #e5e7eb', background: meta.color + '44', textDecoration: 'none', transition: 'all 0.14s' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.transform = ''; }}
                      >
                        <span style={{ fontSize: '1.4rem', marginBottom: 5 }}>{meta.icon}</span>
                        <span style={{ fontWeight: 700, fontSize: '0.87rem', color: '#1a1a2e' }}>{meta.label}</span>
                        <span style={{ fontSize: '0.73rem', color: '#6b7280', marginTop: 2 }}>{count} sheets</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <Link href={base + "/about"} style={{ padding: '6px 12px', borderRadius: 8, fontWeight: 600, fontSize: '0.86rem', color: '#555', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#7c3aed'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#555'; }}>About</Link>
          <Link href={base + "/about-author"} style={{ padding: '6px 12px', borderRadius: 8, fontWeight: 600, fontSize: '0.86rem', color: '#555', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#7c3aed'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#555'; }}>Creator</Link>
          <Link href={base + "/contact"} style={{ padding: '6px 12px', borderRadius: 8, fontWeight: 600, fontSize: '0.86rem', color: '#555', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#7c3aed'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#555'; }}>Contact</Link>
        </nav>

        <div style={{ flex: 1, maxWidth: 520, position: 'relative' }}>
          <Search style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', width: 15, height: 15, color: '#9ca3af' }} />
          <input
            type="search"
            value={searchValue}
            onChange={e => onSearch?.(e.target.value)}
            placeholder="Search: lion, circle, fraction, planner..."
            style={{ width: '100%', paddingLeft: 38, paddingRight: 14, paddingTop: 9, paddingBottom: 9, borderRadius: 10, border: '2px solid #e5e7eb', background: '#f9fafb', fontSize: '0.86rem', outline: 'none', boxSizing: 'border-box', transition: 'border 0.15s' }}
            onFocus={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = 'white'; }}
            onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#f9fafb'; }}
          />
        </div>
      </div>
    </header>
  );
}
