import { Meta, Story } from "@storybook/react";
import MobileFilterOptions, {
  MobileFilterOptionsProps,
} from "./MobileFilterOptions";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";

export default {
  component: MobileFilterOptions,
  title: "Components/Filter",
} as Meta;

// args in TS way
const Template: Story<MobileFilterOptionsProps> = (args) => (
  <MobileFilterOptions {...args} />
);

export const V1 = Template.bind({});
V1.args = {};

export const V2 = Template.bind({});
V2.args = {};
