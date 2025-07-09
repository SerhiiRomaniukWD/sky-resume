import React, { useRef, useState, useEffect } from "react";

import { useWindowWidth } from "../hooks/useWindowWidth";

export const ReactBaner: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [angle, setAngle] = useState<number>(0);
  const width = useWindowWidth();

  const SIZE = width < 768 ? 280 : 420;
  const RADIUS = 10;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const mx = e.clientX;
      const my = e.clientY;

      const dx = mx - cx;
      const dy = my - cy;
      const rad = Math.atan2(dy, dx);
      setAngle(rad);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const dotX = SIZE / 2 + Math.cos(angle) * RADIUS;
  const dotY = SIZE / 2 + Math.sin(angle) * RADIUS;

  return (
    <div className="text-[#b8d7f2]">
      <svg
        ref={svgRef}
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ display: "block" }}
      >
        <ellipse
          cx={SIZE / 2}
          cy={SIZE / 2}
          rx={200}
          ry={54}
          fill="none"
          stroke="#212121"
          strokeWidth={12}
        />
        <ellipse
          cx={SIZE / 2}
          cy={SIZE / 2}
          rx={200}
          ry={54}
          fill="none"
          stroke="currentColor"
          strokeWidth={8}
        />
        <ellipse
          cx={SIZE / 2}
          cy={SIZE / 2}
          rx={200}
          ry={54}
          fill="none"
          stroke="#212121"
          strokeWidth={12}
          transform={`rotate(60 ${SIZE / 2} ${SIZE / 2})`}
        />
        <ellipse
          cx={SIZE / 2}
          cy={SIZE / 2}
          rx={200}
          ry={54}
          fill="none"
          stroke="currentColor"
          strokeWidth={8}
          transform={`rotate(60 ${SIZE / 2} ${SIZE / 2})`}
        />
        <ellipse
          cx={SIZE / 2}
          cy={SIZE / 2}
          rx={200}
          ry={54}
          fill="none"
          stroke="#212121"
          strokeWidth={12}
          transform={`rotate(120 ${SIZE / 2} ${SIZE / 2})`}
        />
        <ellipse
          cx={SIZE / 2}
          cy={SIZE / 2}
          rx={200}
          ry={54}
          fill="none"
          stroke="currentColor"
          strokeWidth={8}
          transform={`rotate(120 ${SIZE / 2} ${SIZE / 2})`}
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={34}
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <circle cx={dotX} cy={dotY} r={10} fill="#212121" />
        <circle cx={dotX + 2} cy={dotY - 2} r={3} fill="#fff" />
      </svg>
    </div>
  );
};
