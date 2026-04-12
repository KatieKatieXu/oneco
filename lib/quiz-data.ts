export type ProfileKey = "visionary" | "executor" | "connector" | "expert" | "creative";

export interface Answer {
  label: string;
  text: string;
  profile: ProfileKey;
  isStartupPoint?: boolean;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "When you have a new idea, you...",
    answers: [
      { label: "A", text: "Research everything first", profile: "expert" },
      { label: "B", text: "Tell everyone about it", profile: "connector" },
      { label: "C", text: "Start building immediately", profile: "executor", isStartupPoint: true },
      { label: "D", text: "Write a detailed plan", profile: "visionary" },
    ],
  },
  {
    id: 2,
    text: "Your biggest energy drain is...",
    answers: [
      { label: "A", text: "Repetitive tasks", profile: "visionary" },
      { label: "B", text: "Working alone", profile: "connector" },
      { label: "C", text: "Too many rules", profile: "executor" },
      { label: "D", text: "Unclear goals", profile: "expert" },
    ],
  },
  {
    id: 3,
    text: "You make decisions by...",
    answers: [
      { label: "A", text: "Gut feeling", profile: "creative" },
      { label: "B", text: "Data and research", profile: "expert" },
      { label: "C", text: "Asking others", profile: "connector" },
      { label: "D", text: "Weighing pros and cons slowly", profile: "visionary" },
    ],
  },
  {
    id: 4,
    text: "In a group project you naturally become...",
    answers: [
      { label: "A", text: "The idea person", profile: "visionary" },
      { label: "B", text: "The organizer", profile: "expert" },
      { label: "C", text: "The one who actually does it", profile: "executor" },
      { label: "D", text: "The one who keeps everyone connected", profile: "connector" },
    ],
  },
  {
    id: 5,
    text: "Uncertainty makes you feel...",
    answers: [
      { label: "A", text: "Excited — more possibilities!", profile: "visionary", isStartupPoint: true },
      { label: "B", text: "Anxious but I push through", profile: "executor" },
      { label: "C", text: "I need to reduce it fast", profile: "expert" },
      { label: "D", text: "Paralyzed until I have more info", profile: "creative" },
    ],
  },
  {
    id: 6,
    text: "You're most proud of work that...",
    answers: [
      { label: "A", text: "Changed how people think", profile: "visionary" },
      { label: "B", text: "Helped someone directly", profile: "connector" },
      { label: "C", text: "Shipped on time", profile: "executor" },
      { label: "D", text: "Was beautifully crafted", profile: "creative" },
    ],
  },
  {
    id: 7,
    text: "Your relationship with money/risk...",
    answers: [
      { label: "A", text: "Money follows great work", profile: "creative", isStartupPoint: true },
      { label: "B", text: "I need stability before I take risks", profile: "expert" },
      { label: "C", text: "Calculated risks only", profile: "visionary" },
      { label: "D", text: "I'll bet big if I believe in it", profile: "executor" },
    ],
  },
  {
    id: 8,
    text: "You work best when...",
    answers: [
      { label: "A", text: "You set your own rules", profile: "executor", isStartupPoint: true },
      { label: "B", text: "There's a clear structure", profile: "expert" },
      { label: "C", text: "You're collaborating", profile: "connector" },
      { label: "D", text: "You have deep focus time", profile: "creative" },
    ],
  },
  {
    id: 9,
    text: "Your superpower is...",
    answers: [
      { label: "A", text: "Seeing patterns others miss", profile: "visionary" },
      { label: "B", text: "Connecting people", profile: "connector" },
      { label: "C", text: "Making things happen", profile: "executor" },
      { label: "D", text: "Making things beautiful", profile: "creative" },
    ],
  },
  {
    id: 10,
    text: "In 5 years you want to feel...",
    answers: [
      { label: "A", text: "Free", profile: "executor" },
      { label: "B", text: "Impactful", profile: "connector" },
      { label: "C", text: "Respected", profile: "expert" },
      { label: "D", text: "Creative", profile: "creative" },
    ],
  },
];

export interface Profile {
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  traits: string[];
  startupPath: {
    type: string;
    roles: string;
    advice: string;
  };
  workFirstPath: {
    advice: string;
    targetRoles: string[];
    lookFor: string;
  };
}

export const PROFILES: Record<ProfileKey, Profile> = {
  visionary: {
    name: "The Visionary",
    emoji: "🔭",
    tagline: "You see what others haven't imagined yet",
    description:
      "You think in possibilities, patterns, and futures. You're energized by blank canvases and get bored when the work becomes routine. Your superpower is spotting opportunities before anyone else does.",
    traits: ["Thinks in possibilities", "Spots patterns early", "Energized by blank canvases"],
    startupPath: {
      type: "Product-led startup or thought leadership brand",
      roles: "Founder, CPO, or Product Strategist",
      advice:
        "Build in public. Your ideas are your moat. Start with a newsletter, community, or small SaaS that solves YOUR problem first. Jobpilot was built exactly this way.",
    },
    workFirstPath: {
      advice: "Work first to validate your instincts with real market feedback",
      targetRoles: [
        "Product Manager at AI startup",
        "Strategy at growth-stage company",
        "Innovation lead at big tech",
      ],
      lookFor:
        "Companies where you own a product area from day 1. Avoid pure execution roles — you'll stagnate.",
    },
  },
  executor: {
    name: "The Executor",
    emoji: "⚡",
    tagline: "You ship when others are still planning",
    description:
      "You're a builder. You turn chaos into shipped products, ideas into working systems. You're rare because you combine bias for action with follow-through. Most people talk. You do.",
    traits: ["Bias for action", "Ships consistently", "Turns chaos into systems"],
    startupPath: {
      type: "Technical or ops-first startup",
      roles: "Solo founder, CTO-founder, or Indie Hacker",
      advice:
        "You're most dangerous with a clear problem to solve. Build fast, charge early, iterate. Your risk is over-building — talk to users before you perfect the product.",
    },
    workFirstPath: {
      advice: "Get paid to build other people's things while you find your own problem to solve",
      targetRoles: [
        "Engineer at fast-growing startup",
        "Product designer at Series A/B",
        "Growth or ops at a scrappy team",
      ],
      lookFor:
        "Small teams where you have real ownership. The skills you build are directly transferable to your own startup later.",
    },
  },
  connector: {
    name: "The Connector",
    emoji: "🌐",
    tagline: "Your network is your net worth — and then some",
    description:
      "You build trust fast. People open up to you, follow your lead, and want to be in your orbit. You understand what motivates humans deeply. In the AI era, this is the rarest and most valuable skill.",
    traits: ["Builds trust instantly", "Natural community builder", "Understands human motivation"],
    startupPath: {
      type: "Community, marketplace, or people-first business",
      roles: "Founder of a community brand, content creator + product, or service business",
      advice:
        "Build your audience first. Community is your product. 10,000 people who trust you is worth more than $1M in funding. Your monetization: courses, memberships, or a tool your audience needs.",
    },
    workFirstPath: {
      advice: "Work in roles that put you at the center of relationships",
      targetRoles: [
        "Partnerships or BD at a startup",
        "Community manager at a fast-growing product",
        "Account executive or customer success",
      ],
      lookFor:
        "Roles with high human contact and low bureaucracy. You'll wilt in isolated, heads-down environments.",
    },
  },
  expert: {
    name: "The Expert",
    emoji: "🎯",
    tagline: "You go deeper than anyone else — and people pay for that",
    description:
      "You master things. You don't just learn — you become the person people come to. Your depth is your differentiation. In a world of generalists, specialists win.",
    traits: ["Goes deep, not wide", "Becomes the go-to person", "Depth is the differentiator"],
    startupPath: {
      type: "Consulting, SaaS, or productized expertise",
      roles: "Solo consultant, boutique agency founder, or niche SaaS creator",
      advice:
        "Productize your expertise. Turn what you know into a course, tool, or retained service. Charge more than you think you're worth. Your niche is your moat.",
    },
    workFirstPath: {
      advice: "Double down on becoming the best at one specific thing",
      targetRoles: [
        "Senior specialist in your domain (design systems, AI UX, security, etc.)",
        "Principal or Staff-level IC role",
        "Domain expert at a mission-aligned company",
      ],
      lookFor:
        "Places that reward depth over breadth. Avoid companies that promote generalists over specialists.",
    },
  },
  creative: {
    name: "The Creative",
    emoji: "🎨",
    tagline: "You make the intangible feel real",
    description:
      "You communicate through craft. Whether it's design, writing, video, or storytelling — you make people feel things. In the attention economy, this is everything. You don't just make things look good — you make things mean something.",
    traits: ["Communicates through craft", "Makes people feel things", "Design-driven thinker"],
    startupPath: {
      type: "Brand, media, or creator-led business",
      roles: "Creative founder, content brand, or design-led product",
      advice:
        "Your work IS the product. Build a body of work in public. The business model follows the audience. Think: brand + product (like what Katie is building with OneCo + Jobpilot).",
    },
    workFirstPath: {
      advice: "Work somewhere that lets your creative voice shine",
      targetRoles: [
        "Brand designer or creative lead at a startup",
        "Content strategist",
        "UX designer at a product you believe in",
      ],
      lookFor:
        "Places that value craft, not just output. Avoid factories. Find teams that care about the WHY behind the work.",
    },
  },
};

export function calculateResult(answers: (number | null)[]): {
  profile: ProfileKey;
  startupScore: number;
  scores: Record<ProfileKey, number>;
} {
  const scores: Record<ProfileKey, number> = {
    visionary: 0,
    executor: 0,
    connector: 0,
    expert: 0,
    creative: 0,
  };

  let startupScore = 0;
  const startupQuestions = [0, 4, 6, 7]; // Q1, Q5, Q7, Q8 (0-indexed)

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const question = QUESTIONS[questionIndex];
    const answer = question.answers[answerIndex];
    scores[answer.profile]++;
    if (startupQuestions.includes(questionIndex) && answer.isStartupPoint) {
      startupScore++;
    }
  });

  const profile = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]) as ProfileKey;
  return { profile, startupScore, scores };
}

export function getStartupReadiness(score: number): {
  label: string;
  sublabel: string;
  color: string;
  width: string;
} {
  if (score >= 3) {
    return {
      label: "One-Person Company material",
      sublabel: "You think in ideas, execute fast, and turn thoughts into action. One-person company is your path.",
      color: "bg-violet-500",
      width: "w-full",
    };
  } else if (score >= 1) {
    return {
      label: "Make cash flow on the side",
      sublabel: "Get paid, gain experience, then launch your one-person company — or run both at the same time.",
      color: "bg-indigo-500",
      width: "w-2/3",
    };
  } else {
    return {
      label: "Build your foundation first",
      sublabel: "Find the right team, gain the skills, collect your ideas — your one-person company story is just beginning.",
      color: "bg-blue-500",
      width: "w-1/3",
    };
  }
}
