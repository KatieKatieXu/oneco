"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { LANDING_T, PROFILE_NAMES, t } from "@/lib/i18n";

const PROFILES_META = [
  { emoji: "🔭", key: "visionary" },
  { emoji: "⚡", key: "executor" },
  { emoji: "🌐", key: "connector" },
  { emoji: "🎯", key: "expert" },
  { emoji: "🎨", key: "creative" },
];

export default function Home() {
  const { lang } = useLang();

  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-violet-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
          {t(LANDING_T.personality_quiz, lang)}
        </div>

        {/* Hero */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
            {t(LANDING_T.hero_title, lang)}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          {t(LANDING_T.hero_sub, lang)}
        </p>

        {/* CTA */}
        <Link
          href="/quiz"
          className="relative z-20 inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25 active:scale-95"
        >
          {t(LANDING_T.cta, lang)}
        </Link>

        {/* Social proof */}
        <p className="mt-6 text-slate-500 text-sm">
          {t(LANDING_T.social_proof, lang)}
        </p>

        {/* Profile preview pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-2">
          {PROFILES_META.map((p) => (
            <div
              key={p.key}
              className="flex items-center gap-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full px-3 py-1.5 text-slate-400 text-sm"
            >
              <span>{p.emoji}</span>
              <span>{PROFILE_NAMES[p.key][lang]}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-slate-600 text-xs">{t(LANDING_T.which_one, lang)}</p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-slate-600 text-xs">
        OneCo · oneco.app
      </div>
    </main>
  );
}
