import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import DesignThemesGrid from "@/components/DesignThemesGrid";

export const metadata: Metadata = {
  title: "Interior Design Themes & Styles | Serenity Vastukala, Mumbai",
  description:
    "Explore the design languages we work in for homes across Mumbai — Modern, Contemporary, Minimalist, Luxury and Traditional.",
};

export default function DesignThemesPage() {
  return (
    <>
      <section className="pt-44 pb-16 md:pt-56 md:pb-20 bg-[#F8F6F2]">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">Design Themes</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[10vw] leading-[1.02] md:text-[4.4vw] max-w-2xl">
              A language of styles, one point of view
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-[#6E675F] font-light leading-relaxed">
              Five design languages, each a different starting point for
              the same careful process. Pick one that feels like you, or
              let us help you find it.
            </p>
          </Reveal>
        </div>
      </section>
      <DesignThemesGrid />
    </>
  );
}
