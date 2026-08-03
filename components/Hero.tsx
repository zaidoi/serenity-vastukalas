"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "/heroimages/05.jpg",
  "/heroimages/04.jpg",
  "/heroimages/A_04.jpg",
  "/heroimages/428A5288_Edited.jpg",
  "/heroimages/20.jpg",
  "/heroimages/12.jpg"
];

const line1 = "Homes designed";
const line2 = "to feel like you.";

function StaggerLine({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) {
  const words = text.split(" ");

  return (
    <span className="block overflow-hidden">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.28em]"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 1.1,
            delay: delay + i * 0.09,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative h-[92svh] min-h-[640px] w-full overflow-hidden bg-[#1A1A1A]">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="h-full w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1A1A1A]/70 via-[#1A1A1A]/10 to-[#1A1A1A]/30" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full flex-col justify-end pb-24 md:pb-28">
        <div className="container-luxe">
         

          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.35 }}
            className="mt-10"
          >
            <a
              href="#consultation"
              className="inline-flex items-center gap-3 border border-[#F8F6F2]/50 px-8 py-3.5 text-[12px] uppercase tracking-[0.16em] text-[#F8F6F2] transition-all duration-700 hover:bg-[#F8F6F2] hover:text-[#1A1A1A]"
            >
              Begin Your Story
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#F3EFE8]/70">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-[#F3EFE8]/70 to-transparent" />
      </motion.div>
    </section>
  );
}