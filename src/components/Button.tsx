import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  rightIcon?: StaticImageData | string;
  [key: string]: any;
}

export default function Button({
  text = "",
  rightIcon = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className="flex flex-row items-center font-jakarta text-white text-base whitespace-nowrap font-semibold leading-6 w-fit justify-center bg-indigo-500 hover:bg-indigo-400 px-4 py-3 rounded-xl"
      {...props}
    >
      {text}
      {rightIcon && (
        <Image
          alt="rightIcon"
          src={rightIcon}
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full ml-2"
        />
      )}
    </button>
  );
}
