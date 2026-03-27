"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams, notFound } from "next/navigation";
import Link from "next/link";
import { PROFILES, getStartupReadiness, type ProfileKey } from "@/lib/quiz-data";
import { RESULT_T, TUNNEL_LABELS, PROFILE_NAMES, PROFILES_I18N, t } from "@/lib/i18n";
import { useLang } from "@/components/LangProvider";
import ShareCard from "./ShareCard";

export default function ResultPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { lang } = useLang();

  const profileKey = params.profile as string;
  const startupScore = parseInt(searchParams.get("startup") || "0");

  if (!PROFILES[profileKey as ProfileKey]) {
    return null; // notFound() can't be called in client component directly; we handle below
  }

  const profile = PROFILES[profileKey as ProfileKey];
  const readiness = getStartupReadiness(startupScore);
  const tunnelLabels = TUNNEL_LABELS[lang];
  const profileName = PROFILE_NAMES[profileKey]?.[lang] ?? profile.name;
  const pi18n = PROFILES_I18N[profileKey];

  return (
    <main className="min-h-screen bg-slate-900 pb-16">
      {/* Hero header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/30 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 pt-20 pb-8 text-center">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            {t(RESULT_T.talent_profile_label, lang)}
          </p>
          <div className="text-7xl mb-4">{profile.emoji}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{profileName}</h1>
          <p className="text-xl text-violet-300 font-medium mb-6">{pi18n?.tagline[lang] ?? profile.tagline}</p>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            {pi18n?.description[lang] ?? profile.description}
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 space-y-6">
        {/* Startup Readiness — volume tunnel */}
        <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">{t(RESULT_T.startup_readiness, lang)}</h2>
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
              startupScore >= 3 ? 'bg-violet-500/20 text-violet-300' :
              startupScore >= 1 ? 'bg-indigo-500/20 text-indigo-300' :
              'bg-slate-600/40 text-slate-400'
            }`}>{readiness.label}</span>
          </div>

          {/* Volume tunnel — 5 bars growing in size like an audio equalizer */}
          <div className="flex items-end justify-center gap-1.5 h-16 mb-4">
            {[1, 2, 3, 4, 5].map((level) => {
              const filled = startupScore >= 3 ? level <= 5 :
                             startupScore >= 1 ? level <= 3 :
                             level <= 1;
              const heights = ['h-4', 'h-6', 'h-9', 'h-12', 'h-16'];
              const widths = ['w-6', 'w-7', 'w-8', 'w-9', 'w-10'];
              return (
                <div
                  key={level}
                  className={`${heights[level-1]} ${widths[level-1]} rounded-sm transition-all duration-700 ${
                    filled
                      ? startupScore >= 3
                        ? 'bg-violet-500 shadow-lg shadow-violet-500/30'
                        : startupScore >= 1
                        ? 'bg-indigo-400 shadow-lg shadow-indigo-500/20'
                        : 'bg-slate-500'
                      : 'bg-slate-700/50'
                  }`}
                  style={{ transitionDelay: `${(level - 1) * 80}ms` }}
                />
              );
            })}
          </div>

          {/* Labels under each bar */}
          <div className="flex justify-center gap-1.5 mb-3">
            {tunnelLabels.map((lbl, i) => (
              <div key={i} className={`text-center ${['w-6','w-7','w-8','w-9','w-10'][i]}`}>
                <span className="text-slate-600 text-[8px] leading-tight block">{lbl}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-sm text-center">{readiness.sublabel}</p>
        </div>

        {/* Two path cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Startup path */}
          <div className="bg-gradient-to-br from-violet-900/40 to-slate-800/60 border border-violet-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🚀</span>
              <h3 className="text-white font-semibold">{t(RESULT_T.if_you_go_solo, lang)}</h3>
            </div>
            <p className="text-violet-300 text-sm font-medium mb-1">{pi18n?.startupPath.type[lang] ?? profile.startupPath.type}</p>
            <p className="text-slate-400 text-xs mb-3">
              <span className="text-slate-300 font-medium">{t(RESULT_T.roles_label, lang)} </span>
              {pi18n?.startupPath.roles[lang] ?? profile.startupPath.roles}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{pi18n?.startupPath.advice[lang] ?? profile.startupPath.advice}</p>
          </div>

          {/* Work first path */}
          <div className="bg-gradient-to-br from-indigo-900/30 to-slate-800/60 border border-indigo-500/20 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">💼</span>
              <h3 className="text-white font-semibold">{t(RESULT_T.if_build_experience, lang)}</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              {pi18n?.workFirstPath.advice[lang] ?? profile.workFirstPath.advice}
            </p>
            <div className="space-y-1.5 mb-3">
              {(pi18n?.workFirstPath.targetRoles[lang] ?? profile.workFirstPath.targetRoles).map((role, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-400 text-xs">
                  <span className="text-indigo-400 mt-0.5 flex-shrink-0">→</span>
                  <span>{role}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-xs italic border-t border-slate-700/50 pt-3">
              <span className="text-slate-300 not-italic font-medium">{t(RESULT_T.look_for, lang)} </span>
              {pi18n?.workFirstPath.lookFor[lang] ?? profile.workFirstPath.lookFor}
            </p>
          </div>
        </div>

        {/* AI + One-Person Company advice */}
        <div className="bg-gradient-to-br from-slate-800/80 to-violet-900/20 border border-violet-500/20 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🤖</span>
            <h3 className="text-white font-semibold text-sm">
              {{
                en: "The One-Person Company runs on AI",
                zh: "一人公司的核心武器：AI",
                es: "La empresa unipersonal funciona con IA",
                fr: "L'entreprise individuelle fonctionne avec l'IA",
              }[lang]}
            </h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {{
              en: "One-person companies don't scale by working harder — they scale by thinking clearer. AI agents handle execution. Your job is to ask the right questions, articulate the goal, and sort your thoughts into direction. The quality of your thinking is your highest-leverage skill.",
              zh: "一人公司不靠拼命工作来扩展规模——而是靠更清晰的思考。AI agent负责执行，你的工作是提出正确问题、清晰表达目标、把想法整理成方向。你的思维质量，是你最高杠杆的竞争力。",
              es: "Las empresas unipersonales no escalan trabajando más duro — escalan pensando con más claridad. Los agentes de IA manejan la ejecución. Tu trabajo es hacer las preguntas correctas, articular el objetivo y ordenar tus pensamientos en dirección. La calidad de tu pensamiento es tu habilidad de mayor apalancamiento.",
              fr: "Les entreprises individuelles ne grandissent pas en travaillant plus dur — elles grandissent en pensant plus clairement. Les agents IA s'occupent de l'exécution. Votre travail consiste à poser les bonnes questions, articuler l'objectif et organiser vos pensées en direction. La qualité de votre réflexion est votre compétence à plus fort levier.",
            }[lang]}
          </p>
          <div className="grid grid-cols-3 gap-2">
            {([
              {
                icon: "💬",
                en: "How you ask matters", zh: "提问方式决定成败",
                es: "Cómo preguntas importa", fr: "Comment vous demandez compte",
              },
              {
                icon: "🧠",
                en: "Sort thoughts first", zh: "先整理思路",
                es: "Ordena tus ideas primero", fr: "Triez vos idées d'abord",
              },
              {
                icon: "⚡",
                en: "AI executes, you direct", zh: "AI执行，你掌舵",
                es: "IA ejecuta, tú diriges", fr: "L'IA exécute, vous dirigez",
              },
            ] as const).map((item) => (
              <div key={item.icon} className="bg-slate-800/60 rounded-xl p-3 text-center">
                <div className="text-xl mb-1">{item.icon}</div>
                <p className="text-slate-300 text-[10px] leading-tight">{item[lang]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Jobpilot CTA */}
        <div className="bg-gradient-to-br from-violet-900/40 to-indigo-900/40 border border-violet-500/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-3">✈️</div>
          <h3 className="text-white font-semibold mb-2">
            {{
              en: "Find your highest-value job first",
              zh: "先找到你最高价值的工作",
              es: "Encuentra primero tu trabajo de mayor valor",
              fr: "Trouvez d'abord votre emploi à plus haute valeur",
            }[lang]}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {{
              en: "Tell us your talent and we'll combine it with your expertise to find the highest-value job on the market — and be the first to let you know.",
              zh: "告诉我们你的天赋，我们将结合你的专业能力，为你找到市场上最高价值的工作——并第一时间通知你。",
              es: "Cuéntanos tu talento y lo combinaremos con tu experiencia para encontrar el trabajo de mayor valor del mercado — y ser los primeros en avisarte.",
              fr: "Dites-nous votre talent et nous le combinerons avec votre expertise pour trouver le travail à plus haute valeur du marché — et vous le faire savoir en premier.",
            }[lang]}
          </p>
          <a
            href="http://localhost:3001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20 text-sm"
          >
            {t(RESULT_T.find_ideal_job, lang)}
          </a>
        </div>

        {/* Share card */}
        <ShareCard profile={profile} profileKey={profileKey as ProfileKey} />

        {/* Retake */}
        <div className="text-center pt-2">
          <Link
            href="/quiz"
            className="text-slate-500 hover:text-slate-300 text-sm transition-colors underline underline-offset-4"
          >
            {t(RESULT_T.retake, lang)}
          </Link>
        </div>
      </div>
    </main>
  );
}
