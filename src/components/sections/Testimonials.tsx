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
];

// ─── Section ──────────────────────────────────────────────────────────────
export function Testimonials() {
  return (
    <section id="testimonials" dir="rtl" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top purple rule */}
        <div className="mx-auto mb-8 h-[3px] w-full max-w-3xl rounded-full bg-purple-600" />

        {/* Title */}
        <h2 className="relative z-0  text-center text-2xl mb-12 font-black text-gray-900 sm:text-3xl lg:text-4xl">
          دیگران درباره‌ی مدادپ چه می‌گویند
        </h2>

        {/* Bottom purple rule */}
     

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
         <div className="mx-auto mt-8 mb-12 h-[3px] w-full max-w-3xl rounded-full bg-purple-600" />
    </section>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────
function StatCardView({ card }: { card: StatCard }) {
  return (
    <div className=" flex h-full flex-col shadow-[0px_4px_10px_0px_#00000040] border border-[#DEE1E6] rounded-4xl p-3 ">
      <div className="border-[3px] border-[#B2B2B2] p-6 rounded-[20px] h-full flex justify-center flex-col items-start ">
        {/* Top row: stars + percent + title */}
        <div className="mb-4 flex items-center flex-row-reverse justify-between gap-4 w-full">
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
            <div className="text-[16px] font-black text-gray-900">
              {card.percent} {card.title}
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-right text-sm leading-6 text-gray-500">
          {card.subtitle}
        </p>
      </div>
    </div>
  );
}

// ─── Quote card ───────────────────────────────────────────────────────────
function QuoteCardView({ card }: { card: QuoteCard }) {
  return (
    <div className=" flex h-full flex-col shadow-[0px_4px_10px_0px_#00000040] border border-[#DEE1E6] rounded-4xl p-3">
      {/* Inner top line */}
      <div className="rounded-[20px] relative border-3 border-purple-500 z-0 p-2">
        {/* Top opening quotes */}
        <div className="flex justify-center items-center absolute -top-6 z-50 -left-4 bg-white w-16 h-16 ">
          <Image src={"/img3.svg"} alt={"quote"} width={50} height={50} />
        </div>
        {/* Header: name + subtitle + avatar */}
        <div className=" flex flex-row-reverse items-start justify-between gap-3 pt-6 pl-6">
          <div className="flex-1" />
          <div className="text-right">
            <h3 className="text-[16px] font-extrabold text-gray-900">
              {card.name}
            </h3>
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
        <p className="mt-6 mb-4 flex-1 text-center text-sm leading-6 text-gray-700">
          {card.quote}
        </p>
        <div className="flex justify-center items-center absolute z-50 -right-4 -bottom-6 bg-white w-16 h-16 p-2">
          <Image src={"/img2.svg"} alt={"quote"} width={50} height={50} />
        </div>
        {/* Bottom closing quotes */}

        {/* Inner bottom line */}
      </div>
    </div>
  );
}