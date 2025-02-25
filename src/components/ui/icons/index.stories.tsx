import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";
import { IconProps } from "./_model";
import { icons } from "./stories";

const meta = {
  component: Index,
  argTypes: {
    name: { control: "select", options: icons },
    size: { control: "number" },
    color: { control: "text" },
  },
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<IconProps>;

export const Default: Story = {
  args: {
    name: "Xaomi",
  },
};
