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

export default function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // 1. If user already chose a language, respect that
    try {
      const stored = localStorage.getItem("oneco_lang");
      if (stored && isValidLang(stored)) {
        setLangState(stored);
        return; // user has a preference, skip geo detection
      }
    } catch {}

    // 2. No stored preference → detect from IP geolocation
    fetch("/api/geo")
      .then((res) => res.json())
      .then((data: { country: string; lang: string }) => {
        if (data.lang && isValidLang(data.lang)) {
          setLangState(data.lang);
          try {
            localStorage.setItem("oneco_lang", data.lang);
          } catch {}
        }
      })
      .catch(() => {
        // silently fall back to English
      });
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
