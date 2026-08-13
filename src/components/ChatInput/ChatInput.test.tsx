import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ChatInput } from "./ChatInput";

describe("ChatInput", () => {
  it("sends the message on Enter and clears the field", async () => {
    const user = userEvent.setup();
    const onSend = vi.fn();

    render(<ChatInput onSend={onSend} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "Hello there{Enter}");

    expect(onSend).toHaveBeenCalledWith("Hello there");
    expect(input).toHaveValue("");
  });

  it("keeps the message on Shift+Enter for multiline input", async () => {
    const user = userEvent.setup();
    const onSend = vi.fn();

    render(<ChatInput onSend={onSend} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "Line one{Shift>}{Enter}{/Shift}Line two");

    expect(onSend).not.toHaveBeenCalled();
    expect(input).toHaveValue("Line one\nLine two");
  });
});
