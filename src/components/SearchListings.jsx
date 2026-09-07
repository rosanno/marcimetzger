import { useState } from "react";
import { IMG } from "../constants";
import Reveal from "./Reveal";

function SearchListings() {
  const [submitted, setSubmitted] = useState(false);
  const selectCls =
    "w-full bg-white border border-charcoal/15 rounded-sm px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-adobe/60";
  const labelCls =
    "text-xs uppercase tracking-wide text-charcoal/50 mb-1.5 block";

  return (
    <section id="listings" className="relative py-28">
      <div className="absolute inset-0">
        <img
          src={IMG.golf}
          alt="Aerial view of a desert golf course community near Pahrump, Nevada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/80"></div>
      </div>
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-10">
          <p className="text-adobe-light text-sm tracking-wide mb-3">
            Find Your Dream Home
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Search Listings
          </h2>
        </Reveal>
        <Reveal
          delay={100}
          className="bg-white rounded-sm shadow-2xl p-6 sm:p-8"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <div>
              <label className={labelCls}>Location</label>
              <select className={selectCls}>
                <option>Any area</option>
                <option>Pahrump</option>
                <option>Mountain Falls</option>
                <option>Las Vegas</option>
                <option>Henderson</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Type</label>
              <select className={selectCls}>
                <option>Any</option>
                <option>Single family</option>
                <option>Condo</option>
                <option>Land</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Sort by</label>
              <select className={selectCls}>
                <option>Newest</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
                <option>Bedrooms</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Bedrooms</label>
              <select className={selectCls}>
                <option>Any number</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Baths</label>
              <select className={selectCls}>
                <option>Any number</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Min price</label>
                <input type="text" placeholder="$0" className={selectCls} />
              </div>
              <div>
                <label className={labelCls}>Max price</label>
                <input type="text" placeholder="Any" className={selectCls} />
              </div>
            </div>
            <div className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <button
                type="submit"
                className="bg-adobe hover:bg-adobe-dark text-white px-8 py-3 rounded-sm text-sm font-medium transition-colors focus-ring"
              >
                Search now
              </button>
              {submitted && (
                <p className="text-sm text-navy/80">
                  Thanks — Marci doesn't keep a public MLS feed on this page.
                  Call{" "}
                  <a href={PHONE_TEL} className="text-adobe underline">
                    {PHONE}
                  </a>{" "}
                  or use the form below and she'll send matching listings
                  directly.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default SearchListings;
