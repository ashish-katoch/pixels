import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Editorial custom cursor:
 * - Small filled dot trails the pointer (fast).
 * - Larger ring lags behind (spring).
 * - Both expand & invert on hoverable elements: a, button, [data-cursor="hover"], [role="button"].
 * - Hidden on touch devices and respects prefers-reduced-motion.
 */
export function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 250, damping: 28, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 250, damping: 28, mass: 0.5 });

  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePointer || reduced) return;
    setEnabled(true);

    const onMove = (e) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        dotX.set(e.clientX);
        dotY.set(e.clientY);
      });
    };

    const isHoverable = (el) => {
      if (!el || !(el instanceof Element)) return false;
      return !!el.closest(
        'a, button, [role="button"], [data-cursor="hover"], input, textarea, label, select'
      );
    };

    const onOver = (e) => setHovering(isHoverable(e.target));
    const onOut = (e) => {
      if (!isHoverable(e.relatedTarget)) setHovering(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    document.documentElement.classList.add("cursor-none");

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.documentElement.classList.remove("cursor-none");
      cancelAnimationFrame(rafRef.current);
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-1.5 w-1.5 rounded-full bg-foreground"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        data-testid="custom-cursor-dot"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full border border-foreground"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          opacity: hovering ? 0.9 : 0.55,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        data-testid="custom-cursor-ring"
      />
    </>
  );
}
