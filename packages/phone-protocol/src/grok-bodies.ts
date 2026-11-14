export const GROK_BODY_IDS = [
  "grok-blob",
  "grok-pebble",
  "grok-bean",
  "grok-egg",
  "grok-squircle",
  "grok-tablet",
  "grok-capsule",
  "grok-cylinder",
  "grok-hex",
  "grok-gem",
  "grok-crystal",
  "grok-wedge",
  "grok-shield",
  "grok-dome",
  "grok-arch",
  "grok-cloud",
  "grok-teardrop",
  "grok-leaf",
  "grok-square",
  "grok-sparkle",
  "grok-clover",
  "grok-flower",
  "grok-heart",
  "grok-house",
  "grok-star",
  "grok-pumpkin",
] as const;

export type GrokBodyId = (typeof GROK_BODY_IDS)[number];

export function isGrokBody(value: unknown): value is GrokBodyId {
  return (GROK_BODY_IDS as readonly unknown[]).includes(value);
}

export function grokShape(id: GrokBodyId): string {
  return id.slice(5);
}

export function grokBodyName(id: GrokBodyId): string {
  const shape = grokShape(id);
  return shape.charAt(0).toUpperCase() + shape.slice(1);
}

export const DEFAULT_GROK_BODY: GrokBodyId = "grok-blob";

const LEGACY_GROK_BODY: Readonly<Record<string, GrokBodyId>> = {
  cursor: "grok-wedge", blob: "grok-blob", circle: "grok-pebble",
  squircle: "grok-squircle", capsule: "grok-capsule", drop: "grok-teardrop",
  shield: "grok-shield", hexagon: "grok-hex", diamond: "grok-gem", star: "grok-star",
};

/** Resolves stored legacy shapes without rewriting a bot's saved profile. */
export function grokBodyId(value: unknown): GrokBodyId {
  if (isGrokBody(value)) return value;
  return typeof value === "string" && Object.hasOwn(LEGACY_GROK_BODY, value)
    ? LEGACY_GROK_BODY[value]!
    : DEFAULT_GROK_BODY;
}
