"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "آیا مداداپ برای رشته ریاضی و تجربی جداگانه است؟",
    a: "در زمان ثبت‌نام یا استفاده از محصول، محتوای مناسب با رشته تحصیلی شما نمایش داده می‌شود. قیمت اشتراک‌ها بر اساس رشته متفاوت نیست و دسترسی‌ها بر اساس پایه و نوع اشتراک تنظیم می‌شوند.",
  },
  {
    q: "آیا ویدیوها از قبل ضبط شده‌اند یا کلاس آنلاین هستند؟",
    a: "",
  },
  {
    q: "مداداپ برای چه پایه‌هایی مناسب است؟",
    a: "",
  },
  {
    q: "مداداپ برای امتحانات مدرسه مناسب است یا کنکور؟",
    a: "",
  },
  {
    q: " اگر اشتراک بخرم، از چه زمانی فعال می‌شود؟",
    a: "",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-[var(--bg-soft)]">
      <section className="section  ">
        <h2 className="font-bold text-4xl text-center text-[#172B3D]">
          سوالات پرتکرار
        </h2>
        <p className="mt-3 text-center text-xl text-[#757575]">
          هرچیزی که برای شروع لازم داری بدونی اینجاست.
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
                  <span className="text-[16px] font-bold text-[#1E1E1E]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#5A5A5A] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 px-5 py-4">
                    <p className="text-[16px] leading-7 text-[#5A5A5A]">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

       
      </section>
    </div>
  );
}