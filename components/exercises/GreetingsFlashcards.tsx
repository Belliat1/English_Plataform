"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const greetingsFlashcards = [
  { name: "Hello", image: "hello.png", audio: "hello.mp3", translation: "Hola" },
  { name: "Hi", image: "hi.png", audio: "hi.mp3", translation: "Hola (informal)" },
  { name: "Good morning", image: "good-morning.png", audio: "good-morning.mp3", translation: "Buenos días" },
  { name: "Good afternoon", image: "good-afternoon.png", audio: "good-afternoon.mp3", translation: "Buenas tardes" },
  { name: "Good night", image: "good-night.png", audio: "good-night.mp3", translation: "Buenas noches" },
  { name: "Goodbye", image: "goodbye.png", audio: "goodbye.mp3", translation: "Adiós" },
  { name: "See you later", image: "see-you-later.png", audio: "see-you-later.mp3", translation: "Nos vemos" },
  { name: "Please", image: "please.png", audio: "please.mp3", translation: "Por favor" },
  { name: "Thank you", image: "thank-you.png", audio: "thank-you.mp3", translation: "Gracias" },
  { name: "You're welcome", image: "youre-welcome.png", audio: "youre-welcome.mp3", translation: "De nada" },
  { name: "Excuse me", image: "excuse-me.png", audio: "excuse-me.mp3", translation: "Disculpe" },
  { name: "I'm sorry", image: "im-sorry.png", audio: "im-sorry.mp3", translation: "Lo siento" },
];

const GreetingsFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = greetingsFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % greetingsFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? greetingsFlashcards.length - 1 : prev - 1));
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
            <div className="front flex items-center justify-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700">
              {currentCard.name}
            </div>

            <div className="back flex flex-col items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 text-center border border-gray-300 dark:border-gray-700 rounded-xl">
              <Image
                src={`/assets/greetings/${currentCard.image}`}
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

export default GreetingsFlashcards;
