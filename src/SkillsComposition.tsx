import React from "react";
import { Terminal } from "./components/Terminal";

const SEARCH_COLOR = "#3B82F6";

const OUTPUT_LINES = [
    "",
    { text: " ███████╗███████╗ █████╗ ██████╗  ██████╗██╗  ██╗██╗███╗   ██╗ ██████╗ ", color: SEARCH_COLOR },
    { text: " ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██║  ██║██║████╗  ██║██╔════╝ ", color: SEARCH_COLOR },
    { text: " ███████╗█████╗  ███████║██████╔╝██║     ███████║██║██╔██╗ ██║██║  ███╗", color: SEARCH_COLOR },
    { text: " ╚════██║██╔══╝  ██╔══██║██╔══██╗██║     ██╔══██║██║██║╚██╗██║██║   ██║", color: SEARCH_COLOR },
    { text: " ███████║███████╗██║  ██║██║  ██║╚██████╗██║  ██║██║██║ ╚████║╚██████╔╝", color: SEARCH_COLOR },
    { text: " ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ", color: SEARCH_COLOR },
    "",
    "A desk lamp hums. Rain taps against the window.",
    "The city waits. Something doesn’t sit right.",
    "",
    "◈ Case file opened",
    "◈ Status: SEARCHING",
    "",
    "◈ Question on the table:",
    "  Where does real agency come from?",
    "",
    "◈ Scanning surroundings for clues...",
    "◈ No clear answers. Only signals.",
    "",
    "◈ Leads emerging:",
    "  - Curiosity that won’t shut up",
    "  - Restlessness masquerading as boredom",
    "  - The pull toward building something new",
    "",
    "◈ Possible agencies identified:",
    "  - You",
    "  - Your tools",
    "  - The next deliberate move",
    "",
    "The magnifying glass lowers.",
    "Nothing solved. But the direction is clearer.",
    "SEARCHING continues.",
    "",
];


export const SkillsComposition: React.FC = () => {
    return (
        <Terminal
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
