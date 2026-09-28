import Image from "next/image";

const SHOTS = [
  "/screens/1.png",
  "/screens/2.png",
  "/screens/3.png",
  "/screens/4.png",
  "/screens/5.png",
];

export function AppShowcase() {
  return (
    <section className="bg-[var(--bg-soft)] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-center gap-4 overflow-x-auto pb-4">
          {SHOTS.map((src, i) => (
            <div
              key={src}
              className={`relative shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ${
                i === 2 ? "h-64 w-32 sm:h-80 sm:w-40" : "h-56 w-28 sm:h-72 sm:w-36"
              }`}
            >
              {/* Replace with your real screenshots */}
              <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}