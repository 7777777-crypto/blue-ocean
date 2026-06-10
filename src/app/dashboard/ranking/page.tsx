"use client"

import { motion } from "framer-motion"
import { classRanking } from "@/data/leaderboard"

export default function RankingPage() {
  return (
    <div className="space-y-6 py-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-2xl font-bold text-white">🏆 班级排名</h1>
        <p className="text-sm text-blue-ocean-200/40">Рейтинг класса</p>
      </motion.div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-ocean-300">
            {Math.max(...classRanking.map(s => s.weeklyHours))}
          </div>
          <div className="text-xs text-blue-ocean-200/40 mt-1">本周最高时长 (ч)</div>
        </div>
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-ocean-300">
            {Math.max(...classRanking.map(s => s.wordsMastered))}
          </div>
          <div className="text-xs text-blue-ocean-200/40 mt-1">最高词汇量</div>
        </div>
        <div className="glass-card rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-ocean-300">
            {Math.max(...classRanking.map(s => s.streak))}
          </div>
          <div className="text-xs text-blue-ocean-200/40 mt-1">最长连续签到 (дн)</div>
        </div>
      </div>

      <div className="space-y-2">
        {classRanking.map((entry, i) => (
          <motion.div
            key={entry.name}
            className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/[0.06] transition-all"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="w-10 text-center">
              {i < 3 ? (
                <span className="text-2xl">{["🥇", "🥈", "🥉"][i]}</span>
              ) : (
                <span className="text-sm text-blue-ocean-200/40 font-mono">#{i + 1}</span>
              )}
            </div>
            <span className="text-lg">{entry.avatar}</span>
            <div className="flex-1">
              <span className="text-sm font-medium text-white">{entry.name}</span>
              <span className="text-xs text-blue-ocean-200/40 ml-2">{entry.nameCn}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-blue-ocean-200/60">
              <span>{entry.weeklyHours}ч</span>
              <span>{entry.wordsMastered}词</span>
              <span>🔥{entry.streak}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
