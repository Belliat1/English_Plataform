"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  prompt: string;
  options: string[];
  correct: string;
};

const questions: Question[] = [
{
    prompt: "What do you think of the new movie?",
    options: [
      "I think it's amazing.",
      "Let's go shopping.",
      "He is my brother.",
    ],
    correct: "I think it's amazing.",
  },
  {
    prompt: "Do you like living in the city?",
    options: [
      "In my opinion, it's too noisy.",
      "Where is the supermarket?",
      "I am eating lunch.",
    ],
    correct: "In my opinion, it's too noisy.",
  },
  {
    prompt: "How do you feel about studying online?",
    options: [
      "She studies at night.",
      "I believe it's convenient.",
      "This is my book.",
    ],
    correct: "I believe it's convenient.",
  },
  {
    prompt: "What do you think about fast food?",
    options: [
      "He is a doctor.",
      "In my opinion, it's unhealthy.",
      "I go to work by car.",
    ],
    correct: "In my opinion, it's unhealthy.",
  },
  {
    prompt: "Do you enjoy learning English?",
    options: [
      "I personally love it.",
      "It's raining outside.",
      "He plays football.",
    ],
    correct: "I personally love it.",
  },
  {
    prompt: "What’s your opinion on social media?",
    options: [
      "In my opinion, it’s a powerful tool.",
      "She uses Instagram.",
      "He reads a lot of news.",
    ],
    correct: "In my opinion, it’s a powerful tool.",
  },
  {
    prompt: "How do you feel about working from home?",
    options: [
      "I think it’s very flexible.",
      "He walks to the office.",
      "The coffee is ready.",
    ],
    correct: "I think it’s very flexible.",
  },
  {
    prompt: "Do you think exercise is important?",
    options: [
      "I believe it’s essential for health.",
      "She goes to the gym every day.",
      "It’s sunny today.",
    ],
    correct: "I believe it’s essential for health.",
  },
  {
    prompt: "What’s your opinion on public transport?",
    options: [
      "In my opinion, it’s efficient and eco-friendly.",
      "He takes the bus to school.",
      "I ride my bike.",
    ],
    correct: "In my opinion, it’s efficient and eco-friendly.",
  },
  {
    prompt: "How do you feel about reading books?",
    options: [
      "I personally think reading is very relaxing.",
      "This book is blue.",
      "He is reading now.",
    ],
    correct: "I personally think reading is very relaxing.",
  },
];

const OpinionExpressionExercise = () => {
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
      alert(`Quiz completed! Your score is ${score}/${questions.length}`);
      setIndex(0);
      setSelected(null);
      setShowResult(false);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout
      title="Opinion Practice"
      description="Selecciona la mejor forma de expresar tu opinión para cada situación."
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        <h2 className="text-xl font-medium text-center">{current.prompt}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {current.options.map((option) => {
            const isCorrect = option === current.correct;
            const isSelected = selected === option;

            let styles =
              "px-4 py-2 rounded border text-sm font-medium transition";

            if (showResult && isSelected) {
              styles += isCorrect
                ? " bg-green-100 border-green-500 text-green-700"
                : " bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              styles += " border-blue-400 bg-blue-50";
            } else {
              styles += " border-gray-300 bg-white hover:bg-pink-50";
            }

            return (
              <button
                key={option}
                onClick={() => setSelected(option)}
                disabled={showResult}
                className={styles}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <p
            className={`mt-4 font-semibold ${
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
          Puntuación: {score}/{questions.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default OpinionExpressionExercise;
