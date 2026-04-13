"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { PROFILES, getStartupReadiness, type ProfileKey } from "@/lib/quiz-data";
import { RESULT_T, TUNNEL_LABELS, PROFILE_NAMES, PROFILES_I18N, t } from "@/lib/i18n";
import { useLang } from "@/components/LangProvider";
import ShareCard from "./ShareCard";

export default function ResultPage() {
  const params = useParams();
  const { lang } = useLang();

  const profileKey = params.profile as string;

  if (!PROFILES[profileKey as ProfileKey]) {
    return null;
  }

  const profile = PROFILES[profileKey as ProfileKey];
  const readiness = getStartupReadiness(profileKey as ProfileKey);
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
              readiness.level >= 4 ? 'bg-violet-500/20 text-violet-300' :
              'bg-indigo-500/20 text-indigo-300'
            }`}>{readiness.label}</span>
          </div>

          {/* Volume tunnel — 5 bars growing in size like an audio equalizer */}
          <div className="flex items-end justify-center gap-1.5 h-16 mb-4">
            {[1, 2, 3, 4, 5].map((level) => {
              const filled = level <= readiness.level;
              const heights = ['h-4', 'h-6', 'h-9', 'h-12', 'h-16'];
              const widths = ['w-6', 'w-7', 'w-8', 'w-9', 'w-10'];
              return (
                <div
                  key={level}
                  className={`${heights[level-1]} ${widths[level-1]} rounded-sm transition-all duration-700 ${
                    filled
                      ? readiness.level >= 4
                        ? 'bg-violet-500 shadow-lg shadow-violet-500/30'
                        : 'bg-indigo-400 shadow-lg shadow-indigo-500/20'
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

        {/* Jobpilot CTA */}
        <div className="bg-gradient-to-br from-violet-900/40 to-indigo-900/40 border border-violet-500/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-3">✈️</div>
          <h3 className="text-white font-semibold mb-2">
            {{
              en: "Maximize your cash flow — start by converting your hard skills",
              zh: "最大化你的现金流——从转化硬技能开始",
              es: "Maximiza tu flujo de caja — empieza convirtiendo tus habilidades",
              fr: "Maximisez votre cash flow — commencez par convertir vos compétences",
            }[lang]}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {{
              en: "Tell Jobpilot your expertise and unique talents. We'll help you refine your materials and walk with you until you land the highest-value job that truly fits who you are.",
              zh: "告诉 Jobpilot 你的专业能力和天赋兴趣，我们将陪跑你优化材料，直到你找到市场上最符合你个人特色的最高价值工作。",
              es: "Cuéntale a Jobpilot tu experiencia y talentos únicos. Te acompañaremos a optimizar tus materiales hasta que encuentres el trabajo de mayor valor que realmente se ajuste a ti.",
              fr: "Parlez à Jobpilot de votre expertise et de vos talents uniques. Nous vous accompagnerons pour optimiser vos documents jusqu'à ce que vous trouviez le poste à plus haute valeur qui vous correspond vraiment.",
            }[lang]}
          </p>
          <a
            href="https://jobpilot.katexu.com/"
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
