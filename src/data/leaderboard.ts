export interface ClassRankingEntry {
  name: string;
  nameCn: string;
  weeklyHours: number;
  wordsMastered: number;
  streak: number;
  avatar: string;
}

export const classRanking: ClassRankingEntry[] = [
  { name: "Ivan Petrov", nameCn: "李文", weeklyHours: 12.5, wordsMastered: 245, streak: 30, avatar: "🇷🇺" },
  { name: "Anna Kuznetsova", nameCn: "李安娜", weeklyHours: 10.2, wordsMastered: 218, streak: 24, avatar: "🇷🇺" },
  { name: "Mikhail Sokolov", nameCn: "陈米哈", weeklyHours: 9.8, wordsMastered: 195, streak: 18, avatar: "🇷🇺" },
  { name: "Elena Morozova", nameCn: "赵叶莲", weeklyHours: 8.5, wordsMastered: 178, streak: 15, avatar: "🇷🇺" },
  { name: "Dmitri Fedorov", nameCn: "刘德米", weeklyHours: 7.2, wordsMastered: 156, streak: 12, avatar: "🇷🇺" },
  { name: "Sergei Ivanov", nameCn: "孙谢尔", weeklyHours: 6.0, wordsMastered: 134, streak: 8, avatar: "🇷🇺" },
];
