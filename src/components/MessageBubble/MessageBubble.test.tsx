import { render, screen } from "@testing-library/react";

import { MessageBubble } from "./MessageBubble";

describe("MessageBubble", () => {
  it("renders message content with timestamp", () => {
    render(
      <MessageBubble author="assistant" timestamp="12:30">
        Hello there
      </MessageBubble>,
    );

    expect(screen.getByText("Hello there")).toBeInTheDocument();
    expect(screen.getByText("12:30")).toBeInTheDocument();
  });

  it("announces delivery errors to assistive technology", () => {
    render(
      <MessageBubble author="user" status="error">
        Failed message
      </MessageBubble>,
    );

    expect(screen.getByRole("alert")).toHaveTextContent("Failed to send");
  });
});
