import Reveal from "./Reveal";

function ZigRow({ img, alt, eyebrow, title, children, reverse }) {
  return (
    <Reveal
      className={
        "grid md:grid-cols-2 gap-10 md:gap-16 items-center py-14 " +
        (reverse ? "" : "")
      }
    >
      <div className={"relative " + (reverse ? "md:order-2" : "")}>
        <img
          src={img}
          alt={alt}
          className="w-full aspect-4/3 object-cover rounded-sm shadow-md"
        />
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <p className="text-adobe text-sm tracking-wide mb-3">{eyebrow}</p>
        <h3 className="font-serif text-2xl sm:text-3xl text-navy mb-4">
          {title}
        </h3>
        <div className="text-charcoal/80 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

export default ZigRow;
