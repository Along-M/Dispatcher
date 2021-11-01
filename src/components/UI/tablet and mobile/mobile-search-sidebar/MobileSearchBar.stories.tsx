import { Meta, Story } from "@storybook/react";
import MobileSearchBar, { MobileSearchBarProps } from "./MobileSearchBar";

export default {
  component: MobileSearchBar,
  title: "Components/Mobile-search-side-bar",
} as Meta;

const Template: Story<MobileSearchBarProps> = (args) => (
  <MobileSearchBar {...args} />
);

export const V1 = Template.bind({});
V1.args = {
  // className: "sfd",
};

export const V2 = Template.bind({});
V2.args = {
  // className: "sadfvsdfsdfsdfefdsafsdfsd",
};
