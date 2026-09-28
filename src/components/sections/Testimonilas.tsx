"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ─── Types ────────────────────────────────────────────────────────────────
type StatCard = {
  kind: "stat";
  percent: string;
  title: string;
  subtitle: string;
};

type QuoteCard = {
  kind: "quote";
  name: string;
  subtitle: string;
  quote: string;
  avatar: string;
};

type Card = StatCard | QuoteCard;

// ─── Data ─────────────────────────────────────────────────────────────────
const CARDS: Card[] = [
  {
    kind: "quote",
    name: "زهرا علیدادی",
    subtitle: "دوازدهم علوم تجربی",
    quote: "عالی هستید، همینطور خفن پیش برید",
    avatar: "/avatar.png",
  },
  {
    kind: "stat",
    percent: "۹۲٪",
    title: "کاربران",
    subtitle: "به کیفیت مدادپ امتیاز ۵ از ۵ دادند.",
  },
  {
    kind: "stat",
    percent: "۸۸٪",
    title: "دانش‌آموزان",
    subtitle: "به تسلط اساتید امتیاز ۵ از ۵ دادند.",
  },
  {
    kind: "quote",
    name: "علی رضایی",
    subtitle: "یازدهم ریاضی",
    quote: "مسیر یادگیری رو برام خیلی ساده کرد",
    avatar: "/avatar.png",
  },
];

// ─── Section ──────────────────────────────────────────────────────────────
export function Testimonials() {
  return (
    <section id="testimonials" dir="rtl" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top purple rule */}
        <div className="mx-auto mb-8 h-[3px] w-full max-w-3xl rounded-full bg-purple-600" />

        {/* Title */}
        <h2 className="text-center text-2xl font-black text-gray-900 sm:text-3xl lg:text-4xl">
          دیگران درباره‌ی مدادپ چه می‌گویند
        </h2>

        {/* Bottom purple rule */}
        <div className="mx-auto mt-8 mb-12 h-[3px] w-full max-w-3xl rounded-full bg-purple-600" />

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          grabCursor
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          dir="rtl"
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!pb-4 testimonials-swiper"
        >
          {CARDS.map((card, i) => (
            <SwiperSlide key={i} className="!h-auto">
              {card.kind === "stat" ? (
                <StatCardView card={card} />
              ) : (
                <QuoteCardView card={card} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────
function StatCardView({ card }: { card: StatCard }) {
  return (
    <div className="relative flex h-full flex-col justify-center rounded-3xl border-[3px] border-gray-200 bg-white p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)]">
      {/* Top row: stars + percent + title */}
      <div className="mb-4 flex items-center justify-between gap-4">
        {/* Stars (left) */}
        <div className="flex shrink-0 gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-purple-600 text-purple-600"
            />
          ))}
        </div>

        {/* Percent + title (right) */}
        <div className="text-right">
          <div className="text-lg font-black text-gray-900">
            {card.percent} {card.title}
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-right text-xs leading-6 text-gray-500">
        {card.subtitle}
      </p>
    </div>
  );
}

// ─── Quote card ───────────────────────────────────────────────────────────
function QuoteCardView({ card }: { card: QuoteCard }) {
  return (
    <div className="relative flex h-full flex-col rounded-3xl border-[3px] border-purple-500 bg-white p-5 shadow-[0_10px_30px_-12px_rgba(124,58,237,0.35)]">
      {/* Top opening quotes */}
      <svg
        className="absolute right-3 top-3 h-9 w-9 text-purple-600"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M7.5 6C5 6 3 8 3 10.5S5 15 7.5 15c.3 0 .5 0 .8-.1-.5 1.6-1.9 2.9-3.6 3.3-.3.1-.5.4-.4.7.1.3.4.5.7.4C7.6 18.7 10 15.9 10 12.4V10.5C10 8 8 6 7.5 6zm9 0C14 6 12 8 12 10.5S14 15 16.5 15c.3 0 .5 0 .8-.1-.5 1.6-1.9 2.9-3.6 3.3-.3.1-.5.4-.4.7.1.3.4.5.7.4C16.6 18.7 19 15.9 19 12.4V10.5C19 8 17 6 16.5 6z" />
      </svg>

      {/* Inner top line */}
      <div className="pointer-events-none absolute inset-x-10 top-5 h-[3px] rounded-full bg-purple-500" />

      {/* Header: name + subtitle + avatar */}
      <div className="relative flex items-start justify-between gap-3 pt-6 pl-6">
        <div className="flex-row-reverse" />
        <div className="text-right">
          <h3 className="text-sm font-extrabold text-gray-900">{card.name}</h3>
          <p className="mt-0.5 text-[10px] font-medium text-gray-400">
            {card.subtitle}
          </p>
        </div>
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-purple-100 ring-2 ring-white">
          <Image
            src={card.avatar}
            alt={card.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Quote text */}
      <p className="mt-6 mb-4 flex-1 text-center text-xs leading-6 text-gray-700">
        {card.quote}
      </p>

      {/* Bottom closing quotes */}
      <svg
        className="absolute bottom-3 left-3 h-9 w-9 rotate-180 text-purple-600"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M7.5 6C5 6 3 8 3 10.5S5 15 7.5 15c.3 0 .5 0 .8-.1-.5 1.6-1.9 2.9-3.6 3.3-.3.1-.5.4-.4.7.1.3.4.5.7.4C7.6 18.7 10 15.9 10 12.4V10.5C10 8 8 6 7.5 6zm9 0C14 6 12 8 12 10.5S14 15 16.5 15c.3 0 .5 0 .8-.1-.5 1.6-1.9 2.9-3.6 3.3-.3.1-.5.4-.4.7.1.3.4.5.7.4C16.6 18.7 19 15.9 19 12.4V10.5C19 8 17 6 16.5 6z" />
      </svg>

      {/* Inner bottom line */}
      <div className="pointer-events-none absolute inset-x-10 bottom-5 h-[3px] rounded-full bg-purple-500" />
    </div>
  );
}