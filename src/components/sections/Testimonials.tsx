import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "کیانا",
    role: "به مدت شش ماه در حال یادگیری",
    rating: 5,
    text: "تجربه خوبی داشتم و مطالب کاربردی بود.",
  },
  {
    name: "رضا",
    role: "در حال حاضر مشغول به کار",
    rating: 5,
    text: "بدون مدادپ رسیدن به هدف سختی بود.",
  },
  {
    name: "تینا",
    role: "تجربه یادگیری و رشد",
    rating: 4,
    text: "مسیر مشخصی رو تجربه کردم.",
  },
];

export function Testimonials() {
  return (
    <section className="section">
      <h2 className="section-title text-center">دیگران درباره‌ی مدادپ چی می‌گویند</h2>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="card-soft">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[var(--brand-light)]" />
              <div>
                <p className="text-sm font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>

            <div className="mb-3 flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < t.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                />
              ))}
            </div>

            <p className="text-sm leading-6 text-gray-600">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}