"use client";

import React, { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const questions = [
  {
    sentence: "___ am a student.",
    correct: "I",
    options: ["I", "He", "They"],
    translation: "___ soy un estudiante.",
  },
  {
    sentence: "___ is my brother.",
    correct: "He",
    options: ["We", "She", "He"],
    translation: "___ es mi hermano.",
  },
  {
    sentence: "___ are friends.",
    correct: "They",
    options: ["It", "They", "She"],
    translation: "___ son amigos.",
  },
  {
    sentence: "___ are my parents.",
    correct: "You",
    options: ["You", "I", "He"],
    translation: "___ son mis padres.",
  },
  {
    sentence: "___ is a cat.",
    correct: "It",
    options: ["It", "You", "They"],
    translation: "___ es un gato.",
  },
  {
    sentence: "___ are from Mexico.",
    correct: "We",
    options: ["He", "We", "It"],
    translation: "___ somos de México.",
  },
];

const SubjectPronounsQuiz = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getFeedbackIcon = (index: number) => {
    if (!showResults) return null;
    const isCorrect = answers[index] === questions[index].correct;
    return (
      <span className={`ml-2 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
        {isCorrect ? "✔️" : "❌"}
      </span>
    );
  };

  const score = answers.reduce((acc, val, index) => {
    return val === questions[index].correct ? acc + 1 : acc;
  }, 0);

  return (
    <WorkshopLayout
      title="Subject Pronouns Quiz"
      description="Selecciona el pronombre correcto para completar cada oración."
    >
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="flex flex-col gap-2">
            <label className="font-semibold dark:text-white">
              {i + 1}. {q.sentence}
              <br />
              <span className="text-sm italic text-gray-600 dark:text-gray-400">
                {q.translation}
              </span>
              {getFeedbackIcon(i)}
            </label>

            <select
              value={answers[i]}
              onChange={(e) => handleSelect(i, e.target.value)}
              className="border rounded p-2 dark:bg-gray-800 dark:text-white"
            >
              <option value="">-- Elige un pronombre --</option>
              {q.options.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="button button--primary mt-4 text-sm px-4 py-2"
        >
          Revisar
        </button>

        {showResults && (
          <div className="mt-6 text-lg font-medium dark:text-white text-center">
            Obtuviste {score} de {questions.length} respuestas correctas.
          </div>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default SubjectPronounsQuiz;
