import { IMG } from "../constants";
import Reveal from "./Reveal";

function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-5 sm:px-13 pt-28 sm:pt-36 pb-24 grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center"
    >
      <Reveal className="relative max-w-sm mx-auto md:mx-0">
        <div className="absolute -inset-4 border border-adobe/40 rounded-sm -z-10"></div>
        <img
          src={IMG.headshot}
          alt="Marci Metzger, REALTOR at The Ridge Realty Group"
          className="w-full aspect-4/5 object-cover rounded-sm shadow-lg"
        />
      </Reveal>
      <Reveal delay={120}>
        <p className="text-adobe text-sm tracking-wide mb-3">
          Marci J. Metzger
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
          REALTOR for nearly three decades
        </h2>
        <p className="text-charcoal/80 leading-relaxed mb-4">
          Marci was a REALTOR, then a licensed Broker, in Washington State. Now
          she's enjoying the sunshine and helping clients throughout Southern
          Nevada. Having guided buyers and sellers through many different
          markets since 1995, she brings a rare depth of experience to every
          transaction — from pricing precision to closing expertise.
        </p>
        <p className="text-charcoal/80 leading-relaxed mb-8">
          She and her family have made this valley their home, and giving back
          to the community — from rodeo sponsorships to local youth sports — has
          always been part of the job.
        </p>
        <blockquote className="border-l-2 border-adobe pl-6">
          <p className="font-serif italic text-xl sm:text-2xl text-navy leading-snug">
            "I love that small-town feeling our community offers. Spectacular
            golf courses, parks, a pool, and easy access to Las Vegas make
            Pahrump a great place to call home. I enjoy living in the Mountain
            Falls community, and I'll strive to find you a home that suits you
            just as this one suits me."
          </p>
          <cite className="not-italic text-sm text-charcoal/60 mt-4 block">
            — Marci Metzger
          </cite>
        </blockquote>
      </Reveal>
    </section>
  );
}

export default About;
