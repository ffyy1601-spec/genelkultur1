import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import Seo from "../components/Seo";
import { dailyQuizzes } from "../data/dailyContent";
import { ROUTES } from "../lib/routes";
import { playCorrectSound, playWrongSound } from "../lib/sound";

export default function DailyGame() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Slug'a göre yapay zeka testini bul
  const quiz = useMemo(() => {
    return dailyQuizzes.find((item) => item.slug === slug);
  }, [slug]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [wrongAnswersList, setWrongAnswersList] = useState<number[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<{
    question: string;
    selected: string;
    correct: string;
    explanation?: string;
  }[]>([]);
  const [joker50Used, setJoker50Used] = useState(false);
  const [jokerAudienceUsed, setJokerAudienceUsed] = useState(false);
  const [jokerDoubleUsed, setJokerDoubleUsed] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [audienceVotes, setAudienceVotes] = useState<number[] | null>(null);
  const [isDoubleDipActive, setIsDoubleDipActive] = useState(false);
  const [shake, setShake] = useState(false);
  const [isQuitModalOpen, setIsQuitModalOpen] = useState(false);

  const questions = quiz?.questions || [];
  const currentQ = questions[currentIdx];

  const handleTimeout = () => {
    if (!currentQ) return;
    setIsAnswered(true);
    setShake(true);
    setWrongAnswersList((prev) => [...prev, currentIdx]);
    setWrongAnswers((prev) => [
      ...prev,
      {
        question: currentQ.text,
        selected: "Süre Bitti! ⏰",
        correct: currentQ.options[currentQ.correctAnswer],
        explanation: currentQ.explanation,
      },
    ]);
    playWrongSound();
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
    setIsDoubleDipActive(false);
    setTimeout(() => goToNextQuestion(false), 2000);
  };

  useEffect(() => {
    if (!quiz || !quiz.questions || quiz.questions.length === 0 || isAnswered || isQuitModalOpen) return;

    setTimeLeft(20);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIdx, isAnswered, isQuitModalOpen, quiz]);

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return <Navigate replace to={quiz ? `/test/${quiz.slug}` : ROUTES.dailyList} />;
  }

  const finishGame = (wasCorrect: boolean) => {
    navigate(ROUTES.results, {
      state: {
        score: score + (wasCorrect ? 100 : 0),
        correct: correctAnswers + (wasCorrect ? 1 : 0),
        total: questions.length,
        category: "daily",
        wrongAnswers: wrongAnswers,
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
      playCorrectSound();
      setTimeout(() => goToNextQuestion(true), 1500);
    } else {
      setShake(true);
      setWrongAnswersList((prev) => [...prev, currentIdx]);
      setWrongAnswers((prev) => [
        ...prev,
        {
          question: currentQ.text,
          selected: currentQ.options[optIdx],
          correct: currentQ.options[currentQ.correctAnswer],
          explanation: currentQ.explanation,
        },
      ]);
      playWrongSound();
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
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
    { key: "fifty", icon: "filter_2", onClick: use50Joker, used: joker50Used, active: false },
    { key: "audience", icon: "groups", onClick: useAudienceJoker, used: jokerAudienceUsed, active: audienceVotes !== null },
    { key: "double", icon: "exposure_plus_2", onClick: useDoubleDip, used: jokerDoubleUsed, active: isDoubleDipActive },
  ];

  return (
    <>
      <Seo
        title={`${quiz.heading} Testi | GenelKultur.com.tr`}
        description={`${quiz.heading} konusu hakkında hazırlanmış özel yapay zeka bilgi testi.`}
        path={`/test/${quiz.slug}/oyna`}
        noindex
      />

      <main className="flex min-h-[100dvh] flex-grow items-center justify-center overflow-hidden px-2 pb-2 pt-3 sm:px-4 sm:pb-6 sm:pt-6">
        <div
          className={`mx-auto flex w-full max-w-5xl flex-col justify-center ${shake ? "animate-[shake_0.5s_ease-in-out]" : ""}`}
        >
          <style>{`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-8px); }
              50% { transform: translateX(8px); }
              75% { transform: translateX(-8px); }
            }
            @keyframes neon-pulse {
              0%, 100% {
                box-shadow: 0 0 4px rgba(242,202,80,0.08);
                border-color: rgba(255,255,255,0.1);
              }
              50% {
                box-shadow: 0 0 12px rgba(242,202,80,0.22);
                border-color: rgba(242,202,80,0.45);
              }
            }
            .joker-pulse {
              animation: neon-pulse 2s infinite ease-in-out;
            }
          `}</style>

          {/* İlerleme Çubuğu */}
          <div className="mb-2.5 flex gap-1 sm:mb-4 sm:gap-2">
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
                      : "bg-surface-variant/60"
                }`}
              >
                {i === currentIdx && (
                  <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-primary to-[#ffe082]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Soru Detayları Header'ı */}
          <div className="mb-2.5 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.94),rgba(12,28,53,0.88))] px-3 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl sm:mb-4 sm:rounded-[1.6rem] sm:px-5 sm:py-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-black text-primary sm:px-4 sm:py-1.5 sm:text-base">
                  Skor: {score}
                </div>
                <div className="text-right lg:text-left">
                  <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-primary/90 sm:text-xs">
                    Soru {currentIdx + 1} / {questions.length}
                  </div>
                  <div className="mt-0.5 text-xs font-semibold text-on-surface-variant sm:mt-1 sm:text-base">
                    Günün Özel Testi
                  </div>
                </div>
              </div>

              {/* Joker Butonları */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {jokerButtons.map((joker) => {
                  const isClickable = !joker.used && !isAnswered;
                  return (
                    <button
                      key={joker.key}
                      onClick={joker.onClick}
                      disabled={joker.used || isAnswered}
                      className={`flex h-10 items-center justify-center rounded-[0.95rem] border transition-all duration-300 sm:h-12 sm:rounded-[1.2rem] ${
                        joker.used || isAnswered
                          ? "border-outline-variant/10 bg-surface-container text-on-surface-variant/40"
                          : joker.active
                            ? "border-primary/40 bg-primary/14 text-primary shadow-[0_12px_24px_rgba(242,202,80,0.12)]"
                            : `border-white/10 bg-surface-container-low/80 text-primary hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-container-high ${isClickable ? "joker-pulse" : ""}`
                      }`}
                      aria-label={joker.key}
                      title={joker.key}
                    >
                      <span className="material-symbols-outlined text-[1.1rem] sm:text-[1.45rem]">{joker.icon}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Soru Gövdesi */}
          <div className="relative mb-2.5 w-full rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-4 text-center shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:mb-4 sm:rounded-[1.75rem] sm:p-6 md:p-8 overflow-hidden">
            {/* Timer Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
              <div
                className={`h-full transition-all duration-1000 ease-linear ${
                  timeLeft <= 5 ? "bg-error animate-pulse" : "bg-primary"
                }`}
                style={{ width: `${(timeLeft / 20) * 100}%` }}
              ></div>
            </div>

            <div className="pointer-events-none absolute -top-8 left-1/2 h-20 w-56 -translate-x-1/2 bg-primary/10 blur-[90px] sm:-top-10 sm:h-28 sm:w-72 sm:blur-[110px]"></div>
            <div className="relative">
              <span className="mb-2 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs">
                Soru Metni
              </span>
              <h1 className="text-base font-black leading-snug tracking-tight text-on-surface sm:text-2xl md:text-[2rem] md:leading-[1.2]">
                {currentQ.text}
              </h1>
            </div>
          </div>

          {/* Şıklar */}
          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
            {currentQ.options.map((opt, idx) => {
              const isHidden = hiddenOptions.includes(idx);
              const isSelected = selectedOption === idx;
              const isCorrectTarget = isAnswered && idx === currentQ.correctAnswer;
              const isWrongSelected = isAnswered && isSelected && idx !== currentQ.correctAnswer;

              let btnClass =
                "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-on-surface hover:border-primary/30";
              let letterClass = "bg-surface-container-low text-primary";
              let icon = null;

              if (isHidden) {
                btnClass = "border-outline-variant/10 bg-surface-container opacity-20 pointer-events-none";
              } else if (isCorrectTarget) {
                btnClass =
                  "border-tertiary/30 bg-tertiary-container text-on-tertiary-container shadow-[0_0_22px_rgba(113,232,98,0.14)]";
                letterClass = "bg-tertiary text-on-tertiary";
                icon = (
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                );
              } else if (isWrongSelected) {
                btnClass = "border-error/30 bg-error-container text-on-error-container";
                letterClass = "bg-error text-on-error";
                icon = (
                  <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
                    cancel
                  </span>
                );
              } else if (isSelected) {
                btnClass = "border-primary/40 bg-surface-container-highest shadow-[0_0_24px_rgba(242,202,80,0.08)]";
                letterClass = "bg-primary text-on-primary";
              } else if (isDoubleDipActive && !isAnswered) {
                btnClass += " ring-2 ring-primary/35";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswered || isHidden}
                  className={`group relative flex min-h-[78px] flex-col justify-center rounded-[1.2rem] border p-3 text-left transition-all duration-300 sm:min-h-[136px] sm:rounded-[1.45rem] sm:p-5 ${btnClass} ${
                    !isAnswered && !isHidden ? "hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)]" : ""
                  }`}
                >
                  <div className="flex w-full items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5 sm:gap-4">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-colors sm:h-11 sm:w-11 sm:rounded-xl sm:text-base ${letterClass}`}
                      >
                        {letters[idx]}
                      </span>
                      <div className="pt-0.5 text-[13px] font-bold leading-5 sm:text-lg sm:leading-7">{opt}</div>
                    </div>
                    <div className="flex items-center">{icon}</div>
                  </div>

                  {/* Seyirci Yüzdeleri */}
                  {audienceVotes && !isHidden && (
                    <div className="mt-2 rounded-xl bg-background/35 p-2 text-left sm:mt-3 sm:p-2.5">
                      <div className="mb-1.5 flex justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                        <span>Seyirci</span>
                        <span>%{audienceVotes[idx]}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-surface-container-highest">
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

      {/* Oyundan Çıkış Onay Butonu ve Modalı */}
      <button
        onClick={() => setIsQuitModalOpen(true)}
        className="fixed left-3 top-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/10 bg-surface-container-low/95 text-on-surface-variant shadow-lg transition-all hover:bg-error/10 hover:text-error sm:left-5 sm:top-5 sm:h-11 sm:w-11"
      >
        <span className="material-symbols-outlined text-xl sm:text-2xl">close</span>
      </button>

      {isQuitModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#041329]/80 backdrop-blur-sm" onClick={() => setIsQuitModalOpen(false)}></div>
          <div className="relative w-full max-w-sm rounded-[2rem] border border-outline-variant/20 bg-surface-container-high p-8 text-center shadow-2xl md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-error/10 text-error">
              <span className="material-symbols-outlined text-4xl">warning</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-on-surface">Yarışmadan Ayrılmak İstiyor Musun?</h3>
            <p className="mb-8 leading-relaxed text-on-surface-variant">
              Bu testten şimdi çıkarsan tüm ilerlemen sıfırlanacaktır.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate(`/test/${quiz.slug}`)}
                className="w-full rounded-xl bg-error py-4 font-bold text-white shadow-lg shadow-error/20 transition-colors hover:bg-error/90"
              >
                Evet, Ayrıl
              </button>
              <button
                onClick={() => setIsQuitModalOpen(false)}
                className="w-full rounded-xl bg-surface-container-highest py-4 font-bold text-on-surface transition-colors hover:bg-surface-container-highest/80"
              >
                Vazgeç
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
