import { ArrowLeft, Presentation } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-soft)]">
      <div className="section relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Copy */}
        <div className="text-center lg:text-right">
          <h1 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            یادگیری، فقط ویدیو دیدن
            <br />
            نیست!
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            مسیر سخت یادگیری رو به قدم های خیلی کوچیک تبدیل کن.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#pricing" className="btn-primary">
              شروع کنید
              <ArrowLeft size={16} />
            </a>
            <a href="#curriculum" className="btn-outline">
              <Presentation size={16} />
              مشاهده دوره
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 lg:justify-start">
            <span className="font-bold">websummit</span>
            <span className="font-bold">mentoracademy</span>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          {/* Replace with real illustration */}
          <div className="aspect-square w-full max-w-md rounded-3xl bg-gradient-to-br from-[#ede7fd] via-white to-[#fce7c9] p-8 shadow-sm" />
        </div>
      </div>
    </section>
  );
}