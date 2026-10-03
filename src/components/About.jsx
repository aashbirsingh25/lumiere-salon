import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

// A set of salon images for the About carousel — all unique, not used elsewhere on the site.
const gallery = [
  "https://images.unsplash.com/photo-1554519515-242161756769?auto=format&fit=crop&w=1000&q=90", // salon interior / mirrors
  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1000&q=90", // stylist station
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=90", // client getting styled
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=90", // beauty detail
];

// About: editorial split -- image carousel on the left, story + stats on the right.
function About() {
  const [index, setIndex] = useState(0);

  // Wrap around: next after last goes to first, prev before first goes to last.
  const next = () => setIndex((i) => (i + 1) % gallery.length);
  const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          {/* Image carousel */}
          <motion.div
            className="about-img-wrap"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* AnimatePresence cross-fades between images as index changes */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="about-img"
                style={{ backgroundImage: `url(${gallery[index]})` }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Prev / Next controls */}
            <button className="carousel-btn prev" onClick={prev} aria-label="Previous image">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button className="carousel-btn next" onClick={next} aria-label="Next image">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>

            {/* Dots showing which image is active */}
            <div className="carousel-dots">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <div className="about-text">
            <Reveal>
              <span className="eyebrow">About Lumière</span>
              <h2>A decade devoted to the <em>craft of beauty</em></h2>
              <p>
                Since 2014, Lumière has been a quiet retreat from the
                ordinary — a place where artistry, precision, and genuine care
                converge. Our salon is home to a hand-selected team of
                master stylists and skincare specialists.
              </p>
              <p>
                We work exclusively with cruelty-free, premium formulations,
                and treat every guest as the singular focus of their visit.
              </p>

              <div className="stats-row">
                <div className="stat">
                  <div className="num">10+</div>
                  <div className="label">Years</div>
                </div>
                <div className="stat">
                  <div className="num">5,000</div>
                  <div className="label">Guests</div>
                </div>
                <div className="stat">
                  <div className="num">4.9</div>
                  <div className="label">Rating</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
