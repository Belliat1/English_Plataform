"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const furnitureFlashcards = [
  { word: "Bookshelf", translation: "Librero", image: "Bookshelf", audio: "Bookshelf.mp3" },
  { word: "Cabinet", translation: "Gabinete", image: "Cabinet", audio: "Cabinet.mp3" },
  { word: "Coat Stand", translation: "Perchero", image: "Coat Stand", audio: "Coat Stand.mp3" },
  { word: "Dining Table", translation: "Mesa de comedor", image: "Dining Table", audio: "Dining Table.mp3" },
  { word: "Drawer And Lamp", translation: "Cajonera con lámpara", image: "Drawer And Lamp", audio: "Drawer And Lamp.mp3" },
  { word: "Drawer", translation: "Cajonera", image: "Drawer", audio: "Drawer.mp3" },
  { word: "Dressing Table", translation: "Tocador", image: "Dressing Table", audio: "Dressing Table.mp3" },
  { word: "Floor Lamp", translation: "Lámpara de pie", image: "Floor Lamp", audio: "Floor Lamp.mp3" },
  { word: "Mirror", translation: "Espejo", image: "Mirror", audio: "Mirror.mp3" },
  { word: "Night Stand", translation: "Mesa de noche", image: "Night Stand", audio: "Night Stand.mp3" },
  { word: "Shelf", translation: "Estante", image: "Shelf", audio: "Shelf.mp3" },
  { word: "Single Sofa", translation: "Sofá", image: "Sofa", audio: "Sofa.mp3" },
  { word: "Stool", translation: "Banco", image: "Stool", audio: "Stool.mp3" },
  { word: "Study Desk", translation: "Escritorio", image: "Study Desk", audio: "Study Desk.mp3" },
  { word: "Swing Chair", translation: "Silla colgante", image: "Swing Chair", audio: "Swing Chair.mp3" },
  { word: "Table", translation: "Mesa", image: "Table", audio: "Table.mp3" },
  { word: "TV Table", translation: "Mesa para TV", image: "Tv Table", audio: "TV Table.mp3" },
  { word: "Wardrobe", translation: "Ropero", image: "Wardrobe", audio: "Wardrobe.mp3" },
  { word: "Wash Basin", translation: "Lavamanos", image: "Wash Basin", audio: "Wash Basin.mp3" },
  { word: "Wooden Chair", translation: "Silla de madera", image: "Wooden Chair", audio: "Wooden Chair.mp3" },
];

const FurnitureFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const currentCard = furnitureFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped && currentCard.audio) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const handleFlip = () => setIsFlipped(!isFlipped);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % furnitureFlashcards.length);
    setIsFlipped(false);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? furnitureFlashcards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  return (
    <WorkshopLayout

    >
      <div className="flex flex-col items-center gap-6 px-4 py-6">
        <div
          className="flashcard-container w-full max-w-sm h-[300px] sm:h-[360px] cursor-pointer"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            <div className="front flex items-center justify-center text-3xl font-bold text-gray-900 bg-white border border-gray-300 rounded-xl h-full">
              {currentCard.word}
            </div>
            <div className="back flex flex-col items-center justify-center gap-4 p-4 bg-white border border-gray-300 rounded-xl h-full">
              <Image
                src={`/assets/furniture/${currentCard.image}.png`}
                alt={currentCard.word}
                width={160}
                height={160}
                className="object-contain"
              />
              <p className="text-2xl font-semibold text-gray-800">{currentCard.translation}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
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

export default FurnitureFlashcards;
