"use client";

import { LANG_META, LANGS } from "@/lib/i18n";
import { useLang } from "./LangProvider";

export default function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-0.5 bg-slate-800/80 border border-slate-700/50 rounded-full p-1 backdrop-blur-sm">
      {LANGS.map((l) => {
        const meta = LANG_META[l];
        const isActive = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            title={meta.name}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 select-none whitespace-nowrap ${
              isActive
                ? "bg-violet-600 text-white shadow-sm shadow-violet-500/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/60"
            }`}
          >
            <span>{meta.flag}</span>
            <span>{meta.label}</span>
          </button>
        );
      })}
    </div>
  );
}
