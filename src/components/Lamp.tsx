import React, { useState } from "react";
import clsx from "clsx";

export const Lamp: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickLamp = () => setIsClicked((prevState) => !prevState);

  return (
    <div>
      <svg
        viewBox="0 0 600 600"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="98.9578912%"
            y1="7.93578593%"
            x2="41.944762%"
            y2="76.0921466%"
            id="linearGradient-1"
          >
            <stop
              stopColor={clsx(isClicked ? "#2e7fcf" : "white")}
              stopOpacity="0.1"
              offset="20%"
            ></stop>
            <stop
              stopColor={clsx(isClicked ? "#2e7fcf" : "white")}
              stopOpacity="0"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g
          id="lamp"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g transform="translate(106.000000, 101.000000)" fillRule="nonzero">
            <path
              d="M335.405399,344 L378,127.484034 L278.24304,33.0365437 L262.42355,14.5826624 L252.183203,1.41841512 C251.455626,0.482391344 250.323466,-0.0445008576 249.141724,0 C247.959982,0.0504053066 246.87336,0.666393183 246.222581,1.65776508 C237.317413,15.4562898 223,38.2783076 223,38.2783076 L252.970005,26.31081 C255.275102,25.3861629 257.899978,25.8092443 259.800877,27.4118198 L270.947239,36.8063054 L370.620751,130.523779 L329.134825,344 L335.405399,344 Z"
              id="Path"
              fill="currentColor"
            ></path>
            <path
              d="M274,398 L384,398 C384,398 378.026284,344.721407 332.518519,343.058334 C274,340.925262 274,398 274,398 Z"
              id="Path"
              stroke="currentColor"
              strokeWidth="3"
              fill="#FFFFFF"
            ></path>
            <path
              d="M149,47.7691163 L257.089603,106 C257.089603,106 280.092463,49.3886256 235.338195,25.250793 C179.618832,-4.73394422 149,47.7691163 149,47.7691163 Z"
              id="Path"
              stroke="currentColor"
              strokeWidth="3"
              fill="#FFFFFF"
            ></path>
            <circle
              id="Oval"
              stroke="currentColor"
              strokeWidth="3"
              fill="#FFFFFF"
              cx="370.5"
              cy="128.5"
              r="17.5"
            ></circle>
            <polygon
              id="Path"
              fill="url(#linearGradient-1)"
              points="148.671269 48 0 214.069062 220.205504 320 257 106.46729"
            ></polygon>
            <path
              d="M242,40 C242,40 262.612461,47.8575934 255.511574,89 L242,40 Z"
              id="Path"
              fill="currentColor"
            ></path>
            <path
              d="M340,350 C340,350 367.798982,356.341399 378,395 L340,350 Z"
              id="Path"
              fill="currentColor"
            ></path>
          </g>
        </g>
        <circle
          className={clsx("cursor-pointer select-none", isClicked && "")}
          onClick={handleClickLamp}
          cx={435}
          cy={475}
          r={9}
          stroke={clsx(isClicked ? "#EF5051" : "#9cc4eb")}
          strokeWidth={4}
        >
          <svg
            height="16px"
            width="16px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g fill={clsx(isClicked ? "#28A745" : "#EF5051")}>
              <path
                d="M256,512C128.502,512,24.774,408.272,24.774,280.774c0-84.49,46.065-162.23,120.216-202.879		c12.006-6.577,27.057-2.18,33.633,9.816c6.577,11.997,2.182,27.055-9.814,33.633c-58.282,31.949-94.487,93.039-94.487,159.43		c0,100.177,81.5,181.677,181.677,181.677s181.677-81.5,181.677-181.677c0-66.682-36.44-127.899-95.097-159.764
		c-12.022-6.532-16.475-21.573-9.943-33.595s21.572-16.475,33.595-9.944c74.631,40.542,120.992,118.444,120.992,203.304		C487.226,408.272,383.498,512,256,512z"
              />{" "}
              <path d="M256,214.71c-13.682,0-24.774-11.092-24.774-24.774V24.774C231.226,11.092,242.318,0,256,0		c13.682,0,24.774,11.092,24.774,24.774v165.161C280.774,203.617,269.682,214.71,256,214.71z" />
            </g>
          </svg>
        </circle>

        <text
          x="58%"
          y="52%"
          transform="rotate(26)"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="32"
          fill="#9cc4eb"
          className={clsx(
            "duration-200 font-rubik-wet uppercase",
            isClicked ? "opacity-40" : "opacity-0",
          )}
        >
          text me
        </text>
      </svg>
    </div>
  );
};
