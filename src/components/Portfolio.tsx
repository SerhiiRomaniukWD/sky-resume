import React, { useState } from "react";
import clsx from "clsx";

import { useDebounce } from "../hooks/useDebounce";
import { SlotImage } from "./SlotImage";
import { CustomCarousel } from "./CustomCarousel";

interface PortfolioItem {
  name: string;
  description: string;
  images: string[];
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    name: "First project",
    description:
      "Designed and created from scratch in collaboration with a UI/UX design team. React-based infrastructure with custom architecture, ensuring fast and optimal performance.",
    images: ["epn-0", "epn-1", "epn-2"],
  },
  {
    name: "Second project",
    description:
      "Worked in development team, enhancing code reusability and efficency, impoving website accessibility and user experience, API integration. Also contributed to the backend for fixing bugs and implementing new features.",
    images: ["gtrf-0", "gtrf-1", "gtrf-2"],
  },
  {
    name: "Third project",
    description:
      "Designed and implemented a responsive and user-friendly interface, ensuring optimization and interaction. Collaborated with the team to optimize performance and enhance user experience.",
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
    <section className="lg:pt-50" id="portfolio">
      <div className="flex lg:hidden pt-10 pb-30 h-full">
        <CustomCarousel items={PORTFOLIO_ITEMS} />
      </div>

      <div className="hidden lg:flex flex-col gap-28 2xl:gap-14">
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
                "text-right text-primary-black/60 font-montserrat max-w-[30rem] pr-20 2xl:pr-30 duration-300 scale-0",
                activeItem && "scale-100",
              )}
            >
              {debouncedItem?.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 pr-10">
          <SlotImage
            newImg={debouncedItem ? debouncedItem.images[0] : "epn-0"}
          />
          <SlotImage
            newImg={debouncedItem ? debouncedItem.images[1] : "gtrf-0"}
          />
          <SlotImage
            newImg={debouncedItem ? debouncedItem.images[2] : "heritage-0"}
          />
        </div>
      </div>
    </section>
  );
};
