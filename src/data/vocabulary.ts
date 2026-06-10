export type AnimationType = "coin" | "plane" | "rain" | "run" | "train" | "panda" | "apple" | "write"

export interface VocabularyWord {
  id: string
  hanzi: string
  pinyin: string
  russian: string
  emoji: string
  animation: AnimationType
  exampleSentence: string
  exampleTranslation: string
  quizOptions: string[]
  quizAnswer: string
  hskLevel: number
}

export const vocabularyData: VocabularyWord[] = [
  {
    id: "coin", hanzi: "硬币", pinyin: "yìng bì", russian: "монета", emoji: "🪙", animation: "coin",
    exampleSentence: "我有一枚硬币。", exampleTranslation: "У меня есть одна монета.",
    quizOptions: ["飞机", "硬币", "苹果", "熊猫"], quizAnswer: "硬币", hskLevel: 3,
  },
  {
    id: "plane", hanzi: "飞机", pinyin: "fēi jī", russian: "самолёт", emoji: "✈️", animation: "plane",
    exampleSentence: "飞机在天上飞。", exampleTranslation: "Самолёт летит в небе.",
    quizOptions: ["火车", "硬币", "飞机", "写字"], quizAnswer: "飞机", hskLevel: 3,
  },
  {
    id: "rain", hanzi: "下雨", pinyin: "xià yǔ", russian: "дождь", emoji: "🌧️", animation: "rain",
    exampleSentence: "今天下雨了。", exampleTranslation: "Сегодня идёт дождь.",
    quizOptions: ["跑步", "下雨", "熊猫", "苹果"], quizAnswer: "下雨", hskLevel: 3,
  },
  {
    id: "run", hanzi: "跑步", pinyin: "pǎo bù", russian: "бегать", emoji: "🏃", animation: "run",
    exampleSentence: "他喜欢跑步。", exampleTranslation: "Он любит бегать.",
    quizOptions: ["跑步", "写字", "下雨", "硬币"], quizAnswer: "跑步", hskLevel: 3,
  },
  {
    id: "train", hanzi: "高铁", pinyin: "gāo tiě", russian: "скоростной поезд", emoji: "🚄", animation: "train",
    exampleSentence: "高铁很快。", exampleTranslation: "Скоростной поезд очень быстрый.",
    quizOptions: ["飞机", "高铁", "硬币", "下雨"], quizAnswer: "高铁", hskLevel: 4,
  },
  {
    id: "panda", hanzi: "熊猫", pinyin: "xióng māo", russian: "панда", emoji: "🐼", animation: "panda",
    exampleSentence: "熊猫爱吃竹子。", exampleTranslation: "Панда любит есть бамбук.",
    quizOptions: ["熊猫", "苹果", "跑步", "飞机"], quizAnswer: "熊猫", hskLevel: 3,
  },
  {
    id: "apple", hanzi: "苹果", pinyin: "píng guǒ", russian: "яблоко", emoji: "🍎", animation: "apple",
    exampleSentence: "这个苹果很好吃。", exampleTranslation: "Это яблоко очень вкусное.",
    quizOptions: ["硬币", "高铁", "熊猫", "苹果"], quizAnswer: "苹果", hskLevel: 3,
  },
  {
    id: "write", hanzi: "写字", pinyin: "xiě zì", russian: "писать иероглифы", emoji: "✍️", animation: "write",
    exampleSentence: "他在写字。", exampleTranslation: "Он пишет иероглифы.",
    quizOptions: ["写字", "跑步", "下雨", "飞机"], quizAnswer: "写字", hskLevel: 4,
  },
]

export function getWordById(id: string): VocabularyWord | undefined {
  return vocabularyData.find((w) => w.id === id)
}
