"use client";

import { useCursor } from "@/hooks/useCursor";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const { position, trailPosition, cursorState } = useCursor();

  return (
    <>
      {/* Center dot */}
      <div
        className={cn(
          "fixed z-[99999] pointer-events-none rounded-full",
          cursorState === "click" && "scale-75",
          cursorState === "hover" && "scale-150"
        )}
        style={{
          width: "6px",
          height: "6px",
          background: "#ffffff",
          left: position.x - 3,
          top: position.y - 3,
          transitionProperty: "transform",
          transitionDuration: "75ms",
          transitionTimingFunction: "linear",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* Elastic trailing ring */}
      <div
        className={cn(
          "fixed z-[99998] pointer-events-none rounded-full",
          "border border-white/40"
        )}
        style={{
          width: cursorState === "hover" ? "48px" : cursorState === "click" ? "20px" : "32px",
          height: cursorState === "hover" ? "48px" : cursorState === "click" ? "20px" : "32px",
          left: trailPosition.x - (cursorState === "hover" ? 24 : cursorState === "click" ? 10 : 16),
          top: trailPosition.y - (cursorState === "hover" ? 24 : cursorState === "click" ? 10 : 16),
          transitionProperty: "width, height, opacity",
          transitionDuration: cursorState === "click" ? "80ms" : "200ms",
          transitionTimingFunction: "linear",
          opacity: cursorState === "text" ? 0 : 1,
          mixBlendMode: "difference",
          willChange: "transform, width, height",
        }}
        aria-hidden="true"
      />

      {/* Text cursor (I-beam style) */}
      {cursorState === "text" && (
        <div
          className="fixed z-[99998] pointer-events-none"
          style={{
            left: position.x - 1,
            top: position.y - 10,
            width: "2px",
            height: "20px",
            background: "white",
            opacity: 0.6,
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
