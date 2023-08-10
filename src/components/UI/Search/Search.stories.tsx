import { Meta, Story } from "@storybook/react";
import Search, { SearchProps } from "./Search";

export default {
  component: Search,
  title: "Components/Search",
} as Meta;

// args in TS way
const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "sfd",
};

export const V2 = Template.bind({});
V2.args = {
  children: "sadfvsdfsdfsdfefdsafsdfsd",
};
