"use client"
import Image, { StaticImageData } from "next/image";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  disabled?: boolean;
  rightIcon?: StaticImageData | string;
  onClick?: () => void;
  [key: string]: any;
}

export default function Button({
  disabled = false,
  text = "",
  rightIcon = "",
  onClick=undefined,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex flex-row items-center font-jakarta text-white text-base whitespace-nowrap font-semibold leading-6 w-fit justify-center ${
        disabled ? `bg-slate-600` : "bg-indigo-500"
      } hover:bg-indigo-400 px-4 py-3 rounded-xl`}
      onClick={disabled ? undefined: onClick}
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
