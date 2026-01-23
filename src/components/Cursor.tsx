import React from "react";
import { useCurrentFrame } from "remotion";

interface CursorProps {
    isTyping?: boolean;
    blinkSpeed?: number; // frames per blink cycle
}

export const Cursor: React.FC<CursorProps> = ({
    isTyping = false,
    blinkSpeed = 15,
}) => {
    const frame = useCurrentFrame();

    // When typing, cursor is always visible
    // When not typing, cursor blinks
    const visible = isTyping ? true : Math.floor(frame / blinkSpeed) % 2 === 0;

    if (!visible) return null;

    return (
        <span className="inline-block w-1.5 h-4 bg-[#1E1E1E] ml-0.5 align-middle" />
    );
};
