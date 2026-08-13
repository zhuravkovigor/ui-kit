import type { Meta, StoryObj } from "@storybook/react-vite";

import { CodeBlock } from "./CodeBlock";

const meta = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
  args: {
    code: `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`,
    language: "typescript",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "42rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLineNumbers: Story = {
  args: {
    showLineNumbers: true,
  },
};

export const Python: Story = {
  args: {
    code: `def fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a + b
    return result

print(fibonacci(100))`,
    language: "python",
  },
};

export const CSS: Story = {
  args: {
    code: `.button {
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 150ms ease;
}

.button:hover {
  transform: translateY(-1px);
}`,
    language: "css",
  },
};
