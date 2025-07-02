import React from "react";
import clsx from "clsx";

import { ReactBaner } from "./components/ReactBaner";
import { Header } from "./components/Header";

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
              <button
                className={clsx(
                  "text-white bg-primary-black px-6 py-2 rounded-full text-lg font-mediumt",
                  "hover:bg-white hover:text-primary-black transition ease-in-out hover:outline-[1px]",
                )}
                type="button"
              >
                Contact me
              </button>
            </div>
          </div>

          <ReactBaner />
        </section>
      </main>
    </div>
  );
};
