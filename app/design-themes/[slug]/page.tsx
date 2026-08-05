import Image from "next/image";
import { notFound } from "next/navigation";
import { designThemeOfferings } from "@/lib/data";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return designThemeOfferings.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = designThemeOfferings.find((t) => t.slug === slug);
  if (!theme) return {};
  return {
    title: `${theme.title} | Design Themes | Serenity Vastukala, Mumbai`,
    description: theme.shortDescription,
  };
}

export default async function DesignThemePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = designThemeOfferings.find((t) => t.slug === slug);
  if (!theme) notFound();

  return (
    <article>
      {/* Title, no hero image */}
      <section className="pt-44 pb-16 md:pt-56 md:pb-20 bg-[#F8F6F2]">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow mb-6">Design Themes</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[10vw] leading-[1.02] md:text-[4.4vw] max-w-2xl">
              {theme.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#F8F6F2] pb-8 md:pb-16">
        {theme.gallery.map((item, i) => (
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
                    alt={theme.title}
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
                      alt={theme.title}
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
                <div className="w-full p-5 md:w-[55%] overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={theme.title}
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
    </article>
  );
}
