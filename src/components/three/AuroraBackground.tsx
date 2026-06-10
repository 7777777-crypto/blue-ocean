"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const DEFAULT_UNIFORMS = {
  uTime: { value: 0 },
  uResolution: { value: new THREE.Vector2(2, 1) },
}

export function AuroraBackground({ onReady }: { onReady?: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const uniforms = DEFAULT_UNIFORMS

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime()
  })

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float t = uTime * 0.03;
      float wave1 = sin(uv.x * 3.0 + t) * 0.5 + 0.5;
      float wave2 = sin(uv.x * 5.0 - t * 1.2 + 1.5) * 0.35 + 0.5;
      float wave3 = sin(uv.x * 7.0 + t * 0.8 + 3.0) * 0.25 + 0.5;
      float aurora = wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2;
      float gradient = 1.0 - uv.y;
      float intensity = aurora * gradient * 0.6;
      vec3 c1 = vec3(0.02, 0.04, 0.12);
      vec3 c2 = vec3(0.03, 0.10, 0.26);
      vec3 c3 = vec3(0.05, 0.20, 0.40);
      vec3 c4 = vec3(0.08, 0.30, 0.50);
      vec3 color = mix(c1, c2, intensity);
      color = mix(color, c3, intensity * 0.5);
      color = mix(color, c4, intensity * 0.2);
      float streak = sin(uv.x * 16.0 + uv.y * 6.0 + t * 1.5) * 0.2 + 0.8;
      color *= streak;
      gl_FragColor = vec4(color, 1.0);
    }
  `

  return (
    <mesh ref={meshRef} scale={[3, 2, 1]} onUpdate={onReady}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}
