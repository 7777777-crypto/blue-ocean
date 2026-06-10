"use client"

import { useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

export function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { size } = useThree()

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / size.width) * 2 - 1
      mouseRef.current.y = -(e.clientY / size.height) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [size])

  useFrame(() => {
    if (!lightRef.current) return
    const tx = mouseRef.current.x * 2.5
    const ty = mouseRef.current.y * 1.5
    lightRef.current.position.x += (tx - lightRef.current.position.x) * 0.03
    lightRef.current.position.y += (ty - lightRef.current.position.y) * 0.03
  })

  return <pointLight ref={lightRef} position={[0, 0, 3]} intensity={0.8} color="#1E5EFF" distance={6} decay={2} />
}
