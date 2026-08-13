import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Email address",
    name: "email",
    placeholder: "you@example.com",
    type: "email",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "We will use this only to reply to you.",
  },
};

export const WithError: Story = {
  args: {
    error: "Enter a valid email address.",
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "you@example.com",
    disabled: true,
  },
};
