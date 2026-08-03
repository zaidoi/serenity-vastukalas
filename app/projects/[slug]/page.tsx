import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Serenity Vastukala`,
    description: project.story,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[520px] w-full overflow-hidden bg-[#1A1A1A]">
        <Image
          src={project.cover}
          alt={`${project.title}, ${project.category} in ${project.location}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/75 via-[#1A1A1A]/10 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20">
          <div className="container-luxe">
            <p className="eyebrow text-[#F3EFE8] mb-5">{project.category}</p>
            <h1 className="font-display text-[#F8F6F2] text-[11vw] leading-[0.98] md:text-[5.2vw]">
              {project.title}
            </h1>
            <p className="mt-4 text-[#F3EFE8]/80 font-light">
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-[#F8F6F2] py-24 md:py-32">
        <div className="container-luxe grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-24">
          <Reveal>
            <div className="grid grid-cols-3 gap-8 max-w-md">
              <div>
                <p className="eyebrow mb-2">Year</p>
                <p className="font-display text-xl">{project.year}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Area</p>
                <p className="font-display text-xl">{project.area}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Category</p>
                <p className="font-display text-xl leading-tight">
                  {project.category}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[#6E675F] font-light leading-relaxed text-lg">
              {project.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Alternating full-width gallery */}
      {/* Gallery */}
      {/* Gallery */}
<section className="bg-[#F8F6F2] pb-8 md:pb-16">
  {project.gallery.map((item, i) => (
    <Reveal key={i} delay={0.05 * i}>
      {/* Full width image */}
      {item.type === "full" && (
        <div
          className={`w-full py-8 md:py-16 ${
            i % 2 === 1 ? "flex justify-end" : ""
          }`}
        >
          <div className="w-full md:w-[85%] overflow-hidden">
            <Image
              src={item.images[0]}
              alt={`${project.title}`}
              width={1800}
              height={1200}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Two images side by side */}
      {item.type === "half" && (
        <div className="container-luxe py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {item.images.map((src) => (
              <Image
                key={src}
                src={src}
                alt={`${project.title}`}
                width={900}
                height={1200}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
      )}

      {/* Single centered image */}
      {item.type === "medium" && (
        <div className="py-8 md:py-16 flex justify-center">
          <div className="w-full  p-5 md:w-[55%] overflow-hidden">
            <Image
              src={item.images[0]}
              alt={`${project.title}`}
              width={900}
              height={1200}
              className="w-full max-h-[900px] object-contain"
            />
          </div>
        </div>
      )}
    </Reveal>
  ))}
</section>

      {/* Prev / Next */}
      <section className="border-t border-[#D9D4CC] bg-[#F3EFE8]">
        <div className="container-luxe grid grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="group py-14 pr-6 border-r border-[#D9D4CC]"
          >
            <p className="eyebrow mb-4">Previous Project</p>
            <p className="font-display text-2xl md:text-4xl transition-transform duration-500 group-hover:-translate-x-1">
              ← {prev.title}
            </p>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group py-14 pl-6 text-right"
          >
            <p className="eyebrow mb-4">Next Project</p>
            <p className="font-display text-2xl md:text-4xl transition-transform duration-500 group-hover:translate-x-1">
              {next.title} →
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
