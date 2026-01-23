import React from "react";
import { AbsoluteFill, Img, staticFile, Series, useCurrentFrame, interpolate, Easing } from "remotion";

const IntroSequence: React.FC = () => {
    const frame = useCurrentFrame();

    // Slower animations for 10s version
    // 1. Skills (Top Left) - Starts at frame 0
    const skillsOpacity = interpolate(frame, [0, 20], [0, 1]);
    const skillsY = interpolate(frame, [0, 20], [20, 0], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });

    // 2. Agency (Bottom Left) - Starts at frame 30
    const agencyOpacity = interpolate(frame, [30, 50], [0, 1]);
    const agencyY = interpolate(frame, [30, 50], [20, 0], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });

    // 3. Intelligence (Top Right) - Starts at frame 60
    const intelligenceOpacity = interpolate(frame, [60, 80], [0, 1]);
    const intelligenceInY = interpolate(frame, [60, 80], [20, 0], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });

    // Slide out to right: starts at frame 110
    const slideOutX = interpolate(frame, [110, 140], [0, 1400], {
        extrapolateLeft: "clamp",
        easing: Easing.in(Easing.quad),
    });

    // 4. Scale Animations (0.5s = 15 frames)
    const skillsScale = interpolate(frame, [0, 15], [0, 1], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });

    const agencyScale = interpolate(frame, [30, 45], [0, 1], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });

    const intelligenceScale = interpolate(frame, [60, 75], [0, 1], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });

    const fontStyle: React.CSSProperties = {
        fontFamily: "GT Planar, sans-serif",
    };

    return (
        <div className="w-full h-full relative">
            {/* Skills */}
            <div
                className="absolute top-[120px] left-20"
                style={{
                    opacity: skillsOpacity,
                    transform: `translateY(${skillsY}px) scale(${skillsScale})`
                }}
            >
                <h1 className="text-[40px] font-bold text-gray-800 m-0 leading-none" style={fontStyle}>
                    Skills
                </h1>
            </div>

            {/* Agency */}
            <div
                className="absolute bottom-20 left-20"
                style={{
                    opacity: agencyOpacity,
                    transform: `translateY(${agencyY}px) scale(${agencyScale})`
                }}
            >
                <h1 className="text-[40px] font-bold text-gray-800 m-0 leading-none" style={fontStyle}>
                    Agency
                </h1>
            </div>

            {/* Intelligence */}
            <div
                className="absolute top-[120px] right-20"
                style={{
                    opacity: intelligenceOpacity,
                    transform: `translate(calc(0px + ${slideOutX}px), ${intelligenceInY}px) scale(${intelligenceScale})`
                }}
            >
                <h1 className="text-[40px] font-bold text-gray-800 m-0 leading-none" style={fontStyle}>
                    Intelligence
                </h1>
            </div>
        </div>
    );
};


export const LogoComposition: React.FC = () => {
    return (
        <AbsoluteFill className="bg-transparent">
            <Series>
                {/* Sequence 1: 3-Part Text Intro - Slower (140 frames ~ 4.6s) */}
                <Series.Sequence durationInFrames={140}>
                    <IntroSequence />
                </Series.Sequence>

                {/* Sequence 2: Logos - With Golden Background */}
                {/* Covers the background image */}
                <Series.Sequence durationInFrames={160}>
                    <AbsoluteFill className="bg-[#FFFBEB] flex items-center justify-center">
                        <div className="flex items-center gap-6">
                            {/* ChatGPT Logo */}
                            <Img
                                src={staticFile("logos/chatgpt-logo.svg")}
                                className="h-14"
                                alt="ChatGPT"
                            />

                            {/* Plus Sign */}
                            <span className="text-4xl font-light text-gray-400">+</span>

                            {/* Claude Logo */}
                            <Img
                                src={staticFile("logos/claude-logo.svg")}
                                className="h-14"
                                alt="Claude"
                            />
                        </div>
                    </AbsoluteFill>
                </Series.Sequence>
            </Series>
        </AbsoluteFill>
    );
};
