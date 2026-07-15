"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GRID_X = 7;
const GRID_Z = 5;
const LEVELS = 6;
const SPACING = 1.25;
const LEVEL_HEIGHT = 1.05;

/** Deterministic pseudo-random so the lattice is identical every visit. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function buildLattice() {
  const rand = seeded(20260715);
  const lines: number[] = [];
  const joints: number[] = [];

  const px = (i: number) => (i - (GRID_X - 1) / 2) * SPACING;
  const pz = (k: number) => (k - (GRID_Z - 1) / 2) * SPACING;
  const py = (level: number) => level * LEVEL_HEIGHT;

  for (let i = 0; i < GRID_X; i++) {
    for (let k = 0; k < GRID_Z; k++) {
      const height = 2 + Math.floor(rand() * (LEVELS - 1));
      for (let level = 0; level < height; level++) {
        joints.push(px(i), py(level), pz(k));
        // column segment up
        lines.push(px(i), py(level), pz(k), px(i), py(level + 1), pz(k));
        // beams along x
        if (i < GRID_X - 1 && rand() > 0.25) {
          lines.push(px(i), py(level + 1), pz(k), px(i + 1), py(level + 1), pz(k));
        }
        // beams along z
        if (k < GRID_Z - 1 && rand() > 0.25) {
          lines.push(px(i), py(level + 1), pz(k), px(i), py(level + 1), pz(k + 1));
        }
        // occasional diagonal brace
        if (i < GRID_X - 1 && rand() > 0.82) {
          lines.push(px(i), py(level), pz(k), px(i + 1), py(level + 1), pz(k));
        }
      }
      joints.push(px(i), py(height), pz(k));
    }
  }

  return {
    lines: new Float32Array(lines),
    joints: new Float32Array(joints),
  };
}

function Lattice() {
  const group = useRef<THREE.Group>(null);
  const pulse = useRef<THREE.Mesh>(null);

  const { lineGeometry, pointGeometry } = useMemo(() => {
    const { lines, joints } = buildLattice();
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(lines, 3));
    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute("position", new THREE.BufferAttribute(joints, 3));
    return { lineGeometry, pointGeometry };
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.06;
      const targetX = state.pointer.y * 0.06;
      const targetZ = state.pointer.x * 0.05;
      group.current.rotation.x +=
        (targetX - group.current.rotation.x) * 0.04;
      group.current.rotation.z +=
        (targetZ - group.current.rotation.z) * 0.04;
    }
    if (pulse.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 2.2) * 0.35;
      pulse.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={group} position={[0, -2.6, 0]}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </lineSegments>
      <points geometry={pointGeometry}>
        <pointsMaterial
          color="#b9c2f5"
          size={0.055}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>
      <mesh ref={pulse} position={[SPACING, LEVEL_HEIGHT * 4, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#e0424d" />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [7.5, 4.6, 9.5], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ pointerEvents: "none" }}
      eventSource={
        typeof document !== "undefined" ? document.body : undefined
      }
    >
      <fog attach="fog" args={["#38469d", 11, 26]} />
      <Lattice />
    </Canvas>
  );
}
