import { describe, expect, it } from "vitest";
import { MASCOT_BODY_IDS } from "./mascot-bodies";
import { DEFAULT_GROK_BODY, grokBodyId, isGrokBody } from "./grok-bodies";

describe("Grok body compatibility", () => {
  it("maps every retired shape to a selectable Grok body", () => {
    for (const id of MASCOT_BODY_IDS) expect(isGrokBody(grokBodyId(id)), id).toBe(true);
    expect(grokBodyId("cursor")).toBe("grok-wedge");
    expect(grokBodyId("drop")).toBe("grok-teardrop");
    expect(grokBodyId("diamond")).toBe("grok-gem");
  });

  it("preserves Grok choices and safely defaults missing or invalid data", () => {
    expect(grokBodyId("grok-flower")).toBe("grok-flower");
    for (const id of [null, undefined, "unknown", "constructor", "__proto__", 2, {}]) expect(grokBodyId(id)).toBe(DEFAULT_GROK_BODY);
  });
});
