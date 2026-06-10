import { vocabularyData } from "@/data/vocabulary"
import { WordCard } from "@/components/vocabulary/WordCard"
import { TopNav } from "@/components/layout/TopNav"
import { Providers } from "@/app/providers"

export default function VocabularyPage() {
  return (
    <Providers>
      <main className="min-h-screen">
        <TopNav />
        <div className="pt-24 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white glow-text mb-4">🎮 动画词库</h1>
              <p className="text-lg text-blue-ocean-200/40">Анимированный словарь</p>
              <p className="text-sm text-blue-ocean-200/30 mt-2">点击卡片开始学习 · Нажми на карточку, чтобы начать</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {vocabularyData.map((word, i) => (
                <WordCard key={word.id} word={word} index={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Providers>
  )
}
