import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import VacancyCard from "./VacancyCard";
import Button from "react-bootstrap/Button";

describe("Testing modal", () => {
  test("Modal exists",  () => {
    render(
        <Button aria-label="detailsbutton" variant="primary" >
            More Details
          </Button>);
    const titleElement = screen.getByRole("button", {
      Name: /More Details/i, hidden:true
    });
    console.log(titleElement);
    expect(titleElement).toBeInTheDocument();
  });
});