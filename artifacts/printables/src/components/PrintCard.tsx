import { Link } from "wouter";
import { Printer } from "lucide-react";
import type { PrintItem, Category } from "@/lib/content-library";
import { CATEGORY_META } from "@/lib/content-library";

interface PrintCardProps {
  item: PrintItem;
  base: string;
}

export default function PrintCard({ item, base }: PrintCardProps) {
  const meta = CATEGORY_META[item.category as Category];

  return (
    <Link href={`${base}/print/${item.id}`} style={{ display: "block" }}>
      <div
        className="card-hover bg-white rounded-2xl border-2 border-gray-200 overflow-hidden cursor-pointer group flex flex-col h-full"
      >
        {/* SVG Preview */}
        <div
          className="relative flex items-center justify-center bg-gray-50 border-b-2 border-gray-100 overflow-hidden"
          style={{ height: 160 }}
        >
          <div
            className="flex items-center justify-center w-full h-full"
            style={{ padding: "8px" }}
            dangerouslySetInnerHTML={{ __html: scaledSvg(item.svgContent) }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-lg">
              <Printer className="w-4 h-4 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-3 flex flex-col gap-1 flex-1">
          <span
            className="category-badge self-start text-xs"
            style={{ backgroundColor: meta.color }}
          >
            {meta.label}
          </span>
          <h3 className="font-bold text-gray-900 text-sm leading-tight mt-1 group-hover:text-purple-700 transition-colors">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-xs text-gray-400">{item.subtitle}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

function scaledSvg(svg: string): string {
  return svg
    .replace(/width="[\d]+"/, 'width="144"')
    .replace(/height="[\d]+"/, 'height="144"')
    .replace(/<svg /, '<svg style="max-width:100%;height:144px;" ');
}
