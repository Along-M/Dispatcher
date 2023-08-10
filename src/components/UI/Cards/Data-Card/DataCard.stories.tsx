import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DataCard, { DataCardProps } from "./DataCard";

export default {
  component: DataCard,
  title: "Components/Data-Card",
} as Meta;

// args in TS way
const Template: Story<DataCardProps> = (args) => <DataCard {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "Card Title 1",
  title: "data card",
};

export const V2 = Template.bind({});
V2.args = {
  children: "Card Title 2",
};
