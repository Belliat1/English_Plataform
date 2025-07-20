"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const prepositionsFlashcards = [
  { name: "Above", image: "Above Preposition of Place.png", audio: "above.mp3", translation: "Encima de" },
  { name: "Across", image: "Across Preposition of Place.png", audio: "across.mp3", translation: "A través de" },
  { name: "Among", image: "Among Preposition of Place.png", audio: "among.mp3", translation: "Entre (más de dos)" },
  { name: "Around", image: "Around Preposition of Place.png", audio: "around.mp3", translation: "Alrededor de" },
  { name: "Behind", image: "Behind Preposition of Place.png", audio: "behind.mp3", translation: "Detrás de" },
  { name: "Beside", image: "Beside Preposition of Place.png", audio: "beside.mp3", translation: "Al lado de" },
  { name: "Between", image: "Between Preposition of Place.png", audio: "between.mp3", translation: "Entre (dos)" },
  { name: "Down", image: "Down Preposition of Place.png", audio: "down.mp3", translation: "Abajo de / bajando" },
  { name: "Far", image: "Far Preposition of Place.png", audio: "far.mp3", translation: "Lejos de" },
  { name: "In Front of", image: "In Front of Preposition of Place.png", audio: "in front of.mp3", translation: "Enfrente de" },
  { name: "Inside", image: "Inside Preposition of Place.png", audio: "inside.mp3", translation: "Dentro de" },
  { name: "Near", image: "Near Preposition of Place.png", audio: "near.mp3", translation: "Cerca de" },
  { name: "On", image: "On Preposition of Place.png", audio: "on.mp3", translation: "Sobre / Encima de" },
  { name: "Opposite", image: "Opposite Preposition of Place.png", audio: "opposite.mp3", translation: "Frente a" },
  { name: "Outside", image: "Outside Preposition of Place.png", audio: "outside.mp3", translation: "Fuera de" },
  { name: "Through", image: "Through Preposition of Place.png", audio: "through.mp3", translation: "A través de (por dentro)" },
  { name: "Under", image: "Under Preposition of Place.png", audio: "under.mp3", translation: "Debajo de" },
  { name: "Up", image: "Up Preposition of Place.png", audio: "up.mp3", translation: "Arriba / Subiendo" },
];

const PrepositionsFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = prepositionsFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % prepositionsFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? prepositionsFlashcards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <WorkshopLayout
    >
      <div className="flex flex-col items-center gap-6 px-4">
        <div
          className="flashcard-container w-full max-w-md sm:max-w-lg md:max-w-xl h-[300px] sm:h-[380px]"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            <div className="front flex items-center justify-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
              {currentCard.name}
            </div>

            <div className="back flex flex-col items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
              <Image
                src={`/assets/prepositions/${currentCard.image}`}
                alt={currentCard.name}
                width={200}
                height={200}
                className="object-contain"
              />
              <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                {currentCard.translation}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button onClick={goPrev} className="button button--secondary">
            Anterior
          </button>
          <button onClick={goNext} className="button button--secondary">
            Siguiente
          </button>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default PrepositionsFlashcards;
