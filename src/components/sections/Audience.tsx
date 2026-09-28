import { Sparkles, FileQuestion, Hourglass } from "lucide-react";
import Image from "next/image";

const ITEMS = [
  {
    icon: Hourglass,
    title: "کمک درست حسابی زیاد و گرون",
    description: "میلیون‌ها تومان خرج کلاس‌های آموزشی کردی ولی به نتیجه نرسیدی.",
  },
  {
    icon: FileQuestion,
    title: "برنامه مطالعه نداری",
    description: "نمی‌دونی از کجا شروع کنی، چطور یاد بگیری، چه منابعی بهتره.",
  },
    {
    icon: Sparkles,
    title:  "آزمون فقط برات استرسه",
    description: "اگر دنبال یه تغییر مسیر حرفه‌ای یا حتی زندگی هستی، مسیر امن و تست‌شده‌ای می‌خوای.",
  },
];

export function Audience() {
  return (
    <section className="section">
      <h2 className="section-title text-center flex justify-center">
        درس خوندن <span className="text-[var(--brand)]">           
         <Image
          src="/do_not.png"
          alt="teaser"
          width={100}
          height={100}
        /></span> این‌قدر پیچیده باشه!
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="card-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-light)] text-[var(--brand)]">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-6 text-gray-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}