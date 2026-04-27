import { describe, expect, it } from "vitest";
import { formatPhone } from "../../lib/utils/formatPhone";

describe("formatPhone", () => {
  it("returns same phone for now", () => {
    expect(formatPhone("8-920-344-01-10")).toBe("8-920-344-01-10");
  });
});
