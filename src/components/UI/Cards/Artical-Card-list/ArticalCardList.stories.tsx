import React from "react";
import { Meta, Story } from "@storybook/react";
import ArticalCardList, { ArticalCardListProps } from "./ArticalCardList";

export default {
  component: ArticalCardList,
  title: "Components/Cardlist",
} as Meta;

// args in TS way
const Template: Story<ArticalCardListProps> = (args) => (
  <ArticalCardList {...args} />
);

export const V1 = Template.bind({});
V1.args = {
  children: "Card Title 1",
};

export const V2 = Template.bind({});
V2.args = {
  children: "Card Title 2",
};
