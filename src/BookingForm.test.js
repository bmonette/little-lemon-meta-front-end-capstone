import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

const mockAvailableTimes = ["17:00", "18:00"];
const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

beforeEach(() => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatchDateChange={mockDispatch}
      submitForm={mockSubmit}
    />
  );
});

test("renders the date input label", () => {
  const labelElement = screen.getByLabelText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("date input is required", () => {
  const input = screen.getByLabelText("Choose date");
  expect(input).toBeRequired();
});

test("time dropdown is required", () => {
  const select = screen.getByLabelText("Choose time");
  expect(select).toBeRequired();
});

test("guests input has min and max constraints", () => {
  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("occasion dropdown is required", () => {
  const select = screen.getByLabelText("Occasion");
  expect(select).toBeRequired();
});

test("submit button is disabled when form is incomplete", () => {
  const button = screen.getByRole("button", { name: /submit reservation/i });
  expect(button).toBeDisabled();
});

test("submit button is enabled when form is valid", async () => {
  await userEvent.type(screen.getByLabelText(/choose date/i), "2025-12-25");
  await userEvent.selectOptions(screen.getByLabelText(/choose time/i), "17:00");
  await userEvent.clear(screen.getByLabelText(/number of guests/i));
  await userEvent.type(screen.getByLabelText(/number of guests/i), "2");
  await userEvent.selectOptions(screen.getByLabelText(/occasion/i), "Birthday");

  const button = screen.getByRole("button", { name: /submit reservation/i });
  expect(button).toBeEnabled();
});
