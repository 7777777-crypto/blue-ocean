"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useLang } from "@/context/language-context"
import { t } from "@/lib/i18n"

const navItems = [
  { path: "/", labelKey: "nav.home", labelEn: "Home" },
  { path: "/vocabulary", labelKey: "nav.vocabulary", labelEn: "Words" },
  { path: "/dashboard", labelKey: "nav.dashboard", labelEn: "Dashboard" },
  { path: "/login", labelKey: "nav.login", labelEn: "Login" },
]

export function TopNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggleLang } = useLang()

  if (pathname === "/login") return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 glass" />
      <div className="relative mx-auto flex h-16 items-center justify-between px-6" style={{ maxWidth: "var(--spacing-max-width)" }}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-ocean-500 to-blue-ocean-400 flex items-center justify-center text-white text-xs font-bold group-hover:scale-105 transition-transform">B</div>
          <div>
            <span className="text-sm font-semibold text-white">BLUE OCEAN</span>
            <span className="text-[10px] text-blue-ocean-300/60 ml-2">蓝海</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link key={item.path} href={item.path}
                className={cn("relative px-4 py-2 rounded-lg text-sm transition-all duration-200",
                  isActive ? "text-white" : "text-blue-ocean-200/50 hover:text-blue-ocean-100 hover:bg-white/[0.03]"
                )}
              >
                {isActive && (
                  <motion.div layoutId="nav-pill" className="absolute inset-0 rounded-lg bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }} />
                )}
                <span className="relative z-10">{t(item.labelKey, lang)}</span>
              </Link>
            )
          })}
          <button onClick={toggleLang}
            className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-blue-ocean-200/50 hover:text-blue-ocean-100 hover:bg-white/[0.03] transition-all">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-medium">{lang === "zh" ? "RU" : "中文"}</span>
          </button>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleLang} className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-blue-ocean-200/50">
            <Globe className="w-3.5 h-3.5" /><span>{lang === "zh" ? "RU" : "中文"}</span>
          </button>
          <button className="text-blue-ocean-200" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="md:hidden glass-strong mx-4 rounded-xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
          >
            <div className="p-3 space-y-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}
                  className="block px-4 py-3 rounded-lg text-sm text-blue-ocean-200/60 hover:bg-white/[0.04]"
                  onClick={() => setMobileOpen(false)}
                >{t(item.labelKey, lang)}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
