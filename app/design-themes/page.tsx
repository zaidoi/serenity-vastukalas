import type { Metadata } from "next";
import DesignThemes from "@/components/DesignThemes";

export const metadata: Metadata = {
  title: "Interior Design Themes & Styles | Serenity Vastukala, Mumbai",
  description:
    "Explore the design languages we work in for homes across Mumbai — Contemporary, Modern Minimal, Scandinavian, Japandi, Luxury Modern, Neo-Classical and Industrial.",
};

export default function DesignThemesPage() {
  return (
    <>
      <div className="pt-24 md:pt-28 bg-[#F8F6F2]" aria-hidden="true" />
      <DesignThemes />
    </>
  );
}
