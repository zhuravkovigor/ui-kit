import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "./Select";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "Workspace",
    name: "workspace",
    options: [
      { value: "personal", label: "Personal" },
      { value: "team", label: "Team workspace" },
      { value: "enterprise", label: "Enterprise" },
    ],
    placeholder: "Choose a workspace",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "You can change this later in settings.",
  },
};

export const WithError: Story = {
  args: {
    error: "Select a workspace to continue.",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "team",
    disabled: true,
  },
};
