import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
  Easing,
  Audio,
  staticFile,
} from "remotion";

const TitleSequence: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();

  const translateY = interpolate(frame, [0, 15], [50, 0], {
    easing: Easing.out(Easing.back(1.5)),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 15], [0, 1]);

  const scale = interpolate(frame, [0, 60], [1, 1.1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="justify-center items-center">
      <div
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity,
          fontSize: "120px",
          fontWeight: "900",
          color: "white",
          textShadow: "0 10px 20px rgba(0,0,0,0.5)",
          textTransform: "uppercase",
          letterSpacing: "-2px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};

export const IntroTemplateA: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Background color animation
  const bgColor = frame < 45 ? "#111827" : frame < 90 ? "#1d4ed8" : "#4338ca";

  return (
    <AbsoluteFill style={{ backgroundColor: bgColor, transition: "background-color 0.1s" }}>
      <Audio src={staticFile("music.mp3")} />

      <Sequence from={0} durationInFrames={45}>
        <TitleSequence text="BUILD" />
      </Sequence>
      
      <Sequence from={45} durationInFrames={45}>
        <TitleSequence text="FASTER" />
      </Sequence>
      
      <Sequence from={90}>
        <TitleSequence text="DEV CHANNEL" />
      </Sequence>
    </AbsoluteFill>
  );
};
