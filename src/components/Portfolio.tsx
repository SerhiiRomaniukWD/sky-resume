import React, { useState } from "react";
import clsx from "clsx";

import { useDebounce } from "../hooks/useDebounce";

interface PortfolioItem {
  name: string;
  description: string;
  images: string[];
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    name: "First project",
    description:
      "I'm passionate about crafting experiences that are engaging, accessible, and user-centric.",
    images: ["epn-0", "epn-1", "epn-2"],
  },
  {
    name: "Second project",
    description:
      "I'm passionate about crafting experiences that are engaging, accessible, and user-centric.",
    images: ["gtrf-0", "gtrf-1", "gtrf-2"],
  },
  {
    name: "Third project",
    description:
      "I'm passionate about crafting experiences that are engaging, accessible, and user-centric.",
    images: ["epn-0", "epn-1", "epn-2"],
  },
];

export const Portfolio: React.FC = () => {
  const [activeItem, setActiveItem] = useState<null | PortfolioItem>(null);

  const debouncedItem = useDebounce(activeItem, 200);

  const handleSetActiveItem = (item: PortfolioItem) => {
    setActiveItem(item);
  };

  return (
    <section className="flex flex-col gap-14 pt-50" id="portfolio">
      <div className="flex justify-between">
        <ul className="flex flex-col gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <li
              key={item.name}
              className={clsx(
                "text-7xl font-bungee transition duration-150 ease-in-out",
                "hover:cursor-pointer hover:translate-x-7",
              )}
              onMouseEnter={() => handleSetActiveItem(item)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div>
          <p className="text-lg text-primary-black/60 font-montserrat max-w-[30rem] pr-30">
            {debouncedItem?.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 pr-10">
        <img
          className="rounded-[10px] border-[2px] border-primary-black opacity-80"
          src={
            debouncedItem
              ? `/images/${debouncedItem.images[0]}.webp`
              : "/images/epn-0.webp"
          }
          alt="website image"
        />
        <img
          className="rounded-[10px] border-[2px] border-primary-black opacity-80"
          src={
            debouncedItem
              ? `/images/${debouncedItem.images[1]}.webp`
              : "/images/gtrf-0.webp"
          }
          alt="website image"
        />
        <img
          className="rounded-[10px] border-[2px] border-primary-black opacity-80"
          src={
            debouncedItem
              ? `/images/${debouncedItem.images[2]}.webp`
              : "/images/epn-2.webp"
          }
          alt="website image"
        />
      </div>
    </section>
  );
};
