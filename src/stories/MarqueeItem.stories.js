import MarqueeItem from "../components/MarqueeItem";

export default {
  title: "Components/MarqueeItem",
  component: MarqueeItem,
};

const Template = (args) => <MarqueeItem {...args} />;

export const Base = Template.bind({});
Base.args = {
    text1 : "Aud Chf",
    text2 : "1212",
    text3 : "+33%",
    text4 : "4%",
};

