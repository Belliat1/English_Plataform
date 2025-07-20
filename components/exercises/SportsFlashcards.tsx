"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css"; // Asegúrate que este CSS tenga los estilos de flip

const sportsFlashcards = [
  { name: "Soccer", image: "soccer.png", audio: "soccer.mp3", translation: "Fútbol" },
  { name: "Basketball", image: "basketball.png", audio: "basketball.mp3", translation: "Baloncesto" },
  { name: "Tennis", image: "tennis.png", audio: "tennis.mp3", translation: "Tenis" },
  { name: "Baseball", image: "baseball.png", audio: "baseball.mp3", translation: "Béisbol" },
  { name: "Climbing", image: "climbing.png", audio: "climbing.mp3", translation: "Escalada" },
  { name: "Swimming", image: "swimming.png", audio: "swimming.mp3", translation: "Natación" },
  { name: "Cycling", image: "cycling.png", audio: "cycling.mp3", translation: "Ciclismo" },
  { name: "Skiing", image: "skiing.png", audio: "skiing.mp3", translation: "Esquí" },
  { name: "Boxing", image: "boxing.png", audio: "boxing.mp3", translation: "Boxeo" },
];

const SportsFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = sportsFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sportsFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sportsFlashcards.length - 1 : prev - 1));
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
            <div className="front flex items-center justify-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {currentCard.name}
            </div>

            <div className="back flex flex-col items-center justify-center gap-4 p-4">
              <Image
                src={`/assets/sports/${currentCard.image}`}
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
          <button onClick={goPrev} className="button button--secondary">Anterior</button>
          <button onClick={goNext} className="button button--secondary">Siguiente</button>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default SportsFlashcards;
