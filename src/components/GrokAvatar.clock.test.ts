// @vitest-environment happy-dom
import { act, createElement, createRef } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it, vi } from "vitest";
import { GrokAvatar } from "./GrokAvatar";
import type { MausAvatarHandle } from "./Avatar";

const clock = vi.hoisted(() => ({ frame: null as null | ((now: number) => number), remove: vi.fn(), reduced: false }));
vi.mock("./mascot-clock", () => ({
  usePrefersReducedMotion: () => clock.reduced,
  mascotClock: () => ({ add: (frame: (now: number) => number) => { clock.frame = frame; return { remove: clock.remove }; } }),
}));
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

afterEach(() => { clock.frame = null; clock.reduced = false; clock.remove.mockClear(); });

describe("Grok avatar lifecycle", () => {
  it("paints on the shared clock, follows gaze and disposes its clock subscription", async () => {
    const host = document.createElement("div"), root = createRoot(host), ref = createRef<MausAvatarHandle>();
    try {
      await act(() => root.render(createElement(GrokAvatar, { ref, bodyId: "grok-flower", color: "blue", state: "thinking", gaze: { x: 1, y: -1 } })));
      const initial = host.innerHTML;
      act(() => { for (let now = 0; now < 500; now += 50) clock.frame?.(now); });
      expect(host.innerHTML).not.toBe(initial);
      expect(host.querySelectorAll("svg")).toHaveLength(1);
      expect(host.innerHTML).not.toContain("NaN");
      act(() => { ref.current?.blink(); ref.current?.spin(); clock.frame?.(550); });
      await act(() => root.render(createElement(GrokAvatar, { bodyId: "grok-star", color: "orange", animated: false, faceColor: "black" })));
      expect(clock.remove).toHaveBeenCalledTimes(1);
      expect(host.querySelector('[data-grok-body="star"]')).not.toBeNull();
      expect(host.innerHTML).toContain('fill="#000000"');
    } finally { await act(() => root.unmount()); }
  });

  it("does not register an animation when reduced motion is enabled", async () => {
    clock.reduced = true;
    const host = document.createElement("div"), root = createRoot(host);
    try {
      await act(() => root.render(createElement(GrokAvatar, { bodyId: "grok-blob", color: "green", state: "happy" })));
      expect(clock.frame).toBeNull();
      expect(host.querySelector("svg")).not.toBeNull();
    } finally { await act(() => root.unmount()); }
  });
});
