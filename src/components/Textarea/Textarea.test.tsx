import { render, screen } from "@testing-library/react";

import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("forwards native textarea props and exposes the hint", () => {
    render(
      <Textarea
        label="Message"
        hint="Maximum 500 characters"
        maxLength={500}
      />,
    );

    const textarea = screen.getByLabelText("Message");

    expect(textarea).toHaveAttribute("maxlength", "500");
    expect(textarea).toHaveAttribute(
      "aria-describedby",
      screen.getByText("Maximum 500 characters").id,
    );
  });
});
