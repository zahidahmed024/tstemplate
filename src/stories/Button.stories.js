import Button from "../components/Button";
import ic_discord from "../assets/icons/discord.png";
export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const primary = Template.bind({});
primary.args = {
  rightIcon: ic_discord,
  text: "Press Me",
  disabled: false,
};
