import CounterItem from "../components/CounterItem";

export default {
  title: "Components/CounterItem",
  component: CounterItem,
};

const Template = (args) => <CounterItem {...args} />;

export const Base = Template.bind({});
Base.args = {
  countValue:"195+",
  countText: "Countries Covered" ,
  isLast : false,
  bgColor:'black'
};

