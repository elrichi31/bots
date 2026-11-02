import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { MausAvatar } from "./Avatar";
import { GROK_BODY_IDS } from "../../shared/grok-bodies";
import { appearance, body, createActor, createDriver, renderSvg } from "../../third_party/grok-avatars/engine.mjs";

describe("Grok avatars", () => {
  it("renders the original geometry for every catalog entry through MausAvatar", () => {
    for (const bodyId of GROK_BODY_IDS) {
      const markup = renderToStaticMarkup(createElement(MausAvatar, { bodyId, color: "blue", faceColor: "black", animated: false, label: bodyId }));
      expect(markup).toContain(`data-grok-body="${bodyId.slice(5)}"`);
      expect(markup).toContain('fill="#377FE6"');
      expect(markup).toContain('fill="#000000"');
      expect(markup).toContain(`aria-label="${bodyId}"`);
      expect(markup).not.toContain("NaN");
    }
  });

  it("advances authored animation and supports application cues and gaze", () => {
    const actor = createActor({ body: body("flower") });
    const driver = createDriver(actor, "thinking", { seed: 1, firstPhase: 0 });
    const paint = appearance("#1084FE", "#fff");
    const initial = renderSvg(actor.frame(), paint, 128, "test");
    for (let i = 0; i < 12; i++) { driver.advance(0.05); actor.advance(0.05); }
    expect(renderSvg(actor.frame(), paint, 128, "test")).not.toBe(initial);
    actor.poke("spin"); actor.blink(); actor.setGaze([1, -1]); driver.setState("happy");
    for (let i = 0; i < 12; i++) { driver.advance(0.05); actor.advance(0.05); }
    expect(renderSvg(actor.frame(), paint, 128, "test")).not.toContain("NaN");
  });
});
