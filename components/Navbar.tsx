"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/data";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.845.485 3.578 1.406 5.084L2 22l5.06-1.379a9.947 9.947 0 0 0 4.944 1.283h.004c5.518 0 10.004-4.486 10.004-10.004C22.012 6.486 17.526 2 12.004 2zm0 18.098h-.003a8.09 8.09 0 0 1-4.13-1.13l-.296-.176-3.006.819.803-2.93-.192-.302a8.078 8.078 0 0 1-1.24-4.375c0-4.464 3.633-8.096 8.098-8.096 2.163 0 4.196.843 5.725 2.373a8.043 8.043 0 0 1 2.372 5.727c0 4.464-3.634 8.096-8.096 8.096z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar is always shown with a solid warm background — no transparent
  // state over the hero, per client preference.
  const glass = true;
  const textColor = "#8C6B4F";

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 transition-all duration-700 ${
        glass
          ? "bg-[#F8F6F2]/80 backdrop-blur-md border-b border-[#D9D4CC]/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between gap-10 h-20 md:h-22">
        <Link
          href="/"
          className="text-[#8C6B4F] font-display font-bold text-xl md:text-3xl tracking-wide uppercase transition-colors duration-700 mr-4"
        >
          Serenity Vastukala
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ color: textColor }}
              className="text-[14px] tracking-[0.12em] uppercase font-body font-normal opacity-80 hover:opacity-100 hover:text-[#8C6B4F] transition-colors duration-500 
              relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#8C6B4F] after:w-0 after:bottom-0 after:left-1/2 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="https://wa.me/917977953526"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            style={{ color: textColor }}
            className="opacity-80 hover:opacity-100 transition-opacity duration-500"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>

          <Link
            href="/#consultation"
            style={{ color: textColor, borderColor: `${textColor}4D` }}
            className="inline-flex items-center border px-6 py-2.5 text-[12px] tracking-[0.14em] uppercase hover:bg-[#2B2B2B] hover:text-[#F8F6F2] hover:border-[#2B2B2B] transition-all duration-500"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 w-8"
        >
          <span
            style={{ backgroundColor: textColor }}
            className={`h-px transition-transform duration-500 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            style={{ backgroundColor: textColor }}
            className={`h-px transition-transform duration-500 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#F8F6F2] border-t border-[#D9D4CC] overflow-hidden"
          >
            <div className="container-luxe flex flex-col py-6 gap-5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.1em] uppercase text-[#2B2B2B]/80"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-4">
                <Link
                  href="/#consultation"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex w-fit items-center border border-[#2B2B2B]/30 px-6 py-2.5 text-[12px] tracking-[0.14em] uppercase"
                >
                  Book a Consultation
                </Link>
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
    </header>
  );
}
