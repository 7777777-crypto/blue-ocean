"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import type { VocabularyWord } from "@/data/vocabulary"
import { VocabAnimation } from "./VocabAnimation"

interface WordCardProps { word: VocabularyWord; index: number }

export function WordCard({ word, index }: WordCardProps) {
  const router = useRouter()
  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -6 }}
      onClick={() => router.push(`/vocabulary/${word.id}`)}
    >
      {/* Animation preview */}
      <div className="relative h-32 bg-gradient-to-b from-blue-ocean-500/5 to-transparent overflow-hidden">
        <VocabAnimation type={word.animation} size="small" />
      </div>
      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{word.emoji}</span>
          <span className="text-xl font-semibold text-white">{word.hanzi}</span>
        </div>
        <p className="text-sm text-blue-ocean-200/70 mb-1">{word.pinyin}</p>
        <p className="text-sm text-blue-ocean-100/50">{word.russian}</p>
        <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full bg-blue-ocean-500/10 text-blue-ocean-300">
          HSK{word.hskLevel}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-ocean-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
