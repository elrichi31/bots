import type { CursorState } from "./CursorAvatar"

export const DEFAULT_BLINK_MS = 320

export const BLINK = {
  sleeping: null,
  waking: null,
  idle: [
    6000,
    14000
  ],
  listening: [
    3000,
    7000
  ],
  thinking: [
    3500,
    7000
  ],
  searching: [
    1600,
    4000
  ],
  working: [
    2800,
    5500
  ],
  excited: [
    2000,
    4000
  ],
  surprised: [
    1800,
    3500
  ],
  suspicious: [
    4500,
    8000
  ],
  angry: [
    3500,
    7000
  ],
  drowsy: null,
  happy: [
    2500,
    5000
  ],
  curious: [
    2500,
    5500
  ],
  confused: [
    2800,
    5500
  ],
  bored: [
    4000,
    8000
  ],
  proud: [
    3500,
    7000
  ],
  shy: [
    3000,
    6000
  ],
  sad: [
    4000,
    8000
  ],
  laughing: [
    2500,
    5000
  ],
  scared: [
    1200,
    3000
  ],
  playful: [
    2000,
    4500
  ],
  celebrate: [
    2200,
    4500
  ],
  orbit: null,
  radar: null,
  progress: null,
  spawning: null,
  humming: [
    4000,
    8000
  ],
  loading: null,
  dictating: null,
  sending: null,
  receiving: null,
  uploading: null,
  writing: null,
  notifying: [
    2000,
    4000
  ],
  alerting: null,
  bouncing: null,
  dragging: [
    2200,
    4500
  ],
  "powering-down": null
} satisfies Record<CursorState, [number, number] | null>

export interface BlinkRhythm {
  everyMs: [number, number]
  durationMs: number
  doubleChance: number
  doubleGapMs: number
}

export function blinkScale(e: { blinkStart: number | null; blinkDuration: number }, now: number) {
  if (e.blinkStart === null) return 1
  const t = (now - e.blinkStart) / e.blinkDuration
  if (t >= 1) {
    e.blinkStart = null
    return 1
  }
  return Math.max(t < 0.42 ? 1 - t / 0.42 : (t - 0.42) / 0.58, 0.04)
}
