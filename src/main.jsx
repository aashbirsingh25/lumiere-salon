import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App.jsx'

// Lenis: gives the whole page buttery, weighted "momentum" scrolling
// (the premium feel on luxury/Awwwards sites).
const lenis = new Lenis({
  duration: 1.4,                                   // longer glide = more luxurious weight
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // smooth exponential ease-out
  smoothWheel: true,
  wheelMultiplier: 0.9,                            // slightly slower, more deliberate
  touchMultiplier: 1.6,
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

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
