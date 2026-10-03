// Marquee: a continuously scrolling gold strip of signature words.
// A classic luxury-site touch. The list is duplicated so the loop is seamless.
function Marquee() {
  const items = ["Hair Couture", "Colour Atelier", "Skin Rituals", "Bridal Maison", "Spa & Massage", "Nail Studio"];
  const doubled = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

export default Marquee;
