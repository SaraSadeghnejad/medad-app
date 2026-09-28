import { X, Check } from "lucide-react";
import Image from 'next/image';

export function Comparison() {
  return (
    <section className="section">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Wrong way */}
        <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
          <h3 className="mb-6 flex items-center gap-2 text-base font-bold text-red-600">
            <X size={18} />
            بدون مدادپ
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>• منابع پراکنده و ناشناخته</li>
            <li>• یادگیری بی‌هدف و بدون مسیر</li>
            <li>• فقط دیدن ویدیو و بدون تمرین</li>
            <li>• تردید در مفاهیم و عدم تمرکز</li>
            <li>• ناامیدی در یادگیری</li>
          </ul>
          <Image
            src="/sec4.png"
            alt="teaser"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Right way */}
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
          <h3 className="mb-6 flex items-center gap-2 text-base font-bold text-emerald-600">
            <Check size={18} />
            همراه با مدادپ
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>• یک مسیر روشن و برنامه‌ریزی‌شده</li>
            <li>• آموزش عملی و کاربردی</li>
            <li>• پروژه‌محور و هدفمند</li>
            <li>• پرسش و پاسخ و رفع اشکال</li>
            <li>• رشد مستمر و بازدهی بالا</li>
          </ul>
           <Image
            src="/sec5.png"
            alt="teaser"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}