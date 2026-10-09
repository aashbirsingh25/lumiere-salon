import { motion } from "framer-motion";

// Reveal: wraps any content and fades + rises it into view as you scroll.
// This is the signature "luxury" motion -- slow, smooth, elegant.
// Usage: <Reveal><h2>Title</h2></Reveal>
function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}            // start: invisible, slightly down
      whileInView={{ opacity: 1, y: 0 }}         // when scrolled into view: fade in + rise
      viewport={{ once: true, amount: 0.2 }}     // run once, when 20% visible
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }} // slow + elegant
    >
      {children}
    </motion.div>
  );
}

// SplitReveal: reveals a heading word-by-word with a staggered rise, instead
// of fading the whole block at once. This is the editorial "big type"
// treatment used across Skiper UI / Animaster Lab style sites — each word
// lifts into place a beat after the last, like it's being typeset.
// Usage: <SplitReveal as="h2">A decade devoted to the <em>craft</em></SplitReveal>
// Plain-text children are split into individual words; JSX children (e.g.
// <em>...</em>) are kept intact as a single unit (not split further).
function SplitReveal({ children, as = "h2", className = "", delay = 0 }) {
  const Tag = as;
  const childArray = Array.isArray(children) ? children : [children];

  // Flatten: break every string child into words, leave element children as-is.
  const units = [];
  childArray.forEach((child) => {
    if (typeof child === "string") {
      child.split(/\s+/).filter(Boolean).forEach((word) => units.push(word));
    } else if (child != null && child !== false) {
      units.push(child);
    }
  });

  return (
    <Tag className={className} style={{ overflow: "hidden" }}>
      {units.map((unit, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: delay + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {unit}{" "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export default Reveal;
export { SplitReveal };

