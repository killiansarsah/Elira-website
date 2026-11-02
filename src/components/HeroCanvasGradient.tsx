import { useEffect, useRef } from 'react';

export const HeroCanvasGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = 850);

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = canvas.width = rect?.width || window.innerWidth;
      height = canvas.height = rect?.height || 850;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Living Gradient Orbs config
    const orbs = [
      {
        // 1. Electric Yellow (Brand Core)
        color: [253, 255, 80],
        baseAlpha: 0.48,
        radiusRatio: 0.45,
        speedX: 0.0009,
        speedY: 0.0012,
        speedR: 0.0015,
        baseX: 0.42,
        baseY: 0.32,
        rangeX: 0.22,
        rangeY: 0.18,
      },
      {
        // 2. Deep Electric Violet
        color: [134, 80, 255],
        baseAlpha: 0.55,
        radiusRatio: 0.52,
        speedX: 0.0007,
        speedY: 0.001,
        speedR: 0.0011,
        baseX: 0.65,
        baseY: 0.42,
        rangeX: 0.24,
        rangeY: 0.2,
      },
      {
        // 3. Vibrant Cyan / Azure Blue
        color: [14, 165, 233],
        baseAlpha: 0.46,
        radiusRatio: 0.42,
        speedX: 0.0011,
        speedY: 0.0008,
        speedR: 0.0014,
        baseX: 0.28,
        baseY: 0.62,
        rangeX: 0.2,
        rangeY: 0.16,
      },
      {
        // 4. Luminous Magenta / Orchid
        color: [217, 70, 239],
        baseAlpha: 0.42,
        radiusRatio: 0.46,
        speedX: 0.0008,
        speedY: 0.0013,
        speedR: 0.0012,
        baseX: 0.72,
        baseY: 0.68,
        rangeX: 0.22,
        rangeY: 0.18,
      },
    ];

    let startTime = performance.now();

    const render = (now: number) => {
      const elapsed = now - startTime;

      // Clear with base cosmic dark
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#050211';
      ctx.fillRect(0, 0, width, height);

      // Additive screen blend for radiant, glowing color intersections
      ctx.globalCompositeOperation = 'screen';

      const minDim = Math.min(width, height);

      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        const x = width * (orb.baseX + Math.sin(elapsed * orb.speedX + i * 1.5) * orb.rangeX);
        const y = height * (orb.baseY + Math.cos(elapsed * orb.speedY + i * 2.1) * orb.rangeY);
        const r = minDim * (orb.radiusRatio + 0.08 * Math.sin(elapsed * orb.speedR + i));

        const [red, green, blue] = orb.color;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(10, r));
        grad.addColorStop(0, `rgba(${red}, ${green}, ${blue}, ${orb.baseAlpha})`);
        grad.addColorStop(0.45, `rgba(${red}, ${green}, ${blue}, ${orb.baseAlpha * 0.55})`);
        grad.addColorStop(0.8, `rgba(${red}, ${green}, ${blue}, ${orb.baseAlpha * 0.15})`);
        grad.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, Math.max(10, r), 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover filter blur-[40px] opacity-90 transition-opacity duration-1000"
      />
    </div>
  );
};