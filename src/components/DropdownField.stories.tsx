import { StoryObj, Meta } from "@storybook/react";
import { DropdownField } from "./DropdownField";
import Image from "next/image";
import IconLink from "../../images/icon-link.svg";
import { platforms } from "../data/platforms";
import { PlatformType } from "../data/types";
import { useArgs } from "@storybook/preview-api";

const meta = {
  component: DropdownField,
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DropdownField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: platforms,
  },

  render: function Component(args) {
    const [, setArgs] = useArgs();

    const onValueChange = (value: PlatformType) => {
      args.onValueChange?.(value);

      setArgs({ value });
    };

    return <DropdownField {...args} onValueChange={onValueChange} />;
  },
};
