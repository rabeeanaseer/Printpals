import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Star, Users, TrendingUp, ChevronDown, ChevronUp, ArrowRight, Download, Printer } from "lucide-react";
import { ContentLibrary, CATEGORY_META, type Category } from "@/lib/content-library";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PrintCard from "@/components/PrintCard";
import {
  AlphabetIcon, NumbersIcon, MathIcon, ShapesIcon,
  AnimalsIcon, FruitsIcon, VegetablesIcon, AnatomyIcon,
  PlannersIcon, MasterIcon
} from "@/components/CssArtIcon";

const ALL_CATS: Category[] = ['alphabet','numbers','math','shapes','animals','fruits','vegetables','anatomy','planners','master'];

const CAT_ART: Record<string, React.ReactNode> = {
  alphabet: <AlphabetIcon />,
  numbers: <NumbersIcon />,
  math: <MathIcon />,
  shapes: <ShapesIcon />,
  animals: <AnimalsIcon />,
  fruits: <FruitsIcon />,
  vegetables: <VegetablesIcon />,
  anatomy: <AnatomyIcon />,
  planners: <PlannersIcon />,
  master: <MasterIcon />,
};

const CAT_TAGLINES: Record<string, string> = {
  alphabet: 'Uppercase, lowercase & tracing practice',
  numbers: 'Count & trace 1 through 100',
  math: 'Symbols, fractions & reference sheets',
  shapes: 'Circles, squares, triangles & more',
  animals: 'Lions, pandas, dolphins & 50+ more',
  fruits: 'Apples, mangoes, dragonfruit & more',
  vegetables: 'Carrots, broccoli & garden favorites',
  anatomy: 'Body outlines for science learning',
  planners: 'Daily, weekly & budget organizers',
  master: 'Multi-item reference super-sheets',
};

const FAQS = [
  { q: 'Are these printables really 100% free?', a: 'Yes, completely! Every single worksheet on PrintPals is free to download and print, forever. No sign-up, no account, no credit card — just click and print.' },
  { q: 'How do I print a worksheet?', a: 'Click the purple "Print" button on any card. Your browser\'s print dialog will open with the sheet optimized for A4/Letter paper. For best results, select "Fit to Page" and disable headers/footers in your browser\'s print settings.' },
  { q: 'Can I use these in my classroom?', a: 'Absolutely! All printables on PrintPals are free for personal and classroom use. Teachers and homeschoolers are welcome to print as many copies as needed for their students at no charge.' },
  { q: 'What ages are these worksheets designed for?', a: 'Our library spans ages 2 through 12+. Alphabet and number tracing sheets are great for pre-K through Grade 1. Shape, math, and animal sheets work for ages 4–10. Planners and reference sheets suit older kids and even adults.' },
  { q: 'What file format are the downloads?', a: 'All sheets download as SVG (Scalable Vector Graphics), which means they print crisp and sharp at any paper size — A4, Letter, or larger. SVG files work with any modern browser or graphics app.' },
  { q: 'How often do you add new printables?', a: 'We add new sheets regularly based on teacher feedback and user requests. Use the "Request a Printable" form on our Contact page to suggest your next favorite!' },
  { q: 'Can I use these commercially (sell or distribute)?', a: 'Our printables are licensed for personal and classroom use only. Commercial redistribution or resale is not permitted. If you need a commercial license, please contact us.' },
  { q: 'Do I need any special software to print?', a: 'No special software needed! Just a modern web browser (Chrome, Firefox, Safari, or Edge). The print view is fully optimized — all UI is hidden and only the worksheet is printed.' },
];

export default function HomePage() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState(false);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return ContentLibrary.filter(i =>
      i.title.toLowerCase().includes(q) ||
      i.tags?.some(t => t.toLowerCase().includes(q)) ||
      i.description?.toLowerCase().includes(q)
    );
  }, [search]);

  const total = ContentLibrary.length;
  const isSearching = search.trim().length > 0;

  function handleSearch(q: string) {
    setSearch(q);
    if (q.trim()) setShowSearch(true);
    else setShowSearch(false);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f7ff', fontFamily: "'Inter','Segoe UI',sans-serif", display: 'flex', flexDirection: 'column' }}>
      <PageHeader searchValue={search} onSearch={handleSearch} />

      {isSearching ? (
        <main style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 16px 60px', flex: 1, width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <h2 style={{ fontWeight: 800, color: '#1a1a2e', fontSize: '1.1rem', margin: 0 }}>
              Search results for "<span style={{ color: '#7c3aed' }}>{search}</span>"
              <span style={{ marginLeft: 8, fontWeight: 400, color: '#9ca3af', fontSize: '0.9rem' }}>({searchResults.length} sheets)</span>
            </h2>
            <button onClick={() => setSearch("")} style={{ padding: '6px 14px', background: '#f3f0ff', color: '#7c3aed', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: '0.84rem' }}>
              ✕ Clear
            </button>
          </div>
          {searchResults.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: 14 }}>🔍</div>
              <h3 style={{ fontWeight: 700, color: '#374151', marginBottom: 8 }}>No results for "{search}"</h3>
              <p style={{ color: '#9ca3af', marginBottom: 20 }}>Try "lion", "circle", "fraction", or "planner"</p>
              <button onClick={() => setSearch("")} style={{ padding: '10px 24px', background: '#7c3aed', color: 'white', border: 'none', borderRadius: 11, fontWeight: 700, cursor: 'pointer' }}>
                Browse All Printables
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(175px,1fr))', gap: '1rem' }}>
              {searchResults.map(item => <PrintCard key={item.id} item={item} base={base} />)}
            </div>
          )}
        </main>
      ) : (
        <>
          {/* ══ HERO ══ */}
          <section style={{ background: 'linear-gradient(135deg,#f3f0ff 0%,#fdf4ff 50%,#fff7ed 100%)', borderBottom: '1.5px solid #ede9fe', padding: '52px 20px 44px' }}>
            <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#7c3aed', color: 'white', padding: '5px 16px', borderRadius: 999, fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 22 }}>
                <Star style={{ width: 11, height: 11 }} /> Free Forever · No Login · No Ads
              </div>
              <h1 style={{ fontSize: 'clamp(1.9rem,5vw,3.2rem)', fontWeight: 900, color: '#1a1a2e', lineHeight: 1.12, margin: '0 0 14px' }}>
                {total}+ Free Printable Worksheets<br />
                <span style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Kids &amp; Educators</span>
              </h1>
              <p style={{ color: '#6b7280', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto 28px', lineHeight: 1.65 }}>
                Coloring pages, alphabet tracing, number sheets, animal art, math references &amp; planners — all generated instantly as SVG. Print-ready, zero ads.
              </p>

              {/* Social Proof */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, marginBottom: 32 }}>
                {[
                  { icon: <Users style={{ width: 18, height: 18, color: '#7c3aed' }} />, main: '50,000+', sub: 'Teachers & Parents' },
                  { icon: <Download style={{ width: 18, height: 18, color: '#059669' }} />, main: '1.2 Million', sub: 'Downloads This Year' },
                  { icon: <Star style={{ width: 18, height: 18, color: '#d97706' }} />, main: `${total}+`, sub: 'Free Printables' },
                  { icon: <TrendingUp style={{ width: 18, height: 18, color: '#7c3aed' }} />, main: '100%', sub: 'Free Forever' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', padding: '12px 18px', borderRadius: 14, border: '1.5px solid #ede9fe', boxShadow: '0 2px 8px rgba(124,58,237,0.08)' }}>
                    {s.icon}
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1a1a2e', lineHeight: 1 }}>{s.main}</div>
                      <div style={{ fontSize: '0.74rem', color: '#6b7280', fontWeight: 500 }}>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#categories" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '13px 28px', background: 'linear-gradient(135deg,#7c3aed,#a855f7)', color: 'white', textDecoration: 'none', borderRadius: 12, fontWeight: 800, fontSize: '0.95rem', boxShadow: '0 4px 16px rgba(124,58,237,0.32)' }}>
                  Browse Printables <ArrowRight style={{ width: 16, height: 16 }} />
                </a>
                <Link href={`${base}/contact#request`} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '13px 28px', background: 'white', color: '#7c3aed', textDecoration: 'none', borderRadius: 12, fontWeight: 800, fontSize: '0.95rem', border: '2px solid #ede9fe' }}>
                  Request a Printable
                </Link>
              </div>
            </div>
          </section>

          {/* ══ CATEGORY CARDS ══ */}
          <section id="categories" style={{ maxWidth: 1280, margin: '0 auto', padding: '52px 20px 40px', width: '100%', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.5rem,3vw,2.1rem)', color: '#1a1a2e', margin: '0 0 10px' }}>
                Browse by Category
              </h2>
              <p style={{ color: '#6b7280', fontSize: '0.98rem', margin: 0 }}>
                Choose a topic and find the perfect printable for your child or classroom
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '20px' }}>
              {ALL_CATS.map(cat => {
                const meta = CATEGORY_META[cat];
                const count = ContentLibrary.filter(i => i.category === cat).length;
                return (
                  <div
                    key={cat}
                    style={{ background: 'white', borderRadius: 20, border: '1.5px solid #e5e7eb', overflow: 'hidden', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 32px rgba(124,58,237,0.14)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#c4b5fd'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb'; }}
                  >
                    {/* Art area */}
                    <div style={{ background: `linear-gradient(135deg, ${meta.color}88, ${meta.color}44)`, height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
                      <div style={{ position: 'absolute', bottom: -30, left: -20, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                      {CAT_ART[cat]}
                    </div>

                    {/* Content */}
                    <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
                        <h3 style={{ fontWeight: 900, fontSize: '1.05rem', color: '#1a1a2e', margin: 0, lineHeight: 1.25 }}>
                          {cat === 'animals' ? 'The Animal Kingdom' :
                           cat === 'fruits' ? 'Fruit Collection' :
                           cat === 'alphabet' ? 'Alphabet Tracing' :
                           cat === 'numbers' ? 'Number Tracing' :
                           cat === 'math' ? 'Math Reference' :
                           cat === 'shapes' ? 'Shapes & Geometry' :
                           cat === 'vegetables' ? 'Vegetable Collection' :
                           cat === 'anatomy' ? 'Human Anatomy' :
                           cat === 'planners' ? 'Planners' :
                           'Master Sheets'}
                        </h3>
                        <span style={{ flexShrink: 0, background: meta.color, color: '#1a1a2e', fontWeight: 800, fontSize: '0.72rem', padding: '3px 9px', borderRadius: 999 }}>
                          {count}+ sheets
                        </span>
                      </div>
                      <p style={{ color: '#6b7280', fontSize: '0.84rem', lineHeight: 1.6, margin: '0 0 16px', flex: 1 }}>
                        {CAT_TAGLINES[cat]}
                      </p>
                      <Link
                        href={`${base}/category/${cat}`}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '10px 16px', background: `linear-gradient(135deg,${meta.color},${meta.color}cc)`, color: '#1a1a2e', textDecoration: 'none', borderRadius: 10, fontWeight: 800, fontSize: '0.86rem', transition: 'opacity 0.15s', border: `1.5px solid ${meta.color}` }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = '0.82'; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                      >
                        View All {meta.label} <ArrowRight style={{ width: 14, height: 14 }} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ══ TRUST STRIP ══ */}
          <div style={{ background: 'linear-gradient(135deg,#1a1a2e,#2d2d4e)', padding: '32px 20px' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', alignItems: 'center' }}>
              {[
                { e: '🎨', t: 'Zero messy downloads', s: 'SVG generated on demand' },
                { e: '🖨️', t: 'Print-perfect every time', s: 'A4 & Letter optimized' },
                { e: '🔒', t: 'No account ever needed', s: 'Anonymous & secure' },
                { e: '♻️', t: 'Always free', s: 'Supported by donations' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'white' }}>
                  <span style={{ fontSize: '1.8rem' }}>{item.e}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>{item.t}</div>
                    <div style={{ fontSize: '0.76rem', color: '#9ca3af' }}>{item.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ FEATURED PRINTABLES TEASER ══ */}
          <section style={{ maxWidth: 1280, margin: '0 auto', padding: '52px 20px 40px', width: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.3rem,3vw,1.9rem)', color: '#1a1a2e', margin: 0 }}>Featured Printables</h2>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', margin: '4px 0 0' }}>A taste of what's in our library</p>
              </div>
              <Link href={`${base}/category/alphabet`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: 'white', color: '#7c3aed', textDecoration: 'none', borderRadius: 10, fontWeight: 700, fontSize: '0.86rem', border: '2px solid #ede9fe' }}>
                Browse All <ArrowRight style={{ width: 14, height: 14 }} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(175px,1fr))', gap: '1rem' }}>
              {ContentLibrary.slice(0, 12).map(item => <PrintCard key={item.id} item={item} base={base} />)}
            </div>
          </section>

          {/* ══ FAQ ACCORDION ══ */}
          <section style={{ background: 'linear-gradient(135deg,#f3f0ff,#fdf4ff)', borderTop: '1.5px solid #ede9fe', padding: '52px 20px 60px' }}>
            <div style={{ maxWidth: 780, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 38 }}>
                <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.4rem,3vw,2rem)', color: '#1a1a2e', margin: '0 0 10px' }}>
                  Frequently Asked Questions
                </h2>
                <p style={{ color: '#6b7280', fontSize: '0.96rem', margin: 0 }}>Everything you need to know about PrintPals</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {FAQS.map((faq, i) => (
                  <div
                    key={i}
                    style={{ background: 'white', borderRadius: 14, border: `1.5px solid ${openFaq === i ? '#c4b5fd' : '#e5e7eb'}`, overflow: 'hidden', transition: 'border 0.15s', boxShadow: openFaq === i ? '0 4px 18px rgba(124,58,237,0.1)' : '0 1px 4px rgba(0,0,0,0.04)' }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: '100%', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                    >
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a2e', lineHeight: 1.4 }}>{faq.q}</span>
                      <span style={{ flexShrink: 0, color: '#7c3aed' }}>
                        {openFaq === i ? <ChevronUp style={{ width: 18, height: 18 }} /> : <ChevronDown style={{ width: 18, height: 18 }} />}
                      </span>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 20px 20px' }}>
                        <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: 32 }}>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: 12 }}>Still have questions?</p>
                <Link href={`${base}/contact`} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '11px 26px', background: '#7c3aed', color: 'white', textDecoration: 'none', borderRadius: 11, fontWeight: 800, fontSize: '0.9rem', boxShadow: '0 4px 14px rgba(124,58,237,0.28)' }}>
                  Contact Us <ArrowRight style={{ width: 15, height: 15 }} />
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      <PageFooter />
    </div>
  );
}
