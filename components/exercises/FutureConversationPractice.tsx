"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Conversation = {
  dialogue: string[];
  question: string;
  options: string[];
  correct: string;
};

const conversations: Conversation[] = [
  {
    dialogue: [
      "A: What are you going to do this weekend?",
      "B: I’m going to visit my grandparents. We planned it last week.",
    ],
    question: "Why is she visiting her grandparents?",
    options: [
      "Because she misses them",
      "Because she planned it before",
      "Because they invited her today",
    ],
    correct: "Because she planned it before",
  },
  {
    dialogue: [
      "A: It’s cold in here.",
      "B: I’ll close the window.",
    ],
    question: "Why does B offer to close the window?",
    options: [
      "He already planned it",
      "He decided at the moment",
      "He was told to do it",
    ],
    correct: "He decided at the moment",
  },
  {
    dialogue: [
      "A: Are you going to join us for dinner?",
      "B: No, I’m going to stay home and study. I have a test tomorrow.",
    ],
    question: "Why is B staying home?",
    options: [
      "He is tired",
      "He doesn’t like eating out",
      "He has a test",
    ],
    correct: "He has a test",
  },
  {
    dialogue: [
      "A: We don’t have milk.",
      "B: Don’t worry. I’ll go to the store and get some.",
    ],
    question: "What does B decide to do?",
    options: [
      "Go later with A",
      "Go now to get milk",
      "Drink something else",
    ],
    correct: "Go now to get milk",
  },
  {
    dialogue: [
      "A: My phone isn’t working.",
      "B: I know. I’m going to take it to the repair shop tomorrow.",
    ],
    question: "What has B planned to do?",
    options: [
      "Fix the phone now",
      "Throw the phone away",
      "Take the phone for repair",
    ],
    correct: "Take the phone for repair",
  },
];

const FutureConversationPractice = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = conversations[index];

  const handleCheck = () => {
    if (!selected) return;
    if (selected === current.correct) {
      setScore((prev) => prev + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (index + 1 < conversations.length) {
      setIndex(index + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      alert(`¡Terminaste! Tu puntaje fue ${score} de ${conversations.length}`);
      setIndex(0);
      setSelected(null);
      setShowResult(false);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout
      title="Práctica de Conversaciones Futuras"
      description="Lee las conversaciones y responde las preguntas para practicar el uso de 'will' y 'going to'."
    >
      <div className="max-w-xl mx-auto flex flex-col gap-6 px-4 py-6">
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
          {current.dialogue.map((line, i) => (
            <p key={i} className="text-gray-800 mb-1">
              {line}
            </p>
          ))}
        </div>

        <p className="text-lg font-semibold">{current.question}</p>

        <div className="flex flex-col gap-3">
          {current.options.map((option) => {
            const isCorrect = option === current.correct;
            const isSelected = selected === option;

            let style =
              "px-4 py-2 rounded border text-sm font-medium transition";

            if (showResult && isSelected) {
              style += isCorrect
                ? " bg-green-100 border-green-500 text-green-700"
                : " bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              style += " bg-blue-100 border-blue-400";
            } else {
              style += " bg-white border-gray-300 hover:bg-pink-50";
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

        {showResult && (
          <p
            className={`mt-4 font-semibold ${
              selected === current.correct
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {selected === current.correct
              ? "¡Correcto!"
              : `Incorrecto. La respuesta correcta es: "${current.correct}"`}
          </p>
        )}

        <div className="mt-4 flex gap-4">
          {!showResult ? (
            <button
              onClick={handleCheck}
              disabled={!selected}
              className="button button--primary"
            >
              Revisar
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="button button--secondary"
            >
              Siguiente
            </button>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Puntaje: {score} / {conversations.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default FutureConversationPractice;
