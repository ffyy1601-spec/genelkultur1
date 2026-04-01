import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CATEGORIES } from "../data";
import type { CategoryType } from "../data";
import type { Question } from "../data/tarih";



export default function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = (searchParams.get("category") as CategoryType) || "genel";

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [wrongAnswersList, setWrongAnswersList] = useState<number[]>([]);
  
  // Lifelines state
  const [joker50Used, setJoker50Used] = useState(false);
  const [jokerAudienceUsed, setJokerAudienceUsed] = useState(false);
  const [jokerDoubleUsed, setJokerDoubleUsed] = useState(false);
  
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [audienceVotes, setAudienceVotes] = useState<number[] | null>(null);
  const [isDoubleDipActive, setIsDoubleDipActive] = useState(false);
  
  // Shake effect state
  const [shake, setShake] = useState(false);
  const [isQuitModalOpen, setIsQuitModalOpen] = useState(false);

  useEffect(() => {
    // Generate 10 progressive questions
    const catData = CATEGORIES[categoryParam] || CATEGORIES["genel"];
    
    // Helper to shuffle and pick N questions
    const pickRandom = (arr: Question[], n: number) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    };

    const easyPool = pickRandom(catData.kolay, 3);
    const midPool = pickRandom(catData.orta, 4);
    const hardPool = pickRandom(catData.zor, 3);
    
    setQuestions([...easyPool, ...midPool, ...hardPool]);
  }, [categoryParam]);

  if (questions.length === 0) return <div className="min-h-screen bg-background flex justify-center items-center text-on-background">Yükleniyor...</div>;

  const currentQ = questions[currentIdx];
  let difficultyLabel = "Kolay Seviye";
  if (currentIdx >= 3 && currentIdx < 7) difficultyLabel = "Orta Seviye";
  if (currentIdx >= 7) difficultyLabel = "Zor Seviye";

  const handleOptionClick = (optIdx: number) => {
    if (isAnswered || hiddenOptions.includes(optIdx)) return;

    setSelectedOption(optIdx);
    
    // Check if double dip is active and wrong
    if (isDoubleDipActive && optIdx !== currentQ.correctAnswer) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setHiddenOptions(prev => [...prev, optIdx]);
      setIsDoubleDipActive(false); // Used the extra chance
      setSelectedOption(null); // Let them choose again
      return;
    }

    setIsAnswered(true);

    if (optIdx === currentQ.correctAnswer) {
      setScore(prev => prev + 100); // 100 points per question
      setCorrectAnswers(prev => prev + 1);
      setTimeout(() => goToNextQuestion(), 1500);
    } else {
      setShake(true);
      setWrongAnswersList(prev => [...prev, currentIdx]);
      setIsDoubleDipActive(false);
      setTimeout(() => goToNextQuestion(), 2000);
    }
  };

  const goToNextQuestion = () => {
    setShake(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setHiddenOptions([]);
    setAudienceVotes(null);
    setIsDoubleDipActive(false);

    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // End game
      finishGame();
    }
  };

  const finishGame = () => {
     navigate("/results", {
       state: {
         score: score + (selectedOption === currentQ.correctAnswer ? 100 : 0),
         correct: correctAnswers + (selectedOption === currentQ.correctAnswer ? 1 : 0),
         total: questions.length
       }
     });
  };

  // Jokers
  const use50Joker = () => {
    if (joker50Used || isAnswered) return;
    setJoker50Used(true);
    const wrongOptIndices = [0,1,2,3].filter(i => i !== currentQ.correctAnswer);
    const shuffledWrongs = wrongOptIndices.sort(() => 0.5 - Math.random());
    setHiddenOptions([shuffledWrongs[0], shuffledWrongs[1]]);
  };

  const useAudienceJoker = () => {
    if (jokerAudienceUsed || isAnswered) return;
    setJokerAudienceUsed(true);
    // Give 65-80% to correct answer, distribute rest
    const correctPercentage = Math.floor(Math.random() * 16) + 65; 
    let remaining = 100 - correctPercentage;
    const votes = [0, 0, 0, 0];
    votes[currentQ.correctAnswer] = correctPercentage;
    
    [0,1,2,3].filter(i => i !== currentQ.correctAnswer).forEach((idx, i, arr) => {
      if (hiddenOptions.includes(idx)) {
         votes[idx] = 0;
      } else {
         if (i === arr.length - 1) {
            votes[idx] = remaining;
         } else {
            const share = Math.floor(Math.random() * remaining);
            votes[idx] = share;
            remaining -= share;
         }
      }
    });
    setAudienceVotes(votes);
  };

  const useDoubleDip = () => {
    if (jokerDoubleUsed || isAnswered) return;
    setJokerDoubleUsed(true);
    setIsDoubleDipActive(true);
  };

  const letters = ["A", "B", "C", "D"];

  return (
    <>
      <Helmet>
        <title>{categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Testi - Genel Kültür Bilgi Yarışması</title>
        <meta name="description" content={`${categoryParam} kategorisinde zorlu sorular seni bekliyor. Hemen rekabete katıl!`} />
      </Helmet>


      <main className="flex-grow flex items-center justify-center px-4 pt-12 pb-12">
        <div className={`w-full max-w-4xl mx-auto flex flex-col items-center ${shake ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}>
           <style>{`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-10px); }
              50% { transform: translateX(10px); }
              75% { transform: translateX(-10px); }
            }
          `}</style>
          
          {/* Progress Indicator Segmented */}
          <div className="w-full max-w-md flex gap-2 mb-12">
            {questions.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < currentIdx ? (wrongAnswersList.includes(i) ? "bg-error" : "bg-tertiary") : 
                  i === currentIdx ? "bg-surface-variant relative overflow-hidden" : "bg-surface-variant"
                }`}
              >
                {i === currentIdx && <div className="absolute inset-0 bg-primary w-1/2 animate-pulse"></div>}
              </div>
            ))}
          </div>

          <div className="mb-6 text-center">
            <div className="text-primary tracking-widest text-sm bg-surface-container-high px-4 py-1.5 rounded-full inline-block mb-4">Skor: {score}</div>
            <br />
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase opacity-80">Soru {currentIdx + 1} / {questions.length}</span>
            <h2 className="text-sm font-medium text-on-surface-variant mt-2 capitalize">{categoryParam} • {difficultyLabel}</h2>
          </div>

          <div className="w-full bg-surface-container-low rounded-3xl p-8 md:p-16 mb-10 text-center shadow-2xl relative border border-outline-variant/10">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/5 blur-[100px] pointer-events-none"></div>
            <h1 className="text-2xl md:text-4xl font-headline font-bold leading-tight tracking-tight text-on-surface">
              {currentQ.text}
            </h1>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQ.options.map((opt, idx) => {
              const isHidden = hiddenOptions.includes(idx);
              const isSelected = selectedOption === idx;
              const isCorrectTarget = isAnswered && idx === currentQ.correctAnswer;
              const isWrongSelected = isAnswered && isSelected && idx !== currentQ.correctAnswer;
              
              let btnClass = "bg-surface-container-high border-transparent hover:border-primary/30 text-on-surface";
              let letterClass = "bg-surface-container-low text-primary";
              let icon = null;

              if (isHidden) {
                  btnClass = "bg-surface-container opacity-20 pointer-events-none";
              }
              else if (isCorrectTarget) {
                 btnClass = "bg-tertiary-container border-tertiary text-on-tertiary-container shadow-[0_0_20px_rgba(113,232,98,0.2)]";
                 letterClass = "bg-tertiary text-on-tertiary";
                 icon = <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>;
              } 
              else if (isWrongSelected) {
                 btnClass = "bg-error-container border-error text-on-error-container";
                 letterClass = "bg-error text-on-error";
                 icon = <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>;
              }
              else if (isSelected) {
                 // Temporary selected state before answer logic executes (if double dip triggers wait etc)
                 btnClass = "bg-surface-container-highest border-primary active-glow";
                 letterClass = "bg-primary text-on-primary";
              }
              else if (isDoubleDipActive && !isSelected && !isAnswered) {
                 btnClass += " ring-2 ring-primary/50"; // visual cue that game is waiting for 2nd chance
              }

              return (
                <button 
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswered || isHidden}
                  className={`group relative flex flex-col justify-center p-6 rounded-2xl transition-all duration-300 ease-out-expo border-2 ${btnClass} ${!isAnswered && !isHidden ? 'hover:-translate-y-1 hover:shadow-lg' : ''}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-6">
                      <span className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-colors ${letterClass}`}>
                        {letters[idx]}
                      </span>
                      <span className="text-lg md:text-xl font-medium text-left">{opt}</span>
                    </div>
                    <div className="opacity-100 transition-opacity flex items-center">
                       {icon}
                    </div>
                  </div>
                  
                  {audienceVotes && !isHidden && (
                    <div className="w-full mt-4 text-left">
                       <div className="flex justify-between text-xs mb-1 font-bold text-primary">
                          <span>Seyirci:</span>
                          <span>%{audienceVotes[idx]}</span>
                       </div>
                       <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${audienceVotes[idx]}%` }}></div>
                       </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button 
                onClick={use50Joker}
                disabled={joker50Used || isAnswered}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low text-sm font-medium transition-colors ${joker50Used ? 'opacity-30 line-through' : 'text-on-surface-variant hover:text-primary'}`}>
                <span className="material-symbols-outlined text-lg">lightbulb</span>
                %50 Joker
              </button>
              <div className="h-4 w-px bg-outline-variant/30"></div>
              <button 
                onClick={useAudienceJoker}
                disabled={jokerAudienceUsed || isAnswered}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low text-sm font-medium transition-colors ${jokerAudienceUsed ? 'opacity-30 line-through' : 'text-on-surface-variant hover:text-primary'}`}>
                <span className="material-symbols-outlined text-lg">groups</span>
                Seyirci
              </button>
              <div className="h-4 w-px bg-outline-variant/30"></div>
              <button 
                onClick={useDoubleDip}
                disabled={jokerDoubleUsed || isAnswered}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low text-sm font-medium transition-colors ${jokerDoubleUsed ? 'opacity-30 line-through' : (isDoubleDipActive ? 'text-primary ring-1 ring-primary' : 'text-on-surface-variant hover:text-primary')}`}>
                <span className="material-symbols-outlined text-lg">filter_2</span>
                Çift Cevap
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Background Image Layer */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <img 
          alt="Deep space nebula background" 
          className="w-full h-full object-cover grayscale opacity-[0.05]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSOT8UMPOjIMtosEpZKGC5OX9I6AZ2YGnwToxfHxAYinzu4T7qbAk6NUd2wSnKxM-_IJOAly-e_hPvoKVCo1rM-gOA3teyKt-dh5_vb1WVSzMSW6p37HVstODSRoV53mQi0PrFfqdxckxZ01Xo2cnBpnxqlvOdiA706xnHq0R9fds9M9TlbPkrIftVTfbYt4W1nsU1mUubqa9XkWrHE3bmLC3ExepRncU2Am5YPi5DaLFzUeQsvmkDx8VybdS3z0b7m5WlFf3uLOGS" 
        />
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjbqtL4E6H37mf1UBnCaO_la7dHjiTMbwDWLd1ejmEwvjzTfEbui7taw7LaljFMbxkPbj9XDbTyGpqr-vS0cxpIEEr_DELUVjZ0hV8QzIKr4YkzUH6fmEbnaHjpcWpKfMBU670TMwDEOrE4qT0GjZ53BzBxX_ZU_APSEdyrgEv_IlJa14EJ2dxjdkpPhtOMJSAy1sZDR_-hy5tPAtH5xxTLWn1uho1MWIkzG7hMsrUzyfTLO0aBYMs5tjTqquoBLG0xE0jXtxivb2K')" }}></div>
      </div>

      {/* Quit Button */}
      <button 
        onClick={() => setIsQuitModalOpen(true)}
        className="fixed top-6 left-6 w-12 h-12 rounded-full bg-surface-container-low border border-outline-variant/10 text-on-surface-variant hover:text-error hover:bg-error/10 transition-all z-40 flex items-center justify-center shadow-lg group"
      >
        <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">close</span>
      </button>

      {/* Confirmation Modal */}
      {isQuitModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-[#041329]/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsQuitModalOpen(false)}
          ></div>
          <div className="relative bg-surface-container-high rounded-[2rem] p-8 md:p-12 max-w-sm w-full text-center shadow-2xl border border-outline-variant/20 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-4xl">warning</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-4">Ayrılmak İstiyor Musunuz?</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Yarışmadan şimdi ayrılırsanız tüm ilerlemeniz ve puanınız silinecektir. Devam etmek istediğinize emin misiniz?
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => navigate("/")}
                className="w-full py-4 bg-error text-white font-bold rounded-xl hover:bg-error/90 transition-colors shadow-lg shadow-error/20"
              >
                Evet, Ayrıl
              </button>
              <button 
                onClick={() => setIsQuitModalOpen(false)}
                className="w-full py-4 bg-surface-container-highest text-on-surface font-bold rounded-xl hover:bg-surface-container-highest/80 transition-colors"
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
