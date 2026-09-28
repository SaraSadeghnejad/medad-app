import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "م دادپ | یادگیری، فقط ویدیو دیدن نیست!",
  description:
    "مسیر سخت یادگیری رو به قدم های خیلی کوچیک تبدیل کن. دوره‌های پروژه‌محور، پشتیبانی، مشاوره و منتورینگ.",
  openGraph: {
    title: "م دادپ | یادگیری، فقط ویدیو دیدن نیست!",
    description: "مسیر سخت یادگیری رو به قدم های خیلی کوچیک تبدیل کن.",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body  suppressHydrationWarning className=" bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}