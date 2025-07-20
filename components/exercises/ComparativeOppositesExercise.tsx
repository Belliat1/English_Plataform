"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  word: string;
  correct: string;
  options: string[];
};

const questions: Question[] = [
  { word: "younger", correct: "older", options: ["older", "happier", "shorter", "thinner"] },
  { word: "colder", correct: "hotter", options: ["hotter", "shorter", "fatter", "easier"] },
  { word: "better", correct: "worse", options: ["worse", "farther", "longer", "bigger"] },
  { word: "thinner", correct: "fatter", options: ["fatter", "older", "hotter", "colder"] },
  { word: "cheaper", correct: "more expensive", options: ["more expensive", "taller", "longer", "happier"] },
  { word: "nearer", correct: "farther", options: ["farther", "shorter", "fatter", "older"] },
  { word: "sadder", correct: "happier", options: ["happier", "bigger", "smaller", "thinner"] },
  { word: "smaller", correct: "bigger", options: ["bigger", "colder", "hotter", "shorter"] },
  { word: "easier", correct: "more difficult", options: ["more difficult", "more expensive", "shorter", "happier"] },
  { word: "taller", correct: "shorter", options: ["shorter", "older", "fatter", "worse"] },
];

const ComparativeOppositesExercise = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleSelect = (index: number, option: string) => {
    const updated = [...selectedAnswers];
    updated[index] = option;
    setSelectedAnswers(updated);
  };

  const handleCheck = () => {
    const correctCount = questions.reduce((acc, q, i) => {
      return selectedAnswers[i] === q.correct ? acc + 1 : acc;
    }, 0);
    setScore(correctCount);
    setChecked(true);
  };

  const handleReset = () => {
    setSelectedAnswers(Array(questions.length).fill(""));
    setScore(null);
    setChecked(false);
  };

  return (
    <WorkshopLayout
      title="Comparatives: Opposites"
      description="Selecciona el comparativo opuesto para cada adjetivo."
    >
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {questions.map((q, i) => {
          const selected = selectedAnswers[i];
          const isCorrect = selected === q.correct;

          return (
            <div key={i} className="space-y-2">
              <p className="font-medium text-base text-gray-900 dark:text-gray-100">
                {i + 1}. <strong className="capitalize">{q.word}</strong>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {q.options.map((opt) => {
                  const isSelected = selected === opt;

                  let className =
                    "px-4 py-2 rounded border text-sm font-semibold transition text-center";

                  if (checked) {
                    if (opt === q.correct) {
                      className += " bg-green-100 text-green-800 border-green-500 dark:bg-green-700 dark:text-white";
                    } else if (isSelected) {
                      className += " bg-red-100 text-red-800 border-red-500 dark:bg-red-700 dark:text-white";
                    } else {
                      className += " bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-300";
                    }
                  } else {
                    className += isSelected
                      ? " bg-blue-100 text-blue-800 border-blue-500 dark:bg-blue-700 dark:text-white"
                      : " bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-300 hover:bg-pink-100 dark:hover:bg-pink-700";
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelect(i, opt)}
                      disabled={checked}
                      className={className}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {checked && selected !== q.correct && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Respuesta correcta: <strong>{q.correct}</strong>
                </p>
              )}
            </div>
          );
        })}

        {/* Resultado */}
        <div className="mt-6 flex flex-col items-center gap-4">
          {checked && (
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Tu puntaje: {score}/{questions.length}
            </p>
          )}

          <div className="flex gap-4">
            {!checked && (
              <button
                onClick={handleCheck}
                className="button button--primary"
                disabled={selectedAnswers.includes("")}
              >
                Revisar
              </button>
            )}
            {checked && (
              <button
                onClick={handleReset}
                className="button button--secondary"
              >
                Reiniciar
              </button>
            )}
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default ComparativeOppositesExercise;
