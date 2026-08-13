import type { Meta, StoryObj } from "@storybook/react-vite";

import { ChatInput } from "./ChatInput";

const meta = {
  title: "Components/ChatInput",
  component: ChatInput,
  tags: ["autodocs"],
  args: {
    placeholder: "Message the assistant...",
  },
  argTypes: {
    onSend: { action: "sent" },
  },
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sending: Story = {
  args: {
    sending: true,
    defaultValue: "Waiting for the response...",
  },
};

export const WithAttachment: Story = {
  args: {
    onAttach: () => {},
  },
};

export const FullFeatured: Story = {
  args: {
    onAttach: () => {},
    onVoice: () => {},
    placeholder: "Ask anything",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "40rem" }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
