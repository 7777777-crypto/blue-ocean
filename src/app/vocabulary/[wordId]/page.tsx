import { getWordById } from "@/data/vocabulary"
import { LearningFlow } from "@/components/learning/LearningFlow"
import { TopNav } from "@/components/layout/TopNav"
import { Providers } from "@/app/providers"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function LearnPage({ params }: { params: Promise<{ wordId: string }> }) {
  const { wordId } = await params
  const word = getWordById(wordId)

  return (
    <Providers>
      <main className="min-h-screen">
        <TopNav />
        <div className="pt-20 pb-16">
          {word ? (
            <>
              <div className="max-w-5xl mx-auto px-4 mb-4">
                <Link href="/vocabulary" className="inline-flex items-center gap-2 text-sm text-blue-ocean-200/30 hover:text-blue-ocean-200/50 transition-colors">
                  <ArrowLeft className="w-4 h-4" />← 返回词库
                </Link>
              </div>
              <LearningFlow word={word} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
              <span className="text-6xl">🔍</span>
              <p className="text-lg text-blue-ocean-200/60">词汇未找到 · Слово не найдено</p>
              <Link href="/vocabulary" className="px-6 py-2.5 rounded-xl bg-blue-ocean-500 text-white text-sm">返回词库</Link>
            </div>
          )}
        </div>
      </main>
    </Providers>
  )
}
