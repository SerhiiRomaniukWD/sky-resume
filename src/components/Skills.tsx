import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export const Skills: React.FC = () => {
  const [isScrolledTo, setIsScrolledTo] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsScrolledTo(entry.isIntersecting && entry.intersectionRatio > 0.05);
      },
      {
        root: null,
        threshold: 0.5,
      },
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="!px-0" id="skills">
      <div
        ref={sectionRef}
        className={clsx(
          "area transition-all duration-500",
          isScrolledTo ? "rounded-none" : "rounded-[20rem]",
        )}
      >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="px-20 py-40">
        <h2 className="font-bungee text-4xl">
          I am a problem <span className="text-white">solver</span>
        </h2>
      </div>
    </section>
  );
};
