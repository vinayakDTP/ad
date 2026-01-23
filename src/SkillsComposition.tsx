import React from "react";
import { Terminal } from "./components/Terminal";
import { useCurrentFrame } from "remotion";

const SEARCH_COLOR = "#3B82F6";

const OUTPUT_LINES = [
    "",
    { text: " ███████╗███████╗ █████╗ ██████╗  ██████╗██╗  ██╗██╗███╗   ██╗ ██████╗ ", color: SEARCH_COLOR },
    { text: " ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██║  ██║██║████╗  ██║██╔════╝ ", color: SEARCH_COLOR },
    { text: " ███████╗█████╗  ███████║██████╔╝██║     ███████║██║██╔██╗ ██║██║  ███╗", color: SEARCH_COLOR },
    { text: " ╚════██║██╔══╝  ██╔══██║██╔══██╗██║     ██╔══██║██║██║╚██╗██║██║   ██║", color: SEARCH_COLOR },
    { text: " ███████║███████╗██║  ██║██║  ██║╚██████╗██║  ██║██║██║ ╚████║╚██████╔╝", color: SEARCH_COLOR },
    { text: " ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ", color: SEARCH_COLOR },
    "◈ Question on the table:",
    "  Where does real power to drive oneself comes from?",
    "◈ Leads emerging:",
    "  - Curiosity that won’t shut up",
    "  - Restlessness masquerading as boredom",
    "  - The pull toward building something new",
];


export const SkillsComposition: React.FC = () => {
    const frame = useCurrentFrame();

    // Logic for Posterize Time (10 FPS) between frames 70 and 120
    let effectiveFrame = frame;
    if (frame >= 70 && frame <= 120) {
        const fps = 30;
        const targetFps = 10;
        const frameStep = fps / targetFps; // 3 frames

        const delta = frame - 70;
        const effectiveDelta = Math.floor(delta / frameStep) * frameStep;
        effectiveFrame = 70 + effectiveDelta;
    }

    return (
        <Terminal
            frameOverride={effectiveFrame}
            command="npx skills add agency"
            outputLines={OUTPUT_LINES}
            showCursor={true}
            startFrame={30}
            typingSpeed={3}
            outputStartDelay={15}
            outputLineDelay={3}
        />
    );
};
