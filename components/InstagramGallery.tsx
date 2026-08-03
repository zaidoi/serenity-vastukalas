import Image from "next/image";
import { instagramImages } from "@/lib/data";
import Reveal from "./Reveal";

export default function InstagramGallery() {
  return (
    <section className="bg-[#F3EFE8] py-28 md:py-40">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Follow Along</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[10vw] leading-[1.02] md:text-[3.8vw]">
                @serenityvastukala
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href="https://www.instagram.com/serenityvastukala/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] tracking-[0.14em] uppercase text-[#8C6B4F] hover:text-[#2B2B2B] transition-colors duration-500"
            >
              View Profile →
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3">
          {instagramImages.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={src}
                alt="Serenity Vastukala — interior detail"
                fill
                sizes="(min-width: 768px) 16vw, 45vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/20 transition-colors duration-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
