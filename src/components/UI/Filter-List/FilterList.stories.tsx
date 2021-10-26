import { Meta, Story } from "@storybook/react";
import FilterList, { FilterListProps } from "./FilterList";

export default {
  component: FilterList,
  title: "Components/Filter",
} as Meta;

// args in TS way
const Template: Story<FilterListProps> = (args) => <FilterList {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "sfd",
};

export const V2 = Template.bind({});
V2.args = {
  children: "sadfvsdfsdfsdfefdsafsdfsd",
};
