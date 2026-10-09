import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import App from './App.jsx'

gsap.registerPlugin(ScrollTrigger)

// Lenis: gives the whole page buttery, weighted "momentum" scrolling
// (the premium feel on luxury/Awwwards sites).
const lenis = new Lenis({
  duration: 1.4,                                   // longer glide = more luxurious weight
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // smooth exponential ease-out
  smoothWheel: true,
  wheelMultiplier: 0.9,                            // slightly slower, more deliberate
  touchMultiplier: 1.6,
})

// IMPORTANT: let GSAP's ScrollTrigger drive Lenis, so the scroll-scrubbed
// video section (ScrollHair) stays perfectly in sync with smooth scroll —
// otherwise the two scroll systems fight each other.
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)

// Make anchor links (e.g. "Book Now" -> #booking) scroll smoothly via Lenis too.
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]')
  if (link) {
    const id = link.getAttribute('href')
    if (id && id.length > 1) {
      const el = document.querySelector(id)
      if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -20 }) }
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
