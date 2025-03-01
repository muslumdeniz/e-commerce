import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./index";

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: "f", label: "Female" },
      { value: "m", label: "Male" },
    ],
  },
};
