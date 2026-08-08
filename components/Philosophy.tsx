import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="bg-[#F8F6F2] py-20 md:py-28">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow mb-6">Our Philosophy</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[10vw] leading-[1.05] md:text-[3vw] md:leading-[1.12] max-w-4xl">
            WE DON&apos;T JUST DESIGN SPACES, <span className="italic text-[var(--color-earth)]">we design experiences.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
