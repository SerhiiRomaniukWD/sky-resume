import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import JSIcon from "../assets/icons/js.svg";
import TSIcon from "../assets/icons/ts.svg";
import ViteIcon from "../assets/icons/vite.svg";
import GitIcon from "../assets/icons/git.svg";
import ReduxIcon from "../assets/icons/redux.svg";
import ZustandIcon from "../assets/icons/zustand.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";
import ReactIcon from "../assets/icons/react.svg";

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
    <section className="flex flex-col justify-between !px-0 pb-40" id="skills">
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

      <div className="px-20 pt-40 overflow-hidden">
        <h2
          className={clsx(
            "font-bungee text-4xl mb-20 translate-x-[calc(50%-15rem)] duration-500",
            isScrolledTo && "!translate-x-0",
          )}
        >
          I am a problem <span className="text-white">solver</span>
        </h2>

        <div
          className={clsx(
            "flex flex-col translate-x-[calc(50%-19rem)] duration-500",
            isScrolledTo && "!translate-x-[calc(100%-36rem)]",
          )}
        >
          <p
            className={clsx(
              "w-[38rem] mb-8 font-montserrat text-primary-black/60 text-center pr-0",
              isScrolledTo && "text-right pr-20",
            )}
          >
            I'm Serhii, a Software Developer working remotly in sunny Italy.
          </p>

          <p
            className={clsx(
              "w-[38rem] font-montserrat text-primary-black/60 text-center pr-0",
              isScrolledTo && "text-right pr-20",
            )}
          >
            Over the past 2 years, I've worked in the web industry, in
            particular, I have been involved in front-end development and a
            little bit of back-end. I am satisfied with my experience and
            continue to work on getting better.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <ul
          className={clsx(
            "grid grid-cols-4 gap-6 font-montserrat text-2xl text-primary-black/60",
            "[&>li]:flex [&>li]:gap-2 [&>li]:justify-center [&>li]:items-center",
          )}
        >
          <li>
            <JSIcon /> JavaScript
          </li>
          <li>
            <TSIcon /> TypeScript
          </li>
          <li>
            <ReactIcon /> React
          </li>
          <li>
            <TailwindIcon /> Tailwindcss
          </li>

          <li>
            <ReduxIcon /> Redux
          </li>
          <li>
            <ZustandIcon /> Zustand
          </li>
          <li>
            <GitIcon /> Git
          </li>
          <li>
            <ViteIcon /> Vite
          </li>
        </ul>
      </div>

      <div
        className={clsx(
          "flex flex-col translate-x-[calc(50%-19rem)] duration-500",
          isScrolledTo && "!translate-x-[calc(100%-36rem)]",
        )}
      >
        <p
          className={clsx(
            "w-[38rem] font-montserrat text-primary-black/60 text-center pl-0",
            isScrolledTo && "text-left pl-20",
          )}
        >
          Over the past 2 years, I've worked in the web industry, in particular,
          I have been involved in front-end development and a little bit of
          back-end. I am satisfied with my experience and continue to work on
          getting better.
        </p>
      </div>
    </section>
  );
};
