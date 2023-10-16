import { StoryObj, Meta } from "@storybook/react";
import { Field } from "./Field";
import IconChevronDown from "../icons/IconChevronDown";
import IconLink from "../icons/IconLink";
const meta = {
  component: Field,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

console.log("IconLink", IconLink);

export const Default: Story = {
  args: {
    placeholder: "Text Field Empty",
    iconLeft: <IconLink />,
    children: <input type="text" placeholder="Text Field Empty" />,
  },
};

export const AsButton: Story = {
  args: {
    iconLeft: <IconLink />,

    children: <button>Test Button</button>,
    iconRight: <IconChevronDown />,
  },
};
