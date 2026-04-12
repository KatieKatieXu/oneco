"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LANGS, type Lang } from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

const VALID_LANGS: readonly string[] = LANGS;

function isValidLang(value: string): value is Lang {
  return VALID_LANGS.includes(value);
}

/**
 * Detect language from the browser/OS language setting.
 * navigator.language returns e.g. "zh-CN", "en-US", "fr-FR", "es-MX"
 * We extract the base language code and match it to our supported languages.
 */
function detectSystemLang(): Lang {
  if (typeof navigator === "undefined") return "en";

  // navigator.languages gives the full preference list, navigator.language is the top pick
  const browserLangs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const raw of browserLangs) {
    const base = raw.split("-")[0].toLowerCase(); // "zh-CN" → "zh", "en-US" → "en"
    if (isValidLang(base)) {
      return base;
    }
  }

  return "en";
}

export default function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // 1. If user already chose a language manually, respect that
    try {
      const stored = localStorage.getItem("oneco_lang");
      if (stored && isValidLang(stored)) {
        setLangState(stored);
        return;
      }
    } catch {}

    // 2. No stored preference → use browser/OS system language
    const detected = detectSystemLang();
    setLangState(detected);
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem("oneco_lang", newLang);
    } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
