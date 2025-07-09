import React from "react";

import { PrimaryBtn } from "./PrimaryBtn";
import { ReactBaner } from "./ReactBaner";

export const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="flex flex-col lg:flex-row items-center justify-center gap-30 2xl:gap-50 lg:pr-[7rem] bg-[#b8d7f2]"
    >
      <div className="font-montserrat max-w-[31rem] rounded-xl p-2 py-20">
        <div className="mb-24">
          <p className="text-xl mb-3">Hi, I'm</p>
          <p className="text-5xl font-bungee">Serhii Romaniuk</p>
          <p className="text-base text-primary-black/80 w-full text-right">
            front-end developer
          </p>
        </div>

        <p className="text-sm text-center lg:text-right text-primary-black/60 mb-30 lg:mb-10">
          I'm passionate about crafting experiences that are engaging,
          accessible, and user-centric. I have two years of experience in
          developing web applications of varying complexity.
        </p>

        <div className="flex justify-center lg:justify-end">
          <PrimaryBtn
            text="Contact me"
            onClick={() => (window.location.hash = "contacts")}
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <ReactBaner />
      </div>
    </section>
  );
};
