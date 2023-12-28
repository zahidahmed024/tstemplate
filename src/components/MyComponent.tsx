import * as React from "react";
import TextSlider from "./TextSlider";
import InfoSection1 from "./InfoSection1";
import InfoSection2 from "./InfoSection2";

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return (
    <>
      <TextSlider />
      <InfoSection1 />
      <InfoSection2 />
    </>
  );
};

export default MyComponent;
