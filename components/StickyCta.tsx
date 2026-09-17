import { routes, site } from "@/content/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface md:hidden">
      <div className="grid grid-cols-2">
        <a className="btn btn-primary rounded-none" href={`tel:${site.phoneTel}`}>
          Bel
        </a>
        <a className="btn btn-secondary rounded-none" href={routes.contact}>
          Offerte
        </a>
      </div>
    </div>
  );
}
