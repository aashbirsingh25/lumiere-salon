// Footer: minimal, dark, elegant.
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="logo">Lumière</div>
            <p>
              A beauty atelier devoted to the art of elegance.
              By appointment, in the heart of the city.
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:5551234567">(555) 123-4567</a>
            <a href="mailto:concierge@lumiere.com">concierge@lumiere.com</a>
            <a href="#">123 Rue de Beauté, Downtown</a>
          </div>
          <div>
            <h4>Hours</h4>
            <a href="#">Monday – Friday · 9 – 19</a>
            <a href="#">Saturday · 9 – 18</a>
            <a href="#">Sunday · By appointment</a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Lumière — All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
