"use client";

import { motion } from "framer-motion";

export function CaseStudyCover({ src, alt }) {
  return (
    <motion.div
      initial={{ scale: 1.04, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="aspect-[16/9] overflow-hidden rounded-sm border border-border/60"
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </motion.div>
  );
}
