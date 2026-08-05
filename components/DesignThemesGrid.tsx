import Image from "next/image";
import Link from "next/link";
import { designThemeOfferings } from "@/lib/data";
import Reveal from "./Reveal";

export default function DesignThemesGrid() {
  return (
    <section className="bg-[#F3EFE8] py-24 md:py-32">
      <div className="container-luxe">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {designThemeOfferings.map((theme, i) => (
            <Reveal key={theme.slug} delay={(i % 6) * 0.06}>
              <Link
                href={`/design-themes/${theme.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={theme.gallery[0].images[0]}
                    alt={theme.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl">{theme.title}</h3>
                <p className="mt-2 text-[#6E675F] font-light leading-relaxed">
                  {theme.shortDescription}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase text-[#8C6B4F]">
                  View Gallery
                  <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
