"use client"

import { AuroraBackground } from "@/components/three/AuroraBackground"
import { MouseLight } from "@/components/three/MouseLight"

export function Scene() {
  return (
    <>
      <AuroraBackground />
      <MouseLight />
    </>
  )
}
