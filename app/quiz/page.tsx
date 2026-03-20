"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS, calculateResult } from "@/lib/quiz-data";
import { QUESTIONS_I18N, QUIZ_T, t } from "@/lib/i18n";
import { useLang } from "@/components/LangProvider";

export default function QuizPage() {
  const router = useRouter();
  const { lang } = useLang();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(QUESTIONS.length).fill(null)
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [animating, setAnimating] = useState(false);

  const question = QUESTIONS[currentQ];
  const questionI18N = QUESTIONS_I18N[currentQ];
  const progress = ((currentQ + 1) / QUESTIONS.length) * 100;

  useEffect(() => {
    setSelected(answers[currentQ]);
  }, [currentQ, answers]);

  const handleAnswer = (idx: number) => {
    if (animating) return;

    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);
    setSelected(idx);

    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setDirection("right");
        setAnimating(true);
        setTimeout(() => {
          setCurrentQ(currentQ + 1);
          setAnimating(false);
        }, 200);
      } else {
        const { profile } = calculateResult(newAnswers);
        const startupScore = calculateResult(newAnswers).startupScore;
        router.push(`/result/${profile}?startup=${startupScore}`);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentQ === 0) {
      router.push("/");
      return;
    }
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setCurrentQ(currentQ - 1);
      setAnimating(false);
    }, 200);
  };

  const answerLabels = ["A", "B", "C", "D"];

  // Build question number label per language
  const qLabel = lang === 'zh'
    ? `第${currentQ + 1}题`
    : `${t(QUIZ_T.question_label, lang)} ${currentQ + 1}`;

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Top bar */}
      <div className="px-4 pt-6 pb-4 flex-shrink-0">
        <div className="flex items-center gap-3 max-w-lg mx-auto mb-4">
          <button
            onClick={handleBack}
            className="text-slate-400 hover:text-white transition-colors p-1 -ml-1"
            aria-label="Go back"
          >
            ←
          </button>
          <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-slate-500 text-sm font-medium min-w-[36px] text-right">
            {currentQ + 1}/{QUESTIONS.length}
          </span>
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 flex flex-col justify-center px-4 pb-8">
        <div
          key={currentQ}
          className={`max-w-lg mx-auto w-full ${
            animating
              ? "opacity-0 translate-x-4"
              : direction === "right"
              ? "slide-in-right"
              : "slide-in-left"
          } transition-all`}
        >
          {/* Question number */}
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 text-center">
            {qLabel}
          </p>

          {/* Question text */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center leading-snug">
            {questionI18N.text[lang]}
          </h2>

          {/* Answer options */}
          <div className="space-y-3">
            {question.answers.map((answer, idx) => {
              const isSelected = selected === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-150 flex items-center gap-4 group active:scale-98 ${
                    isSelected
                      ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/20"
                      : "bg-slate-800/60 border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:border-violet-500/40 hover:text-white"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-700 text-slate-400 group-hover:bg-violet-500/20 group-hover:text-violet-300"
                    }`}
                  >
                    {answerLabels[idx]}
                  </span>
                  <span className="font-medium">{questionI18N.answers[idx][lang]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
