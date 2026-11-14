import {
  forwardRef,
  memo,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import { avatarMarks, type AvatarKind } from "@/lib/avatar-marks";
import { type MausColor, type MausMotion, type MausState } from "@/lib/mascot";
import type { CursorAvatarHandle } from "./CursorAvatar";
import { avatarCropRadius, botAvatarProfile, clampAvatarFocus, clampAvatarZoom, type BotAvatarCrop, type MascotFaceColor } from "../../shared/bot-avatar";
import { isCarvedBody, type BotBodyId } from "../../shared/bot-body";
import { useFestivalDress, wornBody } from "@/lib/festival-dress";
import { GrokAvatar } from "./GrokAvatar";
import { grokBodyId } from "../../shared/grok-bodies";
import { t } from "@/lib/i18n";
import { CarvedAvatar } from "./CarvedAvatar";

export const EYE_SCALE = 1.12;
export const MOUTH_WEIGHT = 11;

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
  /** Whose face this is; a decorative mascot has none. */
  kind?: AvatarKind;
};

function MausAvatarComponent(props: MausAvatarProps, ref: React.Ref<MausAvatarHandle>) {
  const { bodyId, color, size, state, motion, motionKey, gaze, trackPointer, animated, label, kind } = props;
  if (isCarvedBody(bodyId)) {
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
        kind={kind}
      />
    );
  }
  return <GrokAvatar ref={ref} {...props} bodyId={grokBodyId(bodyId)} />;
}

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
  const festival = useFestivalDress();
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
        bodyId={wornBody(bot.mascotBody, bot.color, festival)}
        {...mascotProps}
        color={bot.color}
        faceColor={bot.mascotFaceColor}
        gradient={readable ? roomAvatarGradient(bot.color) : undefined}
        size={size}
        label={label ?? bot.name}
        kind="bot"
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
      {...avatarMarks("bot", "picture")}
      className="relative block shrink-0 overflow-hidden bg-raised"
      style={{ width: size, height: size, borderRadius: radius }}
    >
      <img
        src={profile.avatarUrl}
        alt={label ?? (bot.name ? t("avatar.alt", { name: bot.name }) : t("avatar.altFallback"))}
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
    return <img {...avatarMarks("person", "picture")} src={avatarUrl} alt="" onError={() => setFailed(avatarUrl)} className={cn("shrink-0 rounded-full object-cover", className)} style={{ width: size, height: size }} />;
  }
  return (
    <div
      {...avatarMarks("person", "initials")}
      className={cn("flex shrink-0 items-center justify-center rounded-full bg-raised text-ink-secondary font-medium", className)}
      style={{ width: size, height: size, fontSize: fontSize ?? size * 0.38 }}
    >
      {fallback ?? initials}
    </div>
  );
}
