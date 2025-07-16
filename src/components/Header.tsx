import React from "react";

import { Nav } from "./Nav";

export const Header: React.FC = () => {
  return (
    <header className="hidden lg:block">
      <Nav />
    </header>
  );
};
