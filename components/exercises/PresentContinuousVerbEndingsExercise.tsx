"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  base: string;
  correct: string;
  options: string[];
};

const questions: Question[] = [
  {
    base: "run",
    correct: "running",
    options: ["runnning", "running", "runing"],
  },
  {
    base: "swim",
    correct: "swimming",
    options: ["swiming", "swimming", "swimmin"],
  },
  {
    base: "write",
    correct: "writing",
    options: ["writting", "writing", "writeing"],
  },
  {
    base: "make",
    correct: "making",
    options: ["makeing", "making", "macking"],
  },
  {
    base: "sit",
    correct: "sitting",
    options: ["siting", "sitting", "sittin"],
  },
  {
    base: "lie",
    correct: "lying",
    options: ["lieing", "lying", "lyeing"],
  },
  {
    base: "travel",
    correct: "traveling",
    options: ["travelling", "traveling", "traveeling"],
  },
  {
    base: "study",
    correct: "studying",
    options: ["studing", "studying", "studyieng"],
  },
];

const PresentContinuousVerbEndingsExercise = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[current];
  const isCorrect = selected === question.correct;

  const handleCheck = () => {
    if (!selected) return;
    setShowResult(true);
    if (selected === question.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      alert(`¡Has terminado! Tu puntaje es ${score}/${questions.length}`);
      setCurrent(0);
      setScore(0);
      setSelected(null);
      setShowResult(false);
    }
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-xl mx-auto flex flex-col gap-6 items-center px-4 py-8">
        <p className="text-xl font-medium text-center">
          ¿Cuál es la forma -ing correcta del verbo:{" "}
          <span className="text-pink-600 font-semibold">{question.base}</span>?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {question.options.map((opt) => {
            const isSelected = selected === opt;
            const correct = showResult && opt === question.correct;
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
            <button
              onClick={handleNext}
              className="button button--secondary"
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default PresentContinuousVerbEndingsExercise;
