import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceOfferings } from "@/lib/data";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return serviceOfferings.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceOfferings.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Serenity Vastukala, Jogeshwari West, Mumbai`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = serviceOfferings.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const service = serviceOfferings[index];
  const prev =
    serviceOfferings[
      (index - 1 + serviceOfferings.length) % serviceOfferings.length
    ];
  const next = serviceOfferings[(index + 1) % serviceOfferings.length];

  return (
    <article>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[440px] w-full overflow-hidden bg-[#1A1A1A]">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/75 via-[#1A1A1A]/10 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20">
          <div className="container-luxe">
            <p className="eyebrow text-[#F3EFE8] mb-5">Services</p>
            <h1 className="font-display text-[#F8F6F2] text-[11vw] leading-[0.98] md:text-[5vw] max-w-3xl">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-[#F8F6F2] py-24 md:py-32">
        <div className="container-luxe">
          <Reveal>
            <p className="max-w-2xl text-[#6E675F] font-light leading-relaxed text-lg">
              {service.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Subcategory cards, where this service has them */}
      {service.subcategories && (
        <section className="bg-[#F3EFE8] pb-24 md:pb-32">
          <div className="container-luxe">
            <Reveal>
              <p className="eyebrow mb-10">What This Covers</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {service.subcategories.map((sub, i) => (
                <Reveal key={sub.name || sub.alt} delay={(i % 6) * 0.06}>
                  <div>
                    <div
                      className={`relative overflow-hidden ${
                        sub?.alt ? "aspect-[3/3]" : "aspect-[4/4]"
                      }`}
                    >
                      <Image
                        src={sub.image}
                        alt={sub?.name || sub?.alt || "Interior design"}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-xl">{sub.name}</h3>
                    <p className="mt-2 text-sm text-[#6E675F] font-light leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <section className="border-t border-[#D9D4CC] bg-[#F3EFE8]">
        <div className="container-luxe grid grid-cols-2">
          <Link
            href={`/services/${prev.slug}`}
            className="group py-14 pr-6 border-r border-[#D9D4CC]"
          >
            <p className="eyebrow mb-4">Previous Service</p>
            <p className="font-display text-xl md:text-3xl transition-transform duration-500 group-hover:-translate-x-1">
              ← {prev.title}
            </p>
          </Link>
          <Link
            href={`/services/${next.slug}`}
            className="group py-14 pl-6 text-right"
          >
            <p className="eyebrow mb-4">Next Service</p>
            <p className="font-display text-xl md:text-3xl transition-transform duration-500 group-hover:translate-x-1">
              {next.title} →
            </p>
          </Link>
        </div>
      </section>

      {/* Back to consultation */}
      <section className="bg-[#1A1A1A] py-20 md:py-28 text-center">
        <div className="container-luxe">
          <p className="font-display text-2xl md:text-3xl text-[#F8F6F2] mb-8">
            Interested in {service.title.toLowerCase()} for your space?
          </p>
          <Link
            href="/#consultation"
            className="inline-flex items-center border border-[#F8F6F2]/50 px-8 py-3.5 text-[12px] tracking-[0.16em] uppercase text-[#F8F6F2] hover:bg-[#F8F6F2] hover:text-[#1A1A1A] transition-all duration-700"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </article>
  );
}
