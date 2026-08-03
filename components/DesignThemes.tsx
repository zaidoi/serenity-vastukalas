import Image from "next/image";
import { themes } from "@/lib/data";
import Reveal from "./Reveal";

export default function DesignThemes() {
  return (
    <section id="design-themes" className="bg-[#F8F6F2] py-28 md:py-40">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow mb-6">Design Themes</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[10vw] leading-[1.02] md:text-[4vw] max-w-2xl mb-16 md:mb-20">
            A language of styles, one point of view
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14">
          {themes.map((theme, i) => (
            <Reveal key={theme.name} delay={(i % 4) * 0.08}>
              <div className="group">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <Image
                    src={theme.image}
                    alt={theme.name}
                    fill
                    sizes="(min-width: 768px) 22vw, 45vw"
                    className="object-cover grayscale-[15%] transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl">{theme.name}</h3>
                <p className="mt-2 text-sm text-[#6E675F] font-light leading-relaxed">
                  {theme.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
