import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={className + (shown ? " rise-in" : " opacity-0")}
      style={shown ? { animationDelay: `${delay}ms` } : {}}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
