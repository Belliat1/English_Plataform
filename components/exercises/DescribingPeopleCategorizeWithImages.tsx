"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

// 🔁 Shuffle helper
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// ✅ Datos actualizados con nombres de imagen según los avatares proporcionados
const items = [
  { word: "a teenager", image: "Casual Avatars-10.png", category: "Age" },
  { word: "brown hair", image: "Casual Avatars-03.png", category: "Hair colour" }, // ✔ Castaño
  { word: "tall", image: "Casual Avatars-07.png", category: "Body type" },
  { word: "dark skin", image: "Casual Avatars-05.png", category: "Skin type" },
  { word: "in his 40s", image: "Casual Avatars-04.png", category: "Age" },
  { word: "curly hair", image: "Casual Avatars-05.png", category: "Hair type" },
  { word: "bald", image: "Casual Avatars-12.png", category: "Hair type" },
  { word: "light skin", image: "Casual Avatars-02.png", category: "Skin type" },
  { word: "chubby", image: "Casual Avatars-06.png", category: "Body type" },
  { word: "blond hair", image: "Casual Avatars-08.png", category: "Hair colour" }, // ✔ Rubio claro
];



// 📋 Categorías disponibles
const categoryOptions = ["Hair type", "Hair colour", "Body type", "Skin type", "Age"];

const DescribingPeopleQuizFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  const current = items[currentIndex];
  const isCorrect = selected === current.category;

  useEffect(() => {
    setShuffledOptions(shuffleArray(categoryOptions));
  }, [currentIndex]);

  const handleCheck = () => {
    if (!selected) return;
    setShowResult(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <WorkshopLayout
      
    >
      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto px-4 py-6">
        {/* Tarjeta con imagen y palabra */}
        <div className="border rounded-xl p-4 shadow-lg bg-white dark:bg-[var(--background-2)] w-full text-center">
          <Image
            src={`/assets/describing/${current.image}`}
            alt={current.word}
            width={160}
            height={160}
            className="mx-auto object-contain mb-4"
          />
          <h2 className="text-2xl font-bold capitalize text-[var(--color-primary-900)] dark:text-[var(--color-primary-700)]">
            {current.word}
          </h2>
        </div>

        {/* Opciones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 w-full">
          {shuffledOptions.map((option) => {
            const isSelected = selected === option;
            const isFeedback = showResult;

            const base =
              "rounded px-4 py-2 border text-center font-medium transition duration-200";

            const selectedStyle = isSelected
              ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)]"
              : "bg-[var(--background-1)] text-[var(--color-primary-900)] border-[var(--color-neutral-200)] hover:bg-[var(--primary-color)] hover:text-white";

            const resultStyle =
              isFeedback && isSelected
                ? isCorrect
                  ? "bg-[var(--success)] text-white border-[var(--success)]"
                  : "bg-[var(--danger)] text-white border-[var(--danger)]"
                : "";

            return (
              <button
                key={option}
                onClick={() => setSelected(option)}
                disabled={showResult}
                className={`${base} ${selectedStyle} ${resultStyle}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Resultado */}
        {showResult && (
          <p
            className={`mt-4 font-semibold text-lg ${
              isCorrect ? "text-[var(--success)]" : "text-[var(--danger)]"
            }`}
          >
            {isCorrect ? "¡Correcto!" : `Incorrecto. Era: ${current.category}`}
          </p>
        )}

        {/* Botones */}
        <div className="mt-6 flex gap-4">
          {!showResult && (
            <button
              onClick={handleCheck}
              className="bg-[var(--primary-color)] text-white px-6 py-2 rounded font-semibold hover:opacity-90"
              disabled={!selected}
            >
              Revisar
            </button>
          )}
          {showResult && (
            <button
              onClick={handleNext}
              className="bg-[var(--background-2)] text-[var(--color-primary-900)] px-6 py-2 rounded font-semibold border border-[var(--color-neutral-200)] hover:bg-[var(--primary-color)] hover:text-white"
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default DescribingPeopleQuizFlashcards;
