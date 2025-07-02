import React from "react";

import { ReactBaner } from "./components/ReactBaner";
import { Header } from "./components/Header";
import { PrimaryBtn } from "./components/PrimaryBtn";

export const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center mx-20 h-screen">
      <Header />

      <main className="relative h-[80vh] w-full bg-white">
        <section className="flex items-center justify-center gap-50 pt-30 pr-6">
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
      </main>
    </div>
  );
};
