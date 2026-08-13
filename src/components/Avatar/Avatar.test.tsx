import { render, screen } from "@testing-library/react";

import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials derived from the name", () => {
    render(<Avatar name="Ada Lovelace" />);

    expect(screen.getByText("AL")).toBeInTheDocument();
  });

  it("renders an image with accessible alt text when src is provided", () => {
    render(<Avatar name="Ada Lovelace" src="/avatar.png" />);

    const image = screen.getByRole("img", { name: "Ada Lovelace" });

    expect(image).toHaveAttribute("src", "/avatar.png");
  });
});
