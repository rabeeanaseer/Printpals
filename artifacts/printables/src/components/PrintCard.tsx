import { useState } from "react";
import { Link } from "wouter";
import { Printer, Download } from "lucide-react";
import type { PrintItem, Category } from "@/lib/content-library";
import { CATEGORY_META } from "@/lib/content-library";
import { getPhotoUrl } from "@/lib/photo-map";

interface PrintCardProps {
  item: PrintItem;
  base: string;
}

export default function PrintCard({ item, base }: PrintCardProps) {
  const meta = CATEGORY_META[item.category as Category];
  const photoUrl = getPhotoUrl(item.id, item.category, item.title);
  const [imgError, setImgError] = useState(false);
  const showPhoto = !!photoUrl && !imgError;

  function handleDownload(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const blob = new Blob([item.svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${item.id}-printpals.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Link href={`${base}/print/${item.id}`} style={{ display: 'block', textDecoration: 'none', flex: 1 }}>
        <div
          style={{
            background: 'white',
            borderRadius: 16,
            border: '1.5px solid #e5e7eb',
            overflow: 'hidden',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'all 0.18s',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 24px rgba(124,58,237,0.14)';
            (e.currentTarget as HTMLDivElement).style.borderColor = '#c4b5fd';
            (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
            (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb';
            (e.currentTarget as HTMLDivElement).style.transform = '';
          }}
        >
          {/* Thumbnail — real photo for animals/fruits/vegs, SVG for others */}
          <div
            style={{
              position: 'relative',
              height: 152,
              overflow: 'hidden',
              background: showPhoto ? '#f0f0f0' : '#fafafa',
              borderBottom: '1.5px solid #f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {showPhoto ? (
              <>
                <img
                  src={photoUrl!}
                  alt={item.title}
                  loading="lazy"
                  onError={() => setImgError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                  }}
                />
                {/* "Coloring Sheet" badge overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 6,
                  right: 6,
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: 6,
                  padding: '3px 7px',
                  fontSize: '0.63rem',
                  fontWeight: 700,
                  color: 'white',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                }}>
                  🖨️ Print &amp; Color
                </div>
              </>
            ) : (
              <div
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', padding: 8 }}
                dangerouslySetInnerHTML={{ __html: scaledSvg(item.svgContent) }}
              />
            )}

            {/* Hover overlay */}
            <div
              className="card-hover-overlay"
              style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(124,58,237,0.12)', opacity: 0, transition: 'opacity 0.18s',
              }}
            >
              <div style={{ background: 'white', borderRadius: '50%', padding: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                <Printer style={{ width: 16, height: 16, color: '#7c3aed' }} />
              </div>
            </div>
          </div>

          {/* Info */}
          <div style={{ padding: '10px 12px 12px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
            <span
              style={{
                display: 'inline-block',
                padding: '2px 8px',
                borderRadius: 999,
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                background: meta.color,
                color: '#1a1a2e',
                alignSelf: 'flex-start',
              }}
            >
              {meta.icon} {meta.label}
            </span>
            <h3 style={{ fontWeight: 800, color: '#1a1a2e', fontSize: '0.88rem', lineHeight: 1.3, margin: 0, marginTop: 4 }}>
              {item.title}
            </h3>
            {item.subtitle && (
              <p style={{ fontSize: '0.72rem', color: '#9ca3af', margin: 0 }}>{item.subtitle}</p>
            )}
          </div>
        </div>
      </Link>

      {/* Download + Print buttons */}
      <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
        <button
          onClick={handleDownload}
          title="Download SVG coloring sheet"
          style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            padding: '7px 0', borderRadius: 10, border: '1.5px solid #e5e7eb',
            background: 'white', color: '#6b7280', fontSize: '0.75rem', fontWeight: 700,
            cursor: 'pointer', transition: 'all 0.15s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = '#7c3aed';
            (e.currentTarget as HTMLButtonElement).style.color = 'white';
            (e.currentTarget as HTMLButtonElement).style.borderColor = '#7c3aed';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'white';
            (e.currentTarget as HTMLButtonElement).style.color = '#6b7280';
            (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb';
          }}
        >
          <Download style={{ width: 13, height: 13 }} /> Download
        </button>
        <Link
          href={`${base}/print/${item.id}`}
          style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            padding: '7px 0', borderRadius: 10, border: '1.5px solid #7c3aed',
            background: '#7c3aed', color: 'white', fontSize: '0.75rem', fontWeight: 700,
            textDecoration: 'none', transition: 'all 0.15s',
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.background = '#6d28d9';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.background = '#7c3aed';
          }}
        >
          <Printer style={{ width: 13, height: 13 }} /> Print
        </Link>
      </div>
    </div>
  );
}

function scaledSvg(svg: string): string {
  return svg
    .replace(/width="[\d]+"/, 'width="136"')
    .replace(/height="[\d]+"/, 'height="136"')
    .replace(/<svg /, '<svg style="max-width:100%;height:136px;" ');
}
