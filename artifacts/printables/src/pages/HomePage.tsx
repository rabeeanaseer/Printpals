import { useState, useMemo } from "react";
import { Search, Printer, BookOpen, Shapes, Calculator, Cat, Apple, Leaf, Heart, CalendarDays, LayoutGrid } from "lucide-react";
import { ContentLibrary, CATEGORY_META, type Category } from "@/lib/content-library";
import PrintCard from "@/components/PrintCard";

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  alphabet: <BookOpen className="w-5 h-5" />,
  numbers: <Calculator className="w-5 h-5" />,
  math: <Calculator className="w-5 h-5" />,
  shapes: <Shapes className="w-5 h-5" />,
  animals: <Cat className="w-5 h-5" />,
  fruits: <Apple className="w-5 h-5" />,
  vegetables: <Leaf className="w-5 h-5" />,
  anatomy: <Heart className="w-5 h-5" />,
  planners: <CalendarDays className="w-5 h-5" />,
};

const ALL_CATEGORIES: Category[] = ['alphabet', 'numbers', 'math', 'shapes', 'animals', 'fruits', 'vegetables', 'anatomy', 'planners'];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const filtered = useMemo(() => {
    let items = ContentLibrary;
    if (activeCategory !== "all") {
      items = items.filter(i => i.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.tags.some(t => t.toLowerCase().includes(q)) ||
        i.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, activeCategory]);

  const totalCount = ContentLibrary.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="no-print bg-white border-b-2 border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-purple-100 rounded-xl p-2">
              <Printer className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="font-extrabold text-xl text-gray-900 leading-tight">PrintPals</h1>
              <p className="text-xs text-gray-500 hidden sm:block">{totalCount}+ Free Printables</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search printables... (lion, circle, number 5…)"
              className="w-full pl-9 pr-4 py-2 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none text-sm bg-gray-50 focus:bg-white transition-colors"
            />
          </div>

          <span className="hidden md:block text-xs text-gray-400 font-medium">
            {filtered.length} results
          </span>
        </div>
      </header>

      {/* Hero */}
      <div className="no-print bg-gradient-to-b from-purple-50 to-gray-50 border-b border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Free Printable Worksheets
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
            All-in-one library of coloring pages, tracing sheets, and planners — generated instantly, print-ready in one click.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-gray-400 font-medium">
            <span>✏️ Trace & Learn</span>
            <span>·</span>
            <span>🖨️ Print Ready</span>
            <span>·</span>
            <span>🎨 Color Pages</span>
            <span>·</span>
            <span>📅 Planners</span>
            <span>·</span>
            <span>💯 100% Free</span>
          </div>
        </div>
      </div>

      {/* Category filters */}
      <div className="no-print bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveCategory("all")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap border-2 transition-all ${
              activeCategory === "all"
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            All ({totalCount})
          </button>

          {ALL_CATEGORIES.map(cat => {
            const meta = CATEGORY_META[cat];
            const count = ContentLibrary.filter(i => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? "all" : cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap border-2 transition-all ${
                  activeCategory === cat
                    ? "border-gray-900 text-gray-900"
                    : "border-gray-200 text-gray-600 hover:border-gray-400"
                }`}
                style={activeCategory === cat ? { backgroundColor: meta.color } : {}}
              >
                {CATEGORY_ICONS[cat]}
                {meta.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400">No results found</h3>
            <p className="text-gray-400 mt-2">Try searching for "lion", "circle", or "number 5"</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("all"); }}
              className="mt-4 px-5 py-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {/* Section header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-800">
                {activeCategory === "all"
                  ? "All Printables"
                  : CATEGORY_META[activeCategory as Category].label}
                <span className="ml-2 text-sm font-normal text-gray-400">
                  ({filtered.length} sheets)
                </span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))", gap: "1rem" }}>
              {filtered.map(item => (
                <PrintCard key={item.id} item={item} base={base} />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="no-print border-t border-gray-200 bg-white mt-12 py-8 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 text-sm">
            <strong>PrintPals</strong> — {totalCount}+ free printable worksheets for kids and educators.
            All content generated dynamically — no images needed, always print-ready.
          </p>
        </div>
      </footer>
    </div>
  );
}
