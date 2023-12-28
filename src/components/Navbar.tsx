import React from "react";
import Button from "./Button";
import MenuItem from "./MenuItem";



const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full justify-between gap-5 ml-3.5 pr-7 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
      <div className="items-stretch flex justify-between gap-5">
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
