import type { Metadata } from "next";
import Image from "next/image";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us — Interior Design Studio in Jogeshwari West, Mumbai | Serenity Vastukala",
  description:
    "Serenity Vastukala is a Jogeshwari West, Mumbai-based interior architecture studio designing residences around light, material and the rituals of daily life.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-44 pb-20 md:pt-56 md:pb-28 bg-[#F8F6F2]">
        <div className="container-luxe grid grid-cols-1 lg:grid-cols-2 gap-14 items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">About the Studio</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-[10vw] leading-[1.02] md:text-[4vw] md:leading-[1.05]">
                A small studio, working on a handful of homes at a time
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-[#6E675F] font-light leading-relaxed text-lg">
              Serenity Vastukala takes its name from two ideas we refuse
              to separate — <em>vastu</em>, the traditional discipline of
              designing a home in harmony with light, direction and
              nature, and <em>kala</em>, the art of making that harmony
              beautiful. We work on a small number of residences each
              year, by hand, from first sketch to final styling.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F3EFE8] py-24 md:py-32">
        <div className="container-luxe grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
                alt="Interior designer reviewing material samples in a sunlit studio"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Our Story</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
                Founded on a single belief: a home should quiet the mind
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-5 text-[#6E675F] font-light leading-relaxed">
                <p>
                  Serenity Vastukala began in Jogeshwari West, Mumbai with a
                  simple frustration — too many new homes looked finished
                  but felt unsettled. We set out to design differently:
                  starting each project with the site&apos;s light and a
                  family&apos;s daily rhythm, long before any furniture is
                  chosen.
                </p>
                <p>
                  Today our work spans residences across Mumbai and
                  beyond, from courtyard homes rooted in traditional
                  vastu planning to spare, modern apartments. What holds
                  every project together is restraint — we add only what
                  a home genuinely needs.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F8F6F2] py-24 md:py-32 overflow-hidden">
        <div className="container-luxe max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">Our Approach</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-2xl md:text-4xl leading-snug md:leading-[1.3]">
              We plan every home on the same underlying discipline the
              Vastu Purusha Mandala describes — a grid that keeps light,
              airflow and movement in balance — then design freely within
              it, in whichever style the family calls home.
            </p>
          </Reveal>
        </div>
      </section>

      <WhyChoose />
      <Testimonials />
    </>
  );
}
