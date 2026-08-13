import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    name: "Ada Lovelace",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const User: Story = {
  args: {
    name: "Grace Hopper",
    variant: "user",
  },
};

export const Assistant: Story = {
  args: {
    name: "Assistant",
    variant: "assistant",
  },
};

export const Image: Story = {
  args: {
    src: "https://i.pravatar.cc/80?img=5",
    name: "Ada Lovelace",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ alignItems: "center", display: "flex", gap: "1rem" }}>
      <Avatar {...args} size="small" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="large" />
    </div>
  ),
};
