"use client";

import React, { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const greetingQuestions = [
  {
    en: "When we arrive we say:",
    es: "Cuando llegamos decimos:",
    options: ["Hello", "Goodbye", "See you"],
    correct: "Hello",
  },
  {
    en: "When we leave we say:",
    es: "Cuando nos vamos decimos:",
    options: ["Hello", "Hi", "Goodbye"],
    correct: "Goodbye",
  },
  {
    en: "When we meet someone for the first time we say:",
    es: "Cuando conocemos a alguien por primera vez decimos:",
    options: ["Pleased", "Nice to meet you", "Enchanted"],
    correct: "Nice to meet you",
  },
  {
    en: "At a hotel, the receptionist says:",
    es: "En un hotel, el recepcionista dice:",
    options: ["What's happening?", "Welcome", "What's up?"],
    correct: "Welcome",
  },
  {
    en: "At 9 a.m., you say:",
    es: "A las 9 a.m. dices:",
    options: ["Good evening", "Good afternoon", "Good morning"],
    correct: "Good morning",
  },
];

const GreetingsQuizForm = () => {
  const [answers, setAnswers] = useState(Array(greetingQuestions.length).fill(""));
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getFeedbackIcon = (index) => {
    if (!showResults) return null;
    const isCorrect = answers[index] === greetingQuestions[index].correct;
    return (
      <span className={`ml-2 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
        {isCorrect ? "✔️" : "❌"}
      </span>
    );
  };

  return (
    <WorkshopLayout
      title="Greetings Quiz"
      description="Selecciona la respuesta correcta relacionada con saludos y despedidas."
    >
      <div className="space-y-6">
        {greetingQuestions.map((q, i) => (
          <div key={i} className="flex flex-col gap-2">
            <label className="font-semibold dark:text-white">
              {i + 1}. {q.en}
              <br />
              <span className="text-sm text-gray-600 dark:text-gray-400 italic">{q.es}</span>
              {getFeedbackIcon(i)}
            </label>

            <select
              value={answers[i]}
              onChange={(e) => handleSelect(i, e.target.value)}
              className="border rounded p-2 dark:bg-gray-800 dark:text-white"
            >
              <option value="">-- Select an answer --</option>
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
      </div>
    </WorkshopLayout>
  );
};

export default GreetingsQuizForm;
