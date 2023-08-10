import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

export default {
  component: Header,
  title: "Components/Tag",
} as Meta;

// args in TS way
const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "tag 1",
};

export const V2 = Template.bind({});
V2.args = {
  children: "tag 2",
};
