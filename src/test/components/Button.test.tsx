import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import Button from "../../components/Button";

describe("Button", () => {
  it("should render button text", () => {
    render(<Button label="Login" onClick={() => {}} />);

    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("should call onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button label="Login" onClick={handleClick} />);

    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
