import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Size } from "./media-query";

export const TextAnimation = () => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  return (
    <>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Fun",
          500, // wait 1s before replacing "Mice" with "Hamsters"
          "Fun Things",
          600,
          "Fun Things To Do",
          700,
          "Fun Things To Do",
          5000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: isResponsiveSize ? "1rem" : "1.5rem",
          display: "inline-block",
        }}
        repeat={Infinity}
      />
    </>
  );
};
