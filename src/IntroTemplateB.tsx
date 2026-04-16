import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Audio,
  staticFile,
  Video,
  Sequence,
} from "remotion";

export const IntroTemplateB: React.FC = () => {
  const frame = useCurrentFrame();

  // Gentle zoom in on the background over full 6 seconds
  const bgScale = interpolate(frame, [0, 180], [1, 1.1]);

  // Glowing text reveals instantly (over 5 frames) instead of a slow delay
  const blur = interpolate(frame, [0, 5], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const textOpacity = interpolate(frame, [0, 5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="bg-black">
      <Sequence durationInFrames={180}>
        <Audio src={staticFile("hanu_dixit.mp3")} startFrom={48 * 30} />
      </Sequence>
      
      <Sequence durationInFrames={180}>
        {/* Background Layer with subtle movement */}
        <AbsoluteFill style={{ transform: `scale(${bgScale})` }}>
           <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-60" />
        </AbsoluteFill>

      {/* Grid Overlay for technical feel */}
      <AbsoluteFill
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.5,
        }}
      />

      <AbsoluteFill className="justify-center items-center flex-col">
        {/* Channel Name */}
        <div
          style={{
            opacity: textOpacity,
            filter: `blur(${blur}px)`,
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
          }}
          className="text-6xl font-black text-white uppercase tracking-widest font-sans"
        >
          Prod Is Down
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            opacity: interpolate(frame, [0, 5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }}
          className="text-3xl text-indigo-200 uppercase tracking-[0.5em] mt-4 font-mono"
        >
          New Video Every Week
        </div>
        </AbsoluteFill>
      </Sequence>

      {/* Outro Clip Appended After Intro */}
      <Sequence from={180}>
        <AbsoluteFill>
          <Video src={staticFile("outroClip.mp4")} className="w-full h-full object-contain" />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
