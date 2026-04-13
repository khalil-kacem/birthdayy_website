import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [showSecret, setShowSecret] = useState(false);

  // Floating messages
  useEffect(() => {
    const messages = [
      "Manu, you are my favorite person in this universe 🌌",
      "The world feels brighter with you in it ✨",
      "So grateful to have you as my best friend 🌙",
      "Manu, your presence brings calm and joy 🌠",
      "Every moment is better when shared with you 🌟",
      "You are a rare soul, Manu 💫",
      "Lucky to walk through life with you 🤍",
      "Manu, you truly make life beautiful 🌃",
    ];

    const interval = setInterval(() => {
      const msg = document.createElement("div");
      msg.className = "message";
      msg.style.left = Math.random() * 90 + "vw";
      msg.style.top = Math.random() * 90 + "vh";
      msg.innerText =
        messages[Math.floor(Math.random() * messages.length)];
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 6000);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const openGift = () => {
    for (let i = 0; i < 120; i++) {
      const conf = document.createElement("div");
      conf.className = "confetti";
      conf.style.left = Math.random() * 100 + "vw";
      conf.style.background = `hsl(${Math.random() * 360},100%,60%)`;
      document.body.appendChild(conf);
      setTimeout(() => conf.remove(), 4000);
    }
  };

  return (
    <div className="App">
      <header className="hero">
        <h1>For Manu, My Favorite Soul 🌌</h1>
        <p className="subtitle">
          A small universe of words for someone truly special
        </p>

        <button onClick={() => setShowSecret(true)}>
          Reveal Message 💌
        </button>

        {showSecret && (
          <div className="secret">
            Manu,<br />
            You are not just my best friend — <br />
            you are one of the brightest parts of my world. <br />
            Thank you for existing and being you. 🌙
          </div>
        )}

        <img
          src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
          alt="gift"
          className="gift"
          onClick={openGift}
        />
      </header>
    </div>
  );
}
