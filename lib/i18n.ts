export type Lang = 'en' | 'zh' | 'es' | 'fr';

export const LANG_META: Record<Lang, { label: string; flag: string; name: string }> = {
  en: { label: 'EN', flag: '🇺🇸', name: 'English' },
  zh: { label: '中文', flag: '🇨🇳', name: '中文' },
  es: { label: 'ES', flag: '🇪🇸', name: 'Español' },
  fr: { label: 'FR', flag: '🇫🇷', name: 'Français' },
};

export const LANGS: Lang[] = ['en', 'zh', 'es', 'fr'];

// ── Landing page ────────────────────────────────────────────────────────────
export const LANDING_T = {
  hero_title: {
    en: "Are you built to run a one-person company?",
    zh: "你是否天生适合做一人公司？",
    es: "¿Estás hecho para dirigir una empresa unipersonal?",
    fr: "Êtes-vous fait pour diriger une entreprise à une personne ?",
  },
  hero_sub: {
    en: "10 questions. Your talent profile. Your path to one-person company — or the job that gets you there.",
    zh: "10道题。发现你的天赋。走向一人公司，或找到帮你实现它的工作。",
    es: "10 preguntas. Tu perfil de talento. Tu camino hacia la empresa unipersonal — o el trabajo que te lleva ahí.",
    fr: "10 questions. Votre profil de talent. Votre chemin vers l'entreprise individuelle — ou le travail qui vous y mène.",
  },
  cta: {
    en: "Take the quiz →",
    zh: "开始测试 →",
    es: "Hacer el test →",
    fr: "Passer le quiz →",
  },
  social_proof: {
    en: "Takes 2 minutes · Used by 1,000+ builders",
    zh: "仅需2分钟 · 已有1000+创业者测试",
    es: "Solo 2 minutos · Usado por 1,000+ creadores",
    fr: "2 minutes seulement · Utilisé par 1 000+ créateurs",
  },
  which_one: {
    en: "Which one are you?",
    zh: "你是哪一种？",
    es: "¿Cuál eres tú?",
    fr: "Lequel êtes-vous ?",
  },
  personality_quiz: {
    en: "Personality Quiz",
    zh: "个性测试",
    es: "Test de Personalidad",
    fr: "Quiz de Personnalité",
  },
} satisfies Record<string, Record<Lang, string>>;

// ── Quiz page ────────────────────────────────────────────────────────────────
export type QuestionI18N = {
  text: Record<Lang, string>;
  answers: Record<Lang, string>[];
};

export const QUESTIONS_I18N: QuestionI18N[] = [
  {
    text: {
      en: "When you have a new idea, you...",
      zh: "当你有一个新想法时，你会...",
      es: "Cuando tienes una nueva idea, tú...",
      fr: "Quand vous avez une nouvelle idée, vous...",
    },
    answers: [
      { en: "Research everything first", zh: "先研究所有信息", es: "Investigas todo primero", fr: "Faites des recherches d'abord" },
      { en: "Tell everyone about it", zh: "马上告诉所有人", es: "Se lo cuentas a todos", fr: "En parlez à tout le monde" },
      { en: "Start building immediately", zh: "立刻开始动手做", es: "Empiezas a construir de inmediato", fr: "Commencez à construire immédiatement" },
      { en: "Write a detailed plan", zh: "写一份详细计划", es: "Escribes un plan detallado", fr: "Rédigez un plan détaillé" },
    ],
  },
  {
    text: {
      en: "Your biggest energy drain is...",
      zh: "最让你消耗精力的事情是...",
      es: "Lo que más te agota es...",
      fr: "Ce qui vous épuise le plus, c'est...",
    },
    answers: [
      { en: "Repetitive tasks", zh: "重复性工作", es: "Tareas repetitivas", fr: "Les tâches répétitives" },
      { en: "Working alone", zh: "独自工作", es: "Trabajar solo/a", fr: "Travailler seul(e)" },
      { en: "Too many rules", zh: "太多规则和限制", es: "Demasiadas reglas", fr: "Trop de règles" },
      { en: "Unclear goals", zh: "目标不清晰", es: "Metas poco claras", fr: "Des objectifs flous" },
    ],
  },
  {
    text: {
      en: "You make decisions by...",
      zh: "你通常如何做决定？",
      es: "Tomas decisiones...",
      fr: "Vous prenez vos décisions...",
    },
    answers: [
      { en: "Gut feeling", zh: "直觉", es: "Por instinto", fr: "Par intuition" },
      { en: "Data and research", zh: "数据和研究", es: "Datos e investigación", fr: "Par les données et la recherche" },
      { en: "Asking others", zh: "询问别人的意见", es: "Preguntando a otros", fr: "En demandant aux autres" },
      { en: "Weighing pros and cons slowly", zh: "慢慢权衡利弊", es: "Evaluando pros y contras", fr: "En pesant le pour et le contre" },
    ],
  },
  {
    text: {
      en: "In a group project you naturally become...",
      zh: "在团队项目中，你自然而然地成为...",
      es: "En un proyecto grupal te conviertes naturalmente en...",
      fr: "Dans un projet de groupe, vous devenez naturellement...",
    },
    answers: [
      { en: "The idea person", zh: "出主意的那个人", es: "El/la generador/a de ideas", fr: "Le/la générateur/trice d'idées" },
      { en: "The organizer", zh: "负责组织协调的人", es: "El/la organizador/a", fr: "L'organisateur/trice" },
      { en: "The one who actually does it", zh: "真正动手执行的人", es: "El/la que realmente lo hace", fr: "Celui/celle qui le fait vraiment" },
      { en: "The one who keeps everyone connected", zh: "维系团队关系的人", es: "El/la que conecta a todos", fr: "Celui/celle qui relie tout le monde" },
    ],
  },
  {
    text: {
      en: "Uncertainty makes you feel...",
      zh: "面对不确定性，你会感到...",
      es: "La incertidumbre te hace sentir...",
      fr: "L'incertitude vous fait sentir...",
    },
    answers: [
      { en: "Excited — more possibilities!", zh: "兴奋——更多可能性！", es: "Emocionado/a — ¡más posibilidades!", fr: "Excité(e) — plus de possibilités !" },
      { en: "Anxious but I push through", zh: "焦虑，但我会坚持", es: "Ansioso/a pero lo supero", fr: "Anxieux/se mais je persévère" },
      { en: "I need to reduce it fast", zh: "我需要尽快消除不确定性", es: "Necesito reducirla rápido", fr: "Je dois la réduire rapidement" },
      { en: "Paralyzed until I have more info", zh: "等有更多信息才能行动", es: "Paralizado/a hasta tener más info", fr: "Paralysé(e) jusqu'à avoir plus d'infos" },
    ],
  },
  {
    text: {
      en: "You're most proud of work that...",
      zh: "你最自豪的工作是...",
      es: "Te sientes más orgulloso/a del trabajo que...",
      fr: "Vous êtes le plus fier/fière du travail qui...",
    },
    answers: [
      { en: "Changed how people think", zh: "改变了人们的思维方式", es: "Cambió cómo piensan las personas", fr: "A changé la façon de penser des gens" },
      { en: "Helped someone directly", zh: "直接帮助了某人", es: "Ayudó directamente a alguien", fr: "A aidé quelqu'un directement" },
      { en: "Shipped on time", zh: "按时完成交付", es: "Se entregó a tiempo", fr: "A été livré dans les délais" },
      { en: "Was beautifully crafted", zh: "工艺精美，令人赏心悦目", es: "Fue hermosamente elaborado", fr: "A été magnifiquement réalisé" },
    ],
  },
  {
    text: {
      en: "Your relationship with money/risk...",
      zh: "你对金钱和风险的态度是...",
      es: "Tu relación con el dinero/riesgo...",
      fr: "Votre rapport à l'argent/au risque...",
    },
    answers: [
      { en: "Money follows great work", zh: "好工作自然会带来金钱", es: "El dinero sigue al buen trabajo", fr: "L'argent suit le bon travail" },
      { en: "I need stability before I take risks", zh: "先有稳定再冒险", es: "Necesito estabilidad antes de arriesgar", fr: "J'ai besoin de stabilité avant de prendre des risques" },
      { en: "Calculated risks only", zh: "只接受经过计算的风险", es: "Solo riesgos calculados", fr: "Uniquement des risques calculés" },
      { en: "I'll bet big if I believe in it", zh: "如果我相信，我愿意大胆押注", es: "Apuesto fuerte si creo en ello", fr: "Je mise gros si j'y crois" },
    ],
  },
  {
    text: {
      en: "You work best when...",
      zh: "你在什么状态下工作最高效？",
      es: "Trabajas mejor cuando...",
      fr: "Vous travaillez mieux quand...",
    },
    answers: [
      { en: "You set your own rules", zh: "由你自己制定规则", es: "Estableces tus propias reglas", fr: "Vous définissez vos propres règles" },
      { en: "There's a clear structure", zh: "有明确的结构和流程", es: "Hay una estructura clara", fr: "Il y a une structure claire" },
      { en: "You're collaborating", zh: "与他人合作", es: "Estás colaborando", fr: "Vous collaborez" },
      { en: "You have deep focus time", zh: "有大块的专注时间", es: "Tienes tiempo de concentración profunda", fr: "Vous avez du temps de concentration profonde" },
    ],
  },
  {
    text: {
      en: "Your superpower is...",
      zh: "你的超能力是...",
      es: "Tu superpoder es...",
      fr: "Votre super-pouvoir est...",
    },
    answers: [
      { en: "Seeing patterns others miss", zh: "发现别人忽略的规律", es: "Ver patrones que otros no ven", fr: "Voir des patterns que les autres manquent" },
      { en: "Connecting people", zh: "连接人与人", es: "Conectar a las personas", fr: "Connecter les gens" },
      { en: "Making things happen", zh: "让事情真正发生", es: "Hacer que las cosas sucedan", fr: "Faire avancer les choses" },
      { en: "Making things beautiful", zh: "让事物变得美好", es: "Hacer las cosas hermosas", fr: "Rendre les choses belles" },
    ],
  },
  {
    text: {
      en: "In 5 years you want to feel...",
      zh: "5年后，你希望自己感到...",
      es: "En 5 años quieres sentirte...",
      fr: "Dans 5 ans, vous voulez vous sentir...",
    },
    answers: [
      { en: "Free", zh: "自由", es: "Libre", fr: "Libre" },
      { en: "Impactful", zh: "有影响力", es: "Con impacto", fr: "Impactant(e)" },
      { en: "Respected", zh: "受人尊重", es: "Respetado/a", fr: "Respecté(e)" },
      { en: "Creative", zh: "充满创意", es: "Creativo/a", fr: "Créatif/ve" },
    ],
  },
];

export const QUIZ_T = {
  question_label: {
    en: "Question",
    zh: "第",
    es: "Pregunta",
    fr: "Question",
  },
  question_suffix: {
    en: "",
    zh: "题",
    es: "",
    fr: "",
  },
} satisfies Record<string, Record<Lang, string>>;

// ── Result page ──────────────────────────────────────────────────────────────
export const RESULT_T = {
  talent_profile_label: {
    en: "Your talent profile",
    zh: "你的天赋类型",
    es: "Tu perfil de talento",
    fr: "Votre profil de talent",
  },
  startup_readiness: {
    en: "One-Person Company Potential",
    zh: "一人公司潜力",
    es: "Potencial de Empresa Unipersonal",
    fr: "Potentiel d'Entreprise Individuelle",
  },
  if_you_go_solo: {
    en: "🏢 Your One-Person Company Path",
    zh: "🏢 你的一人公司之路",
    es: "🏢 Tu camino como empresa unipersonal",
    fr: "🏢 Votre chemin vers l'entreprise individuelle",
  },
  if_build_experience: {
    en: "💼 Make cash flow on the side, then launch",
    zh: "💼 先搞定现金流，再出发",
    es: "💼 Genera ingresos paralelos, luego lanza",
    fr: "💼 Générez des revenus en parallèle, puis lancez-vous",
  },
  roles_label: {
    en: "Roles:",
    zh: "适合角色：",
    es: "Roles:",
    fr: "Rôles :",
  },
  look_for: {
    en: "Look for:",
    zh: "寻找：",
    es: "Busca:",
    fr: "Cherchez :",
  },
  jobpilot_note: {
    en: "We're building Jobpilot for exactly this",
    zh: "我们正在为此打造 Jobpilot",
    es: "Estamos construyendo Jobpilot exactamente para esto",
    fr: "Nous construisons Jobpilot exactement pour ça",
  },
  find_ideal_job: {
    en: "Find your ideal job →",
    zh: "找到你的理想工作 →",
    es: "Encuentra tu trabajo ideal →",
    fr: "Trouvez votre emploi idéal →",
  },
  retake: {
    en: "Retake the quiz",
    zh: "重新测试",
    es: "Volver a hacer el test",
    fr: "Refaire le quiz",
  },
  share_title: {
    en: "Share your result",
    zh: "分享你的结果",
    es: "Comparte tu resultado",
    fr: "Partagez votre résultat",
  },
  share_subtitle: {
    en: "Screenshot this card to share on 小红书",
    zh: "截图分享到小红书",
    es: "Captura esta tarjeta para compartir",
    fr: "Capturez cette carte pour la partager",
  },
  copy_text: {
    en: "Copy text",
    zh: "复制文字",
    es: "Copiar texto",
    fr: "Copier le texte",
  },
  share_xhs: {
    en: "Share your result 小红书",
    zh: "分享你的结果 小红书",
    es: "Comparte tu resultado 小红书",
    fr: "Partagez votre résultat 小红书",
  },
  are_you_built: {
    en: "Are you a one-person company?",
    zh: "你是一人公司类型吗？",
    es: "¿Eres una empresa unipersonal?",
    fr: "Êtes-vous une entreprise individuelle ?",
  },
} satisfies Record<string, Record<Lang, string>>;

export const TUNNEL_LABELS: Record<Lang, string[]> = {
  en: ["Curious", "Warming up", "Ready", "Almost there", "One-Person CEO"],
  zh: ["有想法", "热身中", "准备好了", "快了", "一人公司CEO"],
  es: ["Curioso", "Calentando", "Listo", "Casi ahí", "CEO Unipersonal"],
  fr: ["Curieux", "En chauffe", "Prêt", "Presque là", "CEO Solo"],
};

// ── Profile name translations ────────────────────────────────────────────────
export const PROFILE_NAMES: Record<string, Record<Lang, string>> = {
  visionary: { en: "The Visionary", zh: "远见者", es: "El Visionario", fr: "Le Visionnaire" },
  executor:  { en: "The Executor",  zh: "执行者",  es: "El Ejecutor",   fr: "L'Exécutant"   },
  connector: { en: "The Connector", zh: "连接者",  es: "El Conector",   fr: "Le Connecteur"  },
  expert:    { en: "The Expert",    zh: "专家型",  es: "El Experto",    fr: "L'Expert"       },
  creative:  { en: "The Creative",  zh: "创造者",  es: "El Creativo",   fr: "Le Créatif"     },
};

// ── Full profile content translations ────────────────────────────────────────
export interface ProfileContentI18N {
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
  traits: Record<Lang, string[]>;
  startupPath: {
    type: Record<Lang, string>;
    roles: Record<Lang, string>;
    advice: Record<Lang, string>;
  };
  workFirstPath: {
    advice: Record<Lang, string>;
    targetRoles: Record<Lang, string[]>;
    lookFor: Record<Lang, string>;
  };
}

export const PROFILES_I18N: Record<string, ProfileContentI18N> = {
  visionary: {
    tagline: {
      en: "You see what others haven't imagined yet",
      zh: "你看见别人还未想象到的未来",
      es: "Ves lo que otros aún no han imaginado",
      fr: "Vous voyez ce que les autres n'ont pas encore imaginé",
    },
    description: {
      en: "You think in possibilities, patterns, and futures. You're energized by blank canvases and get bored when the work becomes routine. Your superpower is spotting opportunities before anyone else does.",
      zh: "你用可能性、规律和未来来思考。空白画布让你充满能量，但当工作变得例行时你会感到无聊。你的超能力是在任何人之前发现机会。",
      es: "Piensas en posibilidades, patrones y futuros. Te energizas con los lienzos en blanco y te aburres cuando el trabajo se vuelve rutinario. Tu superpoder es detectar oportunidades antes que nadie.",
      fr: "Vous pensez en possibilités, en patterns et en futurs. Les toiles vierges vous énergisent et vous vous ennuyez quand le travail devient routinier. Votre super-pouvoir est de repérer les opportunités avant tout le monde.",
    },
    traits: {
      en: ["Thinks in possibilities", "Spots patterns early", "Energized by blank canvases"],
      zh: ["用可能性思考", "提前发现规律", "被空白画布激活"],
      es: ["Piensa en posibilidades", "Detecta patrones temprano", "Se energiza con lo nuevo"],
      fr: ["Pense en possibilités", "Repère les patterns tôt", "Énergisé par les défis"],
    },
    startupPath: {
      type: {
        en: "Product-led startup or thought leadership brand",
        zh: "产品驱动型创业或思想领导力品牌",
        es: "Startup orientada al producto o marca de liderazgo de pensamiento",
        fr: "Startup axée produit ou marque de leadership intellectuel",
      },
      roles: {
        en: "Founder, CPO, or Product Strategist",
        zh: "创始人、首席产品官或产品策略师",
        es: "Fundador/a, CPO o Estratega de Producto",
        fr: "Fondateur/trice, CPO ou Stratège Produit",
      },
      advice: {
        en: "Build in public. Your ideas are your moat. Start with a newsletter, community, or small SaaS that solves YOUR problem first. Jobpilot was built exactly this way.",
        zh: "公开构建。你的想法就是你的护城河。从解决你自己问题的newsletter、社区或小型SaaS开始。Jobpilot就是这样诞生的。",
        es: "Construye en público. Tus ideas son tu ventaja. Empieza con un newsletter, comunidad o un pequeño SaaS que resuelva TU propio problema primero. Jobpilot fue construido exactamente así.",
        fr: "Construisez en public. Vos idées sont votre avantage. Commencez par une newsletter, une communauté, ou un petit SaaS qui résout VOTRE problème en premier. Jobpilot a été construit exactement de cette façon.",
      },
    },
    workFirstPath: {
      advice: {
        en: "Work first to validate your instincts with real market feedback",
        zh: "先工作，用真实的市场反馈来验证你的直觉",
        es: "Trabaja primero para validar tus instintos con retroalimentación real del mercado",
        fr: "Travaillez d'abord pour valider vos intuitions avec de vrais retours du marché",
      },
      targetRoles: {
        en: ["Product Manager at AI startup", "Strategy at growth-stage company", "Innovation lead at big tech"],
        zh: ["AI创业公司产品经理", "成长期公司战略岗位", "大厂创新负责人"],
        es: ["Product Manager en startup de IA", "Estrategia en empresa en crecimiento", "Líder de innovación en big tech"],
        fr: ["Product Manager dans une startup IA", "Stratégie dans une entreprise en croissance", "Responsable innovation en grande tech"],
      },
      lookFor: {
        en: "Companies where you own a product area from day 1. Avoid pure execution roles — you'll stagnate.",
        zh: "从第一天起就能负责一个产品领域的公司。避免纯执行类角色——你会停滞不前。",
        es: "Empresas donde seas dueño/a de un área de producto desde el día 1. Evita roles puramente de ejecución — te estancarás.",
        fr: "Des entreprises où vous gérez un domaine produit dès le premier jour. Évitez les rôles purement exécutifs — vous stagnerez.",
      },
    },
  },

  executor: {
    tagline: {
      en: "You ship when others are still planning",
      zh: "当别人还在计划时，你已经交付了",
      es: "Tú entregas cuando otros aún están planificando",
      fr: "Vous livrez quand les autres planifient encore",
    },
    description: {
      en: "You're a builder. You turn chaos into shipped products, ideas into working systems. You're rare because you combine bias for action with follow-through. Most people talk. You do.",
      zh: "你是一个建造者。你把混乱变成已交付的产品，把想法变成可运行的系统。你的稀缺之处在于你将行动偏好与执行到底结合在一起。大多数人只说，你去做。",
      es: "Eres un constructor/a. Conviertes el caos en productos entregados, las ideas en sistemas funcionales. Eres raro/a porque combinas el sesgo hacia la acción con el seguimiento. La mayoría habla. Tú actúas.",
      fr: "Vous êtes un bâtisseur. Vous transformez le chaos en produits livrés, les idées en systèmes fonctionnels. Vous êtes rare car vous combinez le biais pour l'action avec le suivi. La plupart des gens parlent. Vous, vous faites.",
    },
    traits: {
      en: ["Bias for action", "Ships consistently", "Turns chaos into systems"],
      zh: ["行动偏向", "持续交付", "把混乱变成系统"],
      es: ["Orientado/a a la acción", "Entrega consistentemente", "Convierte el caos en sistemas"],
      fr: ["Biais pour l'action", "Livre régulièrement", "Transforme le chaos en systèmes"],
    },
    startupPath: {
      type: {
        en: "Technical or ops-first startup",
        zh: "技术驱动或运营优先型创业",
        es: "Startup técnica u orientada a operaciones",
        fr: "Startup technique ou orientée opérations",
      },
      roles: {
        en: "Solo founder, CTO-founder, or Indie Hacker",
        zh: "独立创始人、CTO创始人或独立开发者",
        es: "Fundador/a en solitario, CTO-fundador/a o Indie Hacker",
        fr: "Fondateur/trice solo, CTO-fondateur/trice ou Indie Hacker",
      },
      advice: {
        en: "You're most dangerous with a clear problem to solve. Build fast, charge early, iterate. Your risk is over-building — talk to users before you perfect the product.",
        zh: "当你有一个清晰的问题要解决时，你最厉害。快速构建，尽早收费，不断迭代。你的风险是过度构建——在完善产品之前先与用户交流。",
        es: "Eres más poderoso/a con un problema claro a resolver. Construye rápido, cobra pronto, itera. Tu riesgo es sobre-construir — habla con usuarios antes de perfeccionar el producto.",
        fr: "Vous êtes le plus redoutable avec un problème clair à résoudre. Construisez vite, facturez tôt, itérez. Votre risque est de trop construire — parlez aux utilisateurs avant de perfectionner le produit.",
      },
    },
    workFirstPath: {
      advice: {
        en: "Get paid to build other people's things while you find your own problem to solve",
        zh: "在寻找自己问题的同时，通过为别人构建东西来获得报酬",
        es: "Cobra por construir las cosas de otros mientras encuentras tu propio problema a resolver",
        fr: "Faites-vous payer pour construire les choses des autres pendant que vous trouvez votre propre problème à résoudre",
      },
      targetRoles: {
        en: ["Engineer at fast-growing startup", "Product designer at Series A/B", "Growth or ops at a scrappy team"],
        zh: ["快速成长创业公司工程师", "A/B轮创业公司产品设计师", "小而精悍团队的增长或运营"],
        es: ["Ingeniero/a en startup de rápido crecimiento", "Diseñador/a de producto en Serie A/B", "Crecimiento u ops en equipo ágil"],
        fr: ["Ingénieur/e dans une startup à croissance rapide", "Designer produit en Série A/B", "Croissance ou ops dans une équipe agile"],
      },
      lookFor: {
        en: "Small teams where you have real ownership. The skills you build are directly transferable to your own startup later.",
        zh: "你有真正所有权的小团队。你积累的技能可以直接转移到你自己的创业项目中。",
        es: "Equipos pequeños donde tengas propiedad real. Las habilidades que desarrolles son directamente transferibles a tu propia startup.",
        fr: "Des petites équipes où vous avez une vraie propriété. Les compétences que vous développez sont directement transférables à votre propre startup.",
      },
    },
  },

  connector: {
    tagline: {
      en: "Your network is your net worth — and then some",
      zh: "你的人脉就是你的财富——甚至更多",
      es: "Tu red es tu patrimonio — y mucho más",
      fr: "Votre réseau est votre valeur — et bien plus encore",
    },
    description: {
      en: "You build trust fast. People open up to you, follow your lead, and want to be in your orbit. You understand what motivates humans deeply. In the AI era, this is the rarest and most valuable skill.",
      zh: "你快速建立信任。人们对你敞开心扉，跟随你的领导，想要进入你的轨道。你深刻理解人类的动机。在AI时代，这是最稀缺也最有价值的技能。",
      es: "Construyes confianza rápidamente. La gente se abre contigo, sigue tu liderazgo y quiere estar en tu órbita. Entiendes profundamente lo que motiva a las personas. En la era de la IA, esta es la habilidad más escasa y valiosa.",
      fr: "Vous construisez la confiance rapidement. Les gens s'ouvrent à vous, suivent votre lead et veulent être dans votre orbite. Vous comprenez profondément ce qui motive les humains. À l'ère de l'IA, c'est la compétence la plus rare et la plus précieuse.",
    },
    traits: {
      en: ["Builds trust instantly", "Natural community builder", "Understands human motivation"],
      zh: ["瞬间建立信任", "天生的社区建设者", "理解人类动机"],
      es: ["Genera confianza al instante", "Constructor/a natural de comunidades", "Entiende la motivación humana"],
      fr: ["Crée la confiance instantanément", "Bâtisseur/trice naturel(le) de communauté", "Comprend la motivation humaine"],
    },
    startupPath: {
      type: {
        en: "Community, marketplace, or people-first business",
        zh: "社区、市场或以人为本的业务",
        es: "Comunidad, marketplace o negocio centrado en las personas",
        fr: "Communauté, marketplace ou entreprise axée sur les personnes",
      },
      roles: {
        en: "Founder of a community brand, content creator + product, or service business",
        zh: "社区品牌创始人、内容创作者+产品，或服务型业务",
        es: "Fundador/a de marca de comunidad, creador/a de contenido + producto, o negocio de servicios",
        fr: "Fondateur/trice de marque communautaire, créateur/trice de contenu + produit, ou activité de services",
      },
      advice: {
        en: "Build your audience first. Community is your product. 10,000 people who trust you is worth more than $1M in funding. Your monetization: courses, memberships, or a tool your audience needs.",
        zh: "先建立你的受众。社区就是你的产品。10,000个信任你的人比100万美元的融资更有价值。你的变现方式：课程、会员制，或你的受众需要的工具。",
        es: "Construye tu audiencia primero. La comunidad es tu producto. 10,000 personas que confíen en ti vale más que $1M de financiación. Tu monetización: cursos, membresías, o una herramienta que tu audiencia necesite.",
        fr: "Construisez votre audience d'abord. La communauté est votre produit. 10 000 personnes qui vous font confiance valent plus qu'1M$ de financement. Votre monétisation : cours, abonnements, ou un outil que votre audience a besoin.",
      },
    },
    workFirstPath: {
      advice: {
        en: "Work in roles that put you at the center of relationships",
        zh: "选择能让你处于关系中心的工作岗位",
        es: "Trabaja en roles que te pongan en el centro de las relaciones",
        fr: "Travaillez dans des rôles qui vous placent au centre des relations",
      },
      targetRoles: {
        en: ["Partnerships or BD at a startup", "Community manager at a fast-growing product", "Account executive or customer success"],
        zh: ["创业公司合作或商务拓展", "快速成长产品的社区经理", "客户主管或客户成功"],
        es: ["Partnerships o BD en una startup", "Community manager en producto de rápido crecimiento", "Account executive o customer success"],
        fr: ["Partenariats ou BD dans une startup", "Community manager pour un produit en forte croissance", "Account executive ou customer success"],
      },
      lookFor: {
        en: "Roles with high human contact and low bureaucracy. You'll wilt in isolated, heads-down environments.",
        zh: "高度人际接触、低官僚主义的岗位。你会在孤立、埋头苦干的环境中凋萎。",
        es: "Roles con alto contacto humano y baja burocracia. Te marchitarás en entornos aislados y cabeza abajo.",
        fr: "Des rôles avec beaucoup de contact humain et peu de bureaucratie. Vous vous fanerez dans des environnements isolés.",
      },
    },
  },

  expert: {
    tagline: {
      en: "You go deeper than anyone else — and people pay for that",
      zh: "你比任何人都钻研得更深——人们为此付费",
      es: "Vas más profundo que nadie — y la gente paga por eso",
      fr: "Vous allez plus loin que quiconque — et les gens paient pour ça",
    },
    description: {
      en: "You master things. You don't just learn — you become the person people come to. Your depth is your differentiation. In a world of generalists, specialists win.",
      zh: "你精通事物。你不只是学习——你成为人们求助的那个人。你的深度是你的差异化。在一个通才主导的世界里，专家才是赢家。",
      es: "Dominas las cosas. No solo aprendes — te conviertes en la persona a la que todos acuden. Tu profundidad es tu diferenciación. En un mundo de generalistas, los especialistas ganan.",
      fr: "Vous maîtrisez les choses. Vous n'apprenez pas seulement — vous devenez la personne vers qui on vient. Votre profondeur est votre différenciation. Dans un monde de généralistes, les spécialistes gagnent.",
    },
    traits: {
      en: ["Goes deep, not wide", "Becomes the go-to person", "Depth is the differentiator"],
      zh: ["深而不广", "成为首选专家", "深度是差异化"],
      es: ["Va en profundidad, no en amplitud", "Se convierte en el referente", "La profundidad es el diferenciador"],
      fr: ["Va en profondeur, pas en largeur", "Devient la référence", "La profondeur est le différenciateur"],
    },
    startupPath: {
      type: {
        en: "Consulting, SaaS, or productized expertise",
        zh: "咨询、SaaS或产品化专业知识",
        es: "Consultoría, SaaS o expertise productizado",
        fr: "Conseil, SaaS ou expertise productisée",
      },
      roles: {
        en: "Solo consultant, boutique agency founder, or niche SaaS creator",
        zh: "独立顾问、精品机构创始人或利基SaaS创建者",
        es: "Consultor/a independiente, fundador/a de agencia boutique, o creador/a de SaaS de nicho",
        fr: "Consultant(e) solo, fondateur/trice d'agence boutique, ou créateur/trice de SaaS de niche",
      },
      advice: {
        en: "Productize your expertise. Turn what you know into a course, tool, or retained service. Charge more than you think you're worth. Your niche is your moat.",
        zh: "将你的专业知识产品化。把你所知道的变成课程、工具或持续服务。比你认为自己值得的收费更多。你的利基就是你的护城河。",
        es: "Productiza tu expertise. Convierte lo que sabes en un curso, herramienta o servicio recurrente. Cobra más de lo que crees que vales. Tu nicho es tu ventaja competitiva.",
        fr: "Productisez votre expertise. Transformez ce que vous savez en cours, outil ou service récurrent. Facturez plus que ce que vous pensez valoir. Votre niche est votre avantage concurrentiel.",
      },
    },
    workFirstPath: {
      advice: {
        en: "Double down on becoming the best at one specific thing",
        zh: "加倍努力，成为某一特定领域的最佳",
        es: "Apuesta el doble por convertirte en el/la mejor en una cosa específica",
        fr: "Doublez la mise pour devenir le/la meilleur(e) dans une chose précise",
      },
      targetRoles: {
        en: ["Senior specialist in your domain (design systems, AI UX, security, etc.)", "Principal or Staff-level IC role", "Domain expert at a mission-aligned company"],
        zh: ["你领域的高级专家（设计系统、AI UX、安全等）", "首席或员工级独立贡献者", "使命一致公司的领域专家"],
        es: ["Especialista senior en tu dominio (sistemas de diseño, AI UX, seguridad, etc.)", "Rol IC de nivel Principal o Staff", "Experto/a de dominio en empresa con misión alineada"],
        fr: ["Spécialiste senior dans votre domaine (design systems, AI UX, sécurité, etc.)", "Rôle IC Principal ou Staff", "Expert(e) de domaine dans une entreprise alignée sur une mission"],
      },
      lookFor: {
        en: "Places that reward depth over breadth. Avoid companies that promote generalists over specialists.",
        zh: "奖励深度而非广度的地方。避免那些提拔通才而非专家的公司。",
        es: "Lugares que recompensen la profundidad sobre la amplitud. Evita empresas que promuevan generalistas sobre especialistas.",
        fr: "Des endroits qui récompensent la profondeur plutôt que la largeur. Évitez les entreprises qui promeuvent les généralistes plutôt que les spécialistes.",
      },
    },
  },

  creative: {
    tagline: {
      en: "You make the intangible feel real",
      zh: "你让无形的事物变得真实可感",
      es: "Haces que lo intangible se sienta real",
      fr: "Vous rendez l'intangible réel",
    },
    description: {
      en: "You communicate through craft. Whether it's design, writing, video, or storytelling — you make people feel things. In the attention economy, this is everything. You don't just make things look good — you make things mean something.",
      zh: "你通过工艺来沟通。无论是设计、写作、视频还是讲故事——你让人们感受到某些东西。在注意力经济中，这就是一切。你不只是让事物看起来好——你让事物有意义。",
      es: "Te comunicas a través del arte. Ya sea diseño, escritura, video o narrativa — haces que la gente sienta cosas. En la economía de la atención, esto lo es todo. No solo haces que las cosas se vean bien — haces que las cosas signifiquen algo.",
      fr: "Vous communiquez à travers l'artisanat. Que ce soit le design, l'écriture, la vidéo ou la narration — vous faites ressentir des choses aux gens. Dans l'économie de l'attention, c'est tout. Vous ne faites pas juste que les choses semblent belles — vous leur donnez du sens.",
    },
    traits: {
      en: ["Communicates through craft", "Makes people feel things", "Design-driven thinker"],
      zh: ["通过工艺沟通", "让人们感受到情感", "设计驱动的思考者"],
      es: ["Se comunica a través del oficio", "Hace sentir a la gente", "Pensador/a orientado/a al diseño"],
      fr: ["Communique à travers l'artisanat", "Fait ressentir des émotions", "Penseur/se orienté(e) design"],
    },
    startupPath: {
      type: {
        en: "Brand, media, or creator-led business",
        zh: "品牌、媒体或创作者主导的业务",
        es: "Negocio de marca, medios o liderado por creadores",
        fr: "Marque, média ou entreprise menée par des créateurs",
      },
      roles: {
        en: "Creative founder, content brand, or design-led product",
        zh: "创意创始人、内容品牌或设计驱动产品",
        es: "Fundador/a creativo/a, marca de contenido o producto liderado por diseño",
        fr: "Fondateur/trice créatif/ve, marque de contenu ou produit axé design",
      },
      advice: {
        en: "Your work IS the product. Build a body of work in public. The business model follows the audience. Think: brand + product (like what Katie is building with OneCo + Jobpilot).",
        zh: "你的作品就是产品。公开建立作品集。商业模式跟随受众。想想：品牌+产品（就像Katie用OneCo+Jobpilot正在构建的）。",
        es: "Tu trabajo ES el producto. Construye un portafolio en público. El modelo de negocio sigue a la audiencia. Piensa: marca + producto (como lo que Katie está construyendo con OneCo + Jobpilot).",
        fr: "Votre travail EST le produit. Construisez un portfolio en public. Le modèle économique suit l'audience. Pensez : marque + produit (comme ce que Katie construit avec OneCo + Jobpilot).",
      },
    },
    workFirstPath: {
      advice: {
        en: "Work somewhere that lets your creative voice shine",
        zh: "找一个能让你的创意声音闪光的工作",
        es: "Trabaja en algún lugar que deje brillar tu voz creativa",
        fr: "Travaillez quelque part qui laisse briller votre voix créative",
      },
      targetRoles: {
        en: ["Brand designer or creative lead at a startup", "Content strategist", "UX designer at a product you believe in"],
        zh: ["创业公司品牌设计师或创意负责人", "内容策略师", "你相信的产品的UX设计师"],
        es: ["Diseñador/a de marca o líder creativo/a en startup", "Estratega de contenido", "Diseñador/a UX en un producto en el que crees"],
        fr: ["Designer de marque ou responsable créatif/ve dans une startup", "Stratège de contenu", "Designer UX dans un produit auquel vous croyez"],
      },
      lookFor: {
        en: "Places that value craft, not just output. Avoid factories. Find teams that care about the WHY behind the work.",
        zh: "重视工艺而非仅仅产出的地方。避免工厂式环境。找到关心工作背后「为什么」的团队。",
        es: "Lugares que valoren el oficio, no solo la producción. Evita las fábricas. Encuentra equipos que se preocupen por el PORQUÉ detrás del trabajo.",
        fr: "Des endroits qui valorisent l'artisanat, pas seulement le résultat. Évitez les usines. Trouvez des équipes qui se soucient du POURQUOI derrière le travail.",
      },
    },
  },
};

// Helper: read a key from a translation map
export function t<T extends Record<Lang, string>>(map: T, lang: Lang): string {
  return map[lang] ?? map['en'];
}
