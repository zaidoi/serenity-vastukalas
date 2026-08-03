import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 6);

  return (
    <section id="projects" className="bg-[#F3EFE8] py-28 md:py-40">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Featured Projects</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[10vw] leading-[1.02] md:text-[4vw] max-w-xl">
                Homes we&apos;ve been trusted to design
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="max-w-sm">
              <p className="text-[#6E675F] font-light leading-relaxed">
                A small selection. Each project unfolds slowly, on its own page
                — the way it deserves to be seen.
              </p>
              <Link
                href="/projects"
                className="mt-5 inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase text-[#8C6B4F] hover:text-[#2B2B2B] transition-colors duration-500"
              >
                View All Projects
                <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 6) * 0.06}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <Image
                    src={project.cover}
                    alt={`${project.title}, ${project.category} in ${project.location}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/10 transition-colors duration-700" />
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-xl md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#6E675F] font-light">
                    {project.location} — {project.category}
                  </p>
                </div>

                <span className="mt-3 inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase text-[#8C6B4F]">
                  View Project
                  <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {projects.length > 6 && (
          <Reveal delay={0.1}>
            <div className="mt-16 flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center border border-[#2B2B2B]/30 px-8 py-3.5 text-[12px] tracking-[0.16em] uppercase hover:bg-[#2B2B2B] hover:text-[#F8F6F2] transition-all duration-500"
              >
                View All Projects
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
