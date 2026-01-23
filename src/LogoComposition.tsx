import React from "react";
import { AbsoluteFill, Img, staticFile, Series, useCurrentFrame, interpolate, Easing } from "remotion";

const IntroSequence: React.FC = () => {
    const frame = useCurrentFrame();

    // 1. Skills (Top Left) - Starts at frame 0
    const skillsOpacity = interpolate(frame, [0, 10], [0, 1]);
    const skillsY = interpolate(frame, [0, 10], [20, 0], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });

    // 2. Agency (Bottom Left) - Starts at frame 15
    const agencyOpacity = interpolate(frame, [15, 25], [0, 1]);
    const agencyY = interpolate(frame, [15, 25], [20, 0], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });

    // 3. Intelligence (Top Right) - Starts at frame 30
    const intelligenceOpacity = interpolate(frame, [30, 40], [0, 1]);
    // Slide in up
    const intelligenceInY = interpolate(frame, [30, 40], [20, 0], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });

    // Slide out to right: starts at frame 55
    const slideOutX = interpolate(frame, [55, 70], [0, 800], {
        extrapolateLeft: "clamp",
        easing: Easing.in(Easing.quad),
    });

    const fontStyle: React.CSSProperties = {
        fontFamily: "GT Planar, sans-serif",
    };

    return (
        <div className="w-full h-full relative">
            {/* Skills: Top Left */}
            <div
                className="absolute top-20 left-20"
                style={{
                    opacity: skillsOpacity,
                    transform: `translateY(${skillsY}px)`
                }}
            >
                <h1 className="text-[40px] font-bold text-gray-800" style={fontStyle}>
                    Skills
                </h1>
            </div>

            {/* Agency: Bottom Left */}
            <div
                className="absolute bottom-20 left-20"
                style={{
                    opacity: agencyOpacity,
                    transform: `translateY(${agencyY}px)`
                }}
            >
                <h1 className="text-[40px] font-bold text-gray-800" style={fontStyle}>
                    Agency
                </h1>
            </div>

            {/* Intelligence: Top Right -> Slide Out */}
            <div
                className="absolute top-20 right-20"
                style={{
                    opacity: intelligenceOpacity,
                    transform: `translate(calc(0px + ${slideOutX}px), ${intelligenceInY}px)`
                }}
            >
                <h1 className="text-[40px] font-bold text-gray-800" style={fontStyle}>
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
                {/* Sequence 1: 3-Part Text Intro */}
                <Series.Sequence durationInFrames={75}>
                    <IntroSequence />
                </Series.Sequence>

                {/* Sequence 2: Logos */}
                <Series.Sequence durationInFrames={165}>
                    <div className="w-full h-full flex items-center justify-center">
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

                            {/* Plus Sign */}
                            <span className="text-4xl font-light text-gray-400">+</span>

                            {/* xAI Logo */}
                            <Img
                                src={staticFile("logos/xai-logo.png")}
                                className="h-14"
                                alt="xAI"
                            />
                        </div>
                    </div>
                </Series.Sequence>
            </Series>
        </AbsoluteFill>
    );
};
