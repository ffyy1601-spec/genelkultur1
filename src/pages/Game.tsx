import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Seo from "../components/Seo";
import { QUESTION_SETS } from "../data";
import heroImage from "../assets/hero.png";
import type { CategoryType, Question } from "../data";
import { ROUTES } from "../lib/routes";
import { CATEGORY_LABELS } from "../lib/seo";

const QUESTIONS_PER_ROUND = 15;

const pickRandom = (arr: Question[], n: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export default function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = (searchParams.get("category") as CategoryType) || "genel";

  const questions = useMemo(() => {
    const categoryQuestions = QUESTION_SETS[categoryParam] || QUESTION_SETS.genel;
    return pickRandom(categoryQuestions, Math.min(QUESTIONS_PER_ROUND, categoryQuestions.length));
  }, [categoryParam]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [wrongAnswersList, setWrongAnswersList] = useState<number[]>([]);
  const [joker50Used, setJoker50Used] = useState(false);
  const [jokerAudienceUsed, setJokerAudienceUsed] = useState(false);
  const [jokerDoubleUsed, setJokerDoubleUsed] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [audienceVotes, setAudienceVotes] = useState<number[] | null>(null);
  const [isDoubleDipActive, setIsDoubleDipActive] = useState(false);
  const [shake, setShake] = useState(false);
  const [isQuitModalOpen, setIsQuitModalOpen] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-on-background">
        Yukleniyor...
      </div>
    );
  }

  const currentQ = questions[currentIdx];

  const finishGame = (wasCorrect: boolean) => {
    navigate(ROUTES.results, {
      state: {
        score: score + (wasCorrect ? 100 : 0),
        correct: correctAnswers + (wasCorrect ? 1 : 0),
        total: questions.length,
      },
    });
  };

  const goToNextQuestion = (wasCorrect: boolean) => {
    setShake(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setHiddenOptions([]);
    setAudienceVotes(null);
    setIsDoubleDipActive(false);

    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      return;
    }

    finishGame(wasCorrect);
  };

  const handleOptionClick = (optIdx: number) => {
    if (isAnswered || hiddenOptions.includes(optIdx)) return;

    setSelectedOption(optIdx);

    if (isDoubleDipActive && optIdx !== currentQ.correctAnswer) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setHiddenOptions((prev) => [...prev, optIdx]);
      setIsDoubleDipActive(false);
      setSelectedOption(null);
      return;
    }

    setIsAnswered(true);

    if (optIdx === currentQ.correctAnswer) {
      setScore((prev) => prev + 100);
      setCorrectAnswers((prev) => prev + 1);
      setTimeout(() => goToNextQuestion(true), 1500);
    } else {
      setShake(true);
      setWrongAnswersList((prev) => [...prev, currentIdx]);
      setIsDoubleDipActive(false);
      setTimeout(() => goToNextQuestion(false), 2000);
    }
  };

  const use50Joker = () => {
    if (joker50Used || isAnswered) return;
    setJoker50Used(true);
    const wrongOptIndices = [0, 1, 2, 3].filter((i) => i !== currentQ.correctAnswer);
    const shuffledWrongs = wrongOptIndices.sort(() => 0.5 - Math.random());
    setHiddenOptions([shuffledWrongs[0], shuffledWrongs[1]]);
  };

  const useAudienceJoker = () => {
    if (jokerAudienceUsed || isAnswered) return;
    setJokerAudienceUsed(true);

    const correctPercentage = Math.floor(Math.random() * 16) + 65;
    let remaining = 100 - correctPercentage;
    const votes = [0, 0, 0, 0];
    votes[currentQ.correctAnswer] = correctPercentage;

    [0, 1, 2, 3]
      .filter((i) => i !== currentQ.correctAnswer)
      .forEach((idx, i, arr) => {
        if (hiddenOptions.includes(idx)) {
          votes[idx] = 0;
          return;
        }

        if (i === arr.length - 1) {
          votes[idx] = remaining;
          return;
        }

        const share = Math.floor(Math.random() * remaining);
        votes[idx] = share;
        remaining -= share;
      });

    setAudienceVotes(votes);
  };

  const useDoubleDip = () => {
    if (jokerDoubleUsed || isAnswered) return;
    setJokerDoubleUsed(true);
    setIsDoubleDipActive(true);
  };

  const letters = ["A", "B", "C", "D"];
  const jokerButtons = [
    {
      key: "fifty",
      icon: "filter_2",
      onClick: use50Joker,
      used: joker50Used,
      active: false,
    },
    {
      key: "audience",
      icon: "groups",
      onClick: useAudienceJoker,
      used: jokerAudienceUsed,
      active: audienceVotes !== null,
    },
    {
      key: "double",
      icon: "exposure_plus_2",
      onClick: useDoubleDip,
      used: jokerDoubleUsed,
      active: isDoubleDipActive,
    },
  ];

  return (
    <>
      <Seo
        title={`${CATEGORY_LABELS[categoryParam] || "Genel Kultur"} Oyunu | GenelKultur.com.tr`}
        description={`${CATEGORY_LABELS[categoryParam] || "Genel Kultur"} kategorisinde secilmis sorular seni bekliyor. Hemen oyuna katil ve skorunu gor.`}
        path={ROUTES.game}
        noindex
      />

      <main className="flex min-h-[100dvh] flex-grow items-center justify-center overflow-hidden px-3 pb-3 pt-4 sm:px-4 sm:pb-6 sm:pt-8">
        <div
          className={`mx-auto flex w-full max-w-4xl flex-col items-center justify-center ${
            shake ? "animate-[shake_0.5s_ease-in-out]" : ""
          }`}
        >
          <style>{`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-10px); }
              50% { transform: translateX(10px); }
              75% { transform: translateX(-10px); }
            }
          `}</style>

          <div className="mb-3 w-full max-w-md sm:mb-8">
            <div className="mb-3 flex gap-1.5 sm:mb-5 sm:gap-2">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 overflow-hidden rounded-full transition-colors sm:h-2 ${
                    i < currentIdx
                      ? wrongAnswersList.includes(i)
                        ? "bg-error"
                        : "bg-tertiary"
                      : i === currentIdx
                        ? "relative bg-surface-variant"
                        : "bg-surface-variant/70"
                  }`}
                >
                  {i === currentIdx && (
                    <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-primary to-primary-container animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-outline-variant/10 bg-surface-container-low/95 px-4 py-3 text-center shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:rounded-[1.75rem] sm:px-5 sm:py-4">
              <div className="mb-2 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-primary sm:mb-3 sm:px-4 sm:py-1.5 sm:text-sm sm:tracking-widest">
                Skor: {score}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary/90 sm:text-xs sm:tracking-[0.24em]">
                Soru {currentIdx + 1} / {questions.length}
              </div>
              <h2 className="mt-1 text-xs font-medium capitalize text-on-surface-variant sm:mt-2 sm:text-sm">
                {categoryParam}
              </h2>
            </div>
          </div>

          <div className="relative mb-3 w-full rounded-[1.6rem] border border-outline-variant/10 bg-surface-container-low/95 p-4 text-center shadow-[0_28px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:mb-6 sm:rounded-[2rem] sm:p-6 md:p-10">
            <div className="pointer-events-none absolute -top-10 left-1/2 h-28 w-72 -translate-x-1/2 bg-primary/8 blur-[100px]"></div>
            <div className="relative mb-4 flex items-center justify-center gap-2 sm:mb-7 sm:gap-3">
              {jokerButtons.map((joker) => (
                <button
                  key={joker.key}
                  onClick={joker.onClick}
                  disabled={joker.used || isAnswered}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 sm:h-14 sm:w-14 sm:rounded-2xl ${
                    joker.used || isAnswered
                      ? "border-outline-variant/10 bg-surface-container text-on-surface-variant/45"
                      : joker.active
                        ? "border-primary/40 bg-primary/14 text-primary shadow-[0_12px_24px_rgba(242,202,80,0.12)]"
                        : "border-outline-variant/10 bg-surface-container-high text-primary hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10"
                  }`}
                  aria-label={joker.key}
                  title={joker.key}
                >
                  <span className="material-symbols-outlined text-xl sm:text-[1.65rem]">{joker.icon}</span>
                </button>
              ))}
            </div>
            <div className="relative">
              <div className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:mb-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                Soru Metni
              </div>
              <h1 className="text-lg font-bold leading-snug tracking-tight text-on-surface sm:text-2xl md:text-4xl">
                {currentQ.text}
              </h1>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-2.5 sm:gap-4">
            {currentQ.options.map((opt, idx) => {
              const isHidden = hiddenOptions.includes(idx);
              const isSelected = selectedOption === idx;
              const isCorrectTarget = isAnswered && idx === currentQ.correctAnswer;
              const isWrongSelected = isAnswered && isSelected && idx !== currentQ.correctAnswer;

              let btnClass =
                "bg-surface-container-high/95 border-outline-variant/10 text-on-surface hover:border-primary/30";
              let letterClass = "bg-surface-container-low text-primary";
              let icon = null;

              if (isHidden) {
                btnClass = "bg-surface-container border-outline-variant/10 opacity-20 pointer-events-none";
              } else if (isCorrectTarget) {
                btnClass =
                  "bg-tertiary-container border-tertiary/30 text-on-tertiary-container shadow-[0_0_22px_rgba(113,232,98,0.14)]";
                letterClass = "bg-tertiary text-on-tertiary";
                icon = (
                  <span
                    className="material-symbols-outlined text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                );
              } else if (isWrongSelected) {
                btnClass = "bg-error-container border-error/30 text-on-error-container";
                letterClass = "bg-error text-on-error";
                icon = (
                  <span
                    className="material-symbols-outlined text-error"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    cancel
                  </span>
                );
              } else if (isSelected) {
                btnClass = "bg-surface-container-highest border-primary/40 shadow-[0_0_24px_rgba(242,202,80,0.08)]";
                letterClass = "bg-primary text-on-primary";
              } else if (isDoubleDipActive && !isAnswered) {
                btnClass += " ring-2 ring-primary/40";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswered || isHidden}
                  className={`group relative flex min-h-[92px] flex-col justify-center rounded-[1.25rem] border p-3 transition-all duration-300 ease-out-expo sm:min-h-[128px] sm:rounded-[1.6rem] sm:p-5 ${btnClass} ${
                    !isAnswered && !isHidden ? "hover:-translate-y-1 hover:shadow-lg" : ""
                  }`}
                >
                  <div className="flex w-full items-start justify-between gap-2 sm:items-center sm:gap-4">
                    <div className="flex items-start gap-2.5 sm:items-center sm:gap-5">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors sm:h-11 sm:w-11 sm:rounded-xl sm:text-base ${letterClass}`}
                      >
                        {letters[idx]}
                      </span>
                      <span className="text-left text-sm font-medium leading-snug sm:text-lg md:text-xl">
                        {opt}
                      </span>
                    </div>
                    <div className="flex items-center self-center">{icon}</div>
                  </div>

                  {audienceVotes && !isHidden && (
                    <div className="mt-2 rounded-xl bg-background/35 p-2 text-left sm:mt-4 sm:rounded-2xl sm:p-3">
                      <div className="mb-1 flex justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-primary sm:mb-2 sm:text-xs sm:tracking-[0.16em]">
                        <span>Seyirci</span>
                        <span>%{audienceVotes[idx]}</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-container"
                          style={{ width: `${audienceVotes[idx]}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </main>

      <div className="pointer-events-none fixed inset-0 -z-20">
        <img alt="Arka plan gorseli" className="h-full w-full object-cover grayscale opacity-[0.05]" src={heroImage} />
        <div
          className="absolute inset-0 opacity-[0.03] bg-repeat"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjbqtL4E6H37mf1UBnCaO_la7dHjiTMbwDWLd1ejmEwvjzTfEbui7taw7LaljFMbxkPbj9XDbTyGpqr-vS0cxpIEEr_DELUVjZ0hV8QzIKr4YkzUH6fmEbnaHjpcWpKfMBU670TMwDEOrE4qT0GjZ53BzBxX_ZU_APSEdyrgEv_IlJa14EJ2dxjdkpPhtOMJSAy1sZDR_-hy5tPAtH5xxTLWn1uho1MWIkzG7hMsrUzyfTLO0aBYMs5tjTqquoBLG0xE0jXtxivb2K')",
          }}
        ></div>
      </div>

      <button
        onClick={() => setIsQuitModalOpen(true)}
        className="fixed left-3 top-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/10 bg-surface-container-low/95 text-on-surface-variant shadow-lg transition-all hover:bg-error/10 hover:text-error sm:left-6 sm:top-6 sm:h-12 sm:w-12"
      >
        <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110 sm:text-2xl">close</span>
      </button>

      {isQuitModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-[#041329]/80 backdrop-blur-sm"
            onClick={() => setIsQuitModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-sm rounded-[2rem] border border-outline-variant/20 bg-surface-container-high p-8 text-center shadow-2xl md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-error/10 text-error">
              <span className="material-symbols-outlined text-4xl">warning</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-on-surface">Oyundan Ayrilmak Istiyor Musun?</h3>
            <p className="mb-8 leading-relaxed text-on-surface-variant">
              Yarismadan simdi cikarsan tum ilerleme ve puan sifirlanir. Eminsen ana sayfaya donebilirsin.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate(ROUTES.home)}
                className="w-full rounded-xl bg-error py-4 font-bold text-white shadow-lg shadow-error/20 transition-colors hover:bg-error/90"
              >
                Evet, Ayril
              </button>
              <button
                onClick={() => setIsQuitModalOpen(false)}
                className="w-full rounded-xl bg-surface-container-highest py-4 font-bold text-on-surface transition-colors hover:bg-surface-container-highest/80"
              >
                Vazgec
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
