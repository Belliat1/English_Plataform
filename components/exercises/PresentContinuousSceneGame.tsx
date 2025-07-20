"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type Scene = {
  image: string;
  correct: string;
  options: string[];
};

const scenes: Scene[] = [
  {
    image: "Father-son-and-daughter-2.png",
    correct: "The father is pushing a shopping cart with his children.",
    options: [
      "The family is painting a picture.",
      "The father is pushing a shopping cart with his children.",
      "They are watching TV.",
    ],
  },
  {
    image: "Father-son-and-daughter-3.png",
    correct: "The father is singing with his daughter.",
    options: [
      "The boy is cleaning the room.",
      "The father is singing with his daughter.",
      "The woman is cooking.",
    ],
  },
  {
    image: "Flat-creativity-concept-illustration-2.png",
    correct: "The artist is sculpting a bust.",
    options: [
      "The artist is sculpting a bust.",
      "They are playing basketball.",
      "He is playing video games.",
    ],
  },
  {
    image: "Flat-creativity-concept-illustration-3.png",
    correct: "The girl is playing the piano.",
    options: [
      "The girl is playing the piano.",
      "The boy is riding a bike.",
      "They are swimming in the pool.",
    ],
  },
  {
    image: "Flat-creativity-concept-illustration-4.png",
    correct: "The woman is cooking in the kitchen.",
    options: [
      "The woman is cooking in the kitchen.",
      "The kids are jumping.",
      "The man is writing a letter.",
    ],
  },
  {
    image: "Flat-creativity-concept-illustration-22.png",
    correct: "The man is playing tennis.",
    options: [
      "The man is swimming.",
      "The man is playing tennis.",
      "The children are painting.",
    ],
  },
  {
    image: "Sports activity.png",
    correct: "The boys are playing soccer.",
    options: [
      "The boys are playing soccer.",
      "The man is sleeping.",
      "The girl is writing homework.",
    ],
  },
];

const PresentContinuousSceneGame = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = scenes[index];
  const isCorrect = selected === current.correct;

  const handleCheck = () => {
    if (!selected) return;
    setShowResult(true);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    if (index + 1 < scenes.length) {
      setIndex(index + 1);
    } else {
      alert(`¡Juego terminado! Tu puntuación: ${score}/${scenes.length}`);
      setIndex(0);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout

    >
      <div className="flex flex-col items-center gap-6 px-4 py-6 max-w-xl mx-auto">
        <div className="w-full rounded border overflow-hidden shadow">
          <div className="w-full max-w-md rounded bg-white p-2">
                <Image
                    src={`/assets/scenes/${current.image}`}
                    alt="Scene"
                    width={500}
                    height={300}
                    className="object-contain w-full h-auto"
                />
</div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {current.options.map((option) => {
            const isSelected = selected === option;
            const feedback =
              showResult && isSelected
                ? isCorrect
                  ? "bg-green-100 border-green-500 text-green-700"
                  : "bg-red-100 border-red-500 text-red-700"
                : "";

            return (
              <button
                key={option}
                onClick={() => setSelected(option)}
                disabled={showResult}
                className={`border px-4 py-2 rounded text-sm font-medium ${
                  isSelected ? "border-blue-500 bg-blue-50" : "border-gray-300"
                } ${feedback}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex gap-4">
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
      </div>
    </WorkshopLayout>
  );
};

export default PresentContinuousSceneGame;
