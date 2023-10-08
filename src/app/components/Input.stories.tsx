import { StoryObj, Meta } from "@storybook/react";
import { Input } from "./Input";
import Image from "next/image";
import IconLink from "../../images/icon-link.svg";
import IconChevronDown from "../../images/icon-chevron-down.svg";

const meta = {
  component: Input,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

console.log("IconLink", IconLink);

export const Default: Story = {
  args: {
    placeholder: "Text Field Empty",
    iconLeft: (
      <Image
        src={IconLink.src}
        className="pointer-events-none"
        alt="Link"
        width="16"
        height="16"
      />
    ),
    children: <input type="text" placeholder="Text Field Empty" />,
  },
};

export const AsButton: Story = {
  args: {
    iconLeft: <Image src={IconLink.src} alt="Link" width="16" height="16" />,
    children: <button>Test Button</button>,
    iconRight: (
      <Image src={IconChevronDown.src} alt="Link" width="16" height="16" />
    ),
  },
};
