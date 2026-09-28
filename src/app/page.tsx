
import { Hero } from "@/components/sections/Hero";
import { Audience } from "@/components/sections/Audience";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { Curriculum } from "@/components/sections/Curriculum";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audience />
        <AppShowcase />
        <Curriculum />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}