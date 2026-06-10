import Link from "next/link"

const actions = [
  { href: "#", label: "继续学习", labelRu: "Продолжить", icon: "📖" },
  { href: "#", label: "做测验", labelRu: "Тест", icon: "📝" },
  { href: "#", label: "查看排行榜", labelRu: "Рейтинг", icon: "🏆" },
]

export function QuickActions() {
  return (
    <div className="glass-card rounded-xl p-6">
      <h3 className="text-sm font-medium text-white mb-1">快捷操作</h3>
      <p className="text-xs text-blue-ocean-200/40 mb-4">Быстрые действия</p>

      <div className="space-y-2">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] transition-all group"
          >
            <span className="text-lg">{action.icon}</span>
            <span className="flex-1 text-sm text-white group-hover:text-blue-ocean-400 transition-colors">{action.label}</span>
            <span className="text-xs text-blue-ocean-200/30">{action.labelRu}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
