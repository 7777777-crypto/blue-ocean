"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { currentStudent } from "@/data/mock-student"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Upload, Camera, Save } from 'lucide-react'

export default function ProfilePage() {
  const [student] = useState(currentStudent)
  const [editing, setEditing] = useState(false)

  return (
    <div className="space-y-8 py-6 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-2xl font-bold text-white">个人资料</h1>
        <p className="text-sm text-blue-ocean-200/40">Личный профиль</p>
      </motion.div>

      {/* Avatar + upload */}
      <motion.div
        className="flex items-center gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative group">
          <Avatar className="w-20 h-20 ring-2 ring-blue-ocean-600/20">
            <AvatarFallback className="bg-blue-ocean-800 text-blue-ocean-400 text-lg">{student.initials}</AvatarFallback>
          </Avatar>
          <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-blue-ocean-600 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="w-3.5 h-3.5" />
          </button>
        </div>
        <div>
          <p className="text-lg font-semibold text-white">{student.name}</p>
          <p className="text-sm text-blue-ocean-200/60">{student.nameCn}</p>
        </div>
      </motion.div>

      {/* Info fields */}
      <motion.div
        className="glass-card rounded-xl p-6 space-y-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "姓名", value: student.name },
            { label: "中文名", value: student.nameCn },
            { label: "城市", value: student.city },
            { label: "专业", value: student.major },
            { label: "HSK等级", value: student.hskLevel },
            { label: "学习目标", value: student.learningGoal },
          ].map((field) => (
            <div key={field.label} className={field.label === "学习目标" ? "col-span-2" : ""}>
              <Label className="text-xs text-blue-ocean-200/40">{field.label}</Label>
              <p className="text-sm text-white mt-1">{field.value}</p>
            </div>
          ))}
        </div>

        <div>
          <Label className="text-xs text-blue-ocean-200/40">Bio</Label>
          <p className="text-sm text-blue-ocean-200/60 mt-1">{student.bio}</p>
        </div>
      </motion.div>

      {/* Upload section */}
      <motion.div
        className="glass-card rounded-xl p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-sm font-medium text-white mb-1">文件上传</h3>
        <p className="text-xs text-blue-ocean-200/40 mb-4">Загрузка файлов</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {["证件照", "HSK证书", "成绩单"].map((item) => (
            <button
              key={item}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-dashed border-blue-ocean-400/20 hover:border-blue-ocean-400/40 text-blue-ocean-200/40 hover:text-blue-ocean-200/60 transition-all"
            >
              <Upload className="w-5 h-5" />
              <span className="text-xs">{item}</span>
            </button>
          ))}
        </div>
      </motion.div>

      <Button className="bg-blue-ocean-600 hover:bg-blue-ocean-500 text-white" onClick={() => setEditing(!editing)}>
        <Save className="w-4 h-4 mr-2" />
        {editing ? "保存" : "编辑资料"}
      </Button>
    </div>
  )
}


