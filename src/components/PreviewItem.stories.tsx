import { StoryObj, Meta } from "@storybook/react";
import { PreviewItem } from "./PreviewItem";
import { platforms } from "../data/platforms";

const meta = {
  component: PreviewItem,
  decorators: [
    (Story) => (
      <div className="w-[237px] flex flex-col gap-4 columns-2">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PreviewItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const p1 = platforms[0];

export const Default: Story = {
  args: {
    ...p1,
  },
};

export const AllPlatforms = {
  render: () => {
    return (
      <>
        {platforms.map((p) => (
          <PreviewItem key={p.id} {...p} />
        ))}
      </>
    );
  },
};
