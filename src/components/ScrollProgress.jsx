import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => setEnabled(true), []);
  if (!enabled) return null;
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-foreground z-[100] origin-left"
      style={{ scaleX }}
      aria-hidden
      data-testid="scroll-progress"
    />
  );
}
