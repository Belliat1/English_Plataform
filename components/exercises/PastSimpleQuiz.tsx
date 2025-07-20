"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  sentence: string;
  options: string[];
  correct: string;
};

const questions: Question[] = [
  {
    sentence: "She ___ (go) to the cinema last night.",
    options: ["goed", "went", "goes"],
    correct: "went",
  },
  {
    sentence: "They ___ (play) football in the park.",
    options: ["played", "plays", "play"],
    correct: "played",
  },
  {
    sentence: "I ___ (eat) a big pizza for dinner.",
    options: ["ate", "eated", "eats"],
    correct: "ate",
  },
  {
    sentence: "We ___ (watch) TV all evening.",
    options: ["watch", "watched", "watches"],
    correct: "watched",
  },
  {
    sentence: "He ___ (buy) a new car last week.",
    options: ["buyed", "bought", "buys"],
    correct: "bought",
  },
];

const PastSimpleQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = questions[currentIndex];

  const handleCheck = () => {
    if (!selected) return;
    if (selected === current.correct) {
      setScore((prev) => prev + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`¡Has terminado! Tu puntaje final es ${score}/${questions.length}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout
    >
      <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-6 items-center">
        {/* Explicación en español */}
        {currentIndex === 0 && !showResult && (
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded text-sm">
            <p className="mb-2 font-semibold">📘 ¿Cómo se forma el pasado simple?</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                ✅ Los <strong>verbos regulares</strong> se forman agregando <code>-ed</code> al final del verbo:
                <br />
                <code>play</code> → <code>played</code>, <code>watch</code> → <code>watched</code>.
              </li>
              <li>
                ⚠️ Los <strong>verbos irregulares</strong> cambian completamente su forma:
                <br />
                <code>go</code> → <code>went</code>, <code>buy</code> → <code>bought</code>, <code>eat</code> → <code>ate</code>.
              </li>
              <li>
                Se usa el pasado simple para hablar de acciones completadas en el pasado.
              </li>
            </ul>
          </div>
        )}

        {/* Pregunta */}
        <p className="text-xl font-medium text-center">{current.sentence}</p>

        {/* Opciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {current.options.map((option) => {
            const isCorrect = option === current.correct;
            const isSelected = selected === option;

            let base =
              "px-4 py-2 rounded border text-sm font-semibold transition";

            if (showResult && isSelected) {
              base += isCorrect
                ? " bg-green-100 border-green-500 text-green-700"
                : " bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              base += " border-blue-400 bg-blue-50";
            } else {
              base += " border-gray-300 bg-white hover:bg-pink-50";
            }

            return (
              <button
                key={option}
                onClick={() => setSelected(option)}
                disabled={showResult}
                className={base}
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

        {/* Puntaje */}
        <p className="text-sm text-gray-600">
          Puntaje: {score} / {questions.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default PastSimpleQuiz;
