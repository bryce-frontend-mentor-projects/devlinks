import { StoryObj, Meta } from "@storybook/react";
import { DropdownField } from "./DropdownField";

const meta = {
  component: DropdownField,
} satisfies Meta<typeof DropdownField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Items",
  },
};
