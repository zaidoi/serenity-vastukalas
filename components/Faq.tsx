"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import Reveal from "./Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F3EFE8] py-28 md:py-40">
      <div className="container-luxe">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">FAQs</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[10vw] leading-[1.02] md:text-[3.8vw] md:leading-[1.05]">
                Answers, before you ask
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-[#6E675F] font-light leading-relaxed">
                The questions we hear most from families and businesses
                starting a project with us. Don&apos;t see yours — just
                ask.
              </p>
            </Reveal>
          </div>

          <div>
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={item.question} delay={i * 0.05}>
                  <div className="border-b border-[#D9D4CC]">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-8 py-6 text-left"
                    >
                      <span className="font-display text-lg md:text-xl">
                        {item.question}
                      </span>
                      <span
                        className={`shrink-0 text-2xl font-light text-[#8C6B4F] transition-transform duration-500 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 max-w-lg text-sm md:text-base text-[#6E675F] font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
