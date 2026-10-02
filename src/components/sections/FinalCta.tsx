import { Send, ArrowLeft } from "lucide-react";

export function FinalCta() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#4A0D7E] w-298 h-[494px] px-8 py-12 text-center text-white">
          <h2 className="text-2xl  font-normal leading-28 sm:text-3xl lg:text-[64px]">
            با مدادپ یادگیری رو به
            <br />
            یک <span className="text-[#FF8820] px-1"> عادت روزانه </span> تبدیل
            کن
          </h2>

          <p className="mt-4 text-xl text-[#F3F3F3]">
            شروع کن و ثبت‌نام رایگان فقط چند ثانیه است.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-2xl font-bold text-[#821ADC] transition hover:bg-gray-100"
            >
              رایگان ثبت‌نام کن
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-[#821ADC] px-6 py-3 text-2xl font-bold text-white transition hover:bg-white/10"
            >
              اشتراک ها <ArrowLeft size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
