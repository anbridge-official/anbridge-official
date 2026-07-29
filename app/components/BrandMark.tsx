type BrandMarkProps = { className?: string; label?: boolean };

export default function BrandMark({ className = "", label = false }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-100 text-sm font-black tracking-[.25em] text-sky-800 shadow-sm">
        AB
      </span>
      {label && (
        <span className="leading-none">
          <span className="block text-lg font-extrabold tracking-[.02em] text-white">AnBridge</span>
          <span className="mt-1 block text-[10px] font-bold tracking-[.16em] text-sky-100 uppercase">
            Credit Card Solutions
          </span>
        </span>
      )}
    </span>
  );
}
