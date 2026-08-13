import { fireEvent, render, screen } from "@testing-library/react";

import { Select } from "./Select";

describe("Select", () => {
  it("opens a floating listbox and stores the selected form value", () => {
    render(
      <Select
        label="Workspace"
        name="workspace"
        options={[
          { value: "personal", label: "Personal" },
          { value: "team", label: "Team workspace" },
        ]}
        placeholder="Choose a workspace"
      />,
    );

    const trigger = screen.getByRole("button", { name: "Workspace" });

    fireEvent.click(trigger);
    fireEvent.click(screen.getByRole("option", { name: "Team workspace" }));

    expect(trigger).toHaveTextContent("Team workspace");
    expect(screen.getByDisplayValue("team")).toHaveAttribute(
      "name",
      "workspace",
    );
  });
});
