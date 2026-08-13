import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Email me product updates",
    name: "updates",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithHint: Story = {
  args: {
    hint: "We will send a maximum of one email per month.",
  },
};

export const WithError: Story = {
  args: {
    error: "You must accept the terms to continue.",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};
