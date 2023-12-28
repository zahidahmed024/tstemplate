import Boxitem from "../components/Boxitem";
import ic_profit from "../assets/icons/profit.png";
export default {
  title: "Components/Boxitem",
  component: Boxitem,
};

const Template = (args) => <Boxitem {...args} />;

export const Base = Template.bind({});
Base.args = {
    icon:ic_profit,
    className:"bg-[linear-gradient(91deg,#3F68FF_0%,#CD63FF_100%)]",
    text1:"15% Profit Sharing from Challenge Phase",
    text2:"FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make"
};


// import Button from "../components/Button";

// export default {
//   title: "Components/Button",
//   component: Button,
//   argTypes: { onClick: { action: "clicked" } },
// };

// const Template = (args) => <Button {...args} />;

// export const primary = Template.bind({});
// primary.args = {
//   text: "Press Me",
//   disabled: false,
// };
