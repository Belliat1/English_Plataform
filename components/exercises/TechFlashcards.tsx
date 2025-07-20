"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const techFlashcards = [
  { name: "Clock", image: "clock.png", audio: "clock.mp3", translation: "Reloj" },
  { name: "Desktop Computer", image: "desktop computer.png", audio: "desktop computer.mp3", translation: "Computadora de escritorio" },
  { name: "Digital Pen", image: "digital pen.png", audio: "digital pen.mp3", translation: "Lápiz digital" },
  { name: "Game Console", image: "game console.png", audio: "game console.mp3", translation: "Consola de videojuegos" },
  { name: "Game Controller", image: "game controller.png", audio: "game controller.mp3", translation: "Control de videojuegos" },
  { name: "Graphics Tablet", image: "graphics tablet.png", audio: "graphics tablet.mp3", translation: "Tableta gráfica" },
  { name: "Keyboard", image: "keyboard.png", audio: "keyboard.mp3", translation: "Teclado" },
  { name: "Laptop", image: "laptop.png", audio: "laptop.mp3", translation: "Portátil" },
  { name: "Mouse", image: "mouse.png", audio: "mouse.mp3", translation: "Ratón" },
  { name: "Printer", image: "printer.png", audio: "printer.mp3", translation: "Impresora" },
  { name: "Projector", image: "projector.png", audio: "projector.mp3", translation: "Proyector" },
  { name: "Tablet", image: "tablet.png", audio: "tablet.mp3", translation: "Tableta" },
  { name: "VR Headset", image: "VR headset (Virtual Reality headset).png", audio: "vr headset.mp3", translation: "Gafas de realidad virtual" },
  { name: "Wi-Fi Router", image: "Wi-Fi router.png", audio: "wi-fi router.mp3", translation: "Router Wi-Fi" },
];

const TechFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = techFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % techFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? techFlashcards.length - 1 : prev - 1
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
                src={`/assets/tech/${currentCard.image}`}
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

export default TechFlashcards;
