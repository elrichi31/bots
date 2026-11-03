export interface Actor {
  frame(): unknown;
  advance(seconds: number): void;
  setGaze(gaze: [number, number] | null): void;
  blink(): void;
  poke(poke: "spin" | "bounce" | "nod", options?: { turns?: number }): void;
  setExpression(expression: string): void;
}
export interface Driver {
  setState(state: string): void;
  advance(seconds: number): void;
}
export function createActor(options: { body: string; zoomMul?: number }): Actor;
export function createDriver(actor: Actor, state: string, options?: { seed?: number; firstPhase?: number; isResting?: boolean }): Driver;
export function body(shape: string): string;
export function appearance(ink: string, spot?: string): unknown;
export function renderSvg(frame: unknown, appearance: unknown, size: number, id: string): string;
export function paintSvg(element: Element, frame: unknown, appearance: unknown, size: number, id: string): void;
export const expressions: readonly string[];
