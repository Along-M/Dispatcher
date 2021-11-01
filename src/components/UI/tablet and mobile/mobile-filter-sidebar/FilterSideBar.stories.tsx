import { Meta, Story } from "@storybook/react";
import FilterSideBar, { FilterSideBarProps } from "./FilterSideBar";

export default {
  component: FilterSideBar,
  title: "Components/Filter-side-bar",
} as Meta;

const Template: Story<FilterSideBarProps> = (args) => (
  <FilterSideBar {...args} />
);

export const V1 = Template.bind({});
V1.args = {
  // className: "sfd",
};

export const V2 = Template.bind({});
V2.args = {
  // className: "sadfvsdfsdfsdfefdsafsdfsd",
};
