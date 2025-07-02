import React from "react";

import { Nav } from "./components/Nav";
import { Logo } from "./components/Logo";
import { ReactBaner } from "./components/ReactBaner";

export const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center mx-20 h-screen">
      <div className="relative h-[80vh] w-full bg-white p-10">
        <Logo />

        <Nav />

				<ReactBaner />
      </div>
    </div>
  );
};
