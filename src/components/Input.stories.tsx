import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { Input } from "./Input";
import { IconGithub } from "../icons";

const meta = {
  component: Input,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <IconGithub />,
  },
};

export const Controlled: Story = {
  args: {
    value: "Current",
  },

  render: function Component(args) {
    const [, setArgs] = useArgs();

    const onValueChange = (value: string) => {
      args.onValueChange?.(value);

      setArgs({ value });
    };

    return <Input {...args} onValueChange={onValueChange} />;
  },
};
