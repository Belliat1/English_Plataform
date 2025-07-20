"use client";

import React, { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const quizData = [
  {
    id: 1,
    sentence: "I was tired,",
    options: ["although", "but", "because"],
    correct: "but",
    after: "I went to the party."
  },
  {
    id: 2,
    sentence: "She studied hard,",
    options: ["so", "while", "however"],
    correct: "so",
    after: "she passed the test."
  },
  {
    id: 3,
    sentence: "I didn’t go out",
    options: ["because", "although", "and"],
    correct: "because",
    after: "it was raining."
  },
  {
    id: 4,
    sentence: "We arrived on time,",
    options: ["and", "but", "while"],
    correct: "and",
    after: "the others were late."
  },
  {
    id: 5,
    sentence: "He was tired,",
    options: ["however", "because", "while"],
    correct: "however",
    after: "he kept working."
  },
  {
    id: 6,
    sentence: "Although he is rich,",
    options: ["he is generous.", "but he is generous.", "and he is generous."],
    correct: "he is generous.",
    after: ""
  },
  {
    id: 7,
    sentence: "We didn’t have dinner,",
    options: ["because", "so", "although"],
    correct: "so",
    after: "we were very hungry."
  },
  {
    id: 8,
    sentence: "He didn’t go to work",
    options: ["because", "but", "so"],
    correct: "because",
    after: "he was ill."
  },
  {
    id: 9,
    sentence: "It was raining,",
    options: ["but", "so", "while"],
    correct: "but",
    after: "we still went for a walk."
  },
  {
    id: 10,
    sentence: "She was talking",
    options: ["while", "because", "so"],
    correct: "while",
    after: "I was cooking."
  }
];

const ConnectorsQuiz = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (id: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleCheck = () => {
    setShowFeedback(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowFeedback(false);
  };

  return (
    <WorkshopLayout

    >
      <div className="space-y-5 max-w-3xl mx-auto">
        {quizData.map((item) => {
          const selected = answers[item.id];
          const isCorrect = selected === item.correct;

          return (
            <div key={item.id} className="flex flex-col gap-1">
              <span className="text-gray-700 font-medium">
                {item.sentence}{" "}
                <select
                aria-label="Select a category"
                  className={`px-3 py-1 rounded border ${
                    showFeedback
                      ? isCorrect
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  value={selected || ""}
                  onChange={(e) => handleSelect(item.id, e.target.value)}
                >
                  <option value="">Selecciona</option>
                  {item.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>{" "}
                {item.after}
              </span>

              {showFeedback && (
                <span
                  className={`text-sm ${
                    isCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isCorrect
                    ? "✅ Correcto"
                    : `❌ Incorrecto. Respuesta: "${item.correct}"`}
                </span>
              )}
            </div>
          );
        })}

        <div className="flex gap-4 mt-6 justify-center">
          <button
            onClick={handleCheck}
            className="px-4 py-2 border border-pink-500 text-pink-600 rounded hover:bg-pink-50"
          >
            Revisar
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 border border-pink-500 text-pink-600 rounded hover:bg-pink-50"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default ConnectorsQuiz;
