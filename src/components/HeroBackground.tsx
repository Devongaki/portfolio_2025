"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import dynamic from "next/dynamic";

// Define skills and emojis for interactive display
const INTERACTIVE_ITEMS = [
  { text: "React", emoji: "⚛️" },
  { text: "Next.js", emoji: "▲" },
  { text: "TypeScript", emoji: "📘" },
  { text: "CSS", emoji: "🎨" },
  { text: "JavaScript", emoji: "💛" },
  { text: "Git", emoji: "🌳" },
  { text: "UI/UX", emoji: "🎯" },
  { text: "Mobile", emoji: "📱" },
];

// Seeded random number generator for consistent particle positions
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function ParticleField() {
  const points = useRef<THREE.Points>(null!);
  const { theme } = useTheme();
  const { viewport, camera } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredParticle, setHoveredParticle] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random points in a 3D space
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const speeds = new Float32Array(2000);
    const originalPositions = new Float32Array(2000 * 3);

    let seed = 1; // Consistent seed for particle positions

    for (let i = 0; i < 2000; i++) {
      const x = (seededRandom(seed++) - 0.5) * 10;
      const y = (seededRandom(seed++) - 0.5) * 10;
      const z = (seededRandom(seed++) - 0.5) * 10;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      speeds[i] = seededRandom(seed++) * 0.5 + 0.5;
    }

    return { positions, speeds, originalPositions };
  }, []);

  useFrame((state) => {
    if (!mounted) return;
    const time = state.clock.getElapsedTime();

    // Update particle positions based on mouse
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      const originalX = particlesPosition.originalPositions[i3];
      const originalY = particlesPosition.originalPositions[i3 + 1];

      // Calculate distance to mouse
      const dx = mousePosition.x * 10 - originalX;
      const dy = mousePosition.y * 10 - originalY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // If particle is close to mouse, move it away from the mouse
      if (distance < 2) {
        const angle = Math.atan2(dy, dx);
        const pushForce = (2 - distance) * 0.2;

        particlesPosition.positions[i3] =
          originalX - Math.cos(angle) * pushForce;
        particlesPosition.positions[i3 + 1] =
          originalY - Math.sin(angle) * pushForce;
      } else {
        // Return to original position
        particlesPosition.positions[i3] =
          originalX + Math.sin(time * particlesPosition.speeds[i]) * 0.1;
        particlesPosition.positions[i3 + 1] =
          originalY + Math.cos(time * particlesPosition.speeds[i]) * 0.1;
      }
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  // Update mouse position in 3D space
  const onMouseMove = (event: THREE.Event) => {
    if (!mounted) return;
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  if (!mounted) return null;

  return (
    <Points ref={points} onPointerMove={onMouseMove}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.positions.length / 3}
          array={particlesPosition.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        size={0.05}
        sizeAttenuation={true}
        color={theme === "dark" ? "#4f46e5" : "#2563eb"}
        depthWrite={false}
      />
    </Points>
  );
}

function MovingSpheres() {
  const sphere1 = useRef<THREE.Mesh>(null!);
  const sphere2 = useRef<THREE.Mesh>(null!);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useFrame((state) => {
    if (!mounted) return;
    const time = state.clock.getElapsedTime();

    // Animate first sphere
    sphere1.current.position.x = Math.sin(time * 0.3) * 3;
    sphere1.current.position.y = Math.cos(time * 0.2) * 2;
    sphere1.current.position.z = Math.sin(time * 0.4) * 2;

    // Animate second sphere
    sphere2.current.position.x = Math.cos(time * 0.4) * 3;
    sphere2.current.position.y = Math.sin(time * 0.3) * 2;
    sphere2.current.position.z = Math.cos(time * 0.2) * 2;
  });

  if (!mounted) return null;

  return (
    <>
      <mesh ref={sphere1}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial
          color={theme === "dark" ? "#4f46e5" : "#2563eb"}
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh ref={sphere2}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial
          color={theme === "dark" ? "#8b5cf6" : "#4f46e5"}
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </>
  );
}

// Create a client-side only version of the component
const ClientHeroBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="hero-canvas">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <ParticleField />
        <MovingSpheres />
      </Canvas>
    </div>
  );
};

// Export a dynamic component with SSR disabled
export default dynamic(() => Promise.resolve(ClientHeroBackground), {
  ssr: false,
});
