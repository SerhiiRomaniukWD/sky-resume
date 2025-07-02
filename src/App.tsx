import React from "react";

import { ReactBaner } from "./components/ReactBaner";
import { Header } from "./components/Header";
import { PrimaryBtn } from "./components/PrimaryBtn";

export const App: React.FC = () => {
  return (
    <div>
      <Header />

      <main className="min-h-screen [&>section]:px-20 [&>section]:h-screen">
        <section id="top" className="flex items-center justify-center gap-50">
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
              <PrimaryBtn text="Contact me" onClick={() => {}} />
            </div>
          </div>

          <ReactBaner />
        </section>

        <section className="" id="portfolio"></section>

        <section className="bg-primary-blue-light/50" id="skills"></section>

        <section className="" id="contacts"></section>
      </main>
    </div>
  );
};
