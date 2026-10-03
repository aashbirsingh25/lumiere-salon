import { useState } from "react";
import Reveal from "./Reveal";

// BookingForm: luxury-styled appointment form.
// useState remembers the field values; on submit we show an elegant confirmation.
function BookingForm() {
  const [form, setForm] = useState({ name: "", service: "", date: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="booking">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>Reservations</span>
          <h2 className="section-title">Request an Appointment</h2>
          <p className="section-subtitle">
            Begin your experience. Share your preferences and our concierge
            will confirm your visit personally.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="form-card">
            {submitted ? (
              <div className="confirmation">
                <h3>Thank you, {form.name}.</h3>
                <p>
                  Your <strong>{form.service}</strong> is requested for{" "}
                  <strong>{form.date}</strong> at <strong>{form.time}</strong>.
                  Our concierge will be in touch shortly to confirm.
                </p>
                <button
                  className="btn btn-light"
                  onClick={() => { setSubmitted(false); setForm({ name: "", service: "", date: "", time: "" }); }}
                >
                  New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange}
                    placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Treatment</label>
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a treatment</option>
                    <option>Hair Couture</option>
                    <option>Colour Atelier</option>
                    <option>Skin Rituals</option>
                    <option>Nail Studio</option>
                    <option>Spa & Massage</option>
                    <option>Bridal Maison</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input type="time" name="time" value={form.time} onChange={handleChange} required />
                  </div>
                </div>
                <button type="submit" className="btn btn-light" style={{ width: "100%" }}>
                  Request Appointment
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default BookingForm;
