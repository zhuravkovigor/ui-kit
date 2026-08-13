import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CodeBlock } from "./CodeBlock";

describe("CodeBlock", () => {
  it("renders code with language label", () => {
    render(<CodeBlock code="const x = 1;" language="typescript" />);

    expect(screen.getByText("typescript")).toBeInTheDocument();
    expect(screen.getByText("const")).toBeInTheDocument();
  });

  it("shows copy button", () => {
    render(<CodeBlock code="test" />);

    expect(
      screen.getByRole("button", { name: "Copy code" }),
    ).toBeInTheDocument();
  });
});
