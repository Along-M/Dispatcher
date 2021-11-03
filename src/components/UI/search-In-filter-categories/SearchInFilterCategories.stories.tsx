import { Meta, Story } from "@storybook/react";
import SearchInFilterCategories, {
  FilterCategoriesProps,
} from "./SearchInFilterCategories";

export default {
  component: SearchInFilterCategories,
  title: "Components/FilterCategories",
} as Meta;

// args in TS way
const Template: Story<FilterCategoriesProps> = (args) => (
  <SearchInFilterCategories {...args} />
);

export const V1 = Template.bind({});
V1.args = {};

export const V2 = Template.bind({});
V2.args = {};
