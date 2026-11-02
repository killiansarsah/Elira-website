import React, { useState, useEffect, useRef } from 'react';

interface EliraLogoProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

export const EliraLogo: React.FC<EliraLogoProps> = ({ onClick, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let active = true;

    // Automated ambient sequence:
    // 1. Spin 360deg & Expand letters -> hold for 5.5s
    // 2. Collapse letters -> rest 2.5s -> repeat
    const runCycle = () => {
      if (!active) return;

      // Spin icon 360deg (flipping upside down on the way) & reveal "lira"
      setRotation((prev) => prev + 360);
      setIsExpanded(true);

      // Hold expanded wordmark for 5.5s
      timerRef.current = setTimeout(() => {
        if (!active) return;
        setIsExpanded(false);

        // Rest for 2.5s before the next cycle
        timerRef.current = setTimeout(() => {
          if (!active) return;
          runCycle();
        }, 2500);
      }, 5500);
    };

    // Auto-trigger on page entrance after 600ms
    const initialTimer = setTimeout(runCycle, 600);

    return () => {
      active = false;
      clearTimeout(initialTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleManualTrigger = () => {
    setIsHovered(true);
    setRotation((prev) => prev + 360);
    setIsExpanded(true);
  };

  const showWord = isExpanded || isHovered;

  return (
    <a
      href="#home"
      onClick={onClick}
      onMouseEnter={handleManualTrigger}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center gap-1.5 group select-none cursor-pointer py-1 ${className}`}
      aria-label="Elira Home"
      title="Elira"
    >
      {/* The Iconic Circular 'e' with 3D Coin-Spin Physics (Clean, Flat & Standalone) */}
      <div className="relative shrink-0 perspective-[600px]">
        <img
          src="/assets/elira/elira.png"
          alt="Elira"
          style={{ transform: `rotate(${rotation}deg)` }}
          className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        />
      </div>

      {/* Kinetic Typography Reveal: "l i r a" with refined natural kerning */}
      <div
        className={`flex items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          showWord ? 'max-w-[130px] opacity-100 ml-1.5 sm:ml-2' : 'max-w-0 opacity-0 ml-0'
        }`}
      >
        <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-xl sm:text-2xl tracking-[0.02em] text-white flex items-center whitespace-nowrap">
          <span
            className={`transition-all duration-300 delay-[50ms] inline-block ${
              showWord ? 'translate-x-0' : '-translate-x-2'
            }`}
          >
            l
          </span>
          <span
            className={`transition-all duration-300 delay-[100ms] inline-block text-[#fdff50] ${
              showWord ? 'translate-x-0' : '-translate-x-2'
            }`}
          >
            i
          </span>
          <span
            className={`transition-all duration-300 delay-[150ms] inline-block ${
              showWord ? 'translate-x-0' : '-translate-x-2'
            }`}
          >
            r
          </span>
          <span
            className={`transition-all duration-300 delay-[200ms] inline-block ${
              showWord ? 'translate-x-0' : '-translate-x-2'
            }`}
          >
            a
          </span>
        </span>
      </div>
    </a>
  );
};
