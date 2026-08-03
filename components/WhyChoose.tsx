import { whyChoose } from "@/lib/data";
import Reveal from "./Reveal";

export default function WhyChoose() {
  return (
    <section className="relative bg-[#E9E1D5] py-28 md:py-40 overflow-hidden">
      <div className="container-luxe relative">
        <Reveal>
          <p className="eyebrow mb-6">Why Serenity</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[10vw] leading-[1.02] md:text-[4vw] max-w-2xl mb-16 md:mb-20">
            What you can expect, every time
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {whyChoose.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="border-t border-[#8C6B4F]/30 pt-6">
                <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                <p className="text-[#6E675F] font-light leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
