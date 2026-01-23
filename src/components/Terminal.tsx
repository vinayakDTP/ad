import React from "react";
import { TerminalContent } from "./TerminalContent";

interface TerminalProps {
    command?: string;
    outputLines?: string[];
    showCursor?: boolean;
    startFrame?: number;
    typingSpeed?: number;
    outputStartDelay?: number;
    outputLineDelay?: number;
}

export const Terminal: React.FC<TerminalProps> = ({
    command = "",
    outputLines = [],
    showCursor = true,
    startFrame = 30,
    typingSpeed = 3,
    outputStartDelay = 15,
    outputLineDelay = 4,
}) => {
    return (
        <div className="w-full h-full p-12 flex items-center justify-center">
            {/* Terminal Window */}
            <div className="w-[90%] h-[85%] rounded-xl overflow-hidden flex flex-col border border-[#D1D1D1]">
                {/* Title Bar - Silverish */}
                <div className="bg-[#E4E4E4] px-6 py-4 flex items-center gap-3 border-b border-[#D1D1D1]">
                    {/* Traffic Lights */}
                    <div className="flex gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#FF5F57] border border-[#E14640]" />
                        <div className="w-4 h-4 rounded-full bg-[#FEBC2E] border border-[#D4A029]" />
                        <div className="w-4 h-4 rounded-full bg-[#28C840] border border-[#24A732]" />
                    </div>
                    {/* Title */}
                    <div className="flex-1 text-center">
                        <span className="text-[#4D4D4D] text-lg font-medium">
                            Terminal
                        </span>
                    </div>
                    {/* Spacer for symmetry */}
                    <div className="w-16" />
                </div>

                {/* Terminal Content */}
                <TerminalContent
                    command={command}
                    outputLines={outputLines}
                    showCursor={showCursor}
                    startFrame={startFrame}
                    typingSpeed={typingSpeed}
                    outputStartDelay={outputStartDelay}
                    outputLineDelay={outputLineDelay}
                />
            </div>
        </div>
    );
};
