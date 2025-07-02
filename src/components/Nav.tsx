import React, { useEffect, useState } from "react";
import clsx from "clsx";

const NAVIGATION_LINKS = [
  {
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contacts",
    href: "#contacts",
  },
];

export const Nav: React.FC = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);

    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <nav className="absolute top-0 right-0 p-10">
      <ul
        className="flex text-base text-primary-black/70 font-montserrat"
        style={{ writingMode: "vertical-lr" }}
      >
        {NAVIGATION_LINKS.map((link) => (
          <li
            className={clsx(
              "min-h-18 transition duration-150 ease-in-out text-center",
              hash === link.href
                ? "text-primary-black font-semibold"
                : "hover:scale-y-105 hover:text-primary-black",
            )}
            key={link.name}
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
