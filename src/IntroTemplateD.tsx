import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Easing,
  Audio,
  staticFile,
} from "remotion";

export const IntroTemplateD: React.FC = () => {
  const frame = useCurrentFrame();

  // Mask reveal animation (sliding from left to right)
  const maskWidth = interpolate(frame, [15, 45], [0, 100], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Text subtle upward slide
  const textY = interpolate(frame, [15, 45], [30, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(frame, [130, 150], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill className="bg-white flex justify-center items-center" style={{ opacity: fadeOut }}>
      <Audio src={staticFile("music.mp3")} />

      <div style={{ position: "relative", overflow: "hidden", padding: "20px" }}>
        {/* Animated Masking Box */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${maskWidth}%`,
            backgroundColor: "#2563eb", // Tailwind Blue-600
            zIndex: 1
          }}
        />

        {/* Text Layer (revealed by mask) */}
        <div 
          style={{ 
            position: "relative", 
            zIndex: 2, 
            transform: `translateY(${textY}px)`,
            clipPath: `inset(0 ${100 - maskWidth}% 0 0)` // Clips text perfectly with the background box reveal
          }}
        >
          <div style={{ fontSize: "100px", fontWeight: "bold", color: "white", padding: "0 40px", fontFamily: "system-ui" }}>
            CREATIVE
          </div>
          <div style={{ fontSize: "50px", fontWeight: "300", color: "rgba(255,255,255,0.9)", padding: "0 40px", marginTop: "-20px", fontFamily: "system-ui" }}>
            STUDIOS
          </div>
        </div>
        
        {/* Shadow Text Behind Mask for depth */}
        <div 
          style={{ 
            position: "absolute", 
            top: "20px",
            zIndex: 0, 
            transform: `translateY(${textY}px)`,
            color: "rgba(0,0,0,0.1)"
          }}
        >
          <div style={{ fontSize: "100px", fontWeight: "bold", padding: "0 40px", fontFamily: "system-ui" }}>
            CREATIVE
          </div>
          <div style={{ fontSize: "50px", fontWeight: "300", padding: "0 40px", marginTop: "-20px", fontFamily: "system-ui" }}>
            STUDIOS
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
