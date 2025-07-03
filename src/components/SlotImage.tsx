import React, { useEffect, useState } from "react";
import clsx from "clsx";

interface SlotImageProps {
  newImg: string;
}

export const SlotImage: React.FC<SlotImageProps> = ({ newImg }) => {
  const [currentImg, setCurrentImg] = useState(newImg);
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    if (newImg !== currentImg) {
      setBlinking(true);

      const timeout = setTimeout(() => {
        setCurrentImg(newImg);
        setBlinking(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [newImg, currentImg]);

  return (
    <div className="relative w-full xl:h-[19rem] 2xl:h-[22rem] overflow-hidden border-[2px] border-primary-black rounded-lg opacity-90">
      <img
        src={`/images/${currentImg}.webp`}
        alt=""
        className="w-full h-full object-cover"
      />

      <div
        className={clsx(
          "absolute top-0 inset-0 w-full bg-primary-black duration-200",
          "origin-bottom",
          blinking ? "h-1/2 border-b border-primary-black" : "h-0",
        )}
      />

      <div
        className={clsx(
          "absolute bottom-0 left-0 w-full bg-primary-black duration-200",
          "origin-top",
          blinking ? "h-1/2 border-t border-primary-black" : "h-0",
        )}
      />
    </div>
  );
};
