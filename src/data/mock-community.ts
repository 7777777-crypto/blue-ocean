export interface CommunityPost {
  id: string
  author: string
  authorCn: string
  avatar: string
  content: string
  contentRu: string
  timestamp: string
  likes: number
  comments: number
  liked: boolean
}

export const communityPosts: CommunityPost[] = [
  {
    id: "p1",
    author: "Ivan Petrov",
    authorCn: "李文",
    avatar: "IP",
    content: "今天终于通过了HSK4级！学了8个月，太开心了！🎉",
    contentRu: "Сегодня наконец сдал HSK4! Учился 8 месяцев, так рад! 🎉",
    timestamp: "2分钟前",
    likes: 24,
    comments: 8,
    liked: false,
  },
  {
    id: "p2",
    author: "Anna Kuznetsova",
    authorCn: "李安娜",
    avatar: "AK",
    content: "请问「把」字句怎么用？老师讲了好几遍还是不太明白 😅",
    contentRu: "Как использовать конструкцию 把? Учитель объяснял несколько раз, но всё ещё не до конца понимаю 😅",
    timestamp: "15分钟前",
    likes: 15,
    comments: 12,
    liked: true,
  },
  {
    id: "p3",
    author: "Mikhail Sokolov",
    authorCn: "陈米哈",
    avatar: "MS",
    content: "推荐一本好书：《活着》余华。中文不难，故事特别感人。",
    contentRu: "Рекомендую хорошую книгу: «Жить» Юй Хуа. Китайский несложный, история очень трогательная.",
    timestamp: "1小时前",
    likes: 32,
    comments: 6,
    liked: false,
  },
  {
    id: "p4",
    author: "Sofia Romanova",
    authorCn: "王索菲",
    avatar: "SR",
    content: "北京烤鸭真的太好吃了！你们最喜欢什么中国菜？",
    contentRu: "Пекинская утка действительно очень вкусная! Какое ваше любимое китайское блюдо?",
    timestamp: "3小时前",
    likes: 45,
    comments: 23,
    liked: true,
  },
  {
    id: "p5",
    author: "Elena Morozova",
    authorCn: "赵叶莲",
    avatar: "EM",
    content: "我们班下周末组织去长城，有人一起吗？🚩",
    contentRu: "Наш класс организует поездку на Великую стену в следующие выходные, кто хочет присоединиться? 🚩",
    timestamp: "5小时前",
    likes: 18,
    comments: 15,
    liked: false,
  },
]

