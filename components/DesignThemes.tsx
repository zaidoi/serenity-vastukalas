import { designThemes } from "@/lib/data";
import Reveal from "./Reveal";

export default function DesignThemes() {
  return (
    <section id="design-themes" className="bg-[#F8F6F2] py-28 md:py-40">
      <div className="container-luxe">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Design Themes</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[10vw] leading-[1.02] md:text-[3.8vw] md:leading-[1.05]">
                A language of styles, one point of view
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-[#6E675F] font-light leading-relaxed">
                Every home starts with a style conversation — the mood,
                materials and proportion that will carry through every
                room that follows.
              </p>
            </Reveal>
          </div>

          <div>
            {designThemes.map((theme, i) => (
              <Reveal key={theme.title} delay={i * 0.05}>
                <div className="flex items-baseline justify-between gap-8 py-6 border-b border-[#D9D4CC]">
                  <h3 className="font-display text-xl md:text-2xl shrink-0">
                    {theme.title}
                  </h3>
                  <p className="text-right text-sm md:text-base text-[#6E675F] font-light max-w-xs">
                    {theme.description}
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
