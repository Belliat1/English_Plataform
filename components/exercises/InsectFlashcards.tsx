"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const insectFlashcards = [
  { word: "Ladybug", translation: "Mariquita", image: "1. Ladybug", audio: "Ladybug.mp3" },
  { word: "Bee", translation: "Abeja", image: "2. Bee", audio: "Bee.mp3" },
  { word: "Ant", translation: "Hormiga", image: "3. Ant", audio: "Ant.mp3" },
  { word: "Butterfly", translation: "Mariposa", image: "4. Butterfly", audio: "Butterfly.mp3" },
  { word: "Spider", translation: "Araña", image: "5. Spider", audio: "Spider.mp3" },
  { word: "Caterpillar", translation: "Oruga", image: "6. Catterpilar", audio: "Caterpillar.mp3" },
  { word: "Grasshopper", translation: "Saltamontes", image: "7. Grasshoper", audio: "Grasshopper.mp3" },
  { word: "Dragonfly", translation: "Libélula", image: "9. Dragonfly", audio: "Dragonfly.mp3" },
  { word: "Snail", translation: "Caracol", image: "10. Snail", audio: "Snail.mp3" },
  { word: "Beetles", translation: "Escarabajos", image: "11. Beetles", audio: "Beetles.mp3" },
  { word: "Bee Hive", translation: "Colmena", image: "12. Bee Hive", audio: "Bee Hive.mp3" },
  { word: "Mosquito", translation: "Mosquito", image: "13. Mosquito", audio: "Mosquito.mp3" },
  { word: "Centipede", translation: "Ciempiés", image: "14. Centipede", audio: "Centipede.mp3" },
];

const InsectFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = insectFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped && currentCard.audio) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % insectFlashcards.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? insectFlashcards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  return (
    <WorkshopLayout
     
    >
      <div className="flex flex-col items-center gap-6 px-4 py-6">
        {/* Flashcard */}
        <div
          className="flashcard-container w-full max-w-sm h-[300px] sm:h-[360px] cursor-pointer"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            <div className="front flex items-center justify-center text-4xl font-bold text-gray-900 bg-white border border-gray-300 rounded-xl h-full">
              {currentCard.word}
            </div>
            <div className="back flex flex-col items-center justify-center gap-4 p-4 bg-white border border-gray-300 rounded-xl h-full">
              <Image
                src={`/assets/bugs/${currentCard.image}.png`}
                alt={currentCard.word}
                width={140}
                height={140}
                className="object-contain"
              />
              <p className="text-2xl font-semibold text-gray-800">
                {currentCard.translation}
              </p>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <button onClick={handlePrev} className="button button--secondary">
            Anterior
          </button>
          <button onClick={handleNext} className="button button--secondary">
            Siguiente
          </button>
        </div>
      </div>

      <style jsx>{`
        .flashcard {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
          height: 100%;
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

export default InsectFlashcards;
