import React from "react";
import { Sequence, AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile, Audio } from "remotion";
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
            damping: 200,
            stiffness: 100,
            mass: 1,
        },
    });

    // EXIT: Spring animation for flip
    // Starts at frame 130 (approx 4.3s) - Aligned with Logo/Intro Text Start
    const exitFrame = 130;
    const exitProgress = spring({
        frame: frame - exitFrame,
        fps,
        config: {
            damping: 200,
            stiffness: 100,
            mass: 1,
        },
    });


    const enterY = interpolate(entranceProgress, [0, 1], [600, 0]);
    // Remove exitY translation
    // Add 100px offset to move it lower
    const translateY = enterY + 100;

    // Animate Y rotation from 15 to -15 degrees over 300 frames
    const rotateY = interpolate(frame, [0, 300], [15, -15]);

    // Animate Scale growing slightly (0.9 -> 1.0)
    const scale = interpolate(frame, [0, 300], [0.9, 1.0]);

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
            {/* Start at 130: Terminal begins flipping, Intro Text starts appearing immediately */}
            <Sequence from={130} durationInFrames={300}>
                <div className="w-full h-full flex items-center justify-center">
                    <LogoComposition />
                </div>
            </Sequence>

            {/* Terminal Window */}
            <Sequence
                from={-60}
                durationInFrames={310} // Extend to cover full length if valid
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
