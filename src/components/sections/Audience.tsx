import { Sparkles, FileQuestion, Hourglass, Book, BookOpen, PanelsTopLeft, ChartArea, ChartLine } from "lucide-react";
import Image from "next/image";

const ITEMS = [
  {
    icon: BookOpen,
    title: "کمک درست حسابی زیاد و گرون",
    description: "میلیون‌ها تومان خرج کلاس‌های آموزشی کردی ولی به نتیجه نرسیدی.",
  },
  {
    icon: PanelsTopLeft,
    title: "برنامه مطالعه نداری",
    description: "نمی‌دونی از کجا شروع کنی، چطور یاد بگیری، چه منابعی بهتره.",
  },
    {
    icon: ChartLine,
    title:  "آزمون فقط برات استرسه",
    description: "اگر دنبال یه تغییر مسیر حرفه‌ای یا حتی زندگی هستی، مسیر امن و تست‌شده‌ای می‌خوای.",
  },
];

export function Audience() {
  return (
    <div className="bg-[var(--bg-soft)]">
      <section className="section  ">
        <h2 className="hidden section-title text-center  md:flex justify-center">
          درس خوندن{" "}
          <span className="text-[var(--brand)]">
            <Image src="/do_not.svg" alt="teaser" width={140} height={98} className="relative bottom-4 p-0" />
          </span>{" "}
          این‌قدر پیچیده باشه!
        </h2>
        <h2 className="md:hidden font-bold text-2xl text-center leading-10 text-[#821ADC]">
          <span className="text-[#172B3D]">مداداپ فقط محتوا نیست، </span>
          <br /> یک چرخه کامل آموزشیه
        </h2>
        <div className="flex items-end justify-center gap-4 overflow-x-auto pb-4 sm:hidden">
          <Image
            src="/mobile-aud.svg"
            alt="teaser"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-light)] text-[var(--brand)]">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-xl  text-[var(--main-text-colort)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-[#757575]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}