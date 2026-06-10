"use client"

import { motion } from "framer-motion"
import { WaveDivider } from "@/components/ui/WaveDivider"
import { useLang } from "@/context/language-context"
import { t } from "@/lib/i18n"
import { Mail, Phone, Code } from "lucide-react"

export function DeveloperFooter() {
  const { lang } = useLang()
  return (
    <footer className="relative pt-16 pb-12 px-6 overflow-hidden">
      <WaveDivider position="top" />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong text-xs text-blue-ocean-300 mb-6">
            <Code className="w-3.5 h-3.5" /><span>BLUE OCEAN · 蓝海</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white glow-text mb-6">{t("dev.title", lang)}</h2>
          <p className="text-blue-ocean-200/40 text-sm mb-8">Разработчик</p>

          <div className="glass-card rounded-2xl p-8 sm:p-10 mb-10 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-ocean-600/5 to-transparent" />
            <div className="relative z-10">
              <motion.p className="text-xl sm:text-2xl font-medium text-white italic leading-relaxed mb-3"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                {'\u201C'}{t("dev.quote", lang)}{'\u201D'}
              </motion.p>
              <p className="text-sm text-blue-ocean-200/50 mb-5">{'\u00AB'}Чувствуй медленно, темп постепенно ускоряется{'\u00BB'}</p>
              <p className="text-xs text-blue-ocean-200/30">{'\u2014'} {t("dev.quoteAttr", lang)}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a href="mailto:2431676626@qq.com" className="flex items-center gap-3 px-6 py-3 rounded-xl glass-strong text-blue-ocean-200 hover:text-white hover:bg-white/[0.12] transition-all group" whileHover={{ scale: 1.03 }}>
              <Mail className="w-5 h-5 text-blue-ocean-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm">2431676626@qq.com</span>
            </motion.a>
            <motion.a href="tel:19943674814" className="flex items-center gap-3 px-6 py-3 rounded-xl glass-strong text-blue-ocean-200 hover:text-white hover:bg-white/[0.12] transition-all group" whileHover={{ scale: 1.03 }}>
              <Phone className="w-5 h-5 text-blue-ocean-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm">199 4367 4814</span>
            </motion.a>
          </div>
        </motion.div>
        <div className="mt-12 pt-6 border-t border-white/[0.04]">
          <p className="text-xs text-blue-ocean-200/20">{t("dev.copyright", lang)}</p>
        </div>
      </div>
    </footer>
  )
}
