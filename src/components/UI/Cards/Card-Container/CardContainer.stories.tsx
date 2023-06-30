import React from "react";
import { Meta, Story } from "@storybook/react";
import CardContainer, { CardContainerProps } from "./CardContainer";

export default {
  component: CardContainer,
  title: "Components/CardContainer",
} as Meta;

// args in TS way
const Template: Story<CardContainerProps> = (args) => (
  <CardContainer {...args} />
);

export const V1 = Template.bind({});
V1.args = {
  children: "Card Title 1",
};

export const V2 = Template.bind({});
V2.args = {
  children: "Card Title 2",
};
