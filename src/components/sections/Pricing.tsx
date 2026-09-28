import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--bg-soft)] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Period tabs */}
        <div className="mb-10 flex justify-center gap-2">
          {["پایه دهم", "پایه یازدهم", "پایه دوازدهم"].map((tab, i) => (
            <button
              key={tab}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                i === 1
                  ? "bg-white text-[var(--brand)] shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Paid */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-white p-8 shadow-md">
            <span className="absolute -left-8 top-6 rotate-[-15deg] rounded-lg bg-red-500 px-8 py-1 text-[10px] font-bold text-white">
              ۵۰٪ تخفیف
            </span>

            <h3 className="mb-6 text-xl font-black text-gray-900">مداد رنگی</h3>

            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-3xl font-black text-gray-900">۳,۵۰۰,۰۰۰</span>
              <span className="text-xs text-gray-500">تومان</span>
            </div>

            <button className="btn-primary mb-8 w-full justify-center">
              خرید و ثبت‌نام
            </button>

            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "دسترسی کامل به محتوای پایه",
                "دسترسی کامل به محتوای پیشرفته",
                "پرسش و پاسخ با استاد",
                "رفع اشکال تخصصی",
                "پشتیبانی و مشاوره",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={16} className="shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Free */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8">
            <h3 className="mb-6 text-xl font-black text-gray-900">مداد سیاه رایگان</h3>

            <p className="mb-8 text-sm text-gray-500">
              مداد سیاه یک سرویس رایگان برای معرفی و شروع مسیر است.
            </p>

            <button className="btn-outline mb-8 w-full justify-center">
              رایگان ثبت‌نام کن
            </button>

            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "دسترسی محدود به محتوای پایه",
                "دسترسی محدود به محتوای پیشرفته",
                "عدم دسترسی به مشاوره شخصی",
                "دسترسی به مشاوره گروهی",
                "پشتیبانی محدود",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={16} className="shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}