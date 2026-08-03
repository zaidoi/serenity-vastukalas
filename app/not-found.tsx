import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-[#F8F6F2] px-6">
      <p className="eyebrow mb-4">Page Not Found</p>
      <h1 className="font-display text-4xl md:text-6xl max-w-xl">
        This room hasn&apos;t been designed yet
      </h1>
      <p className="mt-6 max-w-sm text-[#6E675F] font-light leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s take
        you back home.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center border border-[#2B2B2B]/30 px-8 py-3.5 text-[12px] tracking-[0.16em] uppercase hover:bg-[#2B2B2B] hover:text-[#F8F6F2] transition-all duration-500"
      >
        Return Home
      </Link>
    </section>
  );
}
