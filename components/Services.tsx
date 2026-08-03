import { services } from "@/lib/data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-[#F3EFE8] py-28 md:py-40">
      <div className="container-luxe">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Services</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[10vw] leading-[1.02] md:text-[3.8vw] md:leading-[1.05]">
                Every stage, under one roof
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-[#6E675F] font-light leading-relaxed">
                From the first floor plan to the last cushion, our studio
                carries a project end to end — so nothing is lost in
                translation between design and delivery.
              </p>
            </Reveal>
          </div>

          <div>
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.05}>
                <div className="flex items-baseline justify-between gap-8 py-6 border-b border-[#D9D4CC]">
                  <h3 className="font-display text-xl md:text-2xl shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-right text-sm md:text-base text-[#6E675F] font-light max-w-xs">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
