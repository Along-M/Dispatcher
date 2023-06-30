import React from "react";
import { Meta, Story } from "@storybook/react";
import CardsHeaders, { CardsHeadersProps } from "./CardsHeaders";

export default {
  component: CardsHeaders,
  title: "Components/CardsHeaders",
} as Meta;

// args in TS way
const Template: Story<CardsHeadersProps> = (args) => <CardsHeaders {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "Card Title 1",
};

export const V2 = Template.bind({});
V2.args = {
  children: "Card Title 2",
};
