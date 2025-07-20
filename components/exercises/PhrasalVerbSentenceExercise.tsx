"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  sentence: string; // Frase con el hueco "__"
  correct: string; // Respuesta correcta
  options: string[]; // Opciones posibles
};

const phrasalVerbQuestions: Question[] = [
  {
    sentence: "Can you ___ the lights? It's too dark.",
    correct: "turn on",
    options: ["turn on", "take off", "give up", "wake up"],
  },
  {
    sentence: "I need to ___ my shoes before entering the house.",
    correct: "take off",
    options: ["turn up", "take off", "pick up", "write down"],
  },
  {
    sentence: "He ___ smoking last year.",
    correct: "gave up",
    options: ["got up", "gave up", "turned off", "picked up"],
  },
  {
    sentence: "I’m ___ my keys. Have you seen them?",
    correct: "looking for",
    options: ["calling back", "looking for", "checking in", "turning down"],
  },
  {
    sentence: "We ___ at the hotel at 3 p.m.",
    correct: "checked in",
    options: ["checked in", "gave up", "ran out of", "hung up"],
  },
];

const PhrasalVerbSentenceExercise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = phrasalVerbQuestions[currentIndex];
  const isCorrect = selected === current.correct;

  const handleCheck = () => {
    if (!selected) return;
    if (isCorrect) setScore((prev) => prev + 1);
    setShowResult(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    if (currentIndex + 1 < phrasalVerbQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`✅ Tu puntaje final es ${score}/${phrasalVerbQuestions.length}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        <p className="text-lg font-medium text-center">
          {current.sentence.replace("___", "______")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {current.options.map((option) => {
            const isSelected = selected === option;

            let style =
              "px-4 py-2 rounded border text-sm font-semibold transition";

            if (showResult && isSelected) {
              style += isCorrect
                ? " bg-green-100 border-green-500 text-green-700"
                : " bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              style += " border-blue-400 bg-blue-50";
            } else {
              style += " border-gray-300 bg-white hover:bg-pink-50";
            }

            return (
              <button
                key={option}
                onClick={() => setSelected(option)}
                disabled={showResult}
                className={style}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Botones */}
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

        {/* Puntaje parcial */}
        <p className="text-sm text-gray-600 mt-4">
          Pregunta {currentIndex + 1} de {phrasalVerbQuestions.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default PhrasalVerbSentenceExercise;
