import React from "react";

import { PrimaryBtn } from "./PrimaryBtn";
import { ReactBaner } from "./ReactBaner";

export const Intro: React.FC = () => {
  return (
    <section id="intro" className="flex items-center justify-center gap-50">
      <div className="font-montserrat max-w-[31rem]">
        <div className="mb-24">
          <p className="text-xl mb-3">Hi, I'm</p>
          <p className="text-5xl font-bungee">Serhii Romaniuk</p>
          <p className="text-base text-primary-black/80 w-full text-right">
            front-end developer
          </p>
        </div>

        <p className="text-sm text-right text-primary-black/60 mb-10">
          I'm passionate about crafting experiences that are engaging,
          accessible, and user-centric. I have two years of experience in
          developing web applications of varying complexity.
        </p>

        <div className="flex justify-end">
          <PrimaryBtn
            text="Contact me"
            onClick={() => (window.location.hash = "contacts")}
          />
        </div>
      </div>

      <ReactBaner />
    </section>
  );
};
