import { StoryObj, Meta } from "@storybook/react";
import { ImageFrame } from "./ImageFrame";

const meta = {
  component: ImageFrame,
} satisfies Meta<typeof ImageFrame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithImage: Story = {
  args: { img: "ovziiw0y5uxr4zciefpx" },
};
