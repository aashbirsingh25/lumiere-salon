# Lumière — Hair & Beauty Salon

A modern, responsive salon website with an AI concierge chatbot, built with React and Vite.

![Status](https://img.shields.io/badge/status-live-success)

## Features

- **Elegant, responsive design** — warm luxury theme, works on mobile and desktop
- **Smooth scrolling** — weighted momentum scroll (Lenis)
- **Scroll-reveal animations** — section fade/rise transitions (Framer Motion)
- **Image carousel** — interactive gallery in the About section
- **Services menu** — image-topped treatment cards with pricing
- **Meet the stylists** — team section
- **Rotating testimonials**
- **Online booking form** — with instant confirmation
- **AI concierge chatbot** — answers questions about services, pricing, hours, and bookings

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lenis](https://lenis.darkroom.engineering/) — smooth scroll
- Plain CSS (custom design system)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # build for production
npm run preview  # preview the production build
```

## Project Structure

```
src/
  App.jsx              # root component — stacks all sections
  index.css            # design system + all styles
  main.jsx             # entry point + Lenis smooth scroll setup
  components/
    Navbar.jsx         # sticky navigation
    Hero.jsx           # full-screen hero
    Marquee.jsx        # scrolling treatment strip
    Services.jsx       # treatment menu cards
    About.jsx          # story + image carousel
    Team.jsx           # stylist profiles
    Testimonials.jsx   # rotating guest quotes
    BookingForm.jsx    # appointment request form
    Footer.jsx         # contact + hours
    Chatbot.jsx        # AI concierge assistant
    Reveal.jsx         # reusable scroll-reveal wrapper
```

## About the Chatbot

The concierge chatbot is currently rule-based (keyword matching) for instant, zero-cost
responses. It is structured so it can be upgraded to a live AI API (e.g. OpenAI) by
swapping the `getBotReply()` function — see the note in `Chatbot.jsx`.

---

Built by Aashbir Singh.
