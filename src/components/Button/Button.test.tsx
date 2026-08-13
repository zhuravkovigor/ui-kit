import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("disables interaction and announces loading state", () => {
    render(
      <Button loading loadingLabel="Sending">
        Send
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Sending" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });
});
