import React from "react";
import { AbsoluteFill, Img, staticFile, Series, useCurrentFrame, interpolate, Easing } from "remotion";

const IntroText: React.FC = () => {
    const frame = useCurrentFrame();
    const scale = interpolate(frame, [0, 15], [0, 1], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });

    return (
        <div className="w-full h-full flex items-center justify-center">
            <h1
                className="text-[40px] font-bold text-gray-800"
                style={{
                    fontFamily: "GT Planar, sans-serif",
                    transform: `scale(${scale})`
                }}
            >
                Skills coming in
            </h1>
        </div>
    );
};

export const LogoComposition: React.FC = () => {
    return (
        <AbsoluteFill className="bg-transparent flex items-center justify-center">
            <Series>
                {/* Sequence 1: Text Intro */}
                <Series.Sequence durationInFrames={60}>
                    <IntroText />
                </Series.Sequence>

                {/* Sequence 2: Logos */}
                <Series.Sequence durationInFrames={210}>
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
