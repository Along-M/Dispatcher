import { Meta, Story } from "@storybook/react";
import MobileFilter, { MobileFilterProps } from "./MobileFilter";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";

export default {
  component: MobileFilter,
  title: "Components/Filter",
} as Meta;

// args in TS way
const Template: Story<MobileFilterProps> = (args) => <MobileFilter {...args} />;

export const V1 = Template.bind({});
V1.args = {};

export const V2 = Template.bind({});
V2.args = {};
