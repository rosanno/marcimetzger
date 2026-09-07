import { useEffect, useState } from "react";

import { PHONE, PHONE_TEL } from "../constants";
import Icon from "./Icon";

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Get it sold", "#get-it-sold"],
    ["Listings", "#listings"],
    ["Gallery", "#gallery"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300 " +
        (scrolled ? "bg-navy/95 backdrop-blur shadow-lg" : "bg-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl sm:text-2xl text-white tracking-wide">
            Marci Metzger
          </span>
          <span className="font-serif italic text-sm text-adobe-light -mt-1">
            Homes
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-white/85 hover:text-white transition-colors focus-ring"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 bg-adobe hover:bg-adobe-dark text-white text-sm font-medium px-5 py-2.5 rounded-sm transition-colors focus-ring"
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
        <div className="lg:hidden bg-navy border-t border-white/10 px-6 py-6 flex flex-col gap-4">
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
            className="mt-2 inline-flex items-center justify-center gap-2 bg-adobe text-white text-sm font-medium px-5 py-3 rounded-sm"
          >
            <Icon name="phone" className="w-4 h-4" /> Call {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}

export default Nav;
