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
    sentence: "I ______ visit my grandmother this weekend.",
    options: ["will", "am going to"],
    correct: "am going to",
  },
  {
    sentence: "It's very late! I think I ______ go to bed now.",
    options: ["will", "am going to"],
    correct: "will",
  },
  {
    sentence: "Look at those clouds! It ______ rain soon.",
    options: ["will", "is going to"],
    correct: "is going to",
  },
  {
    sentence: "We ______ travel to Japan next summer. We bought the tickets!",
    options: ["will", "are going to"],
    correct: "are going to",
  },
  {
    sentence: "She’s tired. She ______ take a nap.",
    options: ["will", "is going to"],
    correct: "is going to",
  },
  {
    sentence: "Don’t worry, I ______ help you with your homework.",
    options: ["will", "am going to"],
    correct: "will",
  },
  {
    sentence: "They ______ get married next month. The invitations are ready.",
    options: ["are going to", "will"],
    correct: "are going to",
  },
  {
    sentence: "Watch out! You ______ fall!",
    options: ["are going to", "will"],
    correct: "are going to",
  },
  {
    sentence: "Maybe we ______ go to the cinema later.",
    options: ["will", "are going to"],
    correct: "will",
  },
  {
    sentence: "He ______ call you when he arrives.",
    options: ["will", "is going to"],
    correct: "will",
  },
];

const FuturePlansExercise = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = questions[index];

  const handleCheck = () => {
    if (!selected) return;
    if (selected === current.correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      alert(`¡Has terminado! Tu puntaje fue ${score} de ${questions.length}`);
      setIndex(0);
      setScore(0);
      setSelected(null);
      setShowResult(false);
    }
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        <p className="text-xl font-medium text-center">{current.sentence}</p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          {current.options.map((option) => {
            const isCorrect = option === current.correct;
            const isSelected = option === selected;

            let baseClass = "px-4 py-2 border rounded text-sm font-medium";
            let feedbackStyle = "";

            if (showResult && isSelected) {
              feedbackStyle = isCorrect
                ? "bg-green-100 border-green-500 text-green-700"
                : "bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              feedbackStyle = "bg-blue-100 border-blue-400";
            } else {
              feedbackStyle = "bg-white border-gray-300 hover:bg-pink-50";
            }

            return (
              <button
                key={option}
                className={`${baseClass} ${feedbackStyle}`}
                onClick={() => setSelected(option)}
                disabled={showResult}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <p
            className={`mt-4 text-center font-semibold ${
              selected === current.correct ? "text-green-600" : "text-red-600"
            }`}
          >
            {selected === current.correct
              ? "¡Correcto!"
              : `Incorrecto. La respuesta correcta es: "${current.correct}"`}
          </p>
        )}

        <div className="mt-6 flex gap-4">
          {!showResult ? (
            <button
              onClick={handleCheck}
              disabled={!selected}
              className="button button--primary"
            >
              Revisar
            </button>
          ) : (
            <button onClick={handleNext} className="button button--secondary">
              Siguiente
            </button>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Puntaje: {score} / {questions.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default FuturePlansExercise;