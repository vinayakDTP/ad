import React from "react";
import { Sequence, AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
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
    // Starts at frame 160 (approx 5.3s)
    const exitFrame = 160;
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

    // Animate Y rotation from 15 to -15 degrees over 240 frames
    const rotateY = interpolate(frame, [0, 240], [15, -15]);

    // Animate Scale growing slightly (0.9 -> 1.0)
    const scale = interpolate(frame, [0, 240], [0.9, 1.0]);

    // Flip rotation: Starts at 20deg, flips forward to -90deg
    const rotateX = interpolate(exitProgress, [0, 1], [20, -90]);

    return (
        <AbsoluteFill
            className="bg-[#FFFBEB]"
            style={{ perspective: "1000px" }}
        >
            {/* Logos behind the terminal */}
            <Sequence from={140} durationInFrames={100}>
                <div className="w-full h-full flex items-center justify-center">
                    <LogoComposition />
                </div>
            </Sequence>

            {/* Terminal Window */}
            <Sequence
                from={-60}
                durationInFrames={250}
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
