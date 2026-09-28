"use client";

import { Check, ChevronDown, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────
type Feature = {
  label: string;
  available: boolean;
};

type Plan = {
  id: string;
  title: string;            // e.g. "مداد سیاه"
  priceLabel: string;         // e.g. "رایگان" or "۳,۲۰۸,۰۰۰"
  badge?: string;             // e.g. "۳۳٪ تخفیف"
  oldPrice?: string;          // e.g. "۱۵,۶۵۰,۰۰۰"
  priceSuffix?: string;       // e.g. "تومان"
  period?: string;            // e.g. "اشتراک ۱۲ ماهه"
  description: string;
  image: string;              // e.g. "/gift-box.png"
  features: Feature[];
  cta: string;
  variant: "free" | "paid";
};

type TabKey = "دهم" | "یازدهم" | "دوازدهم";

const TABS: { key: TabKey; label: string }[] = [
  { key: "دهم", label: "پایه دهم" },
  { key: "یازدهم", label: "پایه یازدهم" },
  { key: "دوازدهم", label: "پایه دوازدهم" },
];

// ─── Data (2 cards per tab) ───────────────────────────────────────────────
const PLANS: Record<TabKey, Plan[]> = {
  دهم: [
    {
      id: "d10-free",
      title: "مداد سیاه",
      priceLabel: "رایگان",
      description:
        "مداد سیاه کمک می‌کند شروع کنی و در مسیر بمانی.",
      image:'/freemium.png',
      variant: "free",
      features: [
        { label: "دسترسی محدود به محتوای پایه", available: true },
        { label: "دسترسی محدود به محتوای پیشروی", available: true },
        { label: "عدم دسترسی به محتوای تسلط", available: false },
        { label: "دسترسی محدود مشاوره", available: true },
        { label: "دسترسی کامل جدول برنامه ریزی", available: true },
        { label: "دسترسی محدود آزمون", available: true },
      ],
      cta: "رایگان ثبت نام کن",
    },
    {
      id: "d10-pro",
      title: "مداد رنگی",
      priceLabel: "۳,۲۰۸,۰۰۰",
      priceSuffix: "تومان",
      badge: "۳۳٪ تخفیف",
      oldPrice: "۱۵,۶۵۰,۰۰۰",
      period: "اشتراک ۱۲ ماهه",
      description:
        "مداد رنگی کمک می‌کند کاملا بفهمی، دقیق تحلیل شوی و سریع‌تر پیشرفت کنی.",
      image: "/premium.png",
      variant: "paid",
      features: [
        { label: "دسترسی کامل به محتوای پایه", available: true },
        { label: "دسترسی کامل به محتوای پیشروی", available: true },
        { label: "دسترسی کامل به محتوای تسلط", available: true },
        { label: "دسترسی کامل مشاوره", available: true },
        { label: "دسترسی کامل جدول برنامه ریزی", available: true },
        { label: "دسترسی کامل آزمون", available: true },
      ],
      cta: "حرفه ای درس بخون",
    },
  ],
  یازدهم: [
    {
      id: "d11-free",
      title: "مداد سیاه",
      priceLabel: "رایگان",
      description: "مداد سیاه کمک می‌کند شروع کنی و در مسیر بمانی.",
      image:'/freemium.png',
      variant: "free",
      features: [
        { label: "دسترسی محدود به محتوای پایه", available: true },
        { label: "دسترسی محدود به محتوای پیشروی", available: true },
        { label: "عدم دسترسی به محتوای تسلط", available: false },
        { label: "دسترسی محدود مشاوره", available: true },
        { label: "دسترسی کامل جدول برنامه ریزی", available: true },
        { label: "دسترسی محدود آزمون", available: true },
      ],
      cta: "رایگان ثبت نام کن",
    },
    {
      id: "d11-pro",
      title: "مداد رنگی",
      priceLabel: "۳,۲۰۸,۰۰۰",
      priceSuffix: "تومان",
      badge: "۳۳٪ تخفیف",
      oldPrice: "۱۵,۶۵۰,۰۰۰",
      period: "اشتراک ۱۲ ماهه",
      description:
        "مداد رنگی کمک می‌کند کاملا بفهمی، دقیق تحلیل شوی و سریع‌تر پیشرفت کنی.",
      image: '/premium.png',
      variant: "paid",
      features: [
        { label: "دسترسی کامل به محتوای پایه", available: true },
        { label: "دسترسی کامل به محتوای پیشروی", available: true },
        { label: "دسترسی کامل به محتوای تسلط", available: true },
        { label: "دسترسی کامل مشاوره", available: true },
        { label: "دسترسی کامل جدول برنامه ریزی", available: true },
        { label: "دسترسی کامل آزمون", available: true },
      ],
      cta: "حرفه ای درس بخون",
    },
  ],
  دوازدهم: [
    {
      id: "d12-free",
      title: "مداد سیاه",
      priceLabel: "رایگان",
      description: "مداد سیاه کمک می‌کند شروع کنی و در مسیر بمانی.",
      image:'/freemium.png',
      variant: "free",
      features: [
        { label: "دسترسی محدود به محتوای پایه", available: true },
        { label: "دسترسی محدود به محتوای پیشروی", available: true },
        { label: "عدم دسترسی به محتوای تسلط", available: false },
        { label: "دسترسی محدود مشاوره", available: true },
        { label: "دسترسی کامل جدول برنامه ریزی", available: true },
        { label: "دسترسی محدود آزمون", available: true },
      ],
      cta: "رایگان ثبت نام کن",
    },
    {
      id: "d12-pro",
      title: "مداد رنگی",
      priceLabel: "۳,۲۰۸,۰۰۰",
      priceSuffix: "تومان",
      badge: "۳۳٪ تخفیف",
      oldPrice: "۱۵,۶۵۰,۰۰۰",
      period: "اشتراک ۱۲ ماهه",
      description:
        "مداد رنگی کمک می‌کند کاملا بفهمی، دقیق تحلیل شوی و سریع‌تر پیشرفت کنی.",
      image: "/graduation-cap.png",
      variant: "paid",
      features: [
        { label: "دسترسی کامل به محتوای پایه", available: true },
        { label: "دسترسی کامل به محتوای پیشروی", available: true },
        { label: "دسترسی کامل به محتوای تسلط", available: true },
        { label: "دسترسی کامل مشاوره", available: true },
        { label: "دسترسی کامل جدول برنامه ریزی", available: true },
        { label: "دسترسی کامل آزمون", available: true },
      ],
      cta: "حرفه ای درس بخون",
    },
  ],
};

// ─── Section ──────────────────────────────────────────────────────────────
export function Pricing() {
  const [activeTab, setActiveTab] = useState<TabKey>("یازدهم");
  const plans = useMemo(() => PLANS[activeTab], [activeTab]);

  return (
    <section
      id="pricing"
      dir="rtl"
      className="relative overflow-hidden bg-[var(--bg-soft)] py-16"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="flex gap-2 rounded-2xl border border-white/40 bg-white/30 p-1.5 shadow-lg backdrop-blur-xl">
            {TABS.map((tab) => {
              const isActive = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-xl px-5 py-2 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-white text-[var(--brand)] shadow-md"
                      : "text-gray-600 hover:bg-white/40 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

    {/* Mobile: Swiper carousel */}
<div className="block md:hidden">
  <Swiper
    key={activeTab}
    modules={[Navigation, Pagination, A11y, Keyboard]}
    spaceBetween={16}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    keyboard={{ enabled: true }}
    grabCursor
    dir="rtl"
    className="!pb-14 pricing-swiper"
  >
    {plans.map((plan) => (
      <SwiperSlide key={plan.id} className="!h-auto">
        <PlanCard plan={plan} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

{/* Desktop: centered grid, no carousel */}
<div className="hidden md:flex md:justify-center md:items-stretch md:gap-8">
  {plans.map((plan) => (
    <div key={plan.id} className="w-full max-w-md">
      <PlanCard plan={plan} />
    </div>
  ))}
</div>
      </div>

      <style jsx global>{`
        .pricing-swiper .swiper-button-next,
        .pricing-swiper .swiper-button-prev {
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          color: #374151;
        }
        .pricing-swiper .swiper-button-next::after,
        .pricing-swiper .swiper-button-prev::after {
          font-size: 14px;
          font-weight: 700;
        }
        .pricing-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .pricing-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .pricing-swiper .swiper-pagination-bullet-active {
          background: var(--brand);
          width: 28px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────
function PlanCard({ plan }: { plan: Plan }) {
  const [open, setOpen] = useState(false);
  const isFree = plan.variant === "free";

  return (
   <div className="relative mx-auto flex h-full w-full max-w-md flex-col">
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.25)] ring-1 ring-purple-100/60">
        {/* Decorative corner blob */}
        <div className="pointer-events-none absolute -left-16 bottom-32 h-40 w-40 rounded-full bg-gradient-to-tr from-purple-200/40 to-pink-200/20 blur-2xl" />

        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 text-right">
            <h3 className="text-2xl font-black text-gray-800">{plan.title}</h3>

            {/* Paid: discount + old price */}
            {plan.badge || plan.oldPrice ? (
              <div className="mt-3 flex items-center justify-end gap-2">
                {plan.badge && (
                  <span className="text-[11px] font-bold text-red-500">
                    {plan.badge}
                  </span>
                )}
                {plan.oldPrice && (
                  <span className="relative text-sm font-bold text-gray-400">
                    {plan.oldPrice}
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-red-500" />
                  </span>
                )}
              </div>
            ) : null}

            {/* Price / Free label */}
            <div
              className={`mt-2 flex items-baseline justify-end gap-1 ${
                isFree ? "mt-6" : ""
              }`}
            >
              {isFree ? (
                <span className="text-5xl font-black text-[#1e3a5f]">
                  {plan.priceLabel}
                </span>
              ) : (
                <>
                  <span className="text-3xl font-black tracking-tight text-gray-900">
                    {plan.priceLabel}
                  </span>
                  {plan.priceSuffix && (
                    <span className="text-xs text-gray-500">
                      {plan.priceSuffix}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative h-24 w-24 shrink-0">
        
            <Image
                 src="/premium.png"
                 alt="teaser"
                 width={100}
                 height={100}
               />

          </div>
        </div>

        {/* ── Subscription dropdown (paid only) ── */}
        {plan.period && (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="mt-6 flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:border-purple-300"
            >
              <ChevronDown
                size={16}
                className={`text-gray-500 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
              <span>{plan.period}</span>
            </button>

            {open && (
              <ul className="mt-2 space-y-1 rounded-xl border border-gray-100 bg-white p-2 text-xs">
                <li className="cursor-pointer rounded-lg px-3 py-2 hover:bg-purple-50">
                  اشتراک ۱ ماهه
                </li>
                <li className="cursor-pointer rounded-lg px-3 py-2 hover:bg-purple-50">
                  اشتراک ۶ ماهه
                </li>
                <li className="cursor-pointer rounded-lg bg-purple-50 px-3 py-2 font-bold text-purple-700">
                  {plan.period}
                </li>
              </ul>
            )}
          </>
        )}

        {/* ── Description ── */}
        <p className="mt-5 text-center text-[13px] leading-7 text-gray-700">
          {plan.description}
        </p>

        {/* ── Divider ── */}
        <div className="my-5 h-px w-full bg-gradient-to-l from-transparent via-gray-200 to-transparent" />

        {/* ── Features ── */}
        <ul className="space-y-4 text-[13px] flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.25)] ring-1 ring-purple-100/60">
          {plan.features.map((feature) => (
            <li
              key={feature.label}
              className="flex items-center justify-start gap-2"
            >
       
              {feature.available ? (
                <Check
                  size={15}
                  className="shrink-0 text-gray-600"
                  strokeWidth={3}
                />
              ) : (
                <X
                  size={15}
                  className="shrink-0 text-red-500"
                  strokeWidth={3}
                />
              )}
                     <span
                className={
                  feature.available
                    ? "text-gray-800"
                    : "font-medium text-red-500 line-through decoration-red-400"
                }
              >
                {feature.label}
              </span>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        {isFree ? (
          <button
            type="button"
            className="mt-8 w-full rounded-xl border-2 border-gray-800 bg-white py-3.5 text-sm font-black text-gray-900 transition hover:bg-gray-50 active:scale-[0.98]"
          >
            {plan.cta}
          </button>
        ) : (
          <button
            type="button"
            className="mt-8 w-full rounded-xl bg-gradient-to-l from-purple-700 to-purple-600 py-3.5 text-sm font-black text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110 active:scale-[0.98]"
          >
            {plan.cta}
          </button>
        )}
      </div>
    </div>
  );
}