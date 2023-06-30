import * as React from "react";
import { Meta, Story } from "@storybook/react";
import NoData, { NoDataProps } from "./NoData";

export default {
  component: NoData,
  title: "Components/no-data",
} as Meta;

// args in TS way
const Template: Story<NoDataProps> = (args) => <NoData {...args} />;

export const V1 = Template.bind({});
V1.args = {};

export const V2 = Template.bind({});
V2.args = {};
