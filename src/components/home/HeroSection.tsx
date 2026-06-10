"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { BlueOceanSphere } from "@/components/three/BlueOceanSphere"
import { AuroraBackground } from "@/components/three/AuroraBackground"
import { MouseLight } from "@/components/three/MouseLight"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

function SphereScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true }} style={{ background: "transparent" }}>
      <Suspense fallback={null}>
        <BlueOceanSphere />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 4]} intensity={0.5} color="#1E5EFF" />
      </Suspense>
    </Canvas>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 ocean-bg">
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }} dpr={[1, 1.5]} gl={{ alpha: true }} style={{ background: "transparent" }}>
          <Suspense fallback={null}>
            <AuroraBackground />
            <MouseLight />
          </Suspense>
        </Canvas>
      </div>

      {/* Wave effect overlay */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-[200%] h-32 wave-anim" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C360,120 720,0 1080,80 L1440,40 L1440,120 L0,120 Z" fill="rgba(30,94,255,0.04)" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-[200%] h-24 opacity-40 wave-anim-2" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ animationDelay: "-3s" }}>
          <path d="M0,30 C480,100 960,0 1440,60 L1440,100 L0,100 Z" fill="rgba(76,166,255,0.03)" />
        </svg>
      </div>

      <motion.div style={{ opacity, scale }} className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 w-full max-w-6xl mx-auto">
        {/* Left: Sphere */}
        <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex-shrink-0">
          <SphereScene />
        </div>

        {/* Right: Text */}
        <div className="text-center lg:text-left max-w-lg">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <motion.p
              className="text-xs tracking-[0.3em] text-blue-ocean-400/60 mb-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            >
              BEIJING INFORMATION TECHNOLOGY COLLEGE
            </motion.p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white glow-text leading-[0.9] mb-4">
              <span>蓝海</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-blue-ocean-300 font-light">BLUE OCEAN</span>
            </h1>
            <p className="text-base sm:text-lg text-blue-ocean-200/50 mb-2">学习中文 · 连接世界</p>
            <p className="text-sm text-blue-ocean-200/30 mb-8">Russian Students Community</p>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-ocean-600 to-blue-ocean-500 text-white text-sm font-medium hover:from-blue-ocean-500 hover:to-blue-ocean-400 transition-all shadow-lg shadow-blue-ocean-600/30 glow-blue"
              >
                开始学习
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong text-blue-ocean-200 text-sm hover:text-white transition-all"
              >
                登录 / 注册
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <motion.div className="w-5 h-8 rounded-full border border-blue-ocean-400/20 flex items-start justify-center p-1" animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <motion.div className="w-1 h-1 rounded-full bg-blue-ocean-400/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}

