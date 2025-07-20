"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type ConversationLine = {
  speaker: "A" | "B";
  text: string; // contiene ___ como hueco
  correct: string;
  options: string[];
};

const conversation: ConversationLine[] = [
  {
    speaker: "A",
    text: "Hey! Can you ___ the TV? I want to watch the news.",
    correct: "turn on",
    options: ["turn on", "look for", "give up", "check in"],
  },
  {
    speaker: "B",
    text: "Sure! I’ll ___ the volume too, it’s too low.",
    correct: "turn up",
    options: ["turn up", "put on", "wake up", "take off"],
  },
  {
    speaker: "A",
    text: "Thanks! I also need to ___ my notes for the test.",
    correct: "look for",
    options: ["check out", "look for", "write down", "wake up"],
  },
  {
    speaker: "B",
    text: "Don’t forget to ___ your answers on the paper.",
    correct: "write down",
    options: ["write down", "turn off", "hang up", "take off"],
  },
];

const PhrasalConversationPractice = () => {
  const [answers, setAnswers] = useState<{ [index: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number, value: string) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleCheck = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-6">
        {conversation.map((line, idx) => {
          const selected = answers[idx];
          const isCorrect = selected === line.correct;

          return (
            <div key={idx} className="border p-4 rounded-md bg-white shadow-sm">
              <p className="mb-2 text-sm font-semibold text-gray-500">
                {line.speaker === "A" ? "🧑 A" : "👩 B"}
              </p>
              <p className="text-md mb-3">
                {line.text.replace("___", "______")}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {line.options.map((option) => {
                  const isSelected = selected === option;

                  let style =
                    "px-3 py-2 rounded border text-sm font-medium transition";

                  if (showResult && isSelected) {
                    style += isCorrect
                      ? " bg-green-100 border-green-500 text-green-700"
                      : " bg-red-100 border-red-500 text-red-700";
                  } else if (isSelected) {
                    style += " border-blue-400 bg-blue-50";
                  } else {
                    style += " border-gray-300 bg-white hover:bg-pink-50";
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(idx, option)}
                      disabled={showResult}
                      className={style}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <p className={`mt-2 text-sm ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {isCorrect ? "✅ Correcto" : `❌ Correcto: ${line.correct}`}
                </p>
              )}
            </div>
          );
        })}

        <div className="mt-6 flex gap-4 justify-center">
          {!showResult && (
            <button
              onClick={handleCheck}
              className="button button--primary"
              disabled={Object.keys(answers).length !== conversation.length}
            >
              Revisar
            </button>
          )}
          {showResult && (
            <button onClick={handleReset} className="button button--secondary">
              Reiniciar
            </button>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default PhrasalConversationPractice;