"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type DescriptionItem = {
  image: string;
  options: string[];
  correct: string;
  description: string;
};

const items: DescriptionItem[] = [
  {
    image: "tall-building.jpg",
    description: "It's very tall and made of glass. People work inside and it is in a city.",
    options: ["a tree", "a skyscraper", "a statue"],
    correct: "a skyscraper",
  },
  {
    image: "happy-girl.jpg",
    description: "She has long brown hair, is always smiling and loves to help others.",
    options: ["a teacher", "a doctor", "a friendly girl"],
    correct: "a friendly girl",
  },
  {
    image: "cozy-room.jpeg",
    description: "This place has a sofa, a lamp, and pictures on the wall. You relax here.",
    options: ["a kitchen", "a bedroom", "a living room"],
    correct: "a living room",
  },
  {
    image: "blue-car.jpeg",
    description: "It has four wheels and you can drive it. This one is blue and fast.",
    options: ["a bike", "a car", "a bus"],
    correct: "a car",
  },
  {
    image: "school.jpg",
    description: "Children go here to learn. It has classrooms and a playground.",
    options: ["a park", "a library", "a school"],
    correct: "a school",
  },
];

const DescriptionGame = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = items[index];

  const handleCheck = () => {
    if (!selected) return;
    if (selected === current.correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    const next = index + 1;
    if (next < items.length) {
      setIndex(next);
      setSelected(null);
      setShowResult(false);
    } else {
      alert(`Juego terminado. Tu puntaje fue ${score} de ${items.length}`);
      setIndex(0);
      setScore(0);
      setSelected(null);
      setShowResult(false);
    }
  };

  return (
    <WorkshopLayout
      title="Juego de Descripciones"
      description="Lee la descripción y elige la imagen que mejor la representa."
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        <p className="text-lg font-semibold text-center">{current.description}</p>

        <Image
          src={`/assets/descriptions/${current.image}`}
          alt="Descripción"
          width={300}
          height={200}
          className="object-contain rounded border"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {current.options.map((option) => {
            const isCorrect = option === current.correct;
            const isSelected = option === selected;

            let base = "px-4 py-2 text-sm font-medium border rounded";
            let feedback = "";

            if (showResult && isSelected) {
              feedback = isCorrect
                ? "bg-green-100 border-green-500 text-green-700"
                : "bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              feedback = "bg-blue-100 border-blue-400";
            } else {
              feedback = "bg-white border-gray-300 hover:bg-pink-50";
            }

            return (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`${base} ${feedback}`}
                disabled={showResult}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <p
            className={`mt-4 font-semibold ${
              selected === current.correct ? "text-green-600" : "text-red-600"
            }`}
          >
            {selected === current.correct
              ? "¡Correcto!"
              : `Incorrecto. La respuesta correcta es: "${current.correct}"`}
          </p>
        )}

        <div className="flex gap-4 mt-6">
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

        <p className="text-sm text-gray-500 mt-2">
          Puntaje: {score} / {items.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default DescriptionGame;
