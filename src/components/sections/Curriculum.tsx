import { Boxes, Users, BookOpen, Compass, Award } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  {
    icon: '/ico1.png',
    title: "کلاس",
    description: "آموزش، جزوه، تمرین و خودآزمایی در کنار هم تا هر مبحث را بهتر و کامل‌تر یاد بگیری.",
    span: "lg:col-span-5",
    image: "/sec1.svg",
  },
  {
    icon:  '/ico2.png',
    title: "آزمون",
    description: "با آزمون‌های منظم، فقط درس نمی‌خوانی؛می‌فهمی چقدر یاد گرفته‌ای، کجا ضعف داری و باید روی چه چیزی بیشتر کار کنی.",
    span: "lg:col-span-7",
    image: "/sec2.svg",
  },
  {
    icon:  '/ico3.png',
    title: "برنامه‌ریزی",
    description: "داشتن برنامه، شروعِ پیشرفته؛با یک مسیر روشن و برنامه مشخص، قدم‌به‌قدم جلو برو.",
    span: "lg:col-span-7",
    image: "/sec6.svg",
  },
  {
    icon:  '/ico4.png',
     title: "مشاوره",
    description: "اینجا تو مسیر تنها نیستی؛با مشاوره باانگیزه‌تر می‌مونی و هدفمندتر جلو می‌ری.",
    span: "lg:col-span-5",
    image: "/sec7.svg",
  },
  {
    icon:  '/ico5.png',
    title: "ویچارو",
    description: "دیگه برای رفع اشکال منتظر کلاس بعدی نمون... سؤال‌هات رو بپرس، مفاهیم رو بهتر یاد بگیر و اشکالاتت رو در کمترین زمان برطرف کن. دستیار هوشمند مداداپ همیشه آماده راهنمایی توئه؛ چه تو درس، چه تو مشاوره.",
    span: "lg:col-span-12",
    image: "/sec3.svg",
  },
];

export function Curriculum() {
  return (
    <div className="bg-[var(--bg-soft)]">
      <section id="curriculum" className="section  ">
        <h2 className="section-title text-center">
          مدادپ فقط محتوا نیست، یک چرخه کامل آموزشی
        </h2>
        <p className="mt-3 text-center text-sm text-[var(--sub-text-colort)]">
          مسیر سخت یادگیری رو به قدم های خیلی کوچیک تبدیل کن.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`card-soft relative overflow-hidden ${item.span}`}
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Text block */}
                  <div className="flex-1">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-light)] text-[var(--brand)]">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={22}
                        height={22}
                      />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-[var(--main-text-colort)]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--sub-text-colort)]]">
                      {item.description}
                    </p>
                  </div>

                  {/* Image block */}
                  <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}