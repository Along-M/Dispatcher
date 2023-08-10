import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ArticalCard, { StoryCardProps } from "./ArticalCard";

export default {
  component: ArticalCard,
  title: "Components/Story-Card",
} as Meta;

// args in TS way
const Template: Story<StoryCardProps> = (args) => <ArticalCard {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "Card Title 1",
  title: "story Card",
};

export const V2 = Template.bind({});
V2.args = {
  children: "Card Title 2",
  title: "story Card",
};
