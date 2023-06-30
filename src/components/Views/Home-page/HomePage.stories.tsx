import React from "react";
import { Meta, Story } from "@storybook/react";
import HomePage, { HomePageProps } from "./HomePage";

export default {
  component: HomePage,
  title: "Components/HomePage",
} as Meta;

// args in TS way
const Template: Story<HomePageProps> = (args) => <HomePage {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "Card Title 1",
};

export const V2 = Template.bind({});
V2.args = {
  children: "Card Title 2",
};
