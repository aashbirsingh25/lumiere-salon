import { useState, useEffect } from "react";

// Navbar: transparent over the hero, turns solid once you scroll.
// We listen to the scroll position and toggle a "scrolled" class.
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll); // cleanup
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">Lumière</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Stylists</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#booking">Book</a></li>
        </ul>
        <a href="#booking" className="btn btn-outline">Reserve</a>
      </div>
    </nav>
  );
}

export default Navbar;
