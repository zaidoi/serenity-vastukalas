import type { Metadata } from "next";
import Consultation from "@/components/Consultation";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us — Interior Designer in Jogeshwari West, Mumbai | Serenity Vastukala",
  description:
    "Get in touch with Serenity Vastukala, an interior architecture studio based in Jogeshwari West, Mumbai. Book a consultation for your home in Mumbai and beyond.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-44 pb-16 md:pt-56 md:pb-20 bg-[#F8F6F2]">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[10vw] leading-[1.02] md:text-[4vw] max-w-3xl">
              Visit, call, or simply write to us
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-[#6E675F] font-light leading-relaxed">
              Based in Jogeshwari West, Mumbai, we design homes across Mumbai
              and beyond — from first consultation to final styling.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl">
            <Reveal delay={0.15}>
              <p className="eyebrow mb-3">Studio</p>
              <p className="text-[#6E675F] font-light leading-relaxed">
                Jogeshwari West, Mumbai
                <br />
                Maharashtra, India
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="eyebrow mb-3">Reach Us</p>
              <p className="text-[#6E675F] font-light leading-relaxed">
                +91 79779 53526
                <br />
                serenityvastukala@gmail.com
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Consultation />
    </>
  );
}
