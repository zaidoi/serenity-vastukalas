"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const fieldClasses =
  "w-full bg-transparent border-b border-[#F8F6F2]/25 py-3 text-[#F8F6F2] placeholder:text-[#F8F6F2]/40 font-light focus:outline-none focus:border-[#D4C2A8] transition-colors duration-500";

// Replace YOUR_FORM_ID with the ID Formspree gives you after creating a
// form at https://formspree.io — see the setup steps in README.md.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzedpre";

type Status = "idle" | "submitting" | "success" | "error";

export default function Consultation() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="consultation" className="bg-[#1A1A1A] py-28 md:py-40">
      <div className="container-luxe grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-[#D4C2A8] mb-6">Start a Project</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[#F8F6F2] text-[10vw] leading-[1.02] md:text-[4.2vw] md:leading-[1.08]">
              Let&apos;s begin with a conversation about how you live
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-sm text-[#F3EFE8]/60 font-light leading-relaxed">
              Share a little about your home and your timeline. We
              personally read every enquiry and reply within two working
              days with an available consultation slot.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {status === "success" ? (
            <div className="flex h-full items-center">
              <p className="font-display text-2xl text-[#F8F6F2]">
                Thank you. Your enquiry has been received — we&apos;ll be in
                touch within two working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <input
                  required
                  name="fullName"
                  placeholder="Full Name"
                  className={fieldClasses}
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className={fieldClasses}
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={fieldClasses}
                />
                <select
                  required
                  name="projectType"
                  defaultValue=""
                  className={`${fieldClasses} appearance-none`}
                >
                  <option value="" disabled className="text-[#1A1A1A]">
                    Project Type
                  </option>
                  <option className="text-[#1A1A1A]">New Home</option>
                  <option className="text-[#1A1A1A]">Renovation</option>
                  <option className="text-[#1A1A1A]">Apartment</option>
                  <option className="text-[#1A1A1A]">Commercial</option>
                </select>
                <input
                  required
                  name="location"
                  placeholder="Location"
                  className={`${fieldClasses} md:col-span-2`}
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your home and your vision"
                rows={4}
                className={`${fieldClasses} resize-none`}
              />

              {status === "error" && (
                <p className="text-sm text-[#E24B4A] font-light">
                  Something went wrong sending your enquiry. Please try
                  again, or reach us directly at
                  serenityvastukala@gmail.com.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center border border-[#F8F6F2]/50 px-8 py-3.5 text-[12px] tracking-[0.16em] uppercase text-[#F8F6F2] hover:bg-[#F8F6F2] hover:text-[#1A1A1A] transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Sending…"
                  : "Request Consultation"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
