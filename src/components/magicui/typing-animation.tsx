"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({ text, duration = 200, className }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    const cursorBlinking = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingEffect);
      clearInterval(cursorBlinking);
    };
  }, [duration, i, text]);

  return (
    <h1
      className={cn("font-display  text-4xl font-bold leading-[5rem]  drop-shadow-sm", className)}
    >
      {displayedText}
      <span
        className={cn(cursorVisible ? "inline" : "hidden", "SnippetsShowcase_cursor__3Cyq9")}
      ></span>
    </h1>
  );
}
