import React from "react";
import { Terminal } from "./components/Terminal";

const OUTPUT_LINES = [
    "",
    "███████╗██╗  ██╗██╗██╗     ██╗     ███████╗",
    "██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝",
    "███████╗█████╔╝ ██║██║     ██║     ███████╗",
    "╚════██║██╔═██╗ ██║██║     ██║     ╚════██║",
    "███████║██║  ██╗██║███████╗███████╗███████║",
    "╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝",
    "",
    "┌   skills",
    "│",
    "◇  Source: https://github.com/remotion-dev/skills.git",
    "│",
    "◇  Repository cloned",
    "",
    "◇  Found 1 skill",
    "│",
    "●  Skill: remotion-best-practices",
    "│",
    "│  Best practices for Remotion - Video creation in React",
    "",
    "◇  Detected 3 agents",
    "│",
    "◇  Select agents to install skills to",
    "│  Antigravity, Cursor, Gemini CLI",
];

export const SkillsComposition: React.FC = () => {
    return (
        <Terminal
            command="npx skills add remotion-dev/skills"
            outputLines={OUTPUT_LINES}
            showCursor={true}
            startFrame={30}
            typingSpeed={3}
            outputStartDelay={15}
            outputLineDelay={3}
        />
    );
};
