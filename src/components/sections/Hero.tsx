import { ArrowLeft, Presentation } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="section relative z-10  items-center gap-10 flex   flex-col-reverse sm:flex-row">
        {/* Copy */}
        <div className="text-center md:text-right">
          <p className="text-3xl font-Iransans-bold font-bold leading-20 text-[#172B3D] sm:text-4xl lg:text-6xl">
            یادگیری، فقط ویدیو دیدن نیست!
          </p>

          <p className="mt-4 text-xl leading-7 text-[#757575] sm:text-base">
            مسیر سخت یادگیری رو به قدم های خیلی کوچیک تبدیل کن.
          </p>

          <div className="mt-8 flex flex-wrap items-cente space-x-10 justify-center gap-3 lg:justify-start">
            <a href="#pricing" className="btn-primary text-xl">
              شروع رایگان
            </a>
            <a
              href="#curriculum"
              className="text-[var(--brand)] flex justify-between gap-2 items-center text-xl"
            >
              مشاهده دمو
              <ArrowLeft size={16} />
            </a>
          </div>
        </div>
        {/* Illustration */}
        <div className="flex flex-col justify-center">
          {/* Replace with real illustration */}
          <Image src="/pic1.png" alt="teaser" width={500} height={250} />
          <div className="mt-10 flex   items-center justify-center gap-6 text-xs text-[var(--sub-text-colort)] lg:justify-end">
            <div className=" flex flex-col flex-wrap items-start justify-center gap-4 text-xs text-[var(--sub-text-colort)] lg:justify-start">
              <Image
                src="/camp2-logo.png"
                alt="teaser"
                width={150}
                height={50}
              />
              <span className="font-bold">
                دارای اعتبارنامه رشد وزارت آموزش و پرورش
              </span>
            </div>
            <div className=" flex flex-col flex-wrap items-start justify-center gap-6 text-xs text-[var(--sub-text-colort)]lg:justify-start">
              <Image
                src="/camp-logo.png"
                alt="teaser"
                width={150}
                height={50}
              />
              <span className="font-bold">
                پذیرفته شده در WebSummit Qatar 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}