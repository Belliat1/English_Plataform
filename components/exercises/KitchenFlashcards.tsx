"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";

const kitchenFlashcards = [
  { name: "Blender", image: "Blender.png", audio: "Blender.mp3", translation: "Licuadora" },
  { name: "Butcher Knife", image: "Butcher Knife.png", audio: "Butcher Knife.mp3", translation: "Cuchillo carnicero" },
  { name: "Cutting Board", image: "Cutting Board.png", audio: "Cutting Board.mp3", translation: "Tabla de cortar" },
  { name: "Egg Beater", image: "Egg Beater.png", audio: "Egg Beater.mp3", translation: "Batidor de huevos" },
  { name: "Fork and Spoon", image: "Fork and Spoon.png", audio: "Fork and Spoon.mp3", translation: "Tenedor y cuchara" },
  { name: "Ladle", image: "Ladle.png", audio: "Ladle.mp3", translation: "Cucharón" },
  { name: "Microwave", image: "Microwave.png", audio: "Microwave.mp3", translation: "Microondas" },
  { name: "Mixer", image: "Mixer.png", audio: "Mixer.mp3", translation: "Batidora" },
  { name: "Rice Cooker", image: "Rice Cooker.png", audio: "Rice Cooker.mp3", translation: "Olla arrocera" },
  { name: "Rolling Pin", image: "Rolling Pin.png", audio: "Rolling Pin.mp3", translation: "Rodillo" },
  { name: "Spatula", image: "Spatula.png", audio: "Spatula.mp3", translation: "Espátula" },
  { name: "Stove Oven", image: "Stove Oven.png", audio: "Stove Oven.mp3", translation: "Estufa y horno" },
  { name: "Toaster", image: "Toaster.png", audio: "Toaster.mp3", translation: "Tostadora" },
];

const KitchenFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = kitchenFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped && currentCard.audio) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % kitchenFlashcards.length) || setIsFlipped(false);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? kitchenFlashcards.length - 1 : prev - 1)) || setIsFlipped(false);

  return (
    <WorkshopLayout

    >
      <div className="flex flex-col items-center gap-6 px-4">
        <div
          className="flashcard-container w-full max-w-md sm:max-w-lg md:max-w-xl h-[300px] sm:h-[380px] cursor-pointer"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            {/* Frente */}
            <div className="front flex items-center justify-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl h-full">
              {currentCard.name}
            </div>

            {/* Reverso */}
            <div className="back flex flex-col items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl h-full">
              <Image
                src={`/assets/kitchen/${currentCard.image}`}
                alt={currentCard.name}
                width={200}
                height={200}
                className="object-contain"
              />
              <p className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
                {currentCard.translation}
              </p>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="flex gap-4 mt-4">
          <button onClick={goPrev} className="button button--secondary">
            Anterior
          </button>
          <button onClick={goNext} className="button button--secondary">
            Siguiente
          </button>
        </div>
      </div>

      <style jsx>{`
        .flashcard {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }

        .flipped {
          transform: rotateY(180deg);
        }

        .flashcard > div {
          backface-visibility: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .back {
          transform: rotateY(180deg);
        }
      `}</style>
    </WorkshopLayout>
  );
};

export default KitchenFlashcards;
