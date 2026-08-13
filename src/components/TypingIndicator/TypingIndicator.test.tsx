import { render, screen } from "@testing-library/react";

import { TypingIndicator } from "./TypingIndicator";

describe("TypingIndicator", () => {
  it("announces typing state to assistive technology", () => {
    render(<TypingIndicator label="Assistant is typing" />);

    expect(
      screen.getByRole("status", { name: "Assistant is typing" }),
    ).toBeInTheDocument();
  });
});
