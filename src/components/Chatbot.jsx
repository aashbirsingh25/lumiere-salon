import { useState, useRef, useEffect } from "react";

// Chatbot: a floating assistant that answers common salon questions.
// Right now it's "rule-based": it looks for keywords and replies.
// Later you can swap getBotReply() for a real AI API call (see note below).

// The salon's knowledge. Each rule has keywords + an answer.
const rules = [
  { keywords: ["hour", "open", "time", "close"], answer: "We welcome guests Monday–Saturday, 9am to 7pm. Sundays are by appointment only." },
  { keywords: ["price", "cost", "how much", "charge"], answer: "Hair Couture from $65, Colour Atelier from $120, Skin Rituals from $90. The full collection is in our Treatments section." },
  { keywords: ["book", "appointment", "reserve", "slot"], answer: "You may request an appointment on this page — simply visit the Reservations section. Our concierge confirms every booking personally." },
  { keywords: ["location", "where", "address", "find"], answer: "You'll find us at 123 Rue de Beauté, in the heart of downtown." },
  { keywords: ["cancel", "reschedule", "change"], answer: "Of course. Kindly call our concierge at (555) 123-4567 and we'll gladly rearrange your visit." },
  { keywords: ["bridal", "wedding", "makeup"], answer: "Our Bridal Maison experience (from $350) includes hair, makeup, and a dedicated trial. We recommend reserving well in advance." },
  { keywords: ["hi", "hello", "hey"], answer: "Welcome to Lumière. I'm your concierge — ask me about treatments, pricing, hours, or reservations." },
  { keywords: ["thank", "thanks", "bye"], answer: "With pleasure. We look forward to welcoming you to Lumière." },
];

// Takes the user's text, returns the best matching answer.
function getBotReply(text) {
  const lower = text.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      return rule.answer;
    }
  }
  return "Allow me to connect you with our concierge at (555) 123-4567, or request a visit directly on this page.";
}

const quickReplies = ["Hours", "Pricing", "Reservations", "Location"];

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Welcome to Lumière. How may I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  // Auto-scroll to the newest message whenever messages change.
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  // Add the user's message, then the bot's reply.
  function send(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg = { from: "user", text: trimmed };
    const botMsg = { from: "bot", text: getBotReply(trimmed) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      {/* Floating button — custom SVG icon matching the salon theme */}
      <button className="chat-toggle" onClick={() => setOpen(!open)} aria-label="Chat with concierge">
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* elegant chat bubble */}
            <path d="M21 11.5a7.5 7.5 0 0 1-10.9 6.7L4 19.5l1.3-4A7.5 7.5 0 1 1 21 11.5Z" />
            {/* three dots */}
            <circle cx="8.5" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="12" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="15.5" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
          </svg>
        )}
      </button>

      {/* The chat window (only shown when open) */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="ch-title">Lumière Concierge</div>
            <small>At your service</small>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div className={`msg ${m.from}`} key={i}>
                <div className="bubble">{m.text}</div>
              </div>
            ))}
          </div>

          {/* Quick-tap suggestion buttons */}
          <div className="chat-quick">
            {quickReplies.map((q, i) => (
              <button key={i} onClick={() => send(q)}>{q}</button>
            ))}
          </div>

          {/* Text input */}
          <form
            className="chat-input"
            onSubmit={(e) => { e.preventDefault(); send(input); }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">➤</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;

/*
  UPGRADE TO REAL AI LATER:
  Replace getBotReply(text) with an async call to an AI API, e.g.:

    async function getBotReply(text) {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are GlowBot, a salon assistant..." },
            { role: "user", content: text },
          ],
        }),
      });
      const data = await res.json();
      return data.choices[0].message.content;
    }

  NOTE: never put a real API key in frontend code for a live client site --
  it would be exposed. Route it through a small backend. We can do that later.
*/
