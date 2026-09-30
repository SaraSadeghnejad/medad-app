import { BookOpen } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* CTA */}
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 text-[#821ADC] rounded-lg border border-[#821ADC] px-4 py-2 text-xs font-bold  transition"
        >
          <span>ورود / ثبت نام</span>
        </a>
             {/* Logo */}
        <a href="#" className="flex items-center gap-2">
           <Image src="/logo.svg" alt="teaser" width={30} height={30} />
        </a>
      </div>
    </header>
  );
}