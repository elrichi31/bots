import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import { CHROME_EYES, CHROME_GRADIENT, MAUS_COLORS, type MausColor, type MausMotion, type MausState } from "@/lib/mascot";
import { CursorAvatar, POOLS, type CursorAvatarHandle } from "./CursorAvatar";
import type { BlinkRhythm } from "./mascot-blink";
import { avatarCropRadius, botAvatarProfile, clampAvatarFocus, clampAvatarZoom, mascotFaceInk, type BotAvatarCrop, type MascotFaceColor } from "../../shared/bot-avatar";
import { MASCOT_BODIES, botMascotBody } from "../../shared/mascot-bodies";
import { isHalloweenBody, type BotBodyId } from "../../shared/bot-body";
import { useHalloweenDressed, wornBody } from "@/lib/halloween-dress";
import { GrokAvatar } from "./GrokAvatar";
import { isGrokBody } from "../../shared/grok-bodies";
import { CarvedAvatar } from "./CarvedAvatar";
import { steelBodyImage } from "@/lib/steel-body";

export const EYE_SCALE = 1.12;
export const MOUTH_WEIGHT = 11;

const POINTER_GAZE = { forward: 1, authored: 0.25 };

interface MotionFaces
  extends Partial<
    Record<Exclude<MausMotion, "none">, { state?: MausState; blink?: boolean; spin?: number }>
  > {}

const MOTION_FACE: MotionFaces = {
  arrive: { state: "spawning", spin: 900 },
  switch: { state: "waking", spin: 620 },
  customize: { state: "proud", blink: true },
  alert: { state: "alerting" },
  thinking: { state: "thinking" },
  working: { state: "working" },
  launch: { state: "loading" },
  success: { state: "happy", blink: true },
  celebrate: { state: "celebrate", spin: 700 },
  blink: { blink: true },
  surprise: { state: "surprised", blink: true },
  failure: { state: "sad" },
};

const MOTION_FACE_MS = 1400;

function mix(hex: string, toward: string, t: number): string {
  const a = Number.parseInt(hex.slice(1), 16);
  const b = Number.parseInt(toward.slice(1), 16);
  const channel = (shift: number) => {
    const va = (a >> shift) & 0xff;
    const vb = (b >> shift) & 0xff;
    return Math.round(va + (vb - va) * t);
  };
  return `#${[channel(16), channel(8), channel(0)]
    .map((part) => part.toString(16).padStart(2, "0"))
    .join("")}`;
}

const FLAT_EYES = "#ffffff";
const CALM_EXPRESSION = POOLS.idle[0];
const FACE_LIFT = -0.2;
const FLAT_EYE_SCALE = 1.4;
const FLAT_EYE_ASPECT = 1.45;
const FLAT_EYE_TILT = -8;
const FLAT_FACE_SCALE = 1.25;
const FLAT_BLINK: BlinkRhythm = { everyMs: [1900, 4600], durationMs: 180, doubleChance: 0.18, doubleGapMs: 240 };
const BUSY_BLINK: BlinkRhythm = { everyMs: [900, 2200], durationMs: 200, doubleChance: 0.35, doubleGapMs: 260 };

interface FlatFace {
  open?: number;
  size?: number;
  tilt?: number;
  look?: [number, number];
  busy?: boolean;
}

const FLAT_FACES: Partial<Record<MausState, FlatFace>> = {
  sleeping: { open: 0.12, look: [0, 0.3] },
  waking: { open: 1.2, size: 1.05 },
  listening: { look: [0.25, 0] },
  thinking: { open: 0.8, look: [-0.35, -0.45], busy: true },
  searching: { look: [0.45, 0], busy: true },
  working: { open: 0.75, look: [0, 0.3], busy: true },
  excited: { open: 1.15, size: 1.05, busy: true },
  surprised: { open: 1.3, size: 1.1 },
  suspicious: { open: 0.4, tilt: 4, look: [0.3, 0] },
  angry: { open: 0.55, tilt: 16 },
  drowsy: { open: 0.3, look: [0, 0.25] },
  happy: { open: 0.5, tilt: -6 },
  curious: { open: 1.1, tilt: -10, look: [0.35, -0.3] },
  confused: { open: 0.9, tilt: 12, look: [-0.25, -0.2] },
  bored: { open: 0.5, look: [0.3, 0.3] },
  proud: { open: 0.55, look: [0, -0.4] },
  shy: { open: 0.85, size: 0.85, look: [-0.4, 0.35] },
  sad: { open: 0.8, size: 0.9, tilt: 10, look: [0, 0.45] },
  laughing: { open: 0.3, tilt: -6, busy: true },
  scared: { open: 1.2, size: 0.8, busy: true },
  playful: { open: 0.7, tilt: -12, look: [0.3, -0.2], busy: true },
  celebrate: { open: 0.5, tilt: -6, busy: true },
};

const gradientFor = (color: MausColor): [string, string, string] => {
  if (color === "chrome") return CHROME_GRADIENT;
  const fill = mix(MAUS_COLORS[color] ?? MAUS_COLORS.green, "#ffffff", 0.12);
  return [fill, fill, fill];
};

export function roomAvatarGradient(color: MausColor): [string, string, string] {
  const fill = `var(--identity-${color})`;
  return [fill, fill, fill];
}

export type MausAvatarHandle = CursorAvatarHandle;

export type MausAvatarProps = {
  color: MausColor;
  state?: MausState;
  expression?: number;
  size?: number;
  label?: string;
  motion?: MausMotion;
  motionKey?: number;
  turn?: number;
  gaze?: { x?: number; y?: number };
  spring?: number;
  eyeScale?: number;
  showMouth?: boolean;
  mouthStroke?: number;
  forward?: boolean;
  lookAround?: number;
  trackPointer?: boolean;
  animated?: boolean;
  bodyId?: BotBodyId;
  gradient?: [string, string, string];
  faceColor?: MascotFaceColor | null;
};

function MausAvatarComponent(props: MausAvatarProps, ref: React.Ref<MausAvatarHandle>) {
  const { bodyId, color, size, state, motion, motionKey, gaze, trackPointer, animated, label } = props;
  if (isGrokBody(bodyId)) {
    return <GrokAvatar ref={ref} {...props} bodyId={bodyId} />;
  }
  if (isHalloweenBody(bodyId)) {
    return (
      <CarvedAvatar
        ref={ref}
        body={bodyId}
        color={color}
        faceColor={props.faceColor}
        size={size}
        state={state}
        motion={motion}
        motionKey={motionKey}
        gaze={gaze}
        trackPointer={trackPointer}
        animated={animated}
        label={label}
      />
    );
  }
  return <GradientAvatar ref={ref} {...props} />;
}

function GradientAvatarComponent(
  {
    color,
    state = "idle",
    expression,
    size = 44,
    label,
    motion = "none",
    motionKey = 0,
    turn,
    gaze,
    spring,
    eyeScale,
    showMouth,
    mouthStroke,
    forward = true,
    lookAround,
    trackPointer = true,
    animated = true,
    bodyId,
    gradient,
    faceColor,
  }: MausAvatarProps,
  ref: React.Ref<MausAvatarHandle>,
) {
  const silhouette = MASCOT_BODIES[botMascotBody(bodyId)];
  const chrome = color === "chrome";
  const faceInk = mascotFaceInk(faceColor);
  const inner = useRef<CursorAvatarHandle>(null);
  useImperativeHandle(ref, () => ({
    blink: () => inner.current?.blink(),
    spin: (durationMs?: number) => inner.current?.spin(durationMs),
    setExpression: (index: number) => inner.current?.setExpression(index),
  }));

  const [motionState, setMotionState] = useState<MausState | null>(null);
  useEffect(() => {
    if (motion === "none" || !animated) return;
    const beat = MOTION_FACE[motion];
    if (!beat) return;
    if (beat.blink) inner.current?.blink();
    if (beat.spin) inner.current?.spin(beat.spin);
    if (!beat.state) return;
    setMotionState(beat.state);
    const timer = setTimeout(() => setMotionState(null), MOTION_FACE_MS);
    return () => clearTimeout(timer);
  }, [motion, motionKey, animated]);

  const faceState = motionState ?? state;
  const face = FLAT_FACES[faceState] ?? {};
  const firstFace = useRef(true);
  useEffect(() => {
    if (firstFace.current) {
      firstFace.current = false;
      return;
    }
    if (animated) inner.current?.blink();
  }, [faceState, animated]);

  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const range = forward ? POINTER_GAZE.forward : POINTER_GAZE.authored;
  const onPointerMove = (event: ReactPointerEvent<HTMLSpanElement>) => {
    if (!trackPointer || !animated) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1)) * range,
      y: Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1)) * range,
    });
  };
  const onPointerLeave = () => setPointer({ x: 0, y: 0 });

  return (
    <span
      className="inline-flex shrink-0"
      onPointerMove={trackPointer && animated ? onPointerMove : undefined}
      onPointerLeave={trackPointer && animated ? onPointerLeave : undefined}
    >
      <CursorAvatar
        ref={inner}
        state={faceState}
        expression={expression ?? CALM_EXPRESSION}
        size={size}
        silhouette={silhouette}
        gradient={gradient ?? gradientFor(color)}
        picture={chrome && !faceInk ? steelBodyImage(silhouette.id, size, globalThis.devicePixelRatio ?? 1) : null}
        eyeColor={faceInk ?? (chrome ? CHROME_EYES : FLAT_EYES)}
        title={label ?? null}
        lookAround={lookAround ?? (forward ? 0 : 1)}
        gaze={{ x: (gaze?.x ?? face.look?.[0] ?? 0) + pointer.x, y: (gaze?.y ?? FACE_LIFT + (face.look?.[1] ?? 0)) + pointer.y }}
        turn={turn ?? 0}
        spring={spring}
        eyeScale={(eyeScale ?? FLAT_EYE_SCALE) * (face.size ?? 1)}
        eyeAspect={FLAT_EYE_ASPECT * (face.open ?? 1)}
        eyeTilt={FLAT_EYE_TILT + (face.tilt ?? 0)}
        blinkRhythm={face.busy ? BUSY_BLINK : FLAT_BLINK}
        faceScale={FLAT_FACE_SCALE}
        showMouth={showMouth ?? false}
        effects={false}
        mouthStroke={mouthStroke}
        paused={!animated}
      />
    </span>
  );
}

const GradientAvatar = forwardRef(GradientAvatarComponent);

export const MausAvatar = memo(forwardRef(MausAvatarComponent));

export type BotAvatarProps = Omit<MausAvatarProps, "color" | "gradient"> & {
  readable?: boolean;
  bot: {
    name?: string;
    color: MausColor;
    avatarUrl?: string | null;
    avatarCrop?: BotAvatarCrop;
    avatarZoom?: number;
    avatarFocusX?: number;
    avatarFocusY?: number;
    mascotBody?: BotBodyId | null;
    mascotFaceColor?: MascotFaceColor | null;
  };
};

export type BotAvatarOutcome = "flatImage" | "gradientMascot";

/** Mirrored name for name by resolveBotAvatarOutcome in ios/Sources/CompanionCore/BotAvatarRendering.swift. */
export function resolveBotAvatarOutcome(params: {
  avatarCrop: BotAvatarCrop;
  hasUrl: boolean;
  imageFailed: boolean;
}): BotAvatarOutcome {
  const { avatarCrop, hasUrl, imageFailed } = params;
  if (!hasUrl) return "gradientMascot";
  if (avatarCrop === "mascot") return "gradientMascot";
  if (imageFailed) return "gradientMascot";
  return "flatImage";
}

export function BotAvatar({ bot, size = 44, label, readable = false, ...mascotProps }: BotAvatarProps) {
  const profile = botAvatarProfile(bot);
  const dressed = useHalloweenDressed();
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => setImageFailed(false), [profile.avatarUrl]);

  const outcome = resolveBotAvatarOutcome({
    avatarCrop: profile.avatarCrop,
    hasUrl: Boolean(profile.avatarUrl),
    imageFailed,
  });

  if (outcome !== "flatImage") {
    return (
      <MausAvatar
        bodyId={wornBody(bot.mascotBody, bot.color, dressed)}
        {...mascotProps}
        color={bot.color}
        faceColor={bot.mascotFaceColor}
        gradient={readable ? roomAvatarGradient(bot.color) : undefined}
        size={size}
        label={label ?? bot.name}
      />
    );
  }

  const radius = avatarCropRadius(profile.avatarCrop);
  const zoom = clampAvatarZoom(bot.avatarZoom ?? 1);
  const focusX = clampAvatarFocus(bot.avatarFocusX ?? 0.5);
  const focusY = clampAvatarFocus(bot.avatarFocusY ?? 0.5);
  const origin = `${focusX * 100}% ${focusY * 100}%`;
  return (
    <span
      className="relative block shrink-0 overflow-hidden bg-raised"
      style={{ width: size, height: size, borderRadius: radius }}
    >
      <img
        src={profile.avatarUrl}
        alt={label ?? (bot.name ? `${bot.name} avatar` : "Bot avatar")}
        width={size}
        height={size}
        draggable={false}
        onError={() => setImageFailed(true)}
        className="block size-full max-w-none object-cover"
        style={{
          width: size,
          height: size,
          objectPosition: origin,
          transform: zoom === 1 ? undefined : `scale(${zoom})`,
          transformOrigin: origin,
        }}
      />
    </span>
  );
}

export function InitialsAvatar({
  initials,
  avatarUrl,
  size = 32,
  fallback,
  fontSize,
  className,
}: {
  initials: string;
  avatarUrl?: string;
  size?: number;
  className?: string;
  /** drawn instead of the initials, for a person with no name or email to take them from */
  fallback?: ReactNode;
  fontSize?: number;
}) {
  // A picture that is gone (a restored backup carries the address, not the file) falls back to the initials.
  const [failed, setFailed] = useState<string | null>(null);
  if (avatarUrl && failed !== avatarUrl) {
    return <img src={avatarUrl} alt="" onError={() => setFailed(avatarUrl)} className={cn("shrink-0 rounded-full object-cover", className)} style={{ width: size, height: size }} />;
  }
  return (
    <div
      className={cn("flex shrink-0 items-center justify-center rounded-full bg-raised text-ink-secondary font-medium", className)}
      style={{ width: size, height: size, fontSize: fontSize ?? size * 0.38 }}
    >
      {fallback ?? initials}
    </div>
  );
}
