import type { Preview } from "@storybook/react-vite";

import "../src/styles/index.css";
import "./preview.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="storybook-canvas">
        <Story />
      </div>
    ),
  ],
  parameters: {
    a11y: {
      test: "error",
    },
    backgrounds: {
      default: "Canvas",
      values: [
        {
          name: "Canvas",
          value: "#171717",
        },
      ],
    },
    controls: {
      expanded: true,
    },
    layout: "centered",
  },
};

export default preview;
