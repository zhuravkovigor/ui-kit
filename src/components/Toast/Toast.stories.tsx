import type { Meta, StoryObj } from "@storybook/react-vite";

import { Toast } from "./Toast";

const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    children: "Your changes have been saved successfully.",
    duration: 0,
  },
  argTypes: {
    onClose: { action: "closed" },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    status: "success",
    title: "Success",
  },
};

export const Error: Story = {
  args: {
    status: "error",
    title: "Error",
    children: "Failed to save changes. Please try again.",
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    title: "Warning",
    children: "Your session will expire in 5 minutes.",
  },
};

export const Info: Story = {
  args: {
    status: "info",
    children: "New features are available. Check them out!",
  },
};

export const WithoutTitle: Story = {
  args: {
    status: "success",
    title: undefined,
    children: "File uploaded successfully.",
  },
};

export const AutoClose: Story = {
  args: {
    status: "info",
    title: "Auto-close",
    children: "This toast will close in 3 seconds.",
    duration: 3000,
  },
};
