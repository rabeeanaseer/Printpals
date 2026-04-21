import { Link } from "wouter";
import { Printer } from "lucide-react";
import { CATEGORY_META, ContentLibrary } from "@/lib/content-library";

const ALL_CATS = ['alphabet','numbers','math','shapes','animals','fruits','vegetables','anatomy','planners','master'] as const;

export default function PageFooter() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <footer className="no-print" style={{ background: '#1a1a2e', color: 'white', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '50px 20px 36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 44 }}>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
            <div style={{ background: '#7c3aed', borderRadius: 10, padding: '6px 8px' }}>
              <Printer style={{ width: 17, height: 17, color: 'white' }} />
            </div>
            <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>PrintPals</span>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.7, marginBottom: 14 }}>
            The #1 free printable worksheet library for kids, parents, and educators. Every sheet is SVG-generated — no ads, no paywall, no account.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              { label: 'Pinterest', color: '#e60023', e: '📌' },
              { label: 'Instagram', color: '#c13584', e: '📷' },
              { label: 'Facebook', color: '#1877f2', e: '👍' },
              { label: 'YouTube', color: '#ff0000', e: '▶️' },
            ].map(s => (
              <button key={s.label} title={s.label}
                style={{ background: '#2d2d4e', border: 'none', borderRadius: 7, padding: '7px 10px', color: 'white', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600, transition: 'background 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = s.color; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#2d2d4e'; }}
              >{s.e}</button>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontWeight: 800, fontSize: '0.84rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: '#d1d5db', marginBottom: 14 }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
            {[
              { l: 'About PrintPals', h: '/about' },
              { l: 'Contact Us', h: '/contact' },
              { l: 'Request a Printable', h: '/contact#request' },
            ].map(link => (
              <li key={link.h}>
                <Link href={base + link.h} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.86rem', transition: 'color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; }}>{link.l}</Link>
              </li>
            ))}
          </ul>
          <h4 style={{ fontWeight: 800, fontSize: '0.84rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: '#d1d5db', marginBottom: 14, marginTop: 24 }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
            {[
              { l: 'Privacy Policy', h: '/privacy-policy' },
              { l: 'Terms of Service', h: '/terms' },
              { l: 'Disclaimer', h: '/disclaimer' },
            ].map(link => (
              <li key={link.h}>
                <Link href={base + link.h} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.86rem', transition: 'color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; }}>{link.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontWeight: 800, fontSize: '0.84rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: '#d1d5db', marginBottom: 14 }}>Categories</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 14px' }}>
            {ALL_CATS.map(cat => (
              <li key={cat}>
                <Link href={`${base}/category/${cat}`} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: 5, transition: 'color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; }}>
                  <span style={{ fontSize: '0.9rem' }}>{CATEGORY_META[cat].icon}</span>
                  {CATEGORY_META[cat].label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontWeight: 800, fontSize: '0.84rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: '#d1d5db', marginBottom: 14 }}>Newsletter</h4>
          <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: 16 }}>
            Get new printables delivered to your inbox. Free, always.
          </p>
          <div style={{ background: '#2d2d4e', borderRadius: 12, padding: '16px' }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
              <input type="email" placeholder="your@email.com"
                style={{ flex: 1, padding: '8px 10px', borderRadius: 8, border: 'none', background: '#1a1a2e', color: 'white', fontSize: '0.82rem', outline: 'none' }} />
              <button style={{ padding: '8px 14px', background: '#7c3aed', border: 'none', borderRadius: 8, color: 'white', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer' }}>
                Join
              </button>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.74rem', margin: 0 }}>No spam. Unsubscribe anytime.</p>
          </div>
          <div style={{ marginTop: 20 }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
              {['🎨 Coloring', '✏️ Tracing', '📐 Math', '🐾 Animals'].map(tag => (
                <span key={tag} style={{ padding: '3px 8px', background: '#2d2d4e', borderRadius: 999, fontSize: '0.7rem', color: '#9ca3af' }}>{tag}</span>
              ))}
            </div>
            <p style={{ color: '#4b5563', fontSize: '0.74rem', margin: 0 }}>© {new Date().getFullYear()} PrintPals. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #2d2d4e', padding: '14px 20px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <p style={{ color: '#4b5563', fontSize: '0.76rem', margin: 0 }}>All worksheets are SVG-generated — zero image uploads, print-ready at any size.</p>
          <p style={{ color: '#4b5563', fontSize: '0.76rem', margin: 0 }}>Made with ❤️ for kids and educators worldwide</p>
        </div>
      </div>
    </footer>
  );
}
