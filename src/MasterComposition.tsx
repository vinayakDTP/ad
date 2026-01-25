import React from "react";
import { Sequence, AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile, Audio, Easing } from "remotion";
import { SkillsComposition } from "./SkillsComposition";
import { LogoComposition } from "./LogoComposition";

export const MasterComposition: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // ENTRANCE: Spring animation for jumping in from bottom
    const entranceProgress = spring({
        frame,
        fps,
        config: {
            damping: 100,
            stiffness: 80,
            mass: 1,
        },
    });

    // EXIT: Smooth spring animation for flip (balanced speed)
    // Starts at frame 200 - After all text is visible for a moment
    const exitFrame = 200;
    const exitProgress = spring({
        frame: frame - exitFrame,
        fps,
        config: {
            damping: 80,
            stiffness: 60,
            mass: 1.5,
        },
    });


    const enterY = interpolate(entranceProgress, [0, 1], [600, 0]);
    // Smooth Y position
    const translateY = enterY;

    // Animate Y rotation from 15 to -15 degrees over 390 frames with smooth easing
    const rotateY = interpolate(frame, [0, 390], [15, -15], {
        easing: Easing.inOut(Easing.cubic),
    });

    // Animate Scale growing slightly (0.9 -> 1.0) with smooth easing
    const scale = interpolate(frame, [0, 390], [0.9, 1.0], {
        easing: Easing.inOut(Easing.cubic),
    });

    // Flip rotation: Starts at 20deg, flips forward to -90deg
    const rotateX = interpolate(exitProgress, [0, 1], [20, -90]);

    return (
        <AbsoluteFill
            style={{ perspective: "1000px" }}
        >
            <Audio src={staticFile("music.mp3")} startFrom={20 * 30} />

            <Img
                src={staticFile("background.png")}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Logos and Intro Text behind the terminal */}
            {/* Start at 200: Terminal begins flipping, Intro Text starts appearing immediately */}
            <Sequence from={200} durationInFrames={190}>
                <div className="w-full h-full flex items-center justify-center">
                    <LogoComposition />
                </div>
            </Sequence>

            {/* Terminal Window */}
            <Sequence
                from={-60}
                durationInFrames={280} // Ends at frame 220, right after flip completes
                style={{
                    transformOrigin: "bottom center",
                    transform: `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    transformStyle: "preserve-3d"
                }}
            >
                <SkillsComposition />
            </Sequence>
        </AbsoluteFill>
    );
};
