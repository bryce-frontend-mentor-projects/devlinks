import { StoryObj, Meta } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: "Disabled Secondary",
    variant: "secondary",
    disabled: true,
  },
};
