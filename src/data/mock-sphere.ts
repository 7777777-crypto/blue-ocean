export interface SphereStudent {
  id: string
  name: string
  major: string
  hskLevel: string
  initials: string
  color: string
}

export const sphereStudents: SphereStudent[] = [
  { id: "s1", name: "Ivan Petrov", major: "Software Engineering", hskLevel: "HSK4", initials: "IP", color: "#3B82F6" },
  { id: "s2", name: "Anna Kuznetsova", major: "International Business", hskLevel: "HSK5", initials: "AK", color: "#60A5FA" },
  { id: "s3", name: "Mikhail Sokolov", major: "Computer Science", hskLevel: "HSK3", initials: "MS", color: "#4CA6FF" },
  { id: "s4", name: "Sofia Romanova", major: "Chinese Literature", hskLevel: "HSK5", initials: "SR", color: "#93C5FD" },
  { id: "s5", name: "Dmitri Fedorov", major: "Engineering", hskLevel: "HSK4", initials: "DF", color: "#3B82F6" },
  { id: "s6", name: "Elena Morozova", major: "Medicine", hskLevel: "HSK3", initials: "EM", color: "#60A5FA" },
  { id: "s7", name: "Alex Volkov", major: "Economics", hskLevel: "HSK4", initials: "AV", color: "#4CA6FF" },
  { id: "s8", name: "Olga Novikova", major: "Law", hskLevel: "HSK3", initials: "ON", color: "#93C5FD" },
]
