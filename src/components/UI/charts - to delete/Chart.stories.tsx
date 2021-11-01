import { Meta, Story } from "@storybook/react";
import Chart, { ChartProps } from "./Chart";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";

export default {
  component: Chart,
  title: "Components/Charts",
} as Meta;

// args in TS way
const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const V1 = Template.bind({});
V1.args = {
  // children: "sfd",
};

export const V2 = Template.bind({});
V2.args = {
  // children: "sadfvsdfsdfsdfefdsafsdfsd",
};
