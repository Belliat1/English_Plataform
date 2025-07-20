"use client";

import React, { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const colors = [
  { image: "red.png", answer: "red" },
  { image: "blue.png", answer: "blue" },
  { image: "green.png", answer: "green" },
  { image: "yellow.png", answer: "yellow" },
  { image: "purple.png", answer: "purple" },
  { image: "orange.png", answer: "orange" },
  { image: "black.png", answer: "black" },
  { image: "white.png", answer: "white" },
  { image: "pink.png", answer: "pink" },
  { image: "brown.png", answer: "brown" },
];

const ColorWritingExercise = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>(
    Array(colors.length).fill("")
  );
  const [feedback, setFeedback] = useState<boolean[] | null>(null);

  const handleChange = (index: number, value: string) => {
    const updated = [...userAnswers];
    updated[index] = value.toLowerCase();
    setUserAnswers(updated);
  };

  const handleCheck = () => {
    const result = colors.map((c, i) => c.answer === userAnswers[i].trim());
    setFeedback(result);
  };

  const handleReset = () => {
    setUserAnswers(Array(colors.length).fill(""));
    setFeedback(null);
  };

  return (
    <WorkshopLayout
      title="Write the Color Name"
      description="Mira la imagen del color y escribe su nombre en inglés."
    >
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {colors.map((color, i) => {
            const isCorrect = feedback?.[i];

            return (
              <div
                key={i}
                className={`flex flex-col items-center p-4 border rounded-xl transition ${
                  isCorrect === true
                    ? "border-green-500 bg-green-100"
                    : isCorrect === false
                    ? "border-red-500 bg-red-100"
                    : "border-gray-300 bg-white dark:bg-gray-800"
                }`}
              >
                <Image
                  src={`/assets/colors/${color.image}`}
                  alt={`Color ${color.answer}`}
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <input
                  type="text"
                  value={userAnswers[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  className="text-center border rounded px-2 py-1 w-full"
                  placeholder="Escribe aquí"
                  disabled={feedback !== null}
                />
              </div>
            );
          })}
        </div>

        {/* Botones */}
        <div className="text-center mt-6 flex justify-center gap-4">
          <button
            onClick={handleCheck}
            className="bg-pink-500 text-white px-6 py-2 rounded font-semibold"
          >
            Revisar
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-300 text-black px-6 py-2 rounded font-semibold"
          >
            Reiniciar
          </button>
        </div>

        {/* Resultado final */}
        {feedback && (
          <div className="text-center mt-4 text-lg font-medium">
            Obtuviste {feedback.filter(Boolean).length} de {colors.length} correctas.
          </div>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default ColorWritingExercise;
