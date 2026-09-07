/* ---------------- Hero ---------------- */

import { IMG, PHONE, PHONE_TEL } from "../constants";
import Icon from "./Icon";

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end">
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Golf course pond and mountain view in the Mountain Falls community, Pahrump, Nevada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-navy-dark/70 to-navy-dark/20"></div>
        <div className="absolute inset-0 bg-linear-to-r from-navy-dark/60 via-transparent to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pb-28 pt-40 w-full">
        <p className="text-sand/80 text-sm tracking-wide mb-4">
          Marci Metzger · The Ridge Realty Group
        </p>
        <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-2xl">
          Pahrump living, guided by someone who already calls it home.
        </h1>
        <p className="text-sand/85 text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
          Nearly three decades of real estate experience, now devoted to
          Southern Nevada's high desert — from the fairways of Mountain Falls to
          the edge of Las Vegas.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 bg-adobe hover:bg-adobe-dark text-white px-7 py-3.5 rounded-sm text-sm font-medium transition-colors focus-ring"
          >
            <Icon name="phone" className="w-4 h-4" /> Call {PHONE}
          </a>
          <a
            href="#listings"
            className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white px-7 py-3.5 rounded-sm text-sm font-medium transition-colors focus-ring"
          >
            See current listings
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
