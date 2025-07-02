import React from "react";
import clsx from "clsx";

type Props = {
  text: string;
  onClick: () => void;
  className?: string;
  type?: "button" | "submit";
};

export const PrimaryBtn: React.FC<Props> = ({
  text,
  onClick,
  className,
  type = "button",
}) => {
  return (
    <button
      className={clsx(
        "text-white bg-primary-black px-6 py-2 rounded-full text-lg font-mediumt",
        "hover:bg-white hover:text-primary-black transition ease-in-out hover:outline-[1px]",
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
