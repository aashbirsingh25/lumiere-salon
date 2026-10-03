import { motion } from "framer-motion";

// Hero: full-screen image with elegant overlaid text.
// The background slowly zooms, and the text rises in one line at a time.
function Hero() {
  return (
    <header className="hero">
      {/* Slow cinematic zoom on the background image */}
      <motion.div
        className="hero-bg"
        initial={{ scale: 1.18 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hair · Colour · Beauty Salon · Est. 2014
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Your Chair <em>Awaits</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          Expert cuts, colour, and care from stylists who make every visit
          feel effortless. Book your seat at the chair today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          <a href="#booking" className="btn btn-light">Book Your Experience</a>
        </motion.div>
      </div>

      <div className="scroll-cue">Scroll</div>
    </header>
  );
}

export default Hero;
