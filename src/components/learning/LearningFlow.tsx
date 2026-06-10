"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import type { VocabularyWord, AnimationType } from "@/data/vocabulary"
import { VocabAnimation } from "@/components/vocabulary/VocabAnimation"

/* ---------- Stage 1: Animation ---------- */
function StageAnimation({ word }: { word: VocabularyWord }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8">
      <p className="text-xs tracking-widest text-blue-ocean-200/40 uppercase">🎬 动画演示 · Анимация</p>
      <div className="w-full max-w-lg">
        <VocabAnimation type={word.animation as AnimationType} size="full" />
      </div>
    </div>
  )
}

/* ---------- Stage 2: Pronunciation ---------- */
function StagePronunciation({ word }: { word: VocabularyWord }) {
  const [playing, setPlaying] = useState(false)
  const speak = () => {
    if ("speechSynthesis" in window) {
      setPlaying(true)
      const u = new SpeechSynthesisUtterance(word.hanzi)
      u.lang = "zh-CN"; u.rate = 0.7
      u.onend = () => setPlaying(false)
      window.speechSynthesis.speak(u)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      <p className="text-xs tracking-widest text-blue-ocean-200/40 uppercase">🔊 发音 · Произношение</p>
      <motion.div className="text-center cursor-pointer group" onClick={speak} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <div className="text-7xl sm:text-8xl font-bold text-white text-glow mb-3">{word.hanzi}</div>
        <div className="text-2xl text-blue-ocean-300 mb-3">{word.pinyin}</div>
        <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong text-blue-ocean-200"
          animate={playing ? { scale: [1, 1.05, 1] } : {}} transition={{ duration: 0.5, repeat: playing ? Infinity : 0 }}
        >
          <span>{playing ? "🔊" : "🔈"}</span>
          <span className="text-sm">{playing ? "播放中..." : "点击听发音"}</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ---------- Stage 3: Translation ---------- */
function StageTranslation({ word }: { word: VocabularyWord }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8">
      <p className="text-xs tracking-widest text-blue-ocean-200/40 uppercase">🌍 翻译 · Перевод</p>
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }}>
        <span className="text-7xl sm:text-8xl">{word.emoji}</span>
      </motion.div>
      <div className="text-center space-y-2">
        <div className="text-2xl font-semibold text-white">{word.hanzi}</div>
        <div className="text-lg text-blue-ocean-300">{word.pinyin}</div>
        <div className="text-xl text-blue-ocean-100/70 mt-3 pt-3 border-t border-white/10">{word.russian}</div>
      </div>
    </div>
  )
}

/* ---------- Stage 4: Example ---------- */
function StageExample({ word }: { word: VocabularyWord }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      <p className="text-xs tracking-widest text-blue-ocean-200/40 uppercase">📝 例句 · Пример</p>
      <div className="flex flex-wrap justify-center gap-1 max-w-xl">
        {word.exampleSentence.split("").map((char, i) => (
          <motion.span key={i}
            className="text-2xl sm:text-3xl font-medium text-white inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
            whileHover={{ color: "#60A5FA", scale: 1.3, textShadow: "0 0 20px rgba(59,130,246,0.5)" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      <motion.div className="text-base text-blue-ocean-200/60 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
      >{word.exampleTranslation}</motion.div>
    </div>
  )
}

/* ---------- Stage 5: Quiz ---------- */
function StageQuiz({ word, onComplete }: { word: VocabularyWord; onComplete: (correct: boolean) => void }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [result, setResult] = useState(false)

  const handle = (opt: string) => {
    if (result) return
    setSelected(opt); setResult(true)
    setTimeout(() => { onComplete(opt === word.quizAnswer); setResult(false); setSelected(null) }, 1500)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8">
      <p className="text-xs tracking-widest text-blue-ocean-200/40 uppercase">🎯 小测验 · Тест</p>
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }}>
        <div className="text-5xl mb-2 text-center">{word.emoji}</div>
        <p className="text-sm text-blue-ocean-200/60 text-center">请选择正确意思：</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-md">
        {word.quizOptions.map((opt, i) => {
          let bg = "glass hover:glass-strong"
          if (result && opt === word.quizAnswer) bg = "bg-green-500/20 border-green-500/30"
          else if (result && opt === selected) bg = "bg-red-500/20 border-red-500/30"
          return (
            <motion.button key={opt}
              className={`p-4 rounded-xl text-center text-lg font-medium text-white transition-all duration-300 border border-white/5 ${bg}`}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={!result ? { scale: 1.03 } : {}} whileTap={!result ? { scale: 0.97 } : {}}
              onClick={() => handle(opt)}
            >
              {opt}
              {result && opt === word.quizAnswer && (
                <motion.span className="block text-xs mt-1 text-green-400" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  ✓ {word.russian}
                </motion.span>
              )}
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence>
        {result && (
          <motion.div className={`text-center py-2 px-5 rounded-full text-sm ${selected === word.quizAnswer ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          >
            {selected === word.quizAnswer ? "✓ 正确！Правильно!" : "✗ 再想想... Попробуй ещё"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------- Main Learning Flow ---------- */
const STAGES = ["animation", "pronunciation", "translation", "example", "quiz"] as const
const stageIcons = ["🎬", "🔊", "🌍", "📝", "🎯"]
const stageLabels = [
  { cn: "动画", ru: "Анимация" }, { cn: "发音", ru: "Произношение" },
  { cn: "翻译", ru: "Перевод" }, { cn: "例句", ru: "Пример" },
  { cn: "测验", ru: "Тест" },
]

interface LearningFlowProps { word: VocabularyWord }

export function LearningFlow({ word }: LearningFlowProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const router = useRouter()

  const goTo = (i: number) => { setDirection(i > current ? 1 : -1); setCurrent(i) }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Progress */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {STAGES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all ${
              i === current ? "glass-strong text-white" : i < current ? "text-blue-ocean-300/60" : "text-blue-ocean-300/20"
            }`}
          >
            <span>{stageIcons[i]}</span>
            <span className="hidden sm:inline">{stageLabels[i].cn}</span>
          </button>
        ))}
      </div>

      {/* Stage content */}
      <div className="relative min-h-[350px] flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div key={current} className="w-full" custom={direction} variants={variants}
            initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {current === 0 && <StageAnimation word={word} />}
            {current === 1 && <StagePronunciation word={word} />}
            {current === 2 && <StageTranslation word={word} />}
            {current === 3 && <StageExample word={word} />}
            {current === 4 && <StageQuiz word={word} onComplete={(c) => { if (c) setScore((s) => s + 1); setCompleted(true) }} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <button onClick={current === 0 ? () => router.push("/vocabulary") : () => goTo(current - 1)}
          className="text-sm text-blue-ocean-200/40 hover:text-blue-ocean-200/60 transition-colors"
        >← {current === 0 ? "返回词库" : "上一步"}</button>

        {completed ? (
          <button onClick={() => router.push("/vocabulary")}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-ocean-500 to-blue-ocean-400 text-white text-sm font-medium"
          >
            完成！得分：{score}/{1} ← 返回词库
          </button>
        ) : current < 4 ? (
          <button onClick={() => goTo(current + 1)}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-ocean-500 to-blue-ocean-400 text-white text-sm font-medium"
          >
            继续 →
          </button>
        ) : null}
      </div>
    </div>
  )
}
