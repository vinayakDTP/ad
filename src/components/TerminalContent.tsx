import React from "react";
import { useCurrentFrame } from "remotion";
import { Cursor } from "./Cursor";

export type OutputLine = string | { text: string; color: string };

interface TerminalContentProps {
    command: string;
    outputLines?: OutputLine[];
    showCursor?: boolean;
    startFrame?: number;
    typingSpeed?: number;
    outputStartDelay?: number; // frames after typing ends before output starts
    outputLineDelay?: number; // frames between each output line
}

export const TerminalContent: React.FC<TerminalContentProps> = ({
    command,
    outputLines = [],
    showCursor = true,
    startFrame = 30,
    typingSpeed = 3,
    outputStartDelay = 15,
    outputLineDelay = 4,
}) => {
    const frame = useCurrentFrame();

    // Calculate how many characters to show based on current frame
    const typingProgress = Math.max(0, frame - startFrame);
    const charactersToShow = Math.floor(typingProgress / typingSpeed);
    const displayedCommand = command.slice(0, Math.min(charactersToShow, command.length));

    // Determine if we're currently in the typing phase
    const hasStartedTyping = frame >= startFrame;
    const isTypingComplete = charactersToShow >= command.length;
    const isTyping = hasStartedTyping && !isTypingComplete;

    // Calculate which output lines to show
    const typingEndFrame = startFrame + command.length * typingSpeed;
    const outputStartFrame = typingEndFrame + outputStartDelay;
    const linesToShow = isTypingComplete
        ? Math.floor((frame - outputStartFrame) / outputLineDelay)
        : 0;
    const visibleOutputLines = outputLines.slice(0, Math.max(0, linesToShow));

    return (
        <div className="flex-1 bg-[#FFFFFF] p-6 font-mono text-base overflow-hidden">
            {/* Prompt Line */}
            <div className="flex items-center shrink-0">
                <span className="text-[#1E1E1E]">
                    <span className="text-[#3B82F6] font-semibold">~</span>
                    <span className="text-[#6B7280]"> $ </span>
                    {displayedCommand}
                    {showCursor && !isTypingComplete && <Cursor isTyping={isTyping} blinkSpeed={15} />}
                </span>
            </div>

            {/* Output Lines */}
            {visibleOutputLines.map((line, index) => {
                const text = typeof line === 'string' ? line : line.text;
                const color = typeof line === 'string' ? '#1E1E1E' : line.color;

                return (
                    <div key={index} className="whitespace-pre" style={{ color }}>
                        {text}
                    </div>
                );
            })}

            {/* Cursor at end of output */}
            {showCursor && isTypingComplete && linesToShow >= outputLines.length && (
                <div className="flex items-center mt-2">
                    <span className="text-[#3B82F6] font-semibold">~</span>
                    <span className="text-[#6B7280]"> $ </span>
                    <Cursor isTyping={false} blinkSpeed={15} />
                </div>
            )}
        </div>
    );
};
