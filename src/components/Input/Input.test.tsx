import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("Input", () => {
  it("connects its label and error message to the native input", () => {
    render(
      <Input label="Email" error="Enter a valid email address" required />,
    );

    const input = screen.getByLabelText("Email *");
    const error = screen.getByRole("alert");

    expect(input).toBeRequired();
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby", error.id);
  });
});
