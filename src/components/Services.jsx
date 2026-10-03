import Reveal from "./Reveal";

// Services: image-topped treatment cards. Each has a photo so it feels rich, not plain.
const services = [
  { name: "Hair Couture", desc: "Precision cuts, styling, and finishing by master stylists.", price: "from $65", img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=700&q=85" },
  { name: "Colour Atelier", desc: "Bespoke balayage, highlights, and tonal artistry.", price: "from $120", img: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&w=700&q=85" },
  { name: "Skin Rituals", desc: "Restorative facials with premium botanical formulations.", price: "from $90", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=85" },
  { name: "Nail Studio", desc: "Manicure and pedicure crafted with meticulous care.", price: "from $45", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=85" },
  { name: "Spa & Massage", desc: "Full-body relaxation in complete serenity.", price: "from $110", img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=700&q=85" },
  { name: "Bridal Maison", desc: "A complete bridal experience for your defining day.", price: "from $350", img: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&w=700&q=85" },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>Our Treatments</span>
          <h2 className="section-title">The <em>Collection</em></h2>
          <p className="section-subtitle">
            A curated selection of signature treatments, each performed with
            uncompromising attention to detail.
          </p>
        </Reveal>

        <div className="service-grid">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="service-card">
                <div className="service-img" style={{ backgroundImage: `url(${s.img})` }}>
                  <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="service-body">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <div className="price">{s.price}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
