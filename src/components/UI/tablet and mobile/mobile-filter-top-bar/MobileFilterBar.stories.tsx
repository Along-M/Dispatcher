import { Meta, Story } from "@storybook/react";
import MobileFilterBar, { MobileFilterBarProps } from "./MobileFilterBar";

export default {
  component: MobileFilterBar,
  title: "Components/Filter",
} as Meta;

// args in TS way
const Template: Story<MobileFilterBarProps> = (args) => (
  <MobileFilterBar {...args} />
);

export const V1 = Template.bind({});
V1.args = {};

export const V2 = Template.bind({});
V2.args = {};
