import Link from "next/link";
import { nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#F3EFE8] pt-24 pb-10">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-14">
          <div>
            <p className="font-display text-3xl md:text-4xl">
              Serenity <span className="text-[#8C6B4F]">Vastukala</span>
            </p>
            <p className="mt-6 max-w-xs text-[#6E675F] font-light leading-relaxed">
              Interior architecture for homes designed to be lived in
              slowly, for a long time.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-6">Studio</p>
            <ul className="space-y-3 text-[#6E675F] font-light">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#2B2B2B] transition-colors duration-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Contact</p>
            <ul className="space-y-3 text-[#6E675F] font-light">
              <li>Jogeshwari West, Mumbai-102, India</li>
              <li>+91 7977953526</li>
              <li>serenityvastukala@gmail.com</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Follow</p>
            <ul className="flex gap-5 text-[#6E675F]">
              <li>
                <a
                  href="https://www.instagram.com/serenityvastukala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#2B2B2B] transition-colors duration-500"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917977953526"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-[#2B2B2B] transition-colors duration-500"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#2B2B2B] transition-colors duration-500"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#D9D4CC] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#6E675F] font-light">
          <p>© {new Date().getFullYear()} Serenity Vastukala. All rights reserved.</p>
          <p>Interior Architecture &amp; Design, Jogeshwari West, Mumbai-102</p>
        </div>
      </div>
    </footer>
  );
}
