import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const primary = Template.bind({});
primary.args = {
  text: "Press Me",
  disabled: false,
};
