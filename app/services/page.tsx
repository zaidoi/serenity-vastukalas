import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import Consultation from "@/components/Consultation";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Interior Design Services in Mumbai | Serenity Vastukala, Jogeshwari West",
  description:
    "Bespoke residential and commercial interiors, architecture planning, space planning, material selection, detail drawings, furniture design and project execution — in Jogeshwari West, Mumbai.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-44 pb-16 md:pt-56 md:pb-20 bg-[#F3EFE8]">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">Services</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[10vw] leading-[1.02] md:text-[4.4vw] max-w-2xl">
              Every stage, under one roof
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-[#6E675F] font-light leading-relaxed">
              From the first floor plan to the last cushion, our Mumbai
              studio carries every project end to end.
            </p>
          </Reveal>
        </div>
      </section>
      <ServicesGrid />
      
      <Consultation />
    </>
  );
}
