import Image from "next/image";
import type { GalleryItem } from "@/content/gallery";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <ul className="grid gap-[var(--ds-space-16)] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.src} className="bg-surface">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <p className="px-[var(--ds-space-12)] py-[var(--ds-space-12)] text-sm text-muted">
            {item.alt}
          </p>
        </li>
      ))}
    </ul>
  );
}
