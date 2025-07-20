"use client";

import React, { useState } from "react";
import Image from "next/image";

const questions = [
  { subject: "I", profession: "nurse", correct: "am" },
  { subject: "You", profession: "painter", correct: "are" },
  { subject: "He", profession: "reporter", correct: "is" },
  { subject: "She", profession: "scientist", correct: "is" },
  { subject: "We", profession: "singer", correct: "are" },
  { subject: "They", profession: "chefs", correct: "are" },
  { subject: "You", profession: "dancers", correct: "are" },
  { subject: "He", profession: "engineer", correct: "is" },
];

const ToBeProfessionsExercise = () => {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index: number, value: string) => {
    const updated = [...userAnswers];
    updated[index] = value;
    setUserAnswers(updated);
  };

  const checkAnswers = () =>
    userAnswers.map((ans, i) => ans === questions[i].correct);

  const results = checkAnswers();

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">
        Complete with the correct form of "to be"
      </h2>

      {questions.map((q, i) => (
        <div key={i} className="flex items-center gap-4">
          <Image
            src={`/assets/professions/${q.profession}.png`}
            alt={q.profession}
            width={80}
            height={80}
            className="rounded"
          />
          <span className="text-lg">
            {q.subject}{" "}
            <select
            aria-label="Select a category"
              value={userAnswers[i] || ""}
              onChange={(e) => handleChange(i, e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="">--</option>
              <option value="am">am</option>
              <option value="is">is</option>
              <option value="are">are</option>
            </select>{" "}
            a {q.profession}.
          </span>
          {submitted && userAnswers[i] !== null && (
            <span className="ml-2 text-xl">
              {results[i] ? "✅" : "❌"}
            </span>
          )}
        </div>
      ))}

      <div className="text-center mt-6">
        <button
          onClick={() => setSubmitted(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded"
        >
          Revisar
        </button>
      </div>

      {submitted && (
        <div className="text-center mt-4 text-lg font-medium">
          Obtuviste {results.filter(Boolean).length} de {questions.length} correctas.
        </div>
      )}
    </div>
  );
};

export default ToBeProfessionsExercise;
