export interface HskChapter {
  id: string
  title: string
  titleRu: string
  words: string[]
  grammar: string[]
  lessons: number
}

export interface HskCourse {
  id: string
  level: number
  title: string
  titleRu: string
  description: string
  descriptionRu: string
  totalWords: number
  totalChapters: number
  icon: string
  chapters: HskChapter[]
}

export const hskCourses: HskCourse[] = [
  {
    id: "hsk3", level: 3, title: "HSK 3级", titleRu: "HSK 3 уровень",
    description: "掌握300个常用词汇，进行日常交流",
    descriptionRu: "300 слов для повседневного общения",
    totalWords: 300, totalChapters: 10, icon: "🥉",
    chapters: [
      { id: "h3-1", title: "日常生活", titleRu: "Повседневная жизнь", words: ["早上","中午","晚上","起床","睡觉","吃饭","上班","下班","回家","休息","洗澡","刷牙","衣服","鞋子","帽子"], grammar: ["了(marker)", "过(experiential)", "正在(progressive)"], lessons: 3 },
      { id: "h3-2", title: "家庭与朋友", titleRu: "Семья и друзья", words: ["爸爸","妈妈","哥哥","姐姐","弟弟","妹妹","朋友","同学","邻居","结婚","孩子","名字","年龄","工作"], grammar: ["比(comparison)", "跟...一样", "有的...有的..."], lessons: 3 },
      { id: "h3-3", title: "学校与学习", titleRu: "Школа и учёба", words: ["教室","老师","学生","课本","作业","考试","成绩","问题","回答","意思","发音","语法","复习","预习"], grammar: ["把(disposal)", "被(passive)", "除了...以外"], lessons: 3 },
      { id: "h3-4", title: "饮食", titleRu: "Еда", words: ["米饭","面条","面包","牛奶","鸡蛋","水果","蔬菜","肉","鱼","茶","咖啡","糖","盐","油","醋"], grammar: ["虽然...但是", "因为...所以", "不但...而且"], lessons: 3 },
      { id: "h3-5", title: "交通与旅行", titleRu: "Транспорт и путешествия", words: ["公共汽车","地铁","出租车","火车站","飞机场","票","座位","行李","地图","宾馆","护照","签证"], grammar: ["从...到...", "先...然后...", "或者...或者..."], lessons: 3 },
    ],
  },
  {
    id: "hsk4", level: 4, title: "HSK 4级", titleRu: "HSK 4 уровень",
    description: "掌握600个词汇，流利讨论社会话题",
    descriptionRu: "600 слов для свободного общения",
    totalWords: 600, totalChapters: 10, icon: "🥈",
    chapters: [
      { id: "h4-1", title: "社会与工作", titleRu: "Общество и работа", words: ["公司","经理","同事","面试","简历","合同","工资","奖金","辞职","退休","招聘","培训","经验","能力"], grammar: ["无论...都", "既然...就", "只要...就"], lessons: 3 },
      { id: "h4-2", title: "经济与消费", titleRu: "Экономика", words: ["价格","打折","信用卡","现金","网购","快递","退款","保修","贷款","投资","保险","收入","支出"], grammar: ["只有...才", "即使...也", "不仅...而且"], lessons: 3 },
      { id: "h4-3", title: "环境与自然", titleRu: "Экология", words: ["环境","污染","保护","节约","浪费","能源","森林","河流","空气","气候","温度","全球","生态"], grammar: ["随着...", "对于...来说", "在...方面"], lessons: 3 },
      { id: "h4-4", title: "健康与医疗", titleRu: "Здоровье", words: ["医院","医生","护士","病人","手术","药","检查","体检","发烧","感冒","运动","减肥","睡眠","压力"], grammar: ["通过...", "为了...", "根据..."], lessons: 3 },
      { id: "h4-5", title: "文化与社会", titleRu: "Культура", words: ["节日","传统","风俗","文化","艺术","音乐","电影","小说","语言","历史","教育","发展","影响"], grammar: ["一方面...另一方面", "不仅...而且", "越来越..."], lessons: 3 },
    ],
  },
]
