import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Toast } from "./Toast";

describe("Toast", () => {
  it("renders with title and message", () => {
    render(
      <Toast status="success" title="Success">
        Operation completed
      </Toast>,
    );

    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Operation completed")).toBeInTheDocument();
  });

  it("announces errors assertively", () => {
    render(<Toast status="error">Error message</Toast>);

    expect(screen.getByRole("alert")).toHaveTextContent("Error message");
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <Toast onClose={onClose} status="info">
        Message
      </Toast>,
    );

    await user.click(screen.getByRole("button", { name: "Close notification" }));

    expect(onClose).toHaveBeenCalled();
  });
});
