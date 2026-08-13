import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    label: "Message",
    name: "message",
    placeholder: "How can we help?",
    rows: 5,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "Maximum 500 characters.",
    maxLength: 500,
  },
};

export const WithError: Story = {
  args: {
    error: "Tell us a little more about your request.",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "This message cannot be changed.",
    disabled: true,
  },
};