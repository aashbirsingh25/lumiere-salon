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

export default Reveal;
