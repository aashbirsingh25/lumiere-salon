import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

// Testimonials: one elegant rotating quote. Builds trust (social proof).
const quotes = [
  { text: "An experience of pure refinement. Lumière has redefined what luxury beauty means to me.", author: "Isabella R." },
  { text: "From the moment you step in, every detail is considered. Simply the finest atelier in the city.", author: "Camille D." },
  { text: "The artistry is unmatched. I have never felt more cared for or more radiant.", author: "Sophia L." },
];

function Testimonials() {
  const [i, setI] = useState(0);

  // Rotate to the next quote every 5 seconds.
  useEffect(() => {
    const id = setInterval(() => setI((prev) => (prev + 1) % quotes.length), 5000);
    return () => clearInterval(id); // cleanup when component unmounts
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>Guest Experiences</span>
          <div className="quote">
            <div className="stars">★ ★ ★ ★ ★</div>
            {/* AnimatePresence fades the old quote out as the new one fades in */}
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6 }}
              >
                <p>"{quotes[i].text}"</p>
                <div className="author">— {quotes[i].author}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;
