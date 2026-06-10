"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { AuroraBackground } from "@/components/three/AuroraBackground"
import { MouseLight } from "@/components/three/MouseLight"
import { LoginForm } from "@/components/auth/LoginForm"
import { RegisterForm } from "@/components/auth/RegisterForm"
import { AuthProvider } from "@/context/auth-context"
import { LanguageProvider, useLang } from "@/context/language-context"
import { t } from "@/lib/i18n"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, LogIn, UserPlus, Globe } from "lucide-react"

function LangSwitch() {
  const { lang, toggleLang } = useLang()
  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-xs text-blue-ocean-200 hover:text-white transition-all"
    >
      <Globe className="w-3.5 h-3.5" />
      <span className="font-medium">{lang === "zh" ? "RU" : "中文"}</span>
    </button>
  )
}

function LoginContent() {
  const [tab, setTab] = useState<"login" | "register">("login")
  const { lang } = useLang()

  return (
    <div className="min-h-screen flex">
      <LangSwitch />

      <div className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden bg-blue-ocean-900/50">
        <div className="absolute inset-0 ocean-bg">
          <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }} dpr={[1, 1.5]} gl={{ alpha: true }} style={{ background: "transparent" }}>
            <Suspense fallback={null}>
              <AuroraBackground />
              <MouseLight />
            </Suspense>
          </Canvas>
        </div>
        <div className="relative z-10 text-center px-16">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-ocean-500 to-blue-ocean-400 flex items-center justify-center shadow-lg shadow-blue-ocean-500/30">
            <span className="text-3xl font-bold text-white">B</span>
          </div>
          <h2 className="text-4xl font-bold text-white glow-text mb-3">{t("login.brand", lang)}</h2>
          <p className="text-blue-ocean-200/50 text-lg mb-2">{t("hero.subtitle", lang)}</p>
          <p className="text-blue-ocean-200/30 text-sm">{t("hero.college", lang)}</p>
          <div className="mt-12 space-y-4">
            {[t("login.f1", lang), t("login.f2", lang), t("login.f3", lang)].map((item, i) => (
              <motion.div key={item} className="flex items-center gap-3 text-sm text-blue-ocean-200/40"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-ocean-500/40" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-gradient-to-b from-blue-ocean-900/30 to-blue-ocean-900/10">
        <div className="w-full max-w-md mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-ocean-200/30 hover:text-blue-ocean-200/50 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t("auth.back", lang)}
          </Link>

          <div className="flex glass-strong rounded-xl p-1 mb-8">
            <button onClick={() => setTab("login")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                tab === "login" ? "bg-blue-ocean-500 text-white shadow-sm" : "text-blue-ocean-200/40 hover:text-blue-ocean-200/60"
              }`}
            >
              <LogIn className="w-4 h-4" />
              {t("auth.login", lang)}
            </button>
            <button onClick={() => setTab("register")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                tab === "register" ? "bg-blue-ocean-500 text-white shadow-sm" : "text-blue-ocean-200/40 hover:text-blue-ocean-200/60"
              }`}
            >
              <UserPlus className="w-4 h-4" />
              {t("auth.register", lang)}
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {tab === "login" ? <LoginForm /> : <RegisterForm />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <LoginContent />
      </LanguageProvider>
    </AuthProvider>
  )
}
