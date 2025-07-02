import React from "react";

import LogoIcon from "../assets/icons/logo.svg";

export const Logo: React.FC = () => {
  return (
    <a
      href="#top"
      className="fixed top-0 left-0 px-20 pt-10 font-bungee uppercase text-4xl/10 z-10"
    >
      <LogoIcon />
    </a>
  );
};
