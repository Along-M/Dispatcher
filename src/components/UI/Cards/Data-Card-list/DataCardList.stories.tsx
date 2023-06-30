import React from "react";
import { Meta, Story } from "@storybook/react";
import DataCardList, { DataCardListProps } from "./DataCardList";

export default {
  component: DataCardList,
  title: "Components/DataCardlist",
} as Meta;

// args in TS way
const Template: Story<DataCardListProps> = (args) => <DataCardList {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "Card Title 1",
};

export const V2 = Template.bind({});
V2.args = {
  children: "Card Title 2",
};
