"use client";

import { useEffect, useRef, useState } from "react";

export type CursorState = "default" | "hover" | "click" | "text";

export function useCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const positionRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setCursorState("click");
    const handleMouseUp = () => setCursorState("default");

    // Elastic trail via lerp in rAF loop
    const animateTrail = () => {
      trailRef.current = {
        x: trailRef.current.x + (positionRef.current.x - trailRef.current.x) * 0.4,
        y: trailRef.current.y + (positionRef.current.y - trailRef.current.y) * 0.4,
      };
      setTrailPosition({ ...trailRef.current });
      rafRef.current = requestAnimationFrame(animateTrail);
    };

    rafRef.current = requestAnimationFrame(animateTrail);

    // Interactive element detection
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [data-cursor='hover'], input, textarea, select"
      );
      const textEls = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span");

      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorState("hover"));
        el.addEventListener("mouseleave", () => setCursorState("default"));
      });

      textEls.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (cursorState !== "hover") setCursorState("text");
        });
        el.addEventListener("mouseleave", () => setCursorState("default"));
      });
    };

    addHoverListeners();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [cursorState]);

  return { position, trailPosition, cursorState };
}
