/**
 * AnimatedBackground - Premium hero background
 * Design: Premium Minimal with Spatial Depth
 *
 * DARK MODE strategy: Glowing light particles on near-black → classic hacker-chic glow
 * LIGHT MODE strategy: Deep cool-slate base (not white) so particles have real contrast.
 *   The base is oklch(0.88 0.018 250) - a rich blue-grey like premium paper.
 *   Particles are darker/more saturated, bloom gradients are stronger and more colourful.
 *
 * Layers (bottom to top):
 *   1. Base tint layer - sets the atmospheric background colour for light mode
 *   2. Canvas: slow-drifting particle mesh with accent-coloured nodes + connecting lines
 *   3. Large radial gradient bloom - top-right corner, accent colour
 *   4. Secondary bloom - bottom-left, accent colour, offset phase
 *   5. Tertiary bloom - centre, subtle
 *   6. Fine dot grid overlay - adds texture and depth
 *   7. Directional vignette - edges pull inward for depth
 *   8. Bottom fade - smooth transition into next section
 */

import { useEffect, useRef } from 'react';
import { useAccent, ACCENT_OPTIONS } from '@/contexts/AccentContext';
import { useTheme } from '@/contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [99, 102, 241];
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const { accent } = useAccent();
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  // Get accent hex for current theme
  const accentOption = ACCENT_OPTIONS.find(o => o.id === accent) ?? ACCENT_OPTIONS[1];
  const accentHex = isDark ? accentOption.dark : accentOption.light;
  const [r, g, b] = hexToRgb(accentHex);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    }

    function initParticles() {
      // More particles in light mode for denser, more visible mesh
      const count = isDark
        ? Math.min(Math.floor((width * height) / 10000), 70)
        : Math.min(Math.floor((width * height) / 7500), 90);
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: isDark ? Math.random() * 2 + 0.8 : Math.random() * 2.5 + 1.2,
        opacity: Math.random() * 0.4 + 0.2,
      }));
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;

      // Light mode: particles need to be darker/more saturated to show on the tinted base
      // Dark mode: particles glow bright on dark background
      const nodeOpacity = isDark ? 0.75 : 0.85;
      const lineOpacity = isDark ? 0.2 : 0.38;
      const glowMultiplier = isDark ? 1 : 1.6; // bigger glow halo in light mode
      const connectionDist = Math.min(width, height) * (isDark ? 0.28 : 0.32);

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      // Draw connections - thicker lines in light mode
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = lineOpacity * (1 - dist / connectionDist);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.lineWidth = isDark ? 0.6 : 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw nodes with glow
      for (const p of particles) {
        const glowRadius = p.radius * 4 * glowMultiplier;
        // Outer glow halo
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${p.opacity * nodeOpacity * 0.55})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity * nodeOpacity})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [accent, theme, r, g, b, isDark]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* Layer 0 (light only): Atmospheric tinted base - deep cool-slate so particles have contrast */}
      {!isDark && (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, oklch(0.87 0.022 255) 0%, oklch(0.89 0.016 245) 50%, oklch(0.86 0.024 260) 100%)',
          }}
        />
      )}

      {/* Layer 1: Particle mesh canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 1 }}
      />

      {/* Layer 2: Large bloom - top-right */}
      <div
        className="absolute rounded-full accent-transition"
        style={{
          top: '-25%',
          right: '-10%',
          width: '70vw',
          height: '70vw',
          maxWidth: '800px',
          maxHeight: '800px',
          background: isDark
            ? `radial-gradient(circle at center, rgba(${r},${g},${b},0.18) 0%, rgba(${r},${g},${b},0.06) 40%, transparent 65%)`
            : `radial-gradient(circle at center, rgba(${r},${g},${b},0.45) 0%, rgba(${r},${g},${b},0.18) 40%, transparent 65%)`,
          filter: isDark ? 'none' : 'blur(40px)',
          animation: 'bloom-drift-1 20s ease-in-out infinite',
        }}
      />

      {/* Layer 3: Secondary bloom - bottom-left */}
      <div
        className="absolute rounded-full accent-transition"
        style={{
          bottom: '-20%',
          left: '-8%',
          width: '55vw',
          height: '55vw',
          maxWidth: '600px',
          maxHeight: '600px',
          background: isDark
            ? `radial-gradient(circle at center, rgba(${r},${g},${b},0.12) 0%, rgba(${r},${g},${b},0.04) 40%, transparent 65%)`
            : `radial-gradient(circle at center, rgba(${r},${g},${b},0.35) 0%, rgba(${r},${g},${b},0.12) 40%, transparent 65%)`,
          filter: isDark ? 'none' : 'blur(50px)',
          animation: 'bloom-drift-2 26s ease-in-out infinite',
        }}
      />

      {/* Layer 4: Tertiary bloom - centre-right */}
      <div
        className="absolute rounded-full accent-transition"
        style={{
          top: '25%',
          left: '45%',
          width: '40vw',
          height: '40vw',
          maxWidth: '420px',
          maxHeight: '420px',
          background: isDark
            ? `radial-gradient(circle at center, rgba(${r},${g},${b},0.07) 0%, transparent 65%)`
            : `radial-gradient(circle at center, rgba(${r},${g},${b},0.22) 0%, transparent 65%)`,
          filter: isDark ? 'none' : 'blur(60px)',
          animation: 'bloom-drift-3 16s ease-in-out infinite',
        }}
      />

      {/* Layer 5: Fine dot grid - texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? 'rgba(255,255,255,0.055)' : 'rgba(255,255,255,0.25)'} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Layer 6: Directional vignette - pulls edges inward for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, oklch(0.09 0.005 285 / 0.6) 100%)'
            : 'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 35%, oklch(0.82 0.025 255 / 0.65) 100%)',
        }}
      />

      {/* Layer 7: Top edge fade - blends into navbar */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '80px',
          background: isDark
            ? 'linear-gradient(to bottom, oklch(0.09 0.005 285 / 0.4) 0%, transparent 100%)'
            : 'linear-gradient(to bottom, oklch(0.86 0.022 255 / 0.5) 0%, transparent 100%)',
        }}
      />

      {/* Layer 8: Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '140px',
          background: isDark
            ? 'linear-gradient(to top, oklch(0.09 0.005 285) 0%, transparent 100%)'
            : 'linear-gradient(to top, oklch(0.97 0.003 250) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
