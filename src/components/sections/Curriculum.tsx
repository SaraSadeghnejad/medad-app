import { Boxes, Users, BookOpen, Compass, Award } from "lucide-react";

const FEATURES = [
  {
    icon: Boxes,
    title: "تمرین",
    description: "در ارائه مطالب و انجام‌دادن کار، مهارت لازم رو کسب می‌کنی.",
  },
  {
    icon: Users,
    title: "کلاس",
    description: "در جلسات مشترک و کار تیمی، روی سرعت خودت کار می‌کنی.",
  },
  {
    icon: BookOpen,
    title: "مشاوره",
    description: "مشاوره اختصاصی برای انتخاب مسیر و رفع مشکلات می‌گیری.",
  },
  {
    icon: Compass,
    title: "راهنمایی",
    description: "مسیر آموزش هدفمند و برنامه‌ریزی شده برای رسیدن به هدف.",
  },
  {
    icon: Award,
    title: "مدارک",
    description: "در پایان هر مسیر، مدرک معتبر و پشتیبانی برای استخدام می‌گیری.",
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

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((item) => {
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