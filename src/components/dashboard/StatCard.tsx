import { motion } from "framer-motion"

interface StatCardProps {
  label: string
  labelRu: string
  value: string | number
  icon: string
  delay?: number
}

export function StatCard({ label, labelRu, value, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className="glass-card rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-blue-ocean-200/60 mt-1">{label}</p>
      <p className="text-xs text-blue-ocean-200/30">{labelRu}</p>
    </motion.div>
  )
}
