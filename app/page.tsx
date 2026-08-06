import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import FeaturedProjects from "@/components/FeaturedProjects";
import DesignThemes from "@/components/DesignThemes";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Consultation from "@/components/Consultation";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedProjects />
      <DesignThemes />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Faq />
      <Consultation />
    </>
  );
}
