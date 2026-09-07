import { useState, useEffect, useRef, useCallback } from "react";

import Reveal from "./Reveal";
import Icon from "./Icon";
import { IMG } from "../constants";

function Gallery() {
  const photos = [
    {
      src: IMG.golf,
      alt: "Well-appointed residential homes in a desirable neighborhood",
      cap: "Quality residential properties",
    },
    {
      src: IMG.redrock,
      alt: "Beautiful residential homes in an established community",
      cap: "Distinctive residential properties",
    },
    {
      src: IMG.kitchen,
      alt: "Modern kitchen with marble island",
      cap: "Move-in ready kitchens",
    },
    {
      src: IMG.pool,
      alt: "Backyard with swimming pool",
      cap: "Backyards built for summer",
    },
    { src: IMG.key, alt: "House key on a keychain", cap: "Closing day" },
    {
      src: IMG.headshot2,
      alt: "Marci Metzger, REALTOR",
      cap: "Marci, on site",
    },
  ];

  const [active, setActive] = useState(null);
  const closeBtnRef = useRef(null);
  const triggerRefs = useRef([]);
  const lastTriggerIndex = useRef(null);

  const openAt = (i) => {
    lastTriggerIndex.current = i;
    setActive(i);
  };

  const close = useCallback(() => {
    setActive(null);
  }, []);

  const goPrev = useCallback(() => {
    setActive((a) => (a - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const goNext = useCallback(() => {
    setActive((a) => (a + 1) % photos.length);
  }, [photos.length]);

  // Keyboard support: Escape, arrow keys
  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, close, goPrev, goNext]);

  // Lock background scroll while lightbox is open
  useEffect(() => {
    if (active === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  // Move focus into the dialog on open, return it to the trigger on close
  useEffect(() => {
    if (active !== null) {
      closeBtnRef.current?.focus();
    } else if (lastTriggerIndex.current !== null) {
      triggerRefs.current[lastTriggerIndex.current]?.focus();
    }
  }, [active]);

  return (
    <section id="gallery" className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10 flex items-end justify-between flex-wrap gap-4">
        <Reveal>
          <p className="text-adobe-light text-sm tracking-wide mb-3">
            Photo gallery
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Discover Your Next Home
          </h2>
        </Reveal>
        <p className="text-white/50 text-sm max-w-xs">
          Swipe or scroll — tap any photo to view it larger.
        </p>
      </div>

      <div className="filmstrip flex gap-4 overflow-x-auto px-5 sm:px-8 pb-4">
        {photos.map((p, i) => (
          <button
            key={i}
            ref={(el) => (triggerRefs.current[i] = el)}
            onClick={() => openAt(i)}
            aria-label={`View larger photo: ${p.cap}`}
            className="shrink-0 w-[78vw] sm:w-90 focus-ring rounded-sm overflow-hidden group relative"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full h-70 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/70 to-transparent text-white text-sm text-left px-4 py-3">
              {p.cap}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${photos[active].cap}`}
        >
          <button
            ref={closeBtnRef}
            aria-label="Close gallery"
            className="absolute top-6 right-6 text-white focus-ring"
            onClick={close}
          >
            <Icon name="close" className="w-7 h-7" />
          </button>

          <button
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 text-white focus-ring"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <Icon name="chevLeft" className="w-8 h-8" />
          </button>

          <img
            src={photos[active].src}
            alt={photos[active].alt}
            className="max-h-[80vh] max-w-[88vw] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 text-white focus-ring"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <Icon name="chevRight" className="w-8 h-8" />
          </button>

          <p className="absolute bottom-8 text-white/70 text-sm">
            {photos[active].cap} — {active + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}

export default Gallery;
