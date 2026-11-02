import { createElement, createRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { MausBotCustomize } from "./MausBotCustomize";
import type { Bot } from "@/state/store";
import { GROK_BODY_IDS } from "../../shared/grok-bodies";

describe("welcome avatar catalog", () => {
  it("offers only Grok bodies and selects the equivalent of a stored legacy choice", () => {
    const preview: Bot = {
      id: "fixture", threadId: "thread", name: "Maus", title: "", description: "",
      notifications: false, color: "blue", unread: false, messages: [], mascotBody: "cursor",
      modelSelection: { instanceId: "fixture", model: "fixture" },
    };
    const html = renderToStaticMarkup(createElement(MausBotCustomize, {
      preview, name: preview.name, nameRef: createRef<HTMLInputElement>(), onName: vi.fn(), onPatch: vi.fn(),
      image: {
        fileRef: createRef<HTMLInputElement>(), crop: "mascot", uploading: false, generating: false,
        setSavingConnection: vi.fn(), busy: false, error: null,
        upload: vi.fn(async () => {}), removeImage: vi.fn(async () => {}), generate: vi.fn(async () => {}),
      },
    }));
    for (const id of GROK_BODY_IDS) expect(html).toContain(`data-mausbot-welcome-body="${id}"`);
    expect(html).not.toContain('data-mausbot-welcome-body="cursor"');
    expect(html).toContain('aria-pressed="true" aria-label="Wedge"');
  });
});
