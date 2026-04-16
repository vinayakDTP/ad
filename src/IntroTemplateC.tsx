import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  random,
} from "remotion";

const GlitchText: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();

  // Create random, sporadic glitch offsets
  const isGlitching = Math.random() > 0.8 && frame > 20 && frame < 100;
  
  const offsetR = isGlitching ? random(frame + 1) * 20 - 10 : 0;
  const offsetB = isGlitching ? random(frame + 2) * 20 - 10 : 0;
  
  const skewX = isGlitching ? random(frame + 3) * 10 - 5 : 0;
  const opacity = isGlitching ? 0.8 : 1;

  return (
    <div style={{ position: "relative", transform: `skewX(${skewX}deg)` }}>
      {/* Red Channel Glitch */}
      <div style={{ position: "absolute", color: "red", transform: `translate(${offsetR}px, 0)`, opacity: opacity, mixBlendMode: 'screen', zIndex: 1 }}>{text}</div>
      {/* Blue Channel Glitch */}
      <div style={{ position: "absolute", color: "blue", transform: `translate(${offsetB}px, 0)`, opacity: opacity, mixBlendMode: 'screen', zIndex: 1 }}>{text}</div>
      {/* Main Text */}
      <div style={{ position: "relative", color: "white", zIndex: 2 }}>{text}</div>
    </div>
  );
};

export const IntroTemplateC: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 150], [1, 1.2]);
  const textOpacity = interpolate(frame, [10, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [130, 150], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill className="bg-black justify-center items-center overflow-hidden" style={{ opacity: fadeOut }}>

      {/* VHS lines effect */}
      <AbsoluteFill
        style={{
          background: "repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
          zIndex: 10,
          pointerEvents: "none"
        }}
      />

      <div
        style={{
          transform: `scale(${scale})`,
          opacity: textOpacity,
          fontSize: "150px",
          fontWeight: "900",
          fontFamily: "monospace",
          textTransform: "uppercase",
          letterSpacing: "-5px",
        }}
      >
        <GlitchText text="SYSTEM" />
        <div style={{ fontSize: "60px", color: "yellow", marginTop: "-30px" }}>
          <GlitchText text="// ONLINE" />
        </div>
      </div>
    </AbsoluteFill>
  );
};
