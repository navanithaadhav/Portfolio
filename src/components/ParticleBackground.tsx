import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground: React.FC = () => {
  const [showParticles, setShowParticles] = useState(false);

  // Delay loading the particles until after initial paint
  useEffect(() => {
    const timer = setTimeout(() => setShowParticles(true), 1500); // show after 1.5s
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (!showParticles) {
    // Fallback before particles load
    return (
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
    );
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#0ea5e9", "#8b5cf6", "#14b8a6"],
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 25, // reduced from 40 -> lighter load
          },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
