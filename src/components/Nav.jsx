import { useEffect, useState } from "react";

import { PHONE, PHONE_TEL } from "../constants";
import Icon from "./Icon";
import logo from "../assets/logo.png";

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Home", "#home"],
    ["Listings", "#listings"],
    ["Let's Move", "#move"],
    ["About Us", "#about"],
  ];
  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-navy/90 backdrop-blur-md shadow-lg shadow-black/10 border-b border-white/5"
          : "bg-linear-to-b from-navy/60 to-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center">
          <img
            src={logo}
            alt="Marci Metzger Homes"
            className={
              "w-auto transition-all duration-300 " +
              (scrolled ? "h-10 sm:h-12" : "h-13 sm:h-15")
            }
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm text-white/80 hover:text-white transition-colors focus-ring px-4 py-2 group"
            >
              {label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-adobe scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 bg-adobe hover:bg-adobe-dark text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all focus-ring"
          >
            <Icon name="phone" className="w-4 h-4" /> {PHONE}
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-white focus-ring p-2"
        >
          <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-white/90 text-base"
            >
              {label}
            </a>
          ))}
          <a
            href={PHONE_TEL}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-adobe text-white text-sm font-medium px-5 py-3 rounded-full"
          >
            <Icon name="phone" className="w-4 h-4" /> Call {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}

export default Nav;
