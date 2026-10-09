// App: the top-level component. Stacks all sections in order.
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ScrollHair from "./components/ScrollHair";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <ScrollHair />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <BookingForm />
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
