"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const features = [
  {
    icon: "🎮", titleKey: "feature.game", titleRu: "Геймификация",
    descKey: "feature.gameDesc", descRu: "Каждое слово с уникальной анимацией",
    href: "/vocabulary",
  },
  {
    icon: "🏆", titleKey: "feature.ranking", titleRu: "Рейтинг",
    descKey: "feature.rankingDesc", descRu: "Соревнуйтесь с однокурсниками",
    href: "/dashboard/ranking",
  },
  {
    icon: "🤖", titleKey: "feature.ai", titleRu: "AI-помощник",
    descKey: "feature.aiDesc", descRu: "Коррекция произношения",
    href: "/dashboard/ai-tutor",
  },
  {
    icon: "🌊", titleKey: "feature.immersion", titleRu: "Иммерсивность",
    descKey: "feature.immersionDesc", descRu: "3D-сфера + динамические волны",
    href: "/dashboard",
  },
  {
    icon: "🎯", titleKey: "feature.hsk", titleRu: "HSK подготовка",
    descKey: "feature.hskDesc", descRu: "От HSK1 до HSK6",
    href: "/dashboard/courses",
  },
  {
    icon: "🌟", titleKey: "feature.community", titleRu: "Сообщество",
    descKey: "feature.communityDesc", descRu: "Общайтесь, делитесь успехами",
    href: "/dashboard/community",
  },
]

export function FeatureCards() {
  return (
    <section className="relative py-section px-6 overflow-hidden ocean-bg">
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none" style={{ height: "60px" }}>
        <svg className="w-[200%] h-full wave-anim" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ animationDelay: "-1s" }}>
          <path d="M0,30 C360,60 720,0 1080,40 L1440,20 L1440,60 L0,60 Z" fill="rgba(59,130,246,0.04)" />
        </svg>
        <svg className="absolute top-0 left-0 w-[200%] h-full opacity-40 wave-anim-2" viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ animationDelay: "-4s" }}>
          <path d="M0,20 C480,50 960,0 1440,35 L1440,50 L0,50 Z" fill="rgba(96,165,250,0.03)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white glow-text mb-2">平台特色</h2>
          <p className="text-sm text-blue-ocean-200/40">Возможности платформы</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Link key={f.titleKey} href={f.href}>
              <motion.div
                className="glass-card rounded-2xl p-7 text-center group hover:border-blue-ocean-500/20 transition-all duration-500 hover:shadow-lg hover:shadow-blue-ocean-500/10 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <motion.span
                  className="text-4xl block mb-4"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {f.icon}
                </motion.span>
                <h3 className="text-lg font-semibold text-white mb-1">{f.titleKey === "feature.game" ? "游戏化学习" : f.titleKey === "feature.ranking" ? "排行榜" : f.titleKey === "feature.ai" ? "AI助教" : f.titleKey === "feature.immersion" ? "沉浸式体验" : f.titleKey === "feature.hsk" ? "HSK备考" : "社区互动"}</h3>
                <p className="text-xs text-blue-ocean-200/40 mb-3">{f.titleRu}</p>
                <p className="text-sm text-blue-ocean-200/60">{f.descKey === "feature.gameDesc" ? "每个词汇都有专属情境动画，让记忆更深刻" : f.descKey === "feature.rankingDesc" ? "与同学实时竞争，查看班级排名" : f.descKey === "feature.aiDesc" ? "AI纠正发音、解释语法、智能出题" : f.descKey === "feature.immersionDesc" ? "3D足球球体 + 动态海洋波浪背景" : f.descKey === "feature.hskDesc" ? "从HSK1到HSK6，系统化学习路径" : "与同学交流学习心得，分享进步成果"}</p>
                <p className="text-xs text-blue-ocean-200/30 mt-2">{f.descRu}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
