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
}
type Subscription = {
  period: string;
  priceLabel: string;
  oldPrice?: string;
  badge?: string;
};

type Plan = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: Feature[];
  cta: string;
  variant: "free" | "paid";
  priceLabel?: string;
  priceSuffix?: string;
  subscriptions?: Subscription[];
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
      description: "مداد سیاه کمک می‌کند شروع کنی و در مسیر بمانی.",
      image: "/freemium.svg",
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
      description:
        "مداد رنگی کمک می‌کند کاملا بفهمی، دقیق تحلیل شوی و سریع‌تر پیشرفت کنی.",
      image: "/premium.svg",
      variant: "paid",

      subscriptions: [
        {
          period: "اشتراک ۱ ماهه",
          priceLabel: "320,000",
        },
        {
          period: "اشتراک ۲ ماهه",
          priceLabel: "576,000",
          oldPrice: "640,000",
          badge: "۱۰٪ تخفیف",
        },
        {
          period: "اشتراک ۳ ماهه",
          priceLabel: "816,000",
          oldPrice: "960,000",
          badge: "۱۵٪ تخفیف",
        },
        {
          period: "اشتراک ۳ ماهه",
          priceLabel: "1,050,000",
          oldPrice: "1,280,00",
          badge: "۱۸٪ تخفیف",
        },
        {
          period: "اشتراک ۵ ماهه",
          priceLabel: "1,264,00",
          oldPrice: "1,600,000",
          badge: "۲۱٪ تخفیف",
        },
        {
          period: "اشتراک ۶ ماهه",
          priceLabel: "1,460,000",
          oldPrice: "1,920,000",
          badge: "۲۴٪ تخفیف",
        },
        {
          period: "اشتراک ۷ ماهه",
          priceLabel: "1,657,000",
          oldPrice: "2,240,000",
          badge: "۲۶٪ تخفیف",
        },
        {
          period: "اشتراک ۸ ماهه",
          priceLabel: "1,843,000",
          oldPrice: "2,560,000",
          badge: "۲۸٪ تخفیف",
        },
        {
          period: "اشتراک ۹ ماهه",
          priceLabel: "2,016,000",
          oldPrice: "2,880,000",
          badge: "۳۰٪ تخفیف",
        },
        {
          period: "اشتراک ۱۰ ماهه",
          priceLabel: "2,176,000",
          oldPrice: "3,200,000",
          badge: "۳۲٪ تخفیف",
        },
        {
          period: "اشتراک ۱۱ ماهه",
          priceLabel: "2,358,000",
          oldPrice: "3,520,000",
          badge: "۳۳٪ تخفیف",
        },
        {
          period: "اشتراک ۱۲ ماهه",
          priceLabel: "2,534,000",
          oldPrice: "3,840,000",
          badge: "۳۴٪ تخفیف",
        },
      ],

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
      image: "/freemium.svg",
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
      description:
        "مداد رنگی کمک می‌کند کاملا بفهمی، دقیق تحلیل شوی و سریع‌تر پیشرفت کنی.",
      image: "/premium.svg",
      variant: "paid",

      subscriptions: [
        {
          period: "اشتراک ۱ ماهه",
          priceLabel: "352,000",
        },
        {
          period: "اشتراک ۲ ماهه",
          priceLabel: "634,000",
          oldPrice: "704,000",
          badge: "۱۰٪ تخفیف",
        },
        {
          period: "اشتراک ۳ ماهه",
          priceLabel: "898,000",
          oldPrice: "1,056,000",
          badge: "۱۵٪ تخفیف",
        },
        {
          period: "اشتراک ۴ ماهه",
          priceLabel: "1,408,000",
          oldPrice: "1,154,000",
          badge: "۱۸٪ تخفیف",
        },
        {
          period: "اشتراک ۵ ماهه",
          priceLabel: "1,390,000",
          oldPrice: "1,760,000",
          badge: "۲۱٪ تخفیف",
        },
        {
          period: "اشتراک ۶ ماهه",
          priceLabel: "1,605,000",
          oldPrice: "2,112,000",
          badge: "۲۴٪ تخفیف",
        },
        {
          period: "اشتراک ۷ ماهه",
          priceLabel: "1,823,000",
          oldPrice: "2,464,000",
          badge: "۲۶٪ تخفیف",
        },
        {
          period: "اشتراک ۸ ماهه",
          priceLabel: "2,027,000",
          oldPrice: "2,816,000",
          badge: "۲۸٪ تخفیف",
        },
        {
          period: "اشتراک ۹ ماهه",
          priceLabel: "2,217,000",
          oldPrice: "3,529,000",
          badge: "۳۰٪ تخفیف",
        },
        {
          period: "اشتراک ۱۰ ماهه",
          priceLabel: "2,394,000",
          oldPrice: "3,520,000",
          badge: "۳۲٪ تخفیف",
        },
        {
          period: "اشتراک ۱۱ ماهه",
          priceLabel: "2,594,000",
          oldPrice: "3,872,000",
          badge: "۳۳٪ تخفیف",
        },
        {
          period: "اشتراک ۱۲ ماهه",
          priceLabel: "2,788,000",
          oldPrice: "4,224,000",
          badge: "۳۴٪ تخفیف",
        },
      ],

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
      image: "/freemium.svg",
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
      description:
        "مداد رنگی کمک می‌کند کاملا بفهمی، دقیق تحلیل شوی و سریع‌تر پیشرفت کنی.",
      image: "/premium.svg",
      variant: "paid",

      subscriptions: [
        {
          period: "اشتراک ۱ ماهه",
          priceLabel: "405,000",
        },
        {
          period: "اشتراک ۲ ماهه",
          priceLabel: "729,000",
          oldPrice: "810,000",
          badge: "۱۰٪ تخفیف",
        },
        {
          period: "اشتراک ۳ ماهه",
          priceLabel: "1,032,000",
          oldPrice: "1,215,000",
          badge: "۱۵٪ تخفیف",
        },
        {
          period: "اشتراک ۴ ماهه",
          priceLabel: "1,328,000",
          oldPrice: "1,620,000",
          badge: "۱۸٪ تخفیف",
        },
        {
          period: "اشتراک ۵ ماهه",
          priceLabel: "1,599,000",
          oldPrice: "2,025,000",
          badge: "۲۱٪ تخفیف",
        },
        {
          period: "اشتراک ۶ ماهه",
          priceLabel: "1,847,000",
          oldPrice: "2,430,000",
          badge: "۲۴٪ تخفیف",
        },
        {
          period: "اشتراک ۷ ماهه",
          priceLabel: "2,097,000",
          oldPrice: "2,835,000",
          badge: "۲۶٪ تخفیف",
        },
        {
          period: "اشتراک ۸ ماهه",
          priceLabel: "3,240,000",
          oldPrice: "2,323,000",
          badge: "۲۸٪ تخفیف",
        },
        {
          period: "اشتراک ۹ ماهه",
          priceLabel: "2,551,000",
          oldPrice: "3,645,000",
          badge: "۳۰٪ تخفیف",
        },
        {
          period: "اشتراک ۱۰ ماهه",
          priceLabel: "2,754,000",
          oldPrice: "4,050,000",
          badge: "۳۲٪ تخفیف",
        },
        {
          period: "اشتراک ۱۱ ماهه",
          priceLabel: "2,984,000",
          oldPrice: "4,455,000",
          badge: "۳۳٪ تخفیف",
        },
        {
          period: "اشتراک ۱۲ ماهه",
          priceLabel: "3,208,000",
          oldPrice: "4,840,000",
          badge: "۳۴٪ تخفیف",
        },
      ],

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
    <section id="pricing" dir="rtl" className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-10 flex justify-center ">
          <div className="flex gap-4 rounded-2xl border border-white/40 bg-[#FAF5FF] p-1.5 shadow-lg backdrop-blur-xl">
            {TABS.map((tab) => {
              const isActive = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-lg px-6 py-2 font-bold transition-all md:text-2xl ${
                    isActive
                      ? "bg-white text-[#0A0A0A] shadow-md font-bold"
                      : "text-[#5A5A5A] hover:bg-white/40 hover:text-gray-900 font-light"
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
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
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
    </section>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────

function PlanCard({ plan }: { plan: Plan }) {
  const isFree = plan.variant === "free";

  const [selectedPeriod, setSelectedPeriod] = useState(
    plan.subscriptions?.[0]?.period ?? ""
  );

  const selectedSubscription = plan.subscriptions?.find(
    (subscription) => subscription.period === selectedPeriod
  );

  // Values shown on the card
  const priceLabel = isFree
    ? plan.priceLabel
    : selectedSubscription?.priceLabel;

  const oldPrice = selectedSubscription?.oldPrice;
  const badge = selectedSubscription?.badge;

  return (
    <div className="relative mx-auto flex h-200 w-full max-w-lg flex-col ">
      <div
        className={`relative p-6 flex h-full flex-col overflow-hidden rounded-3xl ${
          plan.variant === "free" ? "bg-white" : "bg-custom-gradient"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 text-right">
            <h3 className="text-4xl font-black text-[#5A5A5A]">{plan.title}</h3>

            {/* Discount + old price */}
            {!isFree && (badge || oldPrice) && (
              <div className="mt-8 flex items-center justify-start gap-2">
                {oldPrice && (
                  <span className="relative text-2xl font-bold text-[#757575]">
                    {oldPrice}

                    <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-[#EC221F]" />
                  </span>
                )}
                {badge && (
                  <span className="text-[11px] font-bold text-[#EC221F]">
                    {badge}
                  </span>
                )}
              </div>
            )}

            {/* Price */}
            <div
              className={`mt-4 flex items-baseline justify-start gap-1 ${
                isFree ? "mt-6" : ""
              }`}
            >
              {isFree ? (
                <span className="text-5xl font-black text-[#1e3a5f]">
                  رایگان
                </span>
              ) : (
                <>
                  <span className="text-5xl font-black tracking-tight text-gray-900">
                    {priceLabel}
                  </span>

                  <span className="text-xs text-gray-500">تومان</span>
                </>
              )}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative  shrink-0">
            <Image
              src={plan.image}
              alt={plan.title}
              width={plan.variant === "free" ? 175 : 225}
              height={plan.variant === "free" ? 146 : 158}
            />
          </div>
        </div>

        {/* Period dropdown */}
        {!isFree && plan.subscriptions && (
          <div className="mt-6">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-[16px] font-bold text-gray-700 shadow-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
            >
              {plan.subscriptions.map((subscription) => (
                <option
                  key={subscription.priceLabel}
                  value={subscription.period}
                >
                  {subscription.period}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Description */}
        <p className="mt-5 text-right text-[16px] leading-7 text-gray-700">
          {plan.description}
        </p>
        <div className="flex justify-between h-full">
          {/* Features */}
          <ul className="flex  flex-col space-y-4 overflow-hidden rounded-3xl  p-6 text-[13px] ">
            {plan.features.map((feature) => (
              <li
                key={feature.label}
                className="flex items-center justify-start gap-2"
              >
                {feature.available ? (
                  <Check
                    size={15}
                    className="shrink-0 text-[#757575]"
                    strokeWidth={1}
                  />
                ) : (
                  <X
                    size={15}
                    className="shrink-0 text-[#900B09]"
                    strokeWidth={1}
                  />
                )}

                <span
                  className={
                    feature.available
                      ? "text-[#757575] text-[16px] "
                      : "text-[16px] text-[#900B09]  "
                  }
                >
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>
          <Image
            src={
              plan.variant === "free" ? "/free-stroke.svg" : "/stroke-pro.svg"
            }
            className="relative -ml-6"
            alt="teaser"
            width={85}
            height={220}
          />
        </div>
        {/* CTA */}
        <button
          type="button"
          className={`mt-8 w-full rounded-xl py-3.5 text-xl font-bold transition active:scale-[0.98] ${
            isFree
              ? "border-2 border-gray-800 bg-white text-gray-900 hover:bg-gray-50"
              : "bg-gradient-to-l from-purple-700 to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:brightness-110"
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}

