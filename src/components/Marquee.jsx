// Marquee: a continuously scrolling strip of signature words, driven by
// GSAP so the speed is easy to tune and it pauses smoothly on hover
// (a nicer, more "designed" feel than a plain CSS keyframe loop).
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

function Marquee() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const items = ["Hair Couture", "Colour Atelier", "Skin Rituals", "Bridal Maison", "Spa & Massage", "Nail Studio"];
  const doubled = [...items, ...items]; // duplicate for seamless loop

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Animate the track exactly one copy-width to the left, then snap back
    // to 0 — because the content is duplicated, the snap is invisible.
    const distance = track.scrollWidth / 2;
    tweenRef.current = gsap.fromTo(
      track,
      { x: 0 },
      { x: -distance, duration: 22, ease: "none", repeat: -1 }
    );

    return () => tweenRef.current?.kill();
  }, []);

  return (
    <div
      className="marquee"
      onMouseEnter={() => tweenRef.current?.timeScale(0.15)}
      onMouseLeave={() => tweenRef.current?.timeScale(1)}
    >
      <div className="marquee-track" ref={trackRef}>
        {doubled.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

export default Marquee;
