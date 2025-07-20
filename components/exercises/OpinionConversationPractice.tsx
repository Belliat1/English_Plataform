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
      "A: What do you think of the new café in town?",
      "B: I think it's a great place to relax and work."
    ],
    question: "What is B’s opinion?",
    options: [
      "He thinks the café is noisy.",
      "He likes the café.",
      "He wants to go home."
    ],
    correct: "He likes the café.",
  },
  {
    dialogue: [
      "A: Do you like living in this neighborhood?",
      "B: In my opinion, it's too far from the city center."
    ],
    question: "What is B’s opinion?",
    options: [
      "He likes living nearby.",
      "He thinks it's too far.",
      "He loves the city center."
    ],
    correct: "He thinks it's too far.",
  },
  {
    dialogue: [
      "A: How do you feel about online learning?",
      "B: I believe it’s very convenient and flexible."
    ],
    question: "What does B think about online learning?",
    options: [
      "He finds it flexible.",
      "He hates it.",
      "He prefers books."
    ],
    correct: "He finds it flexible.",
  },
  {
    dialogue: [
      "A: What do you think about the weather today?",
      "B: Honestly, I think it's too hot to do anything."
    ],
    question: "What is B’s opinion?",
    options: [
      "He likes the heat.",
      "He thinks it’s too hot.",
      "He wants to go swimming."
    ],
    correct: "He thinks it’s too hot.",
  },
  {
    dialogue: [
      "A: Do you enjoy watching documentaries?",
      "B: Personally, I find them very informative."
    ],
    question: "What does B think of documentaries?",
    options: [
      "They are boring.",
      "They are fun.",
      "They are informative."
    ],
    correct: "They are informative.",
  }
];

const OpinionConversationPractice = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = conversations[index];

  const handleCheck = () => {
    if (!selected) return;
    if (selected === current.correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (index + 1 < conversations.length) {
      setIndex(index + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      alert(`¡Has terminado! Tu puntaje: ${score} / ${conversations.length}`);
      setIndex(0);
      setSelected(null);
      setShowResult(false);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout title="Opinion Conversation Practice" description="Lee la conversación y selecciona la mejor respuesta sobre la opinión.">
      <div className="max-w-2xl mx-auto flex flex-col gap-6 px-4 py-6">

        <div className="bg-gray-100 border rounded-md p-4">
          {current.dialogue.map((line, i) => (
            <p key={i} className="text-gray-800 mb-2">{line}</p>
          ))}
        </div>

        <p className="font-semibold text-lg text-gray-700">{current.question}</p>

        <div className="grid gap-3">
          {current.options.map((option) => {
            const isCorrect = option === current.correct;
            const isSelected = option === selected;

            let style = "px-4 py-2 rounded border text-sm font-medium transition";

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
                className={style}
                onClick={() => setSelected(option)}
                disabled={showResult}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <p className={`mt-2 font-semibold text-center ${selected === current.correct ? "text-green-600" : "text-red-600"}`}>
            {selected === current.correct
              ? "¡Correcto!"
              : `Incorrecto. La respuesta correcta es: "${current.correct}"`}
          </p>
        )}

        <div className="flex gap-4 mt-6 justify-center">
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

        <p className="text-sm text-gray-500 mt-2 text-center">
          Puntaje: {score} / {conversations.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default OpinionConversationPractice;
