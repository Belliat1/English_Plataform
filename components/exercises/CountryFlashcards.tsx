"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const countryFlashcards = [
  { name: "Germany", image: "Germany.png", audio: "Germany.mp3", translation: "Alemania" },
  { name: "Chinese", image: "Chinese.png", audio: "Chinese.mp3", translation: "Chino" },
  { name: "Mexico", image: "Mexico.png", audio: "Mexico.mp3", translation: "México" },
  { name: "Korea", image: "Korea.png", audio: "Korea.mp3", translation: "Corea" },
  { name: "Japan", image: "Japan.png", audio: "Japan.mp3", translation: "Japón" },
  { name: "Argentina", image: "Argentina.png", audio: "Argentina.mp3", translation: "Argentina" },
  { name: "England", image: "England.png", audio: "England.mp3", translation: "Inglaterra" },
  { name: "Colombia", image: "Colombia.png", audio: "Colombia.mp3", translation: "Colombia" },
  { name: "Brazil", image: "Brazil.png", audio: "Brazil.mp3", translation: "Brasil" },
  { name: "Uruguay", image: "Uruguay.png", audio: "Uruguay.mp3", translation: "Uruguay" },
  { name: "India", image: "India.png", audio: "India.mp3", translation: "India" },
  { name: "Portugal", image: "Portugal.png", audio: "Portugal.mp3", translation: "Portugal" },
  { name: "Russia", image: "Russia.png", audio: "Russia.mp3", translation: "Rusia" },
  { name: "Italy", image: "Italy.png", audio: "Italy.mp3", translation: "Italia" },
  { name: "USA", image: "USA.png", audio: "USA.mp3", translation: "Estados Unidos" },
  { name: "France", image: "France.png", audio: "France.mp3", translation: "Francia" },
  { name: "Australia", image: "Australia.png", audio: "Australia.mp3", translation: "Australia" },
];

const CountryFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = countryFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % countryFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? countryFlashcards.length - 1 : prev - 1
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
                src={`/assets/countries/${currentCard.image}`}
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

export default CountryFlashcards;
