import { Meta, Story } from "@storybook/react";
import LastSearchResults, { LastSearchResultsProps } from "./LastSearchResults";

export default {
  component: LastSearchResults,
  title: "Components/Search",
} as Meta;

// args in TS way
const Template: Story<LastSearchResultsProps> = (args) => (
  <LastSearchResults {...args} />
);

export const V1 = Template.bind({});
V1.args = {
  children: "sfd",
};

export const V2 = Template.bind({});
V2.args = {
  children: "sadfvsdfsdfsdfefdsafsdfsd",
};
