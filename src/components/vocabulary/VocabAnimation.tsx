"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { AnimationType } from "@/data/vocabulary"

interface VocabAnimationProps { type: AnimationType; size?: "small" | "full"; isPlaying?: boolean }

function CoinAnimation({ size }: { size: "small" | "full" }) {
  return (
    <motion.div className="absolute text-5xl sm:text-6xl"
      initial={{ x: size === "small" ? 80 : 300, rotate: 0 }}
      animate={{ x: size === "small" ? -80 : -300, rotate: 720 }}
      transition={{ duration: size === "small" ? 1.5 : 3, ease: "easeInOut" }}
    >🪙</motion.div>
  )
}
function PlaneAnimation({ size }: { size: "small" | "full" }) {
  return (
    <motion.div className="absolute text-5xl sm:text-6xl"
      initial={{ x: -300, y: 100, scale: 0.2, opacity: 0 }}
      animate={{ x: 100, y: -50, scale: 1, opacity: 1 }}
      transition={{ duration: size === "small" ? 1.5 : 3, ease: "easeOut" }}
    >✈️</motion.div>
  )
}
function RainAnimation({ size }: { size: "small" | "full" }) {
  const drops = size === "small" ? 6 : 20
  return (
    <div className="absolute inset-0 flex justify-center overflow-hidden">
      {Array.from({ length: drops }).map((_, i) => (
        <motion.div key={i} className="text-base sm:text-2xl"
          style={{ marginLeft: `${(i - drops / 2) * (size === "small" ? 18 : 28)}px` }}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: size === "small" ? 90 : 300, opacity: [0, 1, 1, 0] }}
          transition={{ duration: size === "small" ? 0.8 : 1.5, delay: i * 0.05, repeat: Infinity, repeatDelay: 0.5 }}
        >💧</motion.div>
      ))}
      <motion.div className="absolute text-4xl sm:text-6xl" style={{ top: "35%" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
      >🌧️</motion.div>
    </div>
  )
}
function RunAnimation({ size }: { size: "small" | "full" }) {
  return (
    <motion.div className="absolute text-5xl sm:text-6xl"
      initial={{ x: size === "small" ? -100 : -300, y: 0 }}
      animate={{ x: size === "small" ? 100 : 300 }}
      transition={{ duration: size === "small" ? 1.2 : 2.5, ease: "linear" }}
    >
      <motion.span animate={{ rotate: [0, -10, 0, 10, 0] }} transition={{ duration: 0.4, repeat: Infinity }} style={{ display: "inline-block" }}>🏃</motion.span>
    </motion.div>
  )
}
function TrainAnimation({ size }: { size: "small" | "full" }) {
  return (
    <motion.div className="absolute text-5xl sm:text-6xl"
      initial={{ x: size === "small" ? 150 : 500, opacity: 0 }}
      animate={{ x: size === "small" ? -150 : -500, opacity: [0, 1, 1, 0] }}
      transition={{ duration: size === "small" ? 1.5 : 3, ease: "linear" }}
    >🚄</motion.div>
  )
}
function PandaAnimation({ size }: { size: "small" | "full" }) {
  return (
    <motion.div className="absolute text-5xl sm:text-6xl"
      initial={{ x: -100, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: size === "small" ? 1 : 2, ease: "easeOut" }}
    >
      <motion.span animate={{ rotate: [0, -5, 0, 5, 0] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ display: "inline-block" }}>🐼</motion.span>
    </motion.div>
  )
}
function AppleAnimation({ size }: { size: "small" | "full" }) {
  return (
    <motion.div className="absolute text-5xl sm:text-6xl"
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >🍎</motion.div>
  )
}
function WriteAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div className="text-5xl sm:text-6xl">
        <motion.span animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ display: "inline-block" }}>✍️</motion.span>
      </motion.div>
      <motion.div className="absolute text-3xl sm:text-4xl opacity-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 0.3, 0], y: [20, 0, -20] }}
        transition={{ duration: 2, repeat: Infinity }}
      >字</motion.div>
    </div>
  )
}

const animations: Record<AnimationType, React.FC<{ size: "small" | "full" }>> = {
  coin: CoinAnimation, plane: PlaneAnimation, rain: RainAnimation,
  run: RunAnimation, train: TrainAnimation, panda: PandaAnimation,
  apple: AppleAnimation, write: WriteAnimation,
}

export function VocabAnimation({ type, size = "full", isPlaying = true }: VocabAnimationProps) {
  const Anim = animations[type]
  return (
    <AnimatePresence mode="wait">
      {isPlaying && (
        <motion.div key={type} className={`relative flex items-center justify-center overflow-hidden ${size === "full" ? "w-full h-64 sm:h-80" : "w-full h-32"}`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <Anim size={size} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
