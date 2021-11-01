import { Meta, Story } from "@storybook/react";
import SearchInFilter, { SearchInFilterProps } from "./SearchInFilter";

export default {
  component: SearchInFilter,
  title: "Components/Filter-side-bar",
} as Meta;

const Template: Story<SearchInFilterProps> = (args) => (
  <SearchInFilter {...args} />
);

export const V1 = Template.bind({});
V1.args = {
  // className: "sfd",
};

export const V2 = Template.bind({});
V2.args = {
  // className: "sadfvsdfsdfsdfefdsafsdfsd",
};
