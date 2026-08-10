"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { nav } from "@/lib/data";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.48 0 .13 5.35.13 11.94c0 2.1.55 4.15 1.59 5.96L.03 24l6.24-1.64a11.9 11.9 0 0 0 5.79 1.48h.01c6.58 0 11.93-5.35 11.93-11.94 0-3.19-1.24-6.18-3.48-8.42ZM12.07 21.85h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.9 9.9 0 0 1-1.52-5.31C2.2 6.47 6.63 2.04 12.06 2.04c2.63 0 5.1 1.03 6.96 2.89a9.83 9.83 0 0 1 2.88 7c0 5.48-4.42 9.92-9.83 9.92Zm5.43-7.43c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.47-.87-.77-1.46-1.72-1.63-2.02-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.07-.13-.27-.2-.57-.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const textColor = "#8C6B4F";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F2]"
    >
      {/* Main Header */}
      <div className="container-luxe">
        <div className="flex items-center justify-between w-full h-[clamp(64px,6vw,92px)] gap-[clamp(12px,2.5vw,56px)]">

          {/* Logo + Brand Name */}
          <Link
            href="/"
            aria-label="Serenity Vastukala"
            className="flex items-center shrink-0 whitespace-nowrap gap-[clamp(8px,1vw,16px)]"
          >
            {/* Logo Image */}
            <Image
              src="/serenity-vastukala-logo.svg"
              alt="Serenity Vastukala logo"
              width={120}
              height={120}
              priority
              className="w-[clamp(40px,4.5vw,76px)] h-[clamp(40px,4.5vw,76px)] object-contain shrink-0"
            />

            {/* Brand Name */}
            <span
              style={{ color: textColor }}
              className="whitespace-nowrap text-[clamp(11px,1vw,18px)] tracking-[0.07em] uppercase font-body font-normal"
            >
              Serenity Vastukala
            </span>
          </Link>

          {/* Desktop / Tablet Navigation */}
          <nav className="hidden lg:flex items-center gap-[clamp(14px,1.8vw,40px)] ml-auto shrink-0">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: textColor }}
                className="
                  whitespace-nowrap
                  text-[clamp(11px,0.85vw,15px)]
                  tracking-[0.08em]
                  uppercase
                  font-body
                  font-normal
                  opacity-80
                  hover:opacity-100
                  hover:text-[#8C6B4F]
                  transition-colors
                  duration-500
                  relative
                  w-fit
                  block
                  after:block
                  after:content-['']
                  after:absolute
                  after:h-[2px]
                  after:bg-[#8C6B4F]
                  after:w-0
                  after:bottom-0
                  after:left-1/2
                  hover:after:w-full
                  hover:after:left-0
                  after:transition-all
                  after:duration-300
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop / Tablet Actions */}
          <div className="hidden lg:flex items-center gap-[clamp(10px,1.2vw,24px)] shrink-0">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917977953526"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              style={{ color: textColor }}
              className="shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
            >
              <WhatsAppIcon className="w-[clamp(18px,1.4vw,28px)] h-[clamp(18px,1.4vw,28px)]" />
            </a>

            {/* Book Consultation */}
            <Link
              href="/#consultation"
              style={{
                color: textColor,
                borderColor: `${textColor}4D`,
              }}
              className="
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                border
                px-[clamp(12px,1.4vw,26px)]
                py-[clamp(6px,0.55vw,11px)]
                text-[clamp(9px,0.7vw,12px)]
                tracking-[0.1em]
                uppercase
                hover:bg-[#2B2B2B]
                hover:text-[#F8F6F2]
                hover:border-[#2B2B2B]
                transition-all
                duration-500
              "
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="
              lg:hidden
              flex
              flex-col
              gap-1.5
              w-8
              shrink-0
            "
          >
            <span
              style={{ backgroundColor: textColor }}
              className={`h-px transition-transform duration-500 ${
                menuOpen
                  ? "translate-y-[3.5px] rotate-45"
                  : ""
              }`}
            />

            <span
              style={{ backgroundColor: textColor }}
              className={`h-px transition-transform duration-500 ${
                menuOpen
                  ? "-translate-y-[3.5px] -rotate-45"
                  : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                lg:hidden
                bg-[#F8F6F2]
                border-t
                border-[#D9D4CC]
                overflow-hidden
              "
            >
              <div className="container-luxe flex flex-col py-6 gap-5">

                {/* Mobile Links */}
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      whitespace-nowrap
                      text-sm
                      tracking-[0.1em]
                      uppercase
                      text-[#2B2B2B]/80
                    "
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Actions */}
                <div className="mt-2 flex items-center gap-4">

                  {/* Consultation */}
                  <Link
                    href="/#consultation"
                    onClick={() => setMenuOpen(false)}
                    className="
                      inline-flex
                      w-fit
                      items-center
                      whitespace-nowrap
                      border
                      border-[#2B2B2B]/30
                      px-6
                      py-2.5
                      text-[12px]
                      tracking-[0.14em]
                      uppercase
                    "
                  >
                    Book a Consultation
                  </Link>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917977953526"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    className="text-[#2B2B2B]/80"
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                  </a>

                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}