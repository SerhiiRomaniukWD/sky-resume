import React from "react";

import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Contacts } from "./components/Contacts";
import { Intro } from "./components/Intro";

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen [&>section]:px-2 lg:[&>section]:px-20 [&>section]:h-screen [&>section]:min-h-[68rem]">
        <Intro />

        <Portfolio />

        <Skills />

        <Contacts />
      </main>
    </>
  );
};
