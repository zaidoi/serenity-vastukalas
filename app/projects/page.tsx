import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Projects — Interior Design Portfolio | Serenity Vastukala, Mumbai",
  description:
    "Explore homes designed by Serenity Vastukala — a Jogeshwari West, Mumbai-based interior architecture studio. Browse our full project portfolio.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-44 pb-16 md:pt-56 md:pb-20 bg-[#F8F6F2]">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">All Projects</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[10vw] leading-[1.02] md:text-[4.4vw] max-w-2xl">
              Every home we&apos;ve been trusted to design
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-[#6E675F] font-light leading-relaxed">
              {projects.length} projects, and counting. Each one unfolds
              slowly, on its own page.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F3EFE8] pb-28 md:pb-40">
        <div className="container-luxe">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 6) * 0.06}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image
                      src={project.cover}
                      alt={`${project.title}, ${project.category} in ${project.location}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  </div>

                  <div className="mt-5">
                    <p className="eyebrow mb-2">{project.category}</p>
                    <h3 className="font-display text-xl md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#6E675F] font-light">
                      {project.location}
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
        </div>
      </section>
    </>
  );
}
