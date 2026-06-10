export interface Student {
  id: string
  name: string
  nameCn: string
  city: string
  major: string
  hskLevel: string
  learningGoal: string
  bio: string
  avatar?: string
  initials: string
}

export const currentStudent: Student = {
  id: "stu-001",
  name: "Ivan Petrov",
  nameCn: "李文",
  city: "Moscow",
  major: "Software Engineering",
  hskLevel: "HSK4",
  learningGoal: "达到HSK5级，在北京工作",
  bio: "Привет! Я изучаю китайский язык уже 2 года. Люблю китайскую культуру и еду!",
  initials: "IP",
}
