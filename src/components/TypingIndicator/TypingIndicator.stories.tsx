import type { Meta, StoryObj } from "@storybook/react-vite";

import { TypingIndicator } from "./TypingIndicator";

const meta = {
  title: "Components/TypingIndicator",
  component: TypingIndicator,
  tags: ["autodocs"],
} satisfies Meta<typeof TypingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: {
    label: "Bot is thinking",
  },
};
