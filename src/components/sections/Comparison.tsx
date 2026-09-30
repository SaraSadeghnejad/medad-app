import { X, Check, CircleX, CircleCheck, CircleCheckBig } from "lucide-react";
import Image from 'next/image';

export function Comparison() {
  return (
    <section className="section  bg-[var(--bg-soft)]">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Wrong way */}
        <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
          <h3 className="mb-6 flex items-center gap-2 text-base font-bold text-red-600">
            <CircleX size={18} />
           بدون مداداپ  
          </h3>
          <ul className="space-y-8 text-sm text-[#757575]">
            <li>• منابع زیاد، مسیر نامشخص</li>
            <li>• یادگیری پراکنده و نامنظم</li>
            <li>• فقط دیدن، بدون سنجش کافی</li>
            <li>• ابهام در نقطه‌ضعف و قدم بعدی</li>
          </ul>
          <Image
            src="/sec4.svg"
            alt="teaser"
            width={0}
            height={0}
            sizes="100vw"
            className="mt-4"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Right way */}
        <div className="rounded-2xl border border-emerald-100  p-6">
          <h3 className="mb-6 flex items-center gap-2 text-base font-bold text-[#172B3D]">
            <CircleCheckBig size={18} className="text-[#27C840]" />
         همراه با مداداپ  
          </h3>
          <ul className="space-y-8 text-sm text-[#757575]">
            <li>• یک مسیر روشن برای یادگیری</li>
            <li>• آموزش، تمرین و آزمون در کنار هم</li>
            <li>• بازخورد و پیگیری پیشرفت</li>
            <li>• حرکت مرحله‌به‌مرحله و هدفمند</li>
          </ul>
           <Image
            src="/sec5.svg"
            alt="teaser"
            width={0}
            height={0}
            sizes="100vw"
            className="mt-4"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}