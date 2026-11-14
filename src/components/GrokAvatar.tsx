import { forwardRef, memo, useEffect, useId, useImperativeHandle, useMemo, useRef, type PointerEvent } from "react";
import { avatarMarks } from "@/lib/avatar-marks";
import { appearance, body, createActor, createDriver, expressions, paintSvg, renderSvg } from "../../third_party/grok-avatars/engine.mjs";
import { grokShape, type GrokBodyId } from "../../shared/grok-bodies";
import { mascotFaceInk } from "../../shared/bot-avatar";
import { CHROME_EYES, MAUS_COLORS, type MausMotion, type MausState } from "@/lib/mascot";
import type { MausAvatarProps, MausAvatarHandle } from "./Avatar";
import { mascotClock, usePrefersReducedMotion } from "./mascot-clock";
import { frameFloorMs, nextFrameAt } from "./mascot-motion";

const MOTION_STATE: Partial<Record<MausMotion, MausState>> = {
  arrive: "spawning", switch: "waking", customize: "proud", alert: "alerting",
  thinking: "thinking", working: "working", launch: "loading", success: "happy",
  celebrate: "celebrate", surprise: "surprised", failure: "sad",
};

const BODY_ZOOM = 1.4;

export const GrokAvatar = memo(forwardRef<MausAvatarHandle, MausAvatarProps & { bodyId: GrokBodyId }>(function GrokAvatar({
  bodyId, color, faceColor, size = 44, state = "idle", animated = true,
  trackPointer = true, gaze, motion = "none", motionKey = 0, label, kind,
}, ref) {
  const id = `grok-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const host = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();
  const live = animated && !reduced;
  const engine = useMemo(() => {
    const actor = createActor({ body: body(grokShape(bodyId)), zoomMul: BODY_ZOOM });
    const driver = createDriver(actor, state, { seed: 1, firstPhase: 0, isResting: !live });
    if (!live) for (let i = 0; i < 60; i++) actor.advance(0.1);
    return { actor, driver };
  }, [bodyId, state, live]);
  const ink = MAUS_COLORS[color];
  const eyes = mascotFaceInk(faceColor) ?? (color === "chrome" ? CHROME_EYES : "#ffffff");
  const paint = useMemo(() => appearance(ink, eyes), [ink, eyes]);
  const markup = useMemo(() => renderSvg(engine.actor.frame(), paint, size, id), [engine, paint, size, id]);

  useImperativeHandle(ref, () => ({
    blink: () => { if (live) engine.actor.blink(); },
    spin: () => { if (live) engine.actor.poke("spin"); },
    setExpression: (index) => {
      const expression = expressions[index];
      if (expression) engine.actor.setExpression(expression);
    },
  }), [engine, live]);

  useEffect(() => {
    engine.actor.setGaze(gaze ? [gaze.x ?? 0, gaze.y ?? 0] : null);
  }, [engine, gaze?.x, gaze?.y]);

  useEffect(() => {
    if (!live || motion === "none") return;
    const next = MOTION_STATE[motion];
    if (next) engine.driver.setState(next);
    if (motion === "blink") engine.actor.blink();
    if (motion === "celebrate") engine.actor.poke("spin");
    const timer = setTimeout(() => engine.driver.setState(state), 1400);
    return () => clearTimeout(timer);
  }, [engine, live, motion, motionKey, state]);

  useEffect(() => {
    if (!live || !host.current) return;
    let previous: number | undefined;
    const ticket = mascotClock().add((now) => {
      const seconds = previous === undefined ? 0 : Math.min((now - previous) / 1000, 0.05);
      previous = now;
      engine.driver.advance(seconds);
      engine.actor.advance(seconds);
      if (host.current) paintSvg(host.current, engine.actor.frame(), paint, size, id);
      return nextFrameAt(now, frameFloorMs(size));
    }, host.current);
    return () => ticket.remove();
  }, [engine, live, paint, size, id]);

  const onPointerMove = (event: PointerEvent<HTMLSpanElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (rect.width && rect.height) engine.actor.setGaze([
      Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1)),
      Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1)),
    ]);
  };

  return <span
    {...avatarMarks(kind, "mascot")}
    ref={host}
    className="inline-flex shrink-0 [&>svg]:overflow-visible"
    style={{ width: size, height: size }}
    role={label ? "img" : undefined}
    aria-label={label}
    aria-hidden={label ? undefined : true}
    data-grok-body={grokShape(bodyId)}
    onPointerMove={trackPointer && live ? onPointerMove : undefined}
    onPointerLeave={trackPointer && live ? () => engine.actor.setGaze(gaze ? [gaze.x ?? 0, gaze.y ?? 0] : null) : undefined}
    dangerouslySetInnerHTML={{ __html: markup }}
  />;
}));
