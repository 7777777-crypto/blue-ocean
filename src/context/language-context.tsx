"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Lang } from "@/lib/i18n"

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("blue-ocean-lang") as Lang | null
      if (saved === "ru" || saved === "zh") return saved
    }
    return "zh"
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== "undefined") localStorage.setItem("blue-ocean-lang", l)
  }

  const toggleLang = () => setLang(lang === "zh" ? "ru" : "zh")

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}
