import { IMG } from "../constants";
import Reveal from "./Reveal";

function Services() {
  const items = [
    {
      img: IMG.redrock,
      title: "Real estate done right",
      body: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    },
    {
      img: IMG.pool,
      title: "Commercial & residential",
      body: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    },
    {
      img: IMG.docs,
      title: "Rely on expertise",
      body: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
      <Reveal className="max-w-xl mb-14">
        <p className="text-adobe text-sm tracking-wide mb-3">Our services</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-navy">
          However you're moving, we've done this before.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-x-10 gap-y-14">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 100}>
            <img
              src={it.img}
              alt={it.title}
              className="w-full h-56 object-cover rounded-sm mb-6"
            />
            <h3 className="font-serif text-xl text-navy mb-3">{it.title}</h3>
            <p className="text-charcoal/75 leading-relaxed text-[15px]">
              {it.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Services;
