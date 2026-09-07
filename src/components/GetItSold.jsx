import { IMG } from "../constants";
import Icon from "./Icon";
import Reveal from "./Reveal";
import ZigRow from "./ZigRow";

function GetItSold() {
  return (
    <section id="get-it-sold" className="bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <Reveal className="max-w-xl mb-4">
          <p className="text-adobe text-sm tracking-wide mb-3">
            How Marci works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Get it sold
          </h2>
        </Reveal>

        <ZigRow
          img={IMG.kitchen}
          alt="Bright modern kitchen with a marble island, representative of Pahrump homes for sale"
          eyebrow="Top residential sales, five years running"
          title="We helped nearly 90 clients in 2021, closing $28.5M in sales."
        >
          <p>
            Our team works hard every day to grow and learn, so we can keep
            excelling in this market. Our clients deserve our best — and we make
            sure our best gets a little better every year.
          </p>
        </ZigRow>

        <ZigRow
          img={IMG.pool}
          alt="Home exterior with a backyard swimming pool, ready to show to buyers"
          eyebrow="Marketing that works"
          title="We don't just list it — we get it sold."
          reverse
        >
          <p>
            We exhaust every avenue to put our listings in front of every
            possible buyer, so your home reaches its full market value instead
            of sitting and waiting.
          </p>
        </ZigRow>

        <ZigRow
          img={IMG.key}
          alt="House-shaped keychain, symbolizing the moment a buyer gets their keys"
          eyebrow="For buyers"
          title="A clear guide from search to signing."
        >
          <p>
            Nobody knows this market like we do. Enjoy having a pro in your
            corner, from the first showing to the final walkthrough.
          </p>
          <ul className="space-y-2 pt-2">
            {[
              "Market analysis on every property you're serious about",
              "A room-by-room upgrades list before you make an offer",
              "Trusted contractors and lenders on speed dial",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-charcoal/80">
                <Icon
                  name="check"
                  className="w-4 h-4 mt-1 text-adobe shrink-0"
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </ZigRow>
      </div>
    </section>
  );
}

export default GetItSold;
