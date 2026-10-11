import { describe, expect, it } from "vitest";
import { formatDate } from "./date";

describe("formatDate", () => {
  it("formats a valid ISO date string", () => {
    expect(formatDate("2024-01-15T12:00:00.000Z")).toBe("15 Jan, 2024");
  });

  it("returns an empty string for missing values", () => {
    expect(formatDate(null)).toBe("");
    expect(formatDate(undefined)).toBe("");
    expect(formatDate("")).toBe("");
  });

  it("returns an empty string for invalid dates", () => {
    expect(formatDate("not-a-date")).toBe("");
  });
});
