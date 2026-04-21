import { useState, useMemo } from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, LayoutGrid } from "lucide-react";
import { ContentLibrary, CATEGORY_META, type Category } from "@/lib/content-library";
import PrintCard from "@/components/PrintCard";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function CategoryPage() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const [, params] = useRoute("/category/:cat");
  const [search, setSearch] = useState("");
  const cat = (params?.cat ?? "") as Category;
  const meta = CATEGORY_META[cat];

  const items = useMemo(() => {
    let list = ContentLibrary.filter(i => i.category === cat);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.tags?.some(t => t.toLowerCase().includes(q)) ||
        i.description?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [cat, search]);

  if (!meta) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter','Segoe UI',sans-serif" }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔍</div>
          <h2 style={{ color: '#1a1a2e', marginBottom: 8 }}>Category not found</h2>
          <Link href={base + "/"} style={{ color: '#7c3aed', fontWeight: 700 }}>← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f7ff', fontFamily: "'Inter','Segoe UI',sans-serif", display: 'flex', flexDirection: 'column' }}>
      <PageHeader searchValue={search} onSearch={setSearch} />

      <div style={{ background: `linear-gradient(135deg, ${meta.color}88 0%, ${meta.color}33 60%, #f8f7ff 100%)`, borderBottom: '1.5px solid #ede9fe', padding: '36px 20px 28px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Link href={base + "/"} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#7c3aed', textDecoration: 'none', fontWeight: 600, fontSize: '0.84rem', marginBottom: 16 }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.75'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}>
            <ArrowLeft style={{ width: 14, height: 14 }} /> Back to All Printables
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 60, height: 60, borderRadius: 16, background: meta.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              {meta.icon}
            </div>
            <div>
              <h1 style={{ fontWeight: 900, fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: '#1a1a2e', margin: 0, lineHeight: 1.15 }}>
                {cat === 'animals' ? 'The Animal Kingdom' :
                 cat === 'fruits' ? 'Fruit Collection' :
                 cat === 'alphabet' ? 'Alphabet Tracing Sheets' :
                 cat === 'numbers' ? 'Number Tracing Sheets' :
                 cat === 'math' ? 'Math Reference Sheets' :
                 cat === 'shapes' ? 'Shapes & Geometry' :
                 cat === 'vegetables' ? 'Vegetable Collection' :
                 cat === 'anatomy' ? 'Human Anatomy Outlines' :
                 cat === 'planners' ? 'Planners & Organizers' :
                 'Master Reference Sheets'}
              </h1>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', margin: '4px 0 0', fontWeight: 500 }}>
                {items.length} printable {items.length === 1 ? 'sheet' : 'sheets'} — free to download &amp; print
              </p>
            </div>
          </div>
        </div>
      </div>

      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 16px 52px', flex: 1, width: '100%', boxSizing: 'border-box' }}>
        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: 14 }}>🔍</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#374151', marginBottom: 8 }}>No results for "{search}"</h3>
            <button onClick={() => setSearch("")} style={{ padding: '9px 22px', background: '#7c3aed', color: 'white', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}>
              Show All {meta.label}
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <LayoutGrid style={{ width: 18, height: 18, color: '#7c3aed' }} />
              <h2 style={{ fontWeight: 800, color: '#1a1a2e', fontSize: '1.05rem', margin: 0 }}>
                All {meta.label} <span style={{ color: '#9ca3af', fontWeight: 400, fontSize: '0.9rem' }}>({items.length} sheets)</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(175px,1fr))', gap: '1rem' }}>
              {items.map(item => (
                <PrintCard key={item.id} item={item} base={base} />
              ))}
            </div>
          </>
        )}
      </main>

      <PageFooter />
    </div>
  );
}
