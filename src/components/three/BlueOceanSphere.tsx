"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Html } from "@react-three/drei"
import * as THREE from "three"
import gsap from "gsap"
import { sphereStudents } from "@/data/mock-sphere"

function seededRandom(seed: number) { const x = Math.sin(seed) * 10000; return x - Math.floor(x) }

function createSoccerBallTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas")
  canvas.width = 1024; canvas.height = 1024
  const ctx = canvas.getContext("2d")!
  const cx = 512, cy = 512, r = 420

  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
  grad.addColorStop(0, "#3B82F6"); grad.addColorStop(0.5, "#60A5FA"); grad.addColorStop(1, "#1E40AF")
  ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()

  const centers = [
    { x: cx, y: cy - r * 0.55 }, { x: cx, y: cy + r * 0.55 },
    { x: cx - r * 0.35, y: cy - r * 0.38 }, { x: cx + r * 0.35, y: cy - r * 0.38 },
    { x: cx - r * 0.52, y: cy }, { x: cx + r * 0.52, y: cy },
    { x: cx - r * 0.35, y: cy + r * 0.38 }, { x: cx + r * 0.35, y: cy + r * 0.38 },
  ]

  centers.forEach((c) => {
    const pr = r * 0.12; ctx.beginPath()
    for (let i = 0; i < 5; i++) {
      const a = (i * 2 * Math.PI) / 5 - Math.PI / 2
      const x = c.x + pr * Math.cos(a), y = c.y + pr * Math.sin(a)
      if (i === 0) { ctx.moveTo(x, y) } else { ctx.lineTo(x, y) }
    }
    ctx.closePath(); ctx.fillStyle = "rgba(30, 64, 175, 0.6)"; ctx.fill()
    ctx.strokeStyle = "rgba(59, 130, 246, 0.4)"; ctx.lineWidth = 2; ctx.stroke()
  })

  return new THREE.CanvasTexture(canvas)
}

export function BlueOceanSphere() {
  const groupRef = useRef<THREE.Group>(null)
  const [hoveredStudent, setHoveredStudent] = useState<string | null>(null)

  useEffect(() => {
    if (!groupRef.current) return
    gsap.fromTo(groupRef.current.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, duration: 1.8, ease: "power3.out" })
  }, [])

  // Continuous rotation - NEVER pauses
  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.105
  })

  const soccerTexture = useMemo(() => createSoccerBallTexture(), [])

  const studentPositions = useMemo(() => sphereStudents.map((_, i) => {
    const angle = (i / sphereStudents.length) * Math.PI * 2
    const tilt = Math.sin(i * 1.3) * 0.6
    const R = 1.2 + seededRandom(i + 42) * 0.3
    return { x: R * Math.cos(angle), y: R * Math.sin(tilt), z: R * Math.sin(angle) }
  }), [])

  const floatOffsets = useMemo(() => sphereStudents.map((_, i) => seededRandom(i + 100) * Math.PI * 2), [])

  return (
    <group ref={groupRef} scale={0}>
      {/* Soccer ball core with blue glow */}
      <mesh rotation={[0.3, 0.5, 0]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial map={soccerTexture} roughness={0.2} metalness={0.3} />
      </mesh>
      {/* Blue glow rings */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.08} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.04} />
      </mesh>

      <Text position={[0, -0.5, 0]} fontSize={0.065} color="#60A5FA" anchorX="center" anchorY="top" maxWidth={0.8}>
        北京信息职业技术学院
      </Text>

      {[[1.3, 0], [1.5, Math.PI / 3]].map(([radius, tilt], i) => (
        <lineSegments key={i}>
          <bufferGeometry>
            <bufferAttribute args={[createRingPoints(64, radius as number, tilt as number), 3]} attach="attributes-position" count={65} />
          </bufferGeometry>
          <lineBasicMaterial color="#3B82F6" opacity={i === 0 ? 0.08 : 0.05} transparent />
        </lineSegments>
      ))}

      {sphereStudents.map((student, i) => (
        <StudentOrbitNode
          key={student.id}
          student={student}
          position={new THREE.Vector3(studentPositions[i].x, studentPositions[i].y, studentPositions[i].z)}
          floatOffset={floatOffsets[i]}
          isHovered={hoveredStudent === student.id}
          onHover={setHoveredStudent}
        />
      ))}
    </group>
  )
}

function StudentOrbitNode({
  student, position, floatOffset, isHovered, onHover,
}: {
  student: { id: string; name: string; major: string; hskLevel: string; initials: string; color: string }
  position: THREE.Vector3; floatOffset: number; isHovered: boolean
  onHover: (id: string | null) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Each atom floats independently - ONLY this atom pauses when hovered
  useFrame(({ clock }) => {
    if (!meshRef.current || isHovered) return // Only THIS atom pauses
    const t = clock.getElapsedTime()
    const float = Math.sin(t * 1.2 + floatOffset) * 0.08
    meshRef.current.position.y = position.y + float
  })

  return (
    <group>
      {/* Blue glow ring (visible on hover) */}
      {isHovered && (
        <mesh position={[position.x, position.y, position.z]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshBasicMaterial color="#3B82F6" transparent opacity={0.25} />
        </mesh>
      )}
      {/* Glowing trail */}
      <mesh position={[position.x - 0.01, position.y, position.z]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={isHovered ? 0.2 : 0.1} />
      </mesh>
      {/* Main atom */}
      <mesh
        ref={meshRef}
        position={[position.x, position.y, position.z]}
        onPointerOver={(e) => { e.stopPropagation(); onHover(student.id) }}
        onPointerOut={() => onHover(null)}
      >
        <sphereGeometry args={[isHovered ? 0.065 : 0.05, 16, 16]} />
        <meshBasicMaterial color={isHovered ? "#60A5FA" : student.color} />
      </mesh>
      {/* Label */}
      <Text position={[position.x, position.y + 0.09, position.z]}
        fontSize={0.03} color={isHovered ? "#ffffff" : student.color}
        anchorX="center" anchorY="bottom">
        {student.initials}
      </Text>
      {/* Tooltip */}
      {isHovered && (
        <Html position={[position.x, position.y + 0.18, position.z]} center>
          <div className="glass-strong px-3 py-2 rounded-lg text-xs text-white whitespace-nowrap" style={{ pointerEvents: "none" }}>
            <p className="font-medium">{student.name}</p>
            <p className="text-blue-300/60">{student.major}</p>
            <p className="text-blue-400">{student.hskLevel}</p>
          </div>
        </Html>
      )}
    </group>
  )
}

function createRingPoints(segments: number, radius: number, tilt: number) {
  const points: number[] = []
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2
    points.push(
      radius * Math.cos(theta),
      radius * Math.sin(theta) * Math.sin(tilt),
      radius * Math.sin(theta) * Math.cos(tilt)
    )
  }
  return new Float32Array(points)
}



