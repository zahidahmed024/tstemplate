import React from "react";
import down_arrow from "../assets/icons/down_arrow.png";
import Image from "next/image";

interface MenuItemProps {
  text: string;
  dropDownMenu: boolean;
  bgClass?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  text = "",
  dropDownMenu = true,
  bgClass="",
}) => {
  return (
    <div className={`group relative cursor-pointer w-fit flex items-center ${bgClass}`}>
      <div className="text-white text-base font-medium font-jakarta leading-6 grow whitespace-nowrap">
        {text}
      </div>
      {dropDownMenu && (
        <Image
          alt="down_arrow"
          src={down_arrow}
          className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full ml-2"
        />
      )}
    </div>
  );
};

export default MenuItem;