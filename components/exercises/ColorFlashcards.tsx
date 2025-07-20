 "use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const colorFlashcards = [
  { name: "Red", image: "red.png", audio: "red.mp3", translation: "Rojo" },
  { name: "Blue", image: "blue.png", audio: "blue.mp3", translation: "Azul" },
  { name: "Yellow", image: "yellow.png", audio: "yellow.mp3", translation: "Amarillo" },
  { name: "Green", image: "green.png", audio: "green.mp3", translation: "Verde" },
  { name: "Orange", image: "orange.png", audio: "orange.mp3", translation: "Naranja" },
  { name: "Purple", image: "purple.png", audio: "purple.mp3", translation: "Morado" },
  { name: "Pink", image: "pink.png", audio: "pink.mp3", translation: "Rosa" },
  { name: "Black", image: "black.png", audio: "black.mp3", translation: "Negro" },
  { name: "White", image: "white.png", audio: "white.mp3", translation: "Blanco" },
  { name: "Brown", image: "brown.png", audio: "brown.mp3", translation: "Marrón" },
  { name: "Gray", image: "gray.png", audio: "gray.mp3", translation: "Gris" },
];

const ColorFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = colorFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % colorFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? colorFlashcards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <WorkshopLayout
      title="Flashcards: Colors"
      description="Haz clic para aprender los colores en inglés con imágenes y audio."
    >
      <div className="flex flex-col items-center gap-6 px-4">
        <div
          className="flashcard-container w-full max-w-md sm:max-w-lg md:max-w-xl h-[300px] sm:h-[380px]"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            <div className="front flex items-center justify-center text-3xl font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
              {currentCard.name}
            </div>

            <div className="back flex flex-col items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
              <Image
                src={`/assets/colors/${currentCard.image}`}
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

export default ColorFlashcards;
