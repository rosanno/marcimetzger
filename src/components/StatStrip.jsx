/* ---------------- Stat strip ---------------- */

import Reveal from "./Reveal";

function StatStrip() {
  const stats = [
    ["$28.5M", "in residential sales, 2021"],
    ["90+", "buyers & sellers served in 2021"],
    ["1995", "licensed and still going strong"],
    ["No. 1", "residential REALTOR in Pahrump, 4 years running"],
  ];
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 -mt-16 sm:-mt-20">
      <Reveal className="bg-white shadow-xl rounded-sm px-6 sm:px-10 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8">
        {stats.map(([num, label], i) => (
          <div
            key={i}
            className={
              "px-2 " + (i > 0 ? "md:border-l md:border-charcoal/10" : "")
            }
          >
            <div className="font-serif text-3xl sm:text-4xl text-navy">
              {num}
            </div>
            <div className="text-xs sm:text-sm text-charcoal/60 mt-1 leading-snug max-w-[14ch]">
              {label}
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

export default StatStrip;
