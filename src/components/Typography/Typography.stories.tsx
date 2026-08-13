import type { Meta, StoryObj } from "@storybook/react-vite";

import { Typography } from "./Typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="body-large">
        Large body text for emphasis and introductions.
      </Typography>
      <Typography variant="body">
        Default body text for paragraphs and general content.
      </Typography>
      <Typography variant="body-small">
        Small body text for secondary information.
      </Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="body">Default text color</Typography>
      <Typography variant="body" color="muted">
        Muted text for less important content
      </Typography>
      <Typography variant="body" color="accent">
        Accent color for highlights
      </Typography>
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <Typography variant="body">
      Text with <Typography variant="code" as="code">inline code</Typography>{" "}
      and <Typography variant="caption" as="span">caption text</Typography>.
    </Typography>
  ),
};
