import MenuItem from "../components/MenuItem";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
};

const Template = (args) => <MenuItem {...args} />;

export const Base = Template.bind({});
Base.args = {
  text : "home",
  dropDownMenu : true,
  bgColor : "black",
};

