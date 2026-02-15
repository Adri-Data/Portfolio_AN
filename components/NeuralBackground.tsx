
import React, { useEffect, useRef } from 'react';
import { COLORS } from '../constants';

const NeuralBackground: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -2000, y: -2000 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 120;
    const connectionDistance = 120;
    const friction = 0.985;
    const mouseRadius = 150;
    const mouseForce = 0.04;
    const maxClusterSize = 8; // Only the closest 8 particles follow the mouse

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      originalX: number;
      originalY: number;
      seed: number;
      distToMouse: number = 9999;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.originalX = this.x;
        this.originalY = this.y;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.size = Math.random() * 4 + 2;
        this.seed = Math.random() * 100;
        const colorKeys = Object.keys(COLORS) as (keyof typeof COLORS)[];
        this.color = COLORS[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
      }

      update(w: number, h: number, mouse: { x: number, y: number }, time: number, isAllowedToCluster: boolean) {
        this.vx *= friction;
        this.vy *= friction;

        // Calm autonomous drift
        this.vx += Math.sin(time * 0.4 + this.seed) * 0.015;
        this.vy += Math.cos(time * 0.4 + this.seed) * 0.015;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        this.distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (this.distToMouse < mouseRadius && isAllowedToCluster) {
          const force = (mouseRadius - this.distToMouse) / mouseRadius;
          this.vx += dx * force * mouseForce;
          this.vy += dy * force * mouseForce;
        } else {
          // Subtle return to base position
          const ox = this.originalX - this.x;
          const oy = this.originalY - this.y;
          this.vx += ox * 0.002;
          this.vy += oy * 0.002;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -150) this.x = w + 150;
        if (this.x > w + 150) this.x = -150;
        if (this.y < -150) this.y = h + 150;
        if (this.y > h + 150) this.y = -150;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.shadowBlur = 6;
        context.shadowColor = this.color;
        context.globalAlpha = 0.5;
        context.fill();
        context.shadowBlur = 0;
        context.globalAlpha = 1.0;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle(canvas.width, canvas.height));
    };

    const animate = () => {
      timeRef.current += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Calculate and tag particles for clustering limit
      const sortedByDistance = [...particles].sort((a, b) => {
        const dax = mouseRef.current.x - a.x;
        const day = mouseRef.current.y - a.y;
        const dbx = mouseRef.current.x - b.x;
        const dby = mouseRef.current.y - b.y;
        return (dax * dax + day * day) - (dbx * dbx + dby * dby);
      });

      const clusteredIds = new Set(sortedByDistance.slice(0, maxClusterSize).map(p => particles.indexOf(p)));

      // 2. Update and draw
      particles.forEach((p, idx) => {
        p.update(canvas.width, canvas.height, mouseRef.current, timeRef.current, clusteredIds.has(idx));
        p.draw(ctx);
      });

      // 3. Draw Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const mdx = mouseRef.current.x - particles[i].x;
            const mdy = mouseRef.current.y - particles[i].y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

            const baseOpacity = 1 - (dist / connectionDistance);
            const isNearMouse = mDist < mouseRadius && clusteredIds.has(i);
            const mouseBonus = isNearMouse ? (1 - mDist / mouseRadius) * 0.5 : 0;
            const finalOpacity = (baseOpacity * 0.15) + mouseBonus;

            ctx.beginPath();
            ctx.lineWidth = isNearMouse ? 1.5 : 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            const strokeColor = darkMode ? '255, 255, 255' : '66, 133, 244';
            ctx.strokeStyle = `rgba(${strokeColor}, ${finalOpacity * 0.45})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-100 dark:opacity-40"
    />
  );
};

export default NeuralBackground;
