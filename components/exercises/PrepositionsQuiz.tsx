"use client";

import React, { useState } from "react";
import Image from "next/image";

const questions = [
  {
    image: "On Preposition of Place.png",
    correct: "on",
    options: ["under", "on", "behind"],
  },
  {
    image: "Under Preposition of Place.png",
    correct: "under",
    options: ["on", "under", "in front of"],
  },
  {
    image: "In Front of Preposition of Place.png",
    correct: "in front of",
    options: ["next to", "under", "in front of"],
  },
  {
    image: "Behind Preposition of Place.png",
    correct: "behind",
    options: ["inside", "behind", "under"],
  },
  {
    image: "Inside Preposition of Place.png",
    correct: "inside",
    options: ["on", "inside", "next to"],
  },
  {
    image: "Between Preposition of Place.png",
    correct: "between",
    options: ["among", "next to", "between"],
  },
];

const PrepositionsChickensQuiz = () => {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index: number, value: string) => {
    const updated = [...userAnswers];
    updated[index] = value;
    setUserAnswers(updated);
  };

  const results = userAnswers.map(
    (answer, i) => answer === questions[i].correct
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-2">
        Choose the correct preposition
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {questions.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Image
              src={`/assets/prepositions/${q.image}`}
              alt={`Preposition ${i + 1}`}
              width={140}
              height={140}
              className="border rounded"
            />
            <select
            aria-label="Select a category"
              value={userAnswers[i] || ""}
              onChange={(e) => handleChange(i, e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded text-center"
            >
              <option value="">Choose...</option>
              {q.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {submitted && userAnswers[i] !== null && (
              <span className="text-xl">
                {results[i] ? "✅" : "❌"}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setSubmitted(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded font-semibold"
        >
          Revisar
        </button>
      </div>

      {submitted && (
        <div className="text-center text-lg mt-4 font-medium">
          Obtuviste {results.filter(Boolean).length} de {questions.length} correctas.
        </div>
      )}
    </div>
  );
};

export default PrepositionsChickensQuiz;
