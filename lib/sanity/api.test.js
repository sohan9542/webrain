import { describe, expect, it } from "vitest";
import { readFileSync } from "fs";
import path from "path";

describe("sanity api module", () => {
  const source = readFileSync(path.join(__dirname, "api.js"), "utf8");

  it("exports the public content helpers used by the UI", () => {
    for (const name of [
      "getAllPosts",
      "getLatestPosts",
      "getPostBySlug",
      "getAllCategories",
      "getProjects",
      "getReviews",
    ]) {
      expect(source).toContain(`export async function ${name}`);
    }
  });

  it("centralizes fetch error handling", () => {
    expect(source).toContain("Sanity request failed");
    expect(source).toContain("Missing Sanity configuration");
  });
});
