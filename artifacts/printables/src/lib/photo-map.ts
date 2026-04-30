/**
 * No external thumbnails — each card shows its own SVG coloring illustration
 * as the thumbnail so it always matches the actual printable content.
 */

export const PHOTO_MAP: Record<string, string> = {};
export const PHOTO_CATEGORIES = new Set<string>();

export function getPhotoUrl(_id: string, _category: string, _title: string): string | null {
  return null;
}
