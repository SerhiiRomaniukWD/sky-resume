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
    <section id="skills" className="flex justify-center !px-0 lg:!px-20">
      <div
        ref={sectionRef}
        className={clsx(
          "area transition-all duration-500 bg-[#b8d7f2]",
          isScrolledTo ? "rounded-none" : "lg:rounded-[20rem]",
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

      <div className="py-10 lg:py-20 lg:pt-30 px-2 flex flex-col justify-between w-full">
        <div>
          <h2
            className={clsx(
              "font-bungee text-2xl lg:text-4xl mb-10 lg:mb-20 lg:translate-x-[calc(50%-15rem)] duration-500",
              isScrolledTo && "lg:!translate-x-20",
            )}
          >
            I am a problem <span className="text-white">solver</span>
          </h2>

          <div
            className={clsx(
              "flex flex-col lg:translate-x-[calc(50%-19rem)] duration-500",
              isScrolledTo && "lg:translate-x-[calc(100%-36rem)]",
            )}
          >
            <p
              className={clsx(
                "lg:w-[38rem] mb-8 font-montserrat text-primary-black/60 text-center pr-0",
                isScrolledTo && "text-right lg:pr-20",
              )}
            >
              I'm Serhii, a Software Developer working remotly in sunny Italy.
            </p>

            <p
              className={clsx(
                "lg:w-[38rem] font-montserrat text-primary-black/60 text-center pr-0",
                isScrolledTo && "text-right lg:pr-20",
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
              "grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 font-montserrat lg:text-2xl text-primary-black/60",
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
            "flex flex-col lg:translate-x-[calc(50%-19rem)] duration-500",
            isScrolledTo && "lg:translate-x-[calc(50%-36rem)]",
          )}
        >
          <p
            className={clsx(
              "lg:w-[38rem] font-montserrat text-primary-black/60 text-center pl-0",
              isScrolledTo && "text-left",
            )}
          >
            I've progressed from a complete beginner to taking full ownership of
            web application development. This encompasses everything from
            designing and building RESTful APIs to maintaining ongoing projects
            and creating browser extensions.
          </p>
        </div>
      </div>
    </section>
  );
};
