import { StoryObj, Meta } from "@storybook/react";
import { Tab } from "./Tab";

const meta = {
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const TabActive: Story = {
  args: {
    children: "Active",
    isActive: true,
  },
};
