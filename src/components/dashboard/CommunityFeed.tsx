"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, MessageCircle, Send, Plus } from "lucide-react"
import type { CommunityPost } from "@/data/mock-community"

interface CommunityFeedProps {
  posts: CommunityPost[]
}

export function CommunityFeed({ posts: initialPosts }: CommunityFeedProps) {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState("")
  const [showForm, setShowForm] = useState(false)

  const handleLike = (id: string) => {
    setPosts(prev => prev.map(p =>
      p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
    ))
  }

  const handlePost = () => {
    if (!newPost.trim()) return
    const newPostObj: CommunityPost = {
      id: "p" + Date.now(),
      author: "Ivan Petrov",
      authorCn: "李文",
      avatar: "IP",
      content: newPost,
      contentRu: "",
      timestamp: "刚刚",
      likes: 0,
      comments: 0,
      liked: false,
    }
    setPosts(prev => [newPostObj, ...prev])
    setNewPost("")
    setShowForm(false)
  }

  return (
    <div className="space-y-4">
      {/* New post button */}
      <motion.button
        className="glass-card rounded-xl p-4 w-full text-left flex items-center gap-3 text-blue-ocean-200/40 hover:text-blue-ocean-200/60 hover:bg-white/[0.06] transition-all"
        onClick={() => setShowForm(!showForm)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="w-9 h-9 rounded-full bg-blue-ocean-600/20 flex items-center justify-center">
          <Plus className="w-4 h-4 text-blue-ocean-400" />
        </div>
        <span className="text-sm">分享你的学习心得... Поделиться...</span>
      </motion.button>

      {/* New post form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="glass-card rounded-xl p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <textarea
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 text-sm text-white placeholder:text-blue-ocean-200/20 resize-none"
              rows={3}
              placeholder="说点什么... Напишите что-нибудь..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <div className="flex justify-end mt-3">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-ocean-600 text-white text-sm hover:bg-blue-ocean-500 transition-all disabled:opacity-50"
                disabled={!newPost.trim()}
                onClick={handlePost}
              >
                <Send className="w-3.5 h-3.5" />
                发布
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Posts */}
      <AnimatePresence>
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            className="glass-card rounded-xl p-5 hover:bg-white/[0.06] transition-all group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            layout
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-ocean-600 to-blue-ocean-400 flex items-center justify-center text-xs font-semibold text-white flex-shrink-0">
                {post.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">{post.author}</span>
                  <span className="text-[10px] text-blue-ocean-200/30">{post.authorCn}</span>
                </div>
                <p className="text-sm text-blue-ocean-100/80 mt-2 leading-relaxed">{post.content}</p>
                {post.contentRu && (
                  <p className="text-xs text-blue-ocean-200/40 mt-1">{post.contentRu}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
              <div className="flex items-center gap-4">
                <motion.button
                  className="flex items-center gap-1.5 text-xs"
                  onClick={() => handleLike(post.id)}
                  whileTap={{ scale: 0.8 }}
                >
                  <motion.div
                    animate={post.liked ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart
                      className={`w-4 h-4 ${post.liked ? "fill-red-400 text-red-400" : "text-blue-ocean-200/30"}`}
                    />
                  </motion.div>
                  <span className={post.liked ? "text-red-400" : "text-blue-ocean-200/30"}>
                    {post.likes}
                  </span>
                </motion.button>

                <div className="flex items-center gap-1.5 text-xs text-blue-ocean-200/30">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments}</span>
                </div>
              </div>

              <span className="text-[10px] text-blue-ocean-200/20">{post.timestamp}</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
