import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Button } from "./ui/button";

describe("Testing modal", () => {
  test("Modal exists", () => {
    render(
        <Button aria-label="detailsbutton" variant="default" >
            More Details
          </Button>);
    const titleElement = screen.getByRole("button", {
      name: /More Details/i, 
      hidden: true
    });
    console.log(titleElement);
    expect(titleElement).toBeInTheDocument();
  });
});