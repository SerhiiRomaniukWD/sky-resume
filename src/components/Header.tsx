import React from "react";

import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header: React.FC = () => {
  return (
    <header className="hidden lg:block">
      <Logo />

      <Nav />
    </header>
  );
};
