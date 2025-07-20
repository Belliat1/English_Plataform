"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  image: string;
  sentence: string;
  correct: string;
  frequency: number; // entre 1 y 5
  options: string[];
};

const frequencyData: Question[] = [
  {
    image: "Daily routine png-10.png",
    sentence: "She ___ eats lunch.",
    correct: "usually",
    frequency: 4,
    options: ["never", "always", "sometimes", "usually"],
  },
  {
    image: "Daily routine png-17.png",
    sentence: "She ___ walks the dog.",
    correct: "always",
    frequency: 5,
    options: ["always", "never", "rarely", "sometimes"],
  },
  {
    image: "Daily routine png-22.png",
    sentence: "She ___ goes to bed early.",
    correct: "sometimes",
    frequency: 2,
    options: ["never", "always", "usually", "sometimes"],
  },
  {
    image: "Daily routine png-04.png",
    sentence: "She ___ has breakfast.",
    correct: "always",
    frequency: 5,
    options: ["always", "rarely", "never", "sometimes"],
  },
  {
    image: "Daily routine png-15.png",
    sentence: "She ___ goes running.",
    correct: "rarely",
    frequency: 1,
    options: ["never", "rarely", "often", "usually"],
  },
  {
    image: "Daily routine png-12.png",
    sentence: "She ___ reads a book.",
    correct: "often",
    frequency: 3,
    options: ["often", "rarely", "never", "usually"],
  },
  {
    image: "Daily routine png-14.png",
    sentence: "She ___ drinks water.",
    correct: "always",
    frequency: 5,
    options: ["never", "rarely", "always", "sometimes"],
  },
  {
    image: "Daily routine png-02.png",
    sentence: "She ___ uses the toilet before bed.",
    correct: "usually",
    frequency: 4,
    options: ["sometimes", "usually", "never", "rarely"],
  },
];

const FrequencyQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number>(0);

  const question = frequencyData[currentIndex];

  const handleCheck = () => {
    if (!selected) return;
    setShowResult(true);
    if (selected === question.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    if (currentIndex + 1 < frequencyData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        {/* Imagen con frecuencia */}
        <div className="relative w-[360px] h-[240px] border rounded overflow-hidden">
          <Image
            src={`/assets/routines/${question.image}`}
            alt="Routine"
            fill
            className="object-contain"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-5 h-5 border-2 ${
                  i < question.frequency ? "bg-green-500" : "bg-white"
                } border-green-600`}
              />
            ))}
          </div>
        </div>

        {/* Enunciado */}
        <p className="text-xl font-medium text-center">{question.sentence}</p>

        {/* Opciones */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {question.options.map((option) => {
            const isCorrect = option === question.correct;
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
        <div className="mt-6 flex gap-4">
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

        {/* Puntaje visible */}
        <div className="mt-4 text-lg font-semibold text-gray-700">
          Puntuación actual: {score}/{frequencyData.length}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default FrequencyQuiz;
