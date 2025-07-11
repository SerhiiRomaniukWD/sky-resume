import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";

import { SlotImage } from "./SlotImage";

import ArrowRightIcon from "../assets/icons/arrow-right.svg";
import ArrowLeftIcon from "../assets/icons/arrow-left.svg";

interface PortfolioItem {
  name: string;
  description: string;
  images: string[];
}

type Props = {
  items: PortfolioItem[];
  className?: string;
  withControls?: boolean;
};

export const CustomCarousel: React.FC<Props> = ({ items, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const handlePrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div
        className={clsx(
          "overflow-hidden h-full bg-primary-black mb-10",
          className,
        )}
        ref={emblaRef}
      >
        <ul className="flex h-full">
          {items.map((item, index) => (
            <li
              key={index}
              className={clsx(
                "flex-[0_0_100%] p-2 bg-primary-black text-white",
                "flex flex-col justify-center h-full",
              )}
            >
              <div>
                <h3 className="mb-20 font-bungee text-xl text-center">
                  {item.name}
                </h3>

                <p className="font-montserrat text-sm text-center mb-10">
                  {item.description}
                </p>

                <div>
                  <SlotImage newImg={item.images[0]} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          className="border border-primary-black p-3 rounded-md"
          onClick={handlePrev}
        >
          <ArrowLeftIcon />
        </button>

        <ul className="flex gap-2">
          <li
            className={clsx(
              "w-4 h-4  rounded-sm border border-primary-black",
              selectedIndex === 0 && "bg-primary-black",
            )}
          />
          <li
            className={clsx(
              "w-4 h-4  rounded-sm border border-primary-black",
              selectedIndex === 1 && "bg-primary-black",
            )}
          />
          <li
            className={clsx(
              "w-4 h-4  rounded-sm border border-primary-black",
              selectedIndex === 2 && "bg-primary-black",
            )}
          />
        </ul>

        <button
          type="button"
          className="border border-primary-black p-3 rounded-md"
          onClick={handleNext}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};
