import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link1", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("my test case 1", ()=>{
  render(<App />);
  expect(screen.getByText(/Broy/)).toBeInTheDocument();
})
