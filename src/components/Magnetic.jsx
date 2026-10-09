import { useRef } from "react";

// Magnetic: wraps a button/link and makes it "pull" toward the cursor on
// hover, snapping back on leave. This is the signature micro-interaction on
// sites like Skiper UI / Vengeance UI / Animaster Lab — small, tactile, and
// makes the whole page feel more premium without needing a video or heavy
// animation library for it.
function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <span
      ref={ref}
      className="magnetic"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
}

export default Magnetic;
