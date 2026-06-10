export interface DashboardStats {
  weeklyHours: number
  wordsLearned: number
  homeworkCompletion: number
  currentRank: number
  streak: number
}

export interface StudySession {
  date: string
  hours: number
}

export interface RecentActivity {
  id: string
  type: "lesson" | "quiz" | "badge" | "homework"
  title: string
  titleRu: string
  timestamp: string
  icon: string
}

export interface Badge {
  id: string
  name: string
  nameRu: string
  icon: string
  unlocked: boolean
}

export const dashboardStats: DashboardStats = {
  weeklyHours: 12.5,
  wordsLearned: 245,
  homeworkCompletion: 88,
  currentRank: 1,
  streak: 30,
}

export const studySessions: StudySession[] = [
  { date: "Mon", hours: 2.0 },
  { date: "Tue", hours: 1.5 },
  { date: "Wed", hours: 2.5 },
  { date: "Thu", hours: 1.0 },
  { date: "Fri", hours: 3.0 },
  { date: "Sat", hours: 1.5 },
  { date: "Sun", hours: 1.0 },
]

export const recentActivities: RecentActivity[] = [
  { id: "1", type: "lesson", title: "完成第3课 — 自我介绍", titleRu: "Урок 3: Представление", timestamp: "2小时前", icon: "📖" },
  { id: "2", type: "badge", title: "获得 HSK1 大师勋章", titleRu: "Значок: Мастер HSK1", timestamp: "昨天", icon: "🥇" },
  { id: "3", type: "quiz", title: "词汇测验得分 95/100", titleRu: "Тест: 95/100", timestamp: "昨天", icon: "📝" },
  { id: "4", type: "homework", title: "提交第2课作业", titleRu: "Домашнее задание", timestamp: "2天前", icon: "✅" },
  { id: "5", type: "lesson", title: "完成第2课 — 数字", titleRu: "Урок 2: Числа", timestamp: "3天前", icon: "📖" },
]

export const badges: Badge[] = [
  { id: "hsk1", name: "HSK1 大师", nameRu: "Мастер HSK1", icon: "🥇", unlocked: true },
  { id: "streak30", name: "30天连续学习", nameRu: "30 дней подряд", icon: "🔥", unlocked: true },
  { id: "pronunciation", name: "发音达人", nameRu: "Произношение", icon: "🎯", unlocked: false },
  { id: "hanzi", name: "汉字王者", nameRu: "Иероглифы", icon: "👑", unlocked: false },
]
