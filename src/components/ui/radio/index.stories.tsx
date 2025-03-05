import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./index";

const meta = {
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Radio",
    disabled: false,
    error: false,
  },
};
