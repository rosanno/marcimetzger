import { useState, useEffect, useRef, useCallback } from "react";

import Reveal from "./Reveal";
import Icon from "./Icon";
import { IMG } from "../constants";

// Desktop bento layout: a 5-col x 2-row grid. Index 0 is the hero tile.
// If you add/remove photos, adjust this array to match photos.length.
const BENTO_SPAN = [
  "sm:col-span-2 sm:row-span-2", // 0 — hero, large
  "sm:col-start-3 sm:row-start-1",
  "sm:col-start-4 sm:row-start-1",
  "sm:col-start-5 sm:row-start-1",
  "sm:col-start-3 sm:row-start-2 sm:col-span-2",
  "sm:col-start-5 sm:row-start-2",
];

function ExpandGlyph({ className }) {
  // Inline so we don't depend on the shared Icon set having this glyph.
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6" />
    </svg>
  );
}

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
  const [imgVisible, setImgVisible] = useState(true);
  const closeBtnRef = useRef(null);
  const triggerRefs = useRef([]);
  const lastTriggerIndex = useRef(null);
  const touchX = useRef(null);

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

  // Quick crossfade whenever the active photo changes
  useEffect(() => {
    if (active === null) return;
    setImgVisible(false);
    const id = requestAnimationFrame(() => setImgVisible(true));
    return () => cancelAnimationFrame(id);
  }, [active]);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx > 45) goPrev();
    else if (dx < -45) goNext();
    touchX.current = null;
  };

  const Tile = ({ p, i, spanClass }) => (
    <button
      ref={(el) => (triggerRefs.current[i] = el)}
      onClick={() => openAt(i)}
      aria-label={`View larger photo: ${p.cap}`}
      className={`group relative shrink-0 w-[78vw] sm:w-auto h-70 sm:h-full snap-center overflow-hidden rounded-lg focus-ring ${spanClass || ""}`}
    >
      <img
        src={p.src}
        alt={p.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/0 to-black/0 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute bottom-0 inset-x-0 px-4 py-3 text-left text-sm text-white">
        {p.cap}
      </span>
      <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <ExpandGlyph className="h-4 w-4" />
      </span>
    </button>
  );

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
          Tap any photo for a closer look.
        </p>
      </div>

      {/* Desktop / tablet: asymmetric bento grid */}
      <div className="hidden sm:grid max-w-7xl mx-auto px-5 sm:px-8 sm:grid-cols-5 sm:grid-rows-2 sm:h-[520px] gap-4">
        {photos.map((p, i) => (
          <Tile key={i} p={p} i={i} spanClass={BENTO_SPAN[i]} />
        ))}
      </div>

      {/* Mobile: swipeable, snap-scrolling filmstrip */}
      <div className="no-scrollbar sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-2">
        {photos.map((p, i) => (
          <Tile key={i} p={p} i={i} />
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${photos[active].cap}`}
        >
          <button
            ref={closeBtnRef}
            aria-label="Close gallery"
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-ring"
            onClick={close}
          >
            <Icon name="close" className="w-5 h-5" />
          </button>

          <button
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-ring"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <Icon name="chevLeft" className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center gap-4 max-w-full">
            <img
              src={photos[active].src}
              alt={photos[active].alt}
              className="max-h-[70vh] max-w-[88vw] sm:max-w-[80vw] object-contain rounded-md"
              style={{
                opacity: imgVisible ? 1 : 0,
                transition: "opacity 200ms ease-out",
              }}
              onClick={(e) => e.stopPropagation()}
            />

            <div className="flex items-center gap-3">
              <p className="text-white/70 text-sm">
                {photos[active].cap} — {active + 1} / {photos.length}
              </p>
            </div>

            {/* Thumbnail rail for quick jumping between photos */}
            <div
              className="hidden sm:flex gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {photos.map((p, i) => (
                <button
                  key={i}
                  aria-label={`Go to photo: ${p.cap}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                  className={`h-12 w-16 overflow-hidden rounded-sm transition-opacity focus-ring ${
                    i === active
                      ? "opacity-100 ring-2 ring-white"
                      : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <img
                    src={p.src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-ring"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <Icon name="chevRight" className="w-6 h-6" />
          </button>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

export default Gallery;