import React from "react";
import clsx from "clsx";

const PORTFOLIO_ITEMS = [
  {
    name: "First project",
  },
  {
    name: "Second project",
  },
  {
    name: "Third project",
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section className="flex items-center" id="portfolio">
      <ul className="flex flex-col gap-6">
        {PORTFOLIO_ITEMS.map((item) => (
          <li
            key={item.name}
            className={clsx(
              "text-7xl font-bungee transition duration-150 ease-in-out",
              "hover:cursor-pointer hover:translate-x-7",
            )}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
