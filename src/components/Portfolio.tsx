import React, { useState } from "react";
import clsx from "clsx";

import { useDebounce } from "../hooks/useDebounce";
import { SlotImage } from "./SlotImage";

interface PortfolioItem {
  name: string;
  description: string;
  images: string[];
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    name: "First project",
    description:
      "Developed an information platform from scratch as a solo developer. Translated business needs into a functional web app, implemented responsive design for all screen sizes, added custom animations, and optimized performance.",
    images: ["epn-0", "epn-1", "epn-2"],
  },
  {
    name: "Second project",
    description:
      "A large team project in which I was responsible for creating and adapting all interfaces, adding responsive layout, implementing third-party technologies, setting up APIs, and optimizing performance. I was also involved in API development to bring the project to a working version.",
    images: ["gtrf-0", "gtrf-1", "gtrf-2"],
  },
  {
    name: "Third project",
    description:
      "Solo development of a cafe-shop webiste, build from scratch based on business requirements. Implemented responsive layout, smoth UI animations, and performance optimizations. ",
    images: ["heritage-0", "heritage-1", "heritage-2"],
  },
];

export const Portfolio: React.FC = () => {
  const [activeItem, setActiveItem] = useState<null | PortfolioItem>(null);

  const debouncedItem = useDebounce(activeItem, 200);

  const handleSetActiveItem = (item: PortfolioItem) => {
    setActiveItem(item);
  };

  return (
    <section className="flex flex-col gap-28 2xl:gap-14 pt-50" id="portfolio">
      <div className="flex justify-between">
        <ul className="flex flex-col">
          {PORTFOLIO_ITEMS.map((item) => (
            <li
              key={item.name}
              className={clsx(
                "text-6xl 2xl:text-7xl font-bungee transition duration-150 ease-in-out pb-6 last:pb-0",
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
          <p
            className={clsx(
              "text-right text-lg text-primary-black/60 font-montserrat max-w-[30rem] pr-20 2xl:pr-30 duration-300 scale-0",
              activeItem && "scale-100",
            )}
          >
            {debouncedItem?.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 pr-10">
        <SlotImage newImg={debouncedItem ? debouncedItem.images[0] : "epn-0"} />
        <SlotImage
          newImg={debouncedItem ? debouncedItem.images[1] : "gtrf-0"}
        />
        <SlotImage
          newImg={debouncedItem ? debouncedItem.images[2] : "heritage-0"}
        />
      </div>
    </section>
  );
};
