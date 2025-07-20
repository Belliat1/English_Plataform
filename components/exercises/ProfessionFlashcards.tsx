"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const professionFlashcards = [
  { name: "Nurse", image: "nurse.png", audio: "nurse.mp3", translation: "Enfermera" },
  { name: "Painter", image: "painter.png", audio: "painter.mp3", translation: "Pintor/a" },
  { name: "Reporter", image: "reporter.png", audio: "reporter.mp3", translation: "Reportero/a" },
  { name: "Scientist", image: "scientist.png", audio: "scientist.mp3", translation: "Científico/a" },
  { name: "Singer", image: "singer.png", audio: "singer.mp3", translation: "Cantante" },
  { name: "Chef", image: "chef.png", audio: "chef.mp3", translation: "Chef" },
  { name: "Dancer", image: "dancer.png", audio: "dancer.mp3", translation: "Bailarín/a" },
  { name: "Engineer", image: "engineer.png", audio: "engineer.mp3", translation: "Ingeniero/a" },
];

const ProfessionFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = professionFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % professionFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? professionFlashcards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <WorkshopLayout
      title="Flashcards: Professions"
      description="Haz clic para aprender profesiones en inglés con imágenes y audio."
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
                src={`/assets/professions/${currentCard.image}`}
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

export default ProfessionFlashcards;
