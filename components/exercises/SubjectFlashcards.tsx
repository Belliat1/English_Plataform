"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const subjectFlashcards = [
  { name: "I", image: "i.png", audio: "i.mp3", translation: "Yo" },
  { name: "You", image: "you.png", audio: "you.mp3", translation: "Tú / Usted" },
  { name: "He", image: "he.png", audio: "he.mp3", translation: "Él" },
  { name: "She", image: "she.png", audio: "she.mp3", translation: "Ella" },
  { name: "It", image: "it.png", audio: "it.mp3", translation: "Eso / Esto" },
  { name: "We", image: "we.png", audio: "we.mp3", translation: "Nosotros" },
  { name: "You (plural)", image: "you_plural.png", audio: "you.mp3", translation: "Ustedes" },
  { name: "They", image: "they.png", audio: "they.mp3", translation: "Ellos / Ellas" },
];

const SubjectFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = subjectFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % subjectFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? subjectFlashcards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <WorkshopLayout
      title="Subject Pronouns Flashcards"
      description="Haz clic en la tarjeta para ver la imagen y traducción del sujeto personal."
    >
      <div className="flex flex-col items-center gap-6 px-4">
        <div
          className="flashcard-container w-full max-w-md sm:max-w-lg md:max-w-xl h-[280px] sm:h-[340px]"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            <div className="front flex items-center justify-center text-4xl font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
              {currentCard.name}
            </div>

            <div className="back flex flex-col items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
              <Image
                src={`/assets/subjects/${currentCard.image}`}
                alt={currentCard.name}
                width={160}
                height={160}
                className="object-contain"
              />
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
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

export default SubjectFlashcards;
