export type Lang = "zh" | "ru"

export const i18n: Record<string, { zh: string; ru: string }> = {
  // Navigation
  "nav.home": { zh: "首页", ru: "Главная" },
  "nav.login": { zh: "登录", ru: "Войти" },
  "nav.dashboard": { zh: "仪表盘", ru: "Панель" },
  "nav.vocabulary": { zh: "词库", ru: "Словарь" },

  // Hero
  "hero.subtitle": { zh: "学习中文 · 连接世界", ru: "Учи китайский · Открой мир" },
  "hero.college": { zh: "北京信息职业技术学院", ru: "Beijing Information Technology College" },
  "hero.start": { zh: "开始学习", ru: "Начать учиться" },
  "hero.login": { zh: "登录 / 注册", ru: "Войти / Регистрация" },
  "hero.community": { zh: "Russian Students Community", ru: "Сообщество русских студентов" },

  // Auth
  "auth.login": { zh: "登录", ru: "Войти" },
  "auth.register": { zh: "注册", ru: "Регистрация" },
  "auth.email": { zh: "邮箱", ru: "Электронная почта" },
  "auth.password": { zh: "密码", ru: "Пароль" },
  "auth.confirm": { zh: "确认密码", ru: "Подтвердить пароль" },
  "auth.name": { zh: "姓名", ru: "Имя" },
  "auth.forgot": { zh: "忘记密码", ru: "Забыли пароль" },
  "auth.loginBtn": { zh: "登录", ru: "Войти" },
  "auth.registerBtn": { zh: "立即注册", ru: "Регистрация" },
  "auth.student": { zh: "学生", ru: "Студент" },
  "auth.teacher": { zh: "教师", ru: "Преподаватель" },
  "auth.admin": { zh: "管理员", ru: "Администратор" },
  "auth.back": { zh: "返回首页", ru: "На главную" },
  "auth.success": { zh: "注册成功！", ru: "Регистрация успешна!" },
  "auth.successDesc": { zh: "Добро пожаловать!", ru: "Добро пожаловать!" },
  "auth.fillAll": { zh: "请填写所有字段", ru: "Заполните все поля" },
  "auth.passMin": { zh: "密码至少6位", ru: "Минимум 6 символов" },
  "auth.passMatch": { zh: "两次密码不一致", ru: "Пароли не совпадают" },
  "auth.failed": { zh: "登录失败，请重试", ru: "Ошибка входа" },
  "auth.registerFailed": { zh: "注册失败，请重试", ru: "Ошибка регистрации" },

  // Login page branding
  "login.brand": { zh: "蓝海 · BLUE OCEAN", ru: "蓝海 · BLUE OCEAN" },
  "login.features": { zh: "平台特色", ru: "Возможности" },
  "login.f1": { zh: "🎯 游戏化学习", ru: "🎯 Геймификация" },
  "login.f2": { zh: "🌊 沉浸式体验", ru: "🌊 Иммерсивный опыт" },
  "login.f3": { zh: "🤖 AI智能助教", ru: "🤖 AI-помощник" },

  // Dashboard
  "dash.title": { zh: "学生仪表盘", ru: "Панель студента" },
  "dash.weeklyHours": { zh: "本周学习", ru: "Часов" },
  "dash.wordsLearned": { zh: "已学词汇", ru: "Слов" },
  "dash.homework": { zh: "作业完成", ru: "Заданий" },
  "dash.rank": { zh: "当前排名", ru: "Рейтинг" },
  "dash.studyChart": { zh: "本周学习时间", ru: "Время обучения" },
  "dash.quickActions": { zh: "快捷操作", ru: "Быстрые действия" },
  "dash.continue": { zh: "继续学习", ru: "Продолжить" },
  "dash.quiz": { zh: "做测验", ru: "Тест" },
  "dash.leaderboard": { zh: "查看排行榜", ru: "Рейтинг" },
  "dash.recent": { zh: "最近活动", ru: "Недавние действия" },
  "dash.badges": { zh: "我的勋章", ru: "Мои значки" },
  "dash.streak": { zh: "天连续学习", ru: "дней подряд" },

  // Community
  "community.title": { zh: "社区", ru: "Сообщество" },
  "community.share": { zh: "分享你的学习心得...", ru: "Поделиться..." },
  "community.post": { zh: "发布", ru: "Опубликовать" },
  "community.placeholder": { zh: "说点什么...", ru: "Напишите что-нибудь..." },

  // Ranking
  "ranking.title": { zh: "班级排名", ru: "Рейтинг класса" },
  "ranking.weeklyHighest": { zh: "本周最高时长", ru: "Часов" },
  "ranking.wordsHighest": { zh: "最高词汇量", ru: "Слов" },
  "ranking.streakHighest": { zh: "最长连续签到", ru: "Дней" },

  // Profile
  "profile.title": { zh: "个人资料", ru: "Личный профиль" },
  "profile.edit": { zh: "编辑资料", ru: "Редактировать" },
  "profile.upload": { zh: "文件上传", ru: "Загрузка файлов" },
  "profile.photo": { zh: "证件照", ru: "Фото" },
  "profile.hsk": { zh: "HSK证书", ru: "Сертификат HSK" },
  "profile.transcript": { zh: "成绩单", ru: "Транскрипт" },

  // Features
  "features.title": { zh: "平台特色", ru: "Возможности платформы" },
  "feature.game": { zh: "游戏化学习", ru: "Геймификация" },
  "feature.gameDesc": { zh: "每个词汇都有专属情境动画，让记忆更深刻", ru: "Каждое слово с уникальной анимацией" },
  "feature.ranking": { zh: "排行榜", ru: "Рейтинг" },
  "feature.rankingDesc": { zh: "与同学实时竞争，查看班级排名", ru: "Соревнуйтесь с однокурсниками" },
  "feature.ai": { zh: "AI助教", ru: "AI-помощник" },
  "feature.aiDesc": { zh: "AI纠正发音、解释语法、智能出题", ru: "Коррекция произношения" },
  "feature.immersion": { zh: "沉浸式体验", ru: "Иммерсивность" },
  "feature.immersionDesc": { zh: "3D足球球体 + 动态海洋波浪背景", ru: "3D-сфера + динамические волны" },
  "feature.hsk": { zh: "HSK备考", ru: "HSK подготовка" },
  "feature.hskDesc": { zh: "从HSK1到HSK6，系统化学习路径", ru: "От HSK1 до HSK6" },
  "feature.community": { zh: "社区互动", ru: "Сообщество" },
  "feature.communityDesc": { zh: "与同学交流学习心得，分享进步", ru: "Общайтесь, делитесь успехами" },

  // Developer
  "dev.title": { zh: "开发者", ru: "Разработчик" },
  "dev.quote": { zh: "感觉慢慢来，节奏逐渐快", ru: "Чувствуй медленно, темп постепенно ускоряется" },
  "dev.quoteAttr": { zh: "慢慢来，比较快", ru: "— Медленно, но верно" },
  "dev.copyright": { zh: "© 2026 BLUE OCEAN · 面向俄罗斯留学生的中文学习平台", ru: "© 2026 BLUE OCEAN · Платформа для русских студентов" },
}

export function t(key: string, lang: Lang): string {
  return i18n[key]?.[lang] ?? key
}


