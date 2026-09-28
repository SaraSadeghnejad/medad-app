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
       
             
                <Image
  src="/showcase.png"
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