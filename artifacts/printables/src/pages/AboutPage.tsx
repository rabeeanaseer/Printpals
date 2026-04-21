import { Link } from "wouter";
import { Printer, Star, FileText, Download, Heart } from "lucide-react";
import { ContentLibrary } from "@/lib/content-library";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function AboutPage() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const total = ContentLibrary.length;

  return (
    <div style={{ minHeight: '100vh', background: '#f8f7ff', display: 'flex', flexDirection: 'column' }}>
      <PageHeader />

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 20px', flex: 1, width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>🖨️</div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1a1a2e', marginBottom: 12 }}>About PrintPals</h1>
          <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 600, margin: '0 auto' }}>
            The largest free printable worksheet library on the web — built with love for kids, parents, teachers, and homeschoolers everywhere.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, marginBottom: 48 }}>
          {[
            { icon: <FileText style={{ width: 24, height: 24, color: '#7c3aed' }} />, number: `${total}+`, label: 'Free Worksheets' },
            { icon: <Download style={{ width: 24, height: 24, color: '#7c3aed' }} />, number: 'Instant', label: 'Download & Print' },
            { icon: <Star style={{ width: 24, height: 24, color: '#7c3aed' }} />, number: '100%', label: 'Free Forever' },
            { icon: <Heart style={{ width: 24, height: 24, color: '#7c3aed' }} />, number: 'Zero', label: 'Image Uploads Needed' },
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 16, border: '1.5px solid #e5e7eb', padding: '24px 20px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>{stat.icon}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1a1a2e', marginBottom: 4 }}>{stat.number}</div>
              <div style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {[
          {
            title: 'Our Mission',
            content: `PrintPals was created to give every family access to high-quality printable worksheets — completely free, with no sign-up, no ads, and no catch. We believe that learning materials should be accessible to all children, regardless of budget.

Our library covers everything from alphabet tracing and number worksheets for early learners, to detailed animal coloring pages and scientific anatomy diagrams for older students. We have 40+ fruits, 60+ animals, all 26 alphabet letters, numbers 1–100, math symbols, fractions, geometric shapes, and even productivity planners.`
          },
          {
            title: 'Zero-Asset Technology',
            content: `Every single printable on PrintPals is generated dynamically using SVG (Scalable Vector Graphics) code — we never upload or store image files. This means:

• Always crisp and clear at any print size
• Instant loading — no large image downloads
• Works perfectly on any device or browser
• Scales perfectly to A4, Letter, or any paper size
• Eco-friendly — print only what you need`
          },
          {
            title: 'How to Use PrintPals',
            content: `1. Browse or search for a worksheet
2. Click any card to open the full print view
3. Hit the Print button (or Ctrl+P / Cmd+P)
4. Or click Download to save the SVG file

Pro tip: Our master reference sheets (like the Fruit Alphabet and Animals Mega-Grid) are perfect for classroom bulletin boards!`
          },
          {
            title: 'For Teachers & Parents',
            content: `All PrintPals worksheets are free for personal, educational, and classroom use. You may print unlimited copies for your students or children.

We do not allow reselling or commercial redistribution of our worksheets. Please see our Terms of Service for full details.

Questions? Suggestions? We'd love to hear from you — your feedback helps us add even more worksheets to the library.`
          }
        ].map((section, i) => (
          <div key={i} style={{ background: 'white', borderRadius: 16, border: '1.5px solid #e5e7eb', padding: '28px 32px', marginBottom: 20 }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1a1a2e', marginBottom: 14 }}>{section.title}</h2>
            {section.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 12 }}>
                {para.split('\n').map((line, k) => (
                  <span key={k}>{line}{k < para.split('\n').length - 1 && <br />}</span>
                ))}
              </p>
            ))}
          </div>
        ))}

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link
            href={base + "/"}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#7c3aed', color: 'white', textDecoration: 'none', padding: '12px 28px', borderRadius: 14, fontWeight: 800, fontSize: '1rem' }}
          >
            <Printer style={{ width: 18, height: 18 }} /> Browse All {total} Printables
          </Link>
        </div>
      </main>
      <PageFooter />
    </div>
  );
}
