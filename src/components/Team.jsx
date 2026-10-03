import Reveal from "./Reveal";

// Team: meet-the-stylists section. Very "salon" -- builds personal trust.
const stylists = [
  { name: "Elena Rossi", role: "Master Stylist & Founder", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
  { name: "Maya Chen", role: "Colour Specialist", img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=600&q=80" },
  { name: "Sofia Marin", role: "Senior Stylist", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" },
];

function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>Our Team</span>
          <h2 className="section-title">Meet Your <em>Stylists</em></h2>
          <p className="section-subtitle">
            A hand-picked team of experts who treat every chair like a work of art.
          </p>
        </Reveal>

        <div className="team-grid">
          {stylists.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="stylist">
                <div className="stylist-img" style={{ backgroundImage: `url(${s.img})` }} />
                <h3>{s.name}</h3>
                <div className="role">{s.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
