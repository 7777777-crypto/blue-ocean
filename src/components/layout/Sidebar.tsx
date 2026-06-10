"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, BookOpen, Trophy, Bot, Settings, GraduationCap, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { href: "/dashboard", label: "仪表盘", labelEn: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/courses", label: "学习中心", labelEn: "Learning", icon: BookOpen },
  { href: "/dashboard/ranking", label: "班级排名", labelEn: "Ranking", icon: Trophy },
  { href: "/dashboard/community", label: "社区", labelEn: "Community", icon: MessageCircle },
  { href: "/dashboard/ai-tutor", label: "AI助教", labelEn: "AI Tutor", icon: Bot },
  { href: "/dashboard/profile", label: "个人资料", labelEn: "Profile", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex flex-col w-56 border-r border-white/[0.04] pt-20 pb-6 px-3">
      <div className="flex items-center gap-3 px-3 mb-8">
        <GraduationCap className="w-5 h-5 text-blue-ocean-400" />
        <div>
          <p className="text-xs font-medium text-white">Ivan Petrov</p>
          <p className="text-[10px] text-blue-ocean-200/40">李文 · HSK4</p>
        </div>
      </div>

      <nav className="flex-1 space-y-0.5">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200",
                isActive
                  ? "bg-blue-ocean-600/10 text-blue-ocean-400"
                  : "text-blue-ocean-200/40 hover:text-blue-ocean-200/60 hover:bg-white/[0.03]"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
              <span className="text-[10px] ml-auto opacity-30">{item.labelEn}</span>
            </Link>
          )
        })}
      </nav>

      <div className="pt-4 border-t border-white/[0.04]">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-blue-ocean-200/30 hover:text-blue-ocean-200/50 transition-colors"
        >
          ← 返回首页
        </Link>
      </div>
    </aside>
  )
}

