import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./"; // Checkbox bileşenini import et

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Checkbox",
    disabled: false,
  },
};
