"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section className="bg-[#F8F6F2] py-28 md:py-40">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow mb-6 text-center">Testimonials</p>
        </Reveal>

        <div className="max-w-3xl mx-auto text-center min-h-[220px] md:min-h-[180px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-2xl md:text-3xl leading-snug md:leading-[1.3]">
                &ldquo;{active.quote}&rdquo;
              </p>
              <p className="mt-8 text-sm tracking-[0.08em] uppercase text-[#8C6B4F]">
                {active.name}
              </p>
              <p className="mt-1 text-sm text-[#6E675F] font-light">
                {active.location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-[#8C6B4F]" : "w-1.5 bg-[#D9D4CC]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
