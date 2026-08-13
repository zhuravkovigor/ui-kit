import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "../Checkbox";
import { Fieldset } from "./Fieldset";

const meta = {
  title: "Components/Fieldset",
  component: Fieldset,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <Checkbox label="Product news" name="notifications" value="product" />
        <Checkbox
          label="Security alerts"
          name="notifications"
          value="security"
        />
      </>
    ),
    legend: "Email notifications",
  },
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "Choose all messages you would like to receive.",
  },
};

export const WithError: Story = {
  args: {
    error: "Select at least one notification type.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
