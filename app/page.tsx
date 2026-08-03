import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import FeaturedProjects from "@/components/FeaturedProjects";
import DesignThemes from "@/components/DesignThemes";
import Services from "@/components/Services";
import Materials from "@/components/Materials";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import Consultation from "@/components/Consultation";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedProjects />
      <DesignThemes />
      <Services />
      <Materials />
      <WhyChoose />
      <Testimonials />
      <InstagramGallery />
      <Consultation />
    </>
  );
}
