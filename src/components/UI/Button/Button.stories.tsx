import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

// args in TS way
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "sfd",
  onClick: () => {},
};

export const V2 = Template.bind({});
V2.args = {
  children: "sadfvsdfsdfsdfefdsafsdfsd",
};
