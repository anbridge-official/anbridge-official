import CTA from "./CTA";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_24px_rgba(15,39,71,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md justify-center">
        <CTA compact label="馬上了解實拿金額" />
      </div>
    </div>
  );
}
