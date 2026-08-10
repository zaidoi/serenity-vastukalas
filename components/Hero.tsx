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
  "/heroimages/12.jpg",
];

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        h-[calc(100svh-5rem)]
        md:h-[calc(100svh-1rem)]
        overflow-hidden
      "
    >
      {/* Background Carousel */}
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
          <SwiperSlide
            key={src}
            className="relative h-full w-full"
          >
            <Image
              src={src}
              alt={`Interior design slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-gradient-to-t
          from-[#1A1A1A]/70
          via-[#1A1A1A]/10
          to-[#1A1A1A]/30
        "
      />

      {/* Hero Content */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          flex
          h-full
          flex-col
          justify-end
        "
      >
        <div className="container-luxe w-full pb-16 md:pb-20 lg:pb-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.35,
            }}
          >
            <a
              href="#consultation"
              className="
                pointer-events-auto
                inline-flex
                items-center
                gap-3
                border
                border-[#F8F6F2]/50
                px-[clamp(18px,2vw,32px)]
                py-[clamp(10px,1vw,14px)]
                text-[clamp(9px,0.7vw,12px)]
                uppercase
                tracking-[0.16em]
                text-[#F8F6F2]
                transition-all
                duration-700
                hover:bg-[#F8F6F2]
                hover:text-[#1A1A1A]
              "
            >
              Begin Your Story
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.8,
        }}
        className="
          absolute
          bottom-5
          md:bottom-8
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-3
        "
      >
        <span
          className="
            text-[9px]
            md:text-[10px]
            uppercase
            tracking-[0.3em]
            text-[#F3EFE8]/70
          "
        >
          Scroll
        </span>

        <span
          className="
            h-8
            md:h-10
            w-px
            bg-gradient-to-b
            from-[#F3EFE8]/70
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}