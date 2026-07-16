import React, { useEffect, useRef } from "react";

// Interactive "data network" layer: drifting nodes that link to their neighbours
// and react to the cursor. Pure Canvas 2D — no 3D library, no new dependencies.
// Respects prefers-reduced-motion (renders a single static frame instead).
const NetworkCanvas = ({ density = 0.00008, color = "255,255,255" }) => {
  const canvasRef = useRef(null);
  const pointer = useRef({ x: -9999, y: -9999 });
  const raf = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let nodes = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Node count scales with area, capped so big screens stay cheap.
      const count = Math.min(90, Math.max(28, Math.floor(w * h * density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const LINK = 130;
      const PULL = 150;

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }

        // Cursor attraction — the "interactive" part.
        const dx = pointer.current.x - n.x;
        const dy = pointer.current.y - n.y;
        const d = Math.hypot(dx, dy);
        if (d < PULL && d > 0) {
          const f = (1 - d / PULL) * 0.6;
          n.x += (dx / d) * f;
          n.y += (dy / d) * f;
        }
      }

      // Links between near neighbours
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK) {
            ctx.strokeStyle = `rgba(${color},${(1 - dist / LINK) * 0.28})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes — brighter near the cursor
      for (const n of nodes) {
        const d = Math.hypot(pointer.current.x - n.x, pointer.current.y - n.y);
        const glow = d < PULL ? 1 - d / PULL : 0;
        ctx.fillStyle = `rgba(${color},${0.35 + glow * 0.6})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + glow * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) raf.current = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      pointer.current = { x: -9999, y: -9999 };
    };

    build();
    draw();
    window.addEventListener("resize", build);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", build);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [density, color]);

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />;
};

export default NetworkCanvas;
