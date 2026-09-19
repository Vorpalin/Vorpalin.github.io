import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface DotsBackgroundProps {
  count?: number;
  maxSpeed?: number;
  linkDistance?: number;
}

function DotsBackground({ count = 70, maxSpeed = 0.5, linkDistance = 130 }: DotsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let dots: Dot[] = [];

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Le nombre de points s'adapte à la surface de l'écran
      const n = Math.max(20, Math.round((count * width * height) / (1440 * 900)));
      dots = Array.from({ length: n }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-maxSpeed, maxSpeed),
        vy: rand(-maxSpeed, maxSpeed),
        r: rand(1, 2.2),
      }));
    };

    const draw = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const rgb = isDark ? "170, 125, 255" : "130, 69, 236";

      ctx.clearRect(0, 0, width, height);

      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${isDark ? 0.7 : 0.5})`;
        ctx.fill();
      }

      if (linkDistance > 0) {
        const maxSq = linkDistance * linkDistance;
        for (let i = 0; i < dots.length; i++) {
          for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const sq = dx * dx + dy * dy;
            if (sq < maxSq) {
              const alpha = (1 - sq / maxSq) * 0.25;
              ctx.beginPath();
              ctx.moveTo(dots[i].x, dots[i].y);
              ctx.lineTo(dots[j].x, dots[j].y);
              ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }
    };

    const update = () => {
      for (const d of dots) {
        // Petite dérive aléatoire pour un mouvement organique
        d.vx += rand(-0.02, 0.02);
        d.vy += rand(-0.02, 0.02);
        d.vx = Math.max(-maxSpeed, Math.min(maxSpeed, d.vx));
        d.vy = Math.max(-maxSpeed, Math.min(maxSpeed, d.vy));

        d.x += d.vx;
        d.y += d.vy;

        // Réapparition de l'autre côté de l'écran
        if (d.x < -10) d.x = width + 10;
        if (d.x > width + 10) d.x = -10;
        if (d.y < -10) d.y = height + 10;
        if (d.y > height + 10) d.y = -10;
      }
    };

    const loop = () => {
      update();
      draw();
      raf = requestAnimationFrame(loop);
    };

    init();
    if (reduceMotion) {
      draw(); // image fixe si l'utilisateur préfère moins d'animations
    } else {
      loop();
    }

    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, [count, maxSpeed, linkDistance]);

  return (
    <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
  );
}

export default DotsBackground;
