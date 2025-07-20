"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type FillQuestion = {
  sentence: string;
  answer: string;
  options: string[];
};

const questions: FillQuestion[] = [
  {
    sentence: "She ________ (read) a book.",
    answer: "is reading",
    options: ["reads", "is reading", "read", "was reading"],
  },
  {
    sentence: "They ________ (play) soccer in the park.",
    answer: "are playing",
    options: ["are playing", "play", "were playing", "is playing"],
  },
  {
    sentence: "I ________ (cook) dinner now.",
    answer: "am cooking",
    options: ["cooked", "am cooking", "cook", "was cooking"],
  },
  {
    sentence: "We ________ (study) English at the moment.",
    answer: "are studying",
    options: ["study", "are studying", "studied", "were studying"],
  },
  {
    sentence: "He ________ (watch) TV.",
    answer: "is watching",
    options: ["is watching", "watches", "watch", "watched"],
  },
  {
    sentence: "You ________ (listen) to music.",
    answer: "are listening",
    options: ["are listening", "listen", "listened", "is listening"],
  },
  {
    sentence: "The dog ________ (sleep) under the table.",
    answer: "is sleeping",
    options: ["is sleeping", "sleeps", "was sleeping", "sleep"],
  },
  {
    sentence: "I ________ (write) an email.",
    answer: "am writing",
    options: ["am writing", "write", "was writing", "wrote"],
  },
];

const PresentContinuousFillInTheBlanks = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[current];
  const isCorrect = selected === question.answer;

  const handleCheck = () => {
    if (!selected) return;
    setShowResult(true);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      alert(`¡Has terminado! Tu puntaje final es ${score}/${questions.length}`);
      setCurrent(0);
      setSelected(null);
      setShowResult(false);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-xl mx-auto flex flex-col gap-6 items-center px-4 py-8">
        <p className="text-xl text-center font-medium">
          {question.sentence.replace("________", "_____")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {question.options.map((opt) => {
            const isSelected = selected === opt;
            const correct = showResult && opt === question.answer;
            const incorrect = showResult && isSelected && !correct;

            let style =
              "px-4 py-2 rounded border text-center font-medium cursor-pointer transition";

            if (correct) {
              style += " bg-green-100 border-green-500 text-green-700";
            } else if (incorrect) {
              style += " bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              style += " bg-blue-100 border-blue-400";
            } else {
              style += " bg-white border-gray-300 hover:bg-pink-50";
            }

            return (
              <button
                key={opt}
                onClick={() => setSelected(opt)}
                disabled={showResult}
                className={style}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="flex gap-4 mt-6">
          {!showResult && (
            <button
              onClick={handleCheck}
              disabled={!selected}
              className="button button--primary"
            >
              Revisar
            </button>
          )}
          {showResult && (
            <button onClick={handleNext} className="button button--secondary">
              Siguiente
            </button>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default PresentContinuousFillInTheBlanks;
