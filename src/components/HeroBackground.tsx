"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Html } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import dynamic from "next/dynamic";

const TECH_STACK = [
  {
    icon: "⚛️",
    name: "React",
    position: [-2, 1, 0] as [number, number, number],
  },
  {
    icon: "▲",
    name: "Next.js",
    position: [2, -1, 0] as [number, number, number],
  },
  {
    icon: "🎨",
    name: "CSS",
    position: [-1, -2, 0] as [number, number, number],
  },
  {
    icon: "📘",
    name: "TypeScript",
    position: [1, 2, 0] as [number, number, number],
  },
  {
    icon: "💅",
    name: "Styled",
    position: [-2, -1, 0] as [number, number, number],
  },
  {
    icon: "🔷",
    name: "Material",
    position: [2, 1, 0] as [number, number, number],
  },
];

interface FloatingIconProps {
  icon: string;
  position: [number, number, number];
  mousePosition: { x: number; y: number };
}

function FloatingIcon({ icon, position, mousePosition }: FloatingIconProps) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      // Floating animation
      ref.current.position.y += Math.sin(time + position[0]) * 0.001;
      ref.current.position.x += Math.cos(time + position[1]) * 0.001;

      // Mouse interaction
      const mouseEffect = new THREE.Vector3(
        mousePosition.x * 2,
        -mousePosition.y * 2,
        0
      );
      ref.current.position.x += (mouseEffect.x - ref.current.position.x) * 0.02;
      ref.current.position.y += (mouseEffect.y - ref.current.position.y) * 0.02;
    }
  });

  return (
    <group
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Html center>
        <div
          style={{
            fontSize: hovered ? "2em" : "1.5em",
            transition: "all 0.3s ease",
            cursor: "pointer",
            opacity: hovered ? 1 : 0.7,
          }}
        >
          {icon}
        </div>
      </Html>
    </group>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const speeds = new Float32Array(2000);
    const originalPositions = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1 + Math.random() * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      speeds[i] = Math.random() * 0.5 + 0.5;
    }

    return { positions, speeds, originalPositions };
  }, []);

  useFrame((state) => {
    if (!mounted || !points.current) return;
    const time = state.clock.getElapsedTime();

    // Rotate the entire particle system
    points.current.rotation.z = time * 0.05;

    // Update particle positions with wave effect
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      const originalX = particlesPosition.originalPositions[i3];
      const originalY = particlesPosition.originalPositions[i3 + 1];

      // Calculate distance to mouse
      const dx = mousePosition.x * 10 - originalX;
      const dy = mousePosition.y * 10 - originalY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Wave effect
      const wave = Math.sin(time * 0.5 + distance * 0.5) * 0.1;

      // If particle is close to mouse, move it away
      if (distance < 2) {
        const angle = Math.atan2(dy, dx);
        const pushForce = (2 - distance) * 0.2;

        particlesPosition.positions[i3] =
          originalX - Math.cos(angle) * pushForce + wave;
        particlesPosition.positions[i3 + 1] =
          originalY - Math.sin(angle) * pushForce + wave;
      } else {
        // Apply wave effect
        particlesPosition.positions[i3] = originalX + wave;
        particlesPosition.positions[i3 + 1] = originalY + wave;
      }
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!mounted) return;
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  if (!mounted) return null;

  return (
    <group>
      <Points ref={points} onPointerMove={onMouseMove}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.positions.length / 3}
            array={particlesPosition.positions}
            itemSize={3}
            args={[particlesPosition.positions, 3]}
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
      {TECH_STACK.map((tech) => (
        <FloatingIcon
          key={tech.name}
          icon={tech.icon}
          position={tech.position}
          mousePosition={mousePosition}
        />
      ))}
    </group>
  );
}

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
      </Canvas>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ClientHeroBackground), {
  ssr: false,
});
