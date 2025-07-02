import React from "react";

import { ReactBaner } from "./components/ReactBaner";
import { Header } from "./components/Header";
import { PrimaryBtn } from "./components/PrimaryBtn";

export const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center mx-20 h-screen">
      <Header />

      <main className="relative h-[80vh] w-full bg-white">
        <section className="flex items-center gap-10 justify-between pt-40 pr-15">
          <div className="font-montserrat">
            <div className="mb-20">
              <p className="text-xl mb-3">Hi, I'm</p>
              <p className="text-5xl font-bungee">Serhii Romaniuk</p>
              <p className="text-base text-primary-black/80 w-full text-right">
                front-end developer
              </p>
            </div>

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
