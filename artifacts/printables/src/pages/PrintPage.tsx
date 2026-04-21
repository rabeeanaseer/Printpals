import { useParams, Link } from "wouter";
import { Printer, ArrowLeft, Home } from "lucide-react";
import { ContentLibrary, CATEGORY_META, type Category } from "@/lib/content-library";

export default function PrintPage() {
  const { id } = useParams<{ id: string }>();
  const item = ContentLibrary.find(i => i.id === id);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Printable not found</h2>
          <Link href={base + "/"}>
            <button className="mt-4 px-5 py-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700">
              Back to Library
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const meta = CATEGORY_META[item.category as Category];

  // Find related items in same category (up to 5)
  const related = ContentLibrary
    .filter(i => i.category === item.category && i.id !== item.id)
    .slice(0, 5);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav bar — hidden in print */}
      <header className="no-print bg-white border-b-2 border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href={base + "/"}>
              <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Library</span>
              </button>
            </Link>
            <span className="text-gray-300">|</span>
            <Link href={base + "/"}>
              <button className="text-purple-600 hover:text-purple-800">
                <Home className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="category-badge"
              style={{ backgroundColor: meta.color }}
            >
              {meta.label}
            </span>
            <h1 className="font-bold text-gray-900 text-base">{item.title}</h1>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold text-sm transition-colors shadow-sm"
          >
            <Printer className="w-4 h-4" />
            Print / Download
          </button>
        </div>
      </header>

      {/* Print page area */}
      <div className="print-page max-w-2xl mx-auto px-6 py-10">
        {/* Title on print sheet */}
        <div className="no-print mb-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">{item.title}</h2>
          {item.subtitle && <p className="text-gray-500 mt-1">{item.subtitle}</p>}
          <p className="text-gray-400 text-sm mt-1">{item.description}</p>
        </div>

        {/* SVG — the printable content */}
        <div
          className="w-full flex justify-center"
          style={{ border: "3px solid #1a1a1a", borderRadius: 12, background: "white", overflow: "hidden" }}
        >
          <div
            className="w-full"
            dangerouslySetInnerHTML={{ __html: fullSvg(item.svgContent) }}
          />
        </div>

        {/* Trace & Learn Section */}
        <div
          className="mt-8 p-6 bg-white rounded-2xl border-2 border-dashed border-gray-300"
          style={{ textAlign: "center" }}
        >
          <p
            className="no-print text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3"
          >
            Trace &amp; Learn — write the name below
          </p>

          {/* Dotted guideline */}
          <div className="relative mt-4 mb-2">
            <div
              style={{
                borderTop: "2px dashed #e0e0e0",
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
              }}
            />
            <span
              className="trace-text relative z-10 inline-block px-4 bg-white"
              aria-label={`Trace the word: ${item.traceText}`}
            >
              {item.traceText}
            </span>
          </div>

          {/* Writing lines */}
          <div className="mt-6 space-y-5">
            {[0, 1, 2].map(i => (
              <div key={i} className="relative">
                <div style={{ borderBottom: "2px solid #ccc", paddingBottom: 8 }}>
                  <div style={{ borderBottom: "1px dashed #e8e8e8", paddingBottom: 20 }} />
                </div>
              </div>
            ))}
          </div>

          <p className="no-print mt-4 text-xs text-gray-300">
            Trace the dashed word above, then write it yourself on the lines below.
          </p>
        </div>
      </div>

      {/* Related printables — hidden in print */}
      {related.length > 0 && (
        <div className="no-print max-w-2xl mx-auto px-6 pb-12">
          <h3 className="font-bold text-gray-700 text-base mb-4 mt-2">More {meta.label}</h3>
          <div className="flex flex-wrap gap-3">
            {related.map(rel => (
              <Link key={rel.id} href={`${base}/print/${rel.id}`}>
                <button className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-purple-400 hover:text-purple-700 transition-colors">
                  {rel.title}
                </button>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href={base + "/"}>
              <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
                ← Back to Full Library
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function fullSvg(svg: string): string {
  return svg
    .replace(/width="[\d]+"/, 'width="100%"')
    .replace(/height="[\d]+"/, '')
    .replace(/<svg /, '<svg style="display:block;width:100%;height:auto;" ');
}
