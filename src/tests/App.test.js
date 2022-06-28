import { waitFor, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders board", async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByTestId("board")).toBeInTheDocument();
  });
});

test("renders slider", async () => {
  render(<App />);
  expect(screen.getByTestId("spinner")).toBeInTheDocument();
});

test("before clicking '-' it becomes '+'", async () => {
  render(<App />);
  const movie = await screen.findByTestId("00");
  fireEvent(
    movie,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(screen.getByTestId("+00")).toBeInTheDocument();
});

test("before clicking '+' it becomes '-'", async () => {
  render(<App />);
  const movie = await screen.findByTestId("10");
  fireEvent(
    movie,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(screen.getByTestId("-10")).toBeInTheDocument();
});
