import { initializeTimes, updateTimes } from "./bookingUtils";


beforeEach(() => {
  window.fetchAPI = jest.fn().mockReturnValue([
    "17:00",
    "18:00",
    "19:00"
  ]);
});

test("initializeTimes returns available time slots from fetchAPI", () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
  expect(times).toContain("17:00");
});

test("updateTimes returns times based on selected date", () => {
  const result = updateTimes([], { type: "dateChange", date: "2025-05-10" });
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});
