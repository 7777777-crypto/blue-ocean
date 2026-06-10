"use client"

import { motion } from "framer-motion"
import { CommunityFeed } from "@/components/dashboard/CommunityFeed"
import { communityPosts } from "@/data/mock-community"

export default function CommunityPage() {
  return (
    <div className="space-y-6 py-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-2xl font-bold text-white">社区</h1>
        <p className="text-sm text-blue-ocean-200/40">Сообщество студентов</p>
      </motion.div>
      <CommunityFeed posts={communityPosts} />
    </div>
  )
}
