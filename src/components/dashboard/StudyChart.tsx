"use client"

import { useRef, useEffect } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

interface StudyChartProps {
  data: { date: string; hours: number }[]
}

export function StudyChart({ data }: StudyChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Suppress recharts SSR warnings
    const warn = console.warn;
    console.warn = (...args) => {
      if (typeof args[0] === 'string' && args[0].includes('width')) return;
      warn.apply(console, args);
    };
    return () => { console.warn = warn; };
  }, []);

  return (
    <div ref={containerRef} className="glass-card rounded-xl p-6">
      <h3 className="text-sm font-medium text-white mb-1">本周学习时间</h3>
      <p className="text-xs text-blue-ocean-200/40 mb-4">Время обучения за неделю</p>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="studyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E5EFF" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#1E5EFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "rgba(76,166,255,0.3)", fontSize: 11 }} />
            <Tooltip
              contentStyle={{ background: "rgba(8,30,66,0.9)", border: "1px solid rgba(76,166,255,0.15)", borderRadius: "8px", fontSize: "12px", color: "#fff" }}
              formatter={(value: unknown) => [`${value}h`, "学习时间"]}
            />
            <Area type="monotone" dataKey="hours" stroke="#1E5EFF" strokeWidth={2} fill="url(#studyGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
