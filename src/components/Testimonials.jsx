import { useState } from "react";

import Icon from "./Icon";
import Reveal from "./Reveal";

function Testimonials() {
  const quotes = [
    {
      text: "Her knowledge of the Pahrump market is unmatched, and she fought hard to get us the best deal possible. We couldn't be happier with our new home.",
      name: "Home buyer, Pahrump",
    },
    {
      text: "We sold our house in just two weeks thanks to Marci's marketing strategy and network. She got us five percent over asking price.",
      name: "Home seller, Mountain Falls",
    },
    {
      text: "As an investor, I needed someone who understands the market dynamics. Marci's expertise helped me build a portfolio of three rental properties.",
      name: "Property investor",
    },
  ];
  const [i, setI] = useState(0);

  return (
    <section className="bg-sand-dark py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-adobe text-sm tracking-wide mb-8">
          What clients say
        </p>
        <Reveal key={i} className="min-h-36">
          <p className="font-serif text-2xl sm:text-3xl text-navy leading-snug">
            "{quotes[i].text}"
          </p>
          <p className="text-sm text-charcoal/60 mt-6">{quotes[i].name}</p>
        </Reveal>
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            aria-label="Previous testimonial"
            onClick={() => setI((i - 1 + quotes.length) % quotes.length)}
            className="focus-ring text-navy/60 hover:text-navy"
          >
            <Icon name="chevLeft" className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {quotes.map((_, d) => (
              <span
                key={d}
                className={
                  "w-1.5 h-1.5 rounded-full " +
                  (d === i ? "bg-adobe" : "bg-charcoal/20")
                }
              ></span>
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => setI((i + 1) % quotes.length)}
            className="focus-ring text-navy/60 hover:text-navy"
          >
            <Icon name="chevRight" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
