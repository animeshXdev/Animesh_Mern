import React from "react";
import Particles from "react-tsparticles";

const BubblesBackground = () => {
  const particlesOptions = {
    background: {
      color: { value: "#00000000" }, // transparent so it blends with navbar bg
    },
    fpsLimit: 60,
    particles: {
      number: { value: 30, density: { enable: true, area: 800 } },
      color: { value: "#10b981" }, // emerald green
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 20, random: { enable: true, minimumValue: 10 }, anim: { enable: true, speed: 3, size_min: 10, sync: false } },
      move: { enable: true, speed: 1.5, random: true, outModes: "out" },
    },
    detectRetina: true,
  };

  return (
    <Particles
      options={particlesOptions}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
    />
  );
};

export default BubblesBackground;
