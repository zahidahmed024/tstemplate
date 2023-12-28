import React from "react";
import Button from "./Button";
import down_arrow from "@/assets/icons/down_arrow.png";
import Image from "next/image";

interface MenuItemProps {
  text: string;
  dropDownMenu: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  text = "",
  dropDownMenu = true,
}) => {
  return (
    <div className="group relative cursor-pointer flex items-center">
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

const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full justify-between gap-5 ml-3.5 pr-7 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
      <div className="items-stretch flex justify-between gap-5 mt-5">
        <MenuItem text="Home" dropDownMenu={false} />
        <MenuItem text="Model" dropDownMenu={true} />
        <MenuItem text="Be a Partner" dropDownMenu={true} />
        <MenuItem text="More" dropDownMenu={true} />
      </div>
      <div className="self-stretch flex items-center justify-between gap-5">
        <MenuItem text="Login" dropDownMenu={false} />
        <Button text="Join Our Discord" />
      </div>
    </nav>
  );
};

export default Navbar;
