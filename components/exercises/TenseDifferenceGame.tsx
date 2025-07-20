"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type TenseQuestion = {
  sentence: string; // frase con espacio en blanco
  options: string[]; // opciones
  correct: string;
};

const tenseQuestions: TenseQuestion[] = [
  {
    sentence: "I ___ to Paris last summer.",
    options: ["have gone", "went", "go"],
    correct: "went",
  },
  {
    sentence: "She ___ three books this year.",
    options: ["has read", "read", "reads"],
    correct: "has read",
  },
  {
    sentence: "We ___ dinner at 7 p.m. yesterday.",
    options: ["have had", "had", "have"],
    correct: "had",
  },
  {
    sentence: "They ___ already ___ the movie.",
    options: ["have, seen", "saw, already", "have, saw"],
    correct: "have, seen",
  },
  {
    sentence: "He ___ his homework yet.",
    options: ["did not finish", "has not finished", "has not finish"],
    correct: "has not finished",
  },
  {
    sentence: "I ___ my keys a minute ago.",
    options: ["have lost", "lost", "lose"],
    correct: "lost",
  },
  {
    sentence: "We ___ never ___ sushi before.",
    options: ["have, tried", "tried, never", "have, try"],
    correct: "have, tried",
  },
  {
    sentence: "She ___ tennis when she was younger.",
    options: ["played", "has played", "has been playing"],
    correct: "played",
  },
  {
    sentence: "They ___ to the beach every weekend last summer.",
    options: ["went", "have gone", "go"],
    correct: "went",
  },
  {
    sentence: "I ___ already ___ breakfast.",
    options: ["have, had", "had, already", "have, have"],
    correct: "have, had",
  },
];

const TenseDifferenceGame = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = tenseQuestions[index];

  const handleCheck = () => {
    if (!selected) return;
    if (selected === current.correct) {
      setScore((prev) => prev + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (index + 1 < tenseQuestions.length) {
      setIndex((prev) => prev + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      alert(`Finalizado. Tu puntaje fue ${score} / ${tenseQuestions.length}`);
      setIndex(0);
      setSelected(null);
      setShowResult(false);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout
      title="Past Simple vs. Present Perfect"
      description="Selecciona la opción correcta para completar la oración."
    >
      <div className="max-w-xl mx-auto flex flex-col gap-6 px-4 py-6">
        <p className="text-xl text-center font-medium">
          {current.sentence.replace("___", "_____")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {current.options.map((option) => {
            const isCorrect = option === current.correct;
            const isSelected = option === selected;
            let className =
              "px-4 py-2 border rounded text-sm font-medium transition";

            if (showResult && isSelected) {
              className += isCorrect
                ? " bg-green-100 border-green-500 text-green-700"
                : " bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              className += " border-blue-400 bg-blue-50";
            } else {
              className += " border-gray-300 bg-white hover:bg-pink-50";
            }

            return (
              <button
                key={option}
                className={className}
                onClick={() => setSelected(option)}
                disabled={showResult}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <p
            className={`text-center font-semibold ${
              selected === current.correct
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {selected === current.correct
              ? "¡Correcto!"
              : `Incorrecto. Respuesta correcta: ${current.correct}`}
          </p>
        )}

        <div className="flex justify-center gap-4 mt-6">
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

        <p className="text-sm text-gray-500 text-center mt-2">
          Puntaje: {score} / {tenseQuestions.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default TenseDifferenceGame;
