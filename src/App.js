import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [showSecret, setShowSecret] = useState(false);
  const canvasRef = useRef(null);
  const paintingRef = useRef(false);

  // Floating messages
  useEffect(() => {
    const messages = [
      "Happy Birthday Manu 🎂",
      "Enjoy your day Manu 🌸",
      "Best wishes Manu ✨",
      "Stay happy Manu 😊",
      "Have a great year Manu 🎉",
      "Keep smiling Manu 💖",
      "Shine bright Manu 🌟",
      "Lots of love Manu 💕",
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

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = (e) => {
      if (!paintingRef.current) return;
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#ff2e63";
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    };

    const startPaint = () => (paintingRef.current = true);
    const stopPaint = () => {
      paintingRef.current = false;
      ctx.beginPath();
    };

    canvas.addEventListener("mousedown", startPaint);
    canvas.addEventListener("mouseup", stopPaint);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", startPaint);
      canvas.removeEventListener("mouseup", stopPaint);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  const openGift = () => {
    for (let i = 0; i < 100; i++) {
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
      <header>
        <h1>Happy Birthday Manu 🎨💖</h1>
        <p>For the most talented artist & best friend ever</p>

        <button onClick={() => setShowSecret(true)}>Open Message 💌</button>

        {showSecret && (
          <div id="secret">
            Happy Birthday, Manu.
            <br />
            Keep creating, keep dreaming, and keep being yourself.
          </div>
        )}

        <img
          src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
          alt="gift"
          className="gift"
          onClick={openGift}
        />
      </header>

      <h2 className="draw-title">Draw Something Bestie 🎨</h2>
      <canvas ref={canvasRef} width={600} height={400} id="paint" />
    </div>
  );
}