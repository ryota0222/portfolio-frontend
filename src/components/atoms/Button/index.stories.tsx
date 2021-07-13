import React from "react";
import { Story, Meta } from "@storybook/react";
import { MyButton, Props } from "../Button";

export default {
  title: "Design System/Atoms/Button",
  component: MyButton,
  decorators: [(story: any) => <div style={{ padding: "0 2rem" }}>{story()}</div>],
  argTypes: {
    schema: {
      options: ["blue", "red", "green", "purple"],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <MyButton {...args}>sample</MyButton>;

export const Blue = Template.bind({});
Blue.args = {};

export const Red = Template.bind({});
Red.args = {
  schema: "red"
};

export const Green = Template.bind({});
Green.args = {
  schema: "green"
};
