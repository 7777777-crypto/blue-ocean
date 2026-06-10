"use client"

import { motion } from "framer-motion"
import { StatCard } from "@/components/dashboard/StatCard"
import { StudyChart } from "@/components/dashboard/StudyChart"
import { RecentActivityList } from "@/components/dashboard/RecentActivity"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { dashboardStats, studySessions, recentActivities, badges } from "@/data/mock-dashboard"

export default function DashboardPage() {
  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-2xl font-bold text-white">学生仪表盘</h1>
        <p className="text-sm text-blue-ocean-200/40">Панель студента</p>
      </motion.div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="本周学习" labelRu="Часов" value={`${dashboardStats.weeklyHours}h`} icon="📊" delay={0} />
        <StatCard label="已学词汇" labelRu="Слов" value={dashboardStats.wordsLearned} icon="📚" delay={0.05} />
        <StatCard label="作业完成" labelRu="Заданий" value={`${dashboardStats.homeworkCompletion}%`} icon="✅" delay={0.1} />
        <StatCard label="当前排名" labelRu="Рейтинг" value={`#${dashboardStats.currentRank}`} icon="🏆" delay={0.15} />
      </div>

      {/* Middle row: chart + activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StudyChart data={studySessions} />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Recent activity */}
      <RecentActivityList activities={recentActivities} />

      {/* Badges */}
      <div>
        <h3 className="text-sm font-medium text-white mb-3">我的勋章</h3>
        <p className="text-xs text-blue-ocean-200/40 mb-4">Мои значки</p>
        <div className="flex gap-3">
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              className={`glass-card rounded-xl p-4 text-center min-w-[100px] ${!badge.unlocked ? "opacity-40" : ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-3xl block mb-2">{badge.icon}</span>
              <p className="text-xs text-white font-medium">{badge.name}</p>
              <p className="text-[10px] text-blue-ocean-200/30 mt-1">{badge.nameRu}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Streak */}
      <div className="glass-card rounded-xl p-6 flex items-center gap-4">
        <span className="text-4xl">🔥</span>
        <div>
          <p className="text-lg font-bold text-white">{dashboardStats.streak} 天连续学习</p>
          <p className="text-xs text-blue-ocean-200/40">{dashboardStats.streak} дней подряд</p>
        </div>
      </div>
    </div>
  )
}
