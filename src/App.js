import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [showSecret, setShowSecret] = useState(false);

  // Floating messages
  useEffect(() => {
    const messages = [
      "Manu, you are my favorite best friend 💖",
      "Life feels lighter with you around, Manu ✨",
      "So grateful to have you as my best friend 🌸",
      "Manu, you truly mean a lot to me 😊",
      "My best moments are shared with you 🎉",
      "You make everything better, Manu 🌟",
      "Lucky to call you my best friend 💕",
      "Manu, you are one of the most important people in my life 🤍",
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
      conf.style.background = `hsl(${Math.random() * 360},100%,50%)`;
      document.body.appendChild(conf);
      setTimeout(() => conf.remove(), 4000);
    }
  };

  return (
    <div className="App">
      <header className="hero">
        <h1>To My Favorite Best Friend Manu 🎨💖</h1>
        <p className="subtitle">
          For the most talented artist & best friend ever
        </p>

        <button onClick={() => setShowSecret(true)}>
          Open Message 💌
        </button>

        {showSecret && (
          <div className="secret">
            Manu,<br />
            You are not just a friend — you are my favorite best friend. <br />
            Thank you for always being there for me. <br />
            I’m really lucky to have you in my life.
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
