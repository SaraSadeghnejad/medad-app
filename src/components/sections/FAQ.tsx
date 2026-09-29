"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "آیا مطالب برای همه سطوح و درسی مناسبه؟",
    a: "در دوره منابع آموزشی به صورت انتخاب شده و متناسب با نیاز شما و در سطوح مختلف در نظر گرفته شده.",
  },
  {
    q: "آیا دوره‌ها از صفر شروع میشن؟",
    a: "بله، تمام دوره‌ها از مبتدی تا پیشرفته طراحی شده‌اند.",
  },
  {
    q: "چه مقدار زمان برای یادگیری نیاز دارم؟",
    a: "به طور متوسط هفته‌ای چند ساعت زمان کافی است.",
  },
  {
    q: "در صورت عدم رضایت، مبلغ پرداختی قابل بازگشته؟",
    a: "بله، در بازه مشخصی امکان بازگشت وجه وجود دارد.",
  },
  {
    q: "اگر پس از خرید به هر دلیلی منصرف بشم؟",
    a: "طبق سیاست بازگشت، امکان انصراف وجود دارد.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section  bg-[var(--bg-soft)]">
      <h2 className="section-title text-center">سوالات پرتکرار</h2>
      <p className="mt-3 text-center text-sm text-gray-500">
        هر سوالی که نیاز به پاسخ داشت، در اینجا آورده شده.
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={faq.q}
              className="rounded-2xl border border-gray-100 bg-white transition"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
              >
                <span className="text-sm font-bold text-gray-900">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-gray-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-gray-100 px-5 py-4">
                  <p className="text-sm leading-7 text-gray-600">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs text-gray-500">
        سایر سوالات پرتکرار ...
      </p>
    </section>
  );
}