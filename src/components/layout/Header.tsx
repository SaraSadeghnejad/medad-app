import { BookOpen } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
           <Image src="/logo.png" alt="teaser" width={30} height={30} />
        </a>

        {/* CTA */}
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-700 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
        >
          <span>ورود / ثبت نام</span>
        </a>
      </div>
    </header>
  );
}