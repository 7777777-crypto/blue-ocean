"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { hskCourses } from "@/data/hsk-courses"
import { ChevronDown, BookOpen, GraduationCap, ListChecks } from "lucide-react"

export default function CoursesPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="space-y-8 py-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="w-6 h-6 text-blue-ocean-400" />
          <h1 className="text-2xl font-bold text-white">HSK备考</h1>
        </div>
        <p className="text-sm text-blue-ocean-200/40">Подготовка к HSK</p>
      </motion.div>

      {/* Course cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {hskCourses.map((course, ci) => (
          <motion.div key={course.id}
            className="glass-card rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ci * 0.1 }}
          >
            {/* Header */}
            <div className="p-6 pb-4 flex items-start gap-4">
              <span className="text-5xl">{course.icon}</span>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white">{course.title}</h2>
                <p className="text-sm text-blue-ocean-200/40">{course.titleRu}</p>
                <div className="flex flex-wrap gap-3 mt-3 text-xs text-blue-ocean-200/50">
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{course.totalWords} 词</span>
                  <span className="flex items-center gap-1"><ListChecks className="w-3 h-3" />{course.totalChapters} 章</span>
                </div>
                <p className="text-xs text-blue-ocean-200/40 mt-2">{course.description}</p>
                <p className="text-[10px] text-blue-ocean-200/20">{course.descriptionRu}</p>
              </div>
            </div>

            {/* Chapter list */}
            <div className="px-6 pb-4 space-y-1">
              {course.chapters.map((ch) => (
                <div key={ch.id}>
                  <button
                    onClick={() => setExpanded(expanded === ch.id ? null : ch.id)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/[0.04] transition-all text-left"
                  >
                    <ChevronDown className={`w-3.5 h-3.5 text-blue-ocean-300/40 transition-transform ${expanded === ch.id ? "rotate-0" : "-rotate-90"}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{ch.title}</p>
                      <p className="text-[10px] text-blue-ocean-200/30 truncate">{ch.titleRu}</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-ocean-500/10 text-blue-ocean-300">{ch.words.length}词</span>
                  </button>

                  <AnimatePresence>
                    {expanded === ch.id && (
                      <motion.div className="pl-10 pr-3 pb-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                      >
                        <div>
                          <p className="text-[10px] text-blue-ocean-300/60 mb-1">词汇 / Слова:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {ch.words.map((w) => (
                              <span key={w} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-blue-ocean-200/70">{w}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] text-blue-ocean-300/60 mb-1">语法 / Грамматика:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {ch.grammar.map((g) => (
                              <span key={g} className="text-[11px] px-2 py-0.5 rounded-md bg-blue-ocean-500/8 text-blue-ocean-300">{g}</span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-blue-ocean-200/30">
                          <BookOpen className="w-3 h-3" />{ch.lessons} 节课 / уроков
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
