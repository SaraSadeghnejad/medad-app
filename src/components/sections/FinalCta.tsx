import { Send, ArrowLeft } from "lucide-react";

export function FinalCta() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[var(--brand)] px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
            با مدادپ یادگیری رو به
            <br />
            یک عادت روزانه تبدیل کن
          </h2>

          <p className="mt-4 text-sm text-white/80">
            شروع کن و ثبت‌نام رایگان فقط چند ثانیه است.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[var(--brand)] transition hover:bg-gray-100"
            >
              <Send size={16} />
              رایگان ثبت‌نام کن
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <ArrowLeft size={16} />
              مشاهده دوره
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}