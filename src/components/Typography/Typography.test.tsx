import { render, screen } from "@testing-library/react";

import { Typography } from "./Typography";

describe("Typography", () => {
  it("renders with semantic HTML element", () => {
    render(<Typography variant="h1">Title</Typography>);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Title",
    );
  });

  it("applies muted color", () => {
    render(
      <Typography variant="body" color="muted">
        Secondary text
      </Typography>,
    );

    expect(screen.getByText("Secondary text")).toBeInTheDocument();
  });
});
