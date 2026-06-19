import { useEffect, useRef } from "react";

export default function StarfieldBackground({ darkMode }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const darkRef = useRef(darkMode);

  useEffect(() => {
    darkRef.current = darkMode;
    document.body.style.background = darkMode ? "#0d0f1a" : "#dce3ef";
  }, [darkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, stars, particles, t = 0;

    const DARK = {
      starColor: "rgba(180, 190, 210, ",
      particleColor: "rgba(150, 165, 195, ",
      lineColor: "rgba(130, 145, 175, ",
    };
    const LIGHT = {
      starColor: "rgba(50, 65, 110, ",
      particleColor: "rgba(60, 75, 130, ",
      lineColor: "rgba(70, 85, 140, ",
    };

    function palette() {
      return darkRef.current ? DARK : LIGHT;
    }

    function init() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        speed: Math.random() * 0.008 + 0.002,
        phase: Math.random() * Math.PI * 2,
      }));
      particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.5 + 0.3,
      }));
    }

    function draw() {
      const p = palette();
      ctx.clearRect(0, 0, W, H);

      stars.forEach((s) => {
        const base = darkRef.current ? 0.15 : 0.45;
        const amp = darkRef.current ? 0.35 : 0.40;
        const alpha = base + amp * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = p.starColor + alpha + ")";
        ctx.fill();
      });

      particles.forEach((a, i) => {
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const lineOpacity = (1 - dist / 120) * (darkRef.current ? 0.2 : 0.55);
            ctx.strokeStyle = p.lineColor + lineOpacity + ")";
            ctx.lineWidth = darkRef.current ? 0.7 : 1.0;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = p.particleColor + (darkRef.current ? a.alpha * 0.5 : a.alpha * 0.85) + ")";
        ctx.fill();
      });

      t += 0.05;
      animRef.current = requestAnimationFrame(draw);
    }

    let lastW = window.innerWidth;

    function onResize() {
      const newW = window.innerWidth;
      if (newW === lastW) return;
      lastW = newW;
      cancelAnimationFrame(animRef.current);
      init();
      draw();
    }

    init();
    draw();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      document.body.style.background = "";
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        touchAction: "none",
        display: "block",
      }}
      aria-hidden="true"
    />
  );
}