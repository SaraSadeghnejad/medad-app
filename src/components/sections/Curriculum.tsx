import { Boxes, Users, BookOpen, Compass, Award } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  {
    icon: Boxes,
    title: "تمرین",
    description: "در ارائه مطالب و انجام‌دادن کار، مهارت لازم رو کسب می‌کنی.",
    span: "lg:col-span-5",
    image: "/sec1.png",
  },
  {
    icon: Users,
    title: "کلاس",
    description: "در جلسات مشترک و کار تیمی، روی سرعت خودت کار می‌کنی.",
    span: "lg:col-span-7",
    image: "/sec2.png",
  },
  {
    icon: BookOpen,
    title: "مشاوره",
    description: "مشاوره اختصاصی برای انتخاب مسیر و رفع مشکلات می‌گیری.",
    span: "lg:col-span-7",
    image: "/sec6.png",
  },
  {
    icon: Compass,
    title: "راهنمایی",
    description: "مسیر آموزش هدفمند و برنامه‌ریزی شده برای رسیدن به هدف.",
    span: "lg:col-span-5",
    image: "/sec3.png",
  },
  {
    icon: Award,
    title: "مدارک",
    description: "در پایان هر مسیر، مدرک معتبر و پشتیبانی برای استخدام می‌گیری.",
    span: "lg:col-span-12",
    image: "/sec4.png",
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="section">
      <h2 className="section-title text-center">
        مدادپ فقط محتوا نیست، یک چرخه کامل آموزشی
      </h2>
      <p className="mt-3 text-center text-sm text-gray-500">
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
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-500">
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
  );
}