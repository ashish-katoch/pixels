import { motion, useReducedMotion } from "framer-motion";

/**
 * Lightweight reveal wrapper.
 * Honors prefers-reduced-motion automatically.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
  as = "div",
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Word-by-word reveal for editorial headings.
 */
export function WordReveal({ text, className, delay = 0 }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            animate={reduce ? undefined : { y: 0 }}
            transition={{
              duration: 0.95,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
