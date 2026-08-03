import Image from "next/image";
import { materials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Materials() {
  return (
    <section className="bg-[#F8F6F2] py-28 md:py-40">
      <div className="container-luxe grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
        <Reveal>
          <div className="relative overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop"
              alt="Close detail of natural wood grain, stone and linen textures"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-6">Materials &amp; Craftsmanship</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[10vw] leading-[1.02] md:text-[3.8vw] md:leading-[1.08] mb-10">
              We design with what a material wants to become
            </h2>
          </Reveal>

          <div className="space-y-8">
            {materials.map((m, i) => (
              <Reveal key={m.name} delay={0.15 + i * 0.06}>
                <div className="flex gap-6">
                  <span className="font-display text-lg text-[#8C6B4F] w-20 shrink-0">
                    {m.name}
                  </span>
                  <p className="text-[#6E675F] font-light leading-relaxed">
                    {m.description}
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
