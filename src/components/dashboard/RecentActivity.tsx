import { motion } from "framer-motion"
import type { RecentActivity } from "@/data/mock-dashboard"

interface RecentActivityProps {
  activities: RecentActivity[]
}

export function RecentActivityList({ activities }: RecentActivityProps) {
  return (
    <div className="glass-card rounded-xl p-6">
      <h3 className="text-sm font-medium text-white mb-1">最近活动</h3>
      <p className="text-xs text-blue-ocean-200/40 mb-4">Недавние действия</p>

      <div className="space-y-3">
        {activities.map((activity, i) => (
          <motion.div
            key={activity.id}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <span className="text-lg">{activity.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">{activity.title}</p>
              <p className="text-xs text-blue-ocean-200/40 truncate">{activity.titleRu}</p>
            </div>
            <span className="text-[10px] text-blue-ocean-200/30 whitespace-nowrap">{activity.timestamp}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
