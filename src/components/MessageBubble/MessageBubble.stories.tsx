import type { Meta, StoryObj } from "@storybook/react-vite";

import { MessageBubble } from "./MessageBubble";

const meta = {
  title: "Components/MessageBubble",
  component: MessageBubble,
  tags: ["autodocs"],
  args: {
    children: "Hello! How can I help you today?",
    timestamp: "12:30",
  },
} satisfies Meta<typeof MessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Assistant: Story = {};

export const User: Story = {
  args: {
    author: "user",
    children: "Can you explain how CSS grid works?",
    status: "read",
  },
};

export const Error: Story = {
  args: {
    author: "user",
    children: "This message failed to send.",
    status: "error",
  },
};

export const Conversation: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "36rem",
      }}
    >
      <MessageBubble author="user" timestamp="12:30" status="read">
        What is the capital of France?
      </MessageBubble>
      <MessageBubble author="assistant" timestamp="12:30">
        The capital of France is Paris. It has been the country's political
        and cultural center for centuries.
      </MessageBubble>
      <MessageBubble author="user" timestamp="12:31" status="sending">
        Thanks! And what about Italy?
      </MessageBubble>
    </div>
  ),
};
