"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const timeFlashcards = [
  { name: "Day", image: "Day.png", audio: "Day.mp3", translation: "Día" },
  { name: "Night", image: "Night.png", audio: "Night.mp3", translation: "Noche" },
  { name: "Noon", image: "Noon.png", audio: "Noon.mp3", translation: "Mediodía" },
  { name: "Midnight", image: "Midnight.png", audio: "Midnight.mp3", translation: "Medianoche" },
  { name: "Morning", image: "Morning.png", audio: "Morning.mp3", translation: "Mañana" },
  { name: "Evening", image: "Evening.png", audio: "Evening.mp3", translation: "Tarde (anochecer)" },
  { name: "Afternoon", image: "Afternoon.png", audio: "Afternoon.mp3", translation: "Tarde (después del mediodía)" },
];

const TimeFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = timeFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % timeFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? timeFlashcards.length - 1 : prev - 1
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
                src={`/assets/times/${currentCard.image}`}
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

export default TimeFlashcards;
