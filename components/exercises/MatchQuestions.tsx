"use client";

import React, { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const data = [
  { id: 1, prompt: "Jack", answer: "What's your name?" },
  { id: 2, prompt: "11", answer: "How old are you?" },
  { id: 3, prompt: "London", answer: "Where are you from?" },
  { id: 4, prompt: "2345678", answer: "What's your phone number?" },
  { id: 5, prompt: "blue", answer: "What's your favorite color?" },
  { id: 6, prompt: "No, I don’t.", answer: "Do you have any brothers or sisters?" },
  { id: 7, prompt: "volleyball", answer: "What’s your favorite sport?" },
  { id: 8, prompt: "Yes, I have.", answer: "Do you have any pets?" },
  { id: 9, prompt: "It’s 10 o’clock.", answer: "What time is it?" },
  { id: 10, prompt: "geography", answer: "What’s your favorite subject?" },
];

// Extrae todas las respuestas posibles y las mezcla
const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const MatchQuestions = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const allAnswers = shuffleArray(data.map((item) => item.answer));

  const handleSelect = (id: number, value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCheck = () => {
    setShowResults(true);
    setShowCorrectAnswers(false);
  };

  const handleShowAnswers = () => {
    setShowCorrectAnswers(true);
    setShowResults(false);
  };

  return (
    <WorkshopLayout

    >
      <div className="w-full max-w-2xl mx-auto">
        {data.map((item, index) => {
          const selected = selectedAnswers[item.id];
          const isCorrect = selected === item.answer;

          return (
            <div key={item.id} className="flex items-center gap-3 mb-4">
              <span className="text-blue-600 font-bold w-6">{index + 1}.</span>
              <span className="min-w-[120px]">{item.prompt} →</span>
              <select
              aria-label="Select a category"
                className={`border px-3 py-1 rounded-md flex-1 ${
                  showResults
                    ? isCorrect
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50"
                    : ""
                }`}
                value={selected || ""}
                onChange={(e) => handleSelect(item.id, e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                {allAnswers.map((ans, i) => (
                  <option key={i} value={ans}>
                    {ans}
                  </option>
                ))}
              </select>

              {showCorrectAnswers && (
                <span className="text-sm text-gray-600 ml-2">
                  ✅ {item.answer}
                </span>
              )}
            </div>
          );
        })}

        <div className="flex gap-4 mt-6 justify-center">
        <button
            onClick={handleCheck}
            className="bg-pink-500 text-white px-6 py-2 rounded font-semibold shadow"
        >
            Revisar
        </button>
        <button
            onClick={handleShowAnswers}
            className="bg-gray-200 text-black px-6 py-2 rounded font-semibold shadow"
        >
            Mostrar respuestas
        </button>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default MatchQuestions;
