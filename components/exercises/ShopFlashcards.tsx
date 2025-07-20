"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const shopFlashcards = [
  { image: "grocery-store.png", word: "Grocery Store", translation: "Tienda de comestibles", audio: "grocery-store.mp3" },
  { image: "bakery.png", word: "Bakery", translation: "Panadería", audio: "bakery.mp3" },
  { image: "pharmacy.png", word: "Pharmacy (US) / Chemist's (UK)", translation: "Farmacia", audio: "pharmacy.mp3" },
  { image: "clothing-store.png", word: "Clothing Store", translation: "Tienda de ropa", audio: "clothing-store.mp3" },
  { image: "bookstore.png", word: "Bookstore", translation: "Librería", audio: "bookstore.mp3" },
  { image: "jewelry-store.png", word: "Jewelry Store", translation: "Joyería", audio: "jewelry-store.mp3" },
  { image: "flower-shop.png", word: "Flower Shop / Florist", translation: "Floristería", audio: "flower-shop.mp3" },
  { image: "furniture-store.png", word: "Furniture Store", translation: "Tienda de muebles", audio: "furniture-store.mp3" },
  { image: "gift-shop.png", word: "Gift Shop", translation: "Tienda de regalos", audio: "gift-shop.mp3" }
];


const ShopFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = shopFlashcards[currentIndex];

  // Audio path based on image name
  const audioFile = currentCard.image.replace(".png", ".mp3");

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${audioFile}`);
      audio.play();
    }
  }, [isFlipped, audioFile]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shopFlashcards.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? shopFlashcards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  return (
    <WorkshopLayout
    >
      <div className="flex flex-col items-center gap-6 px-4">
        <div
          className="relative w-full max-w-md h-[340px] cursor-pointer perspective"
          onClick={handleFlip}
        >
          <div
            className={`w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden flex items-center justify-center text-center bg-white border rounded-xl p-6 text-xl font-semibold text-gray-800">
              {currentCard.word}
            </div>

            {/* Back */}
            <div className="absolute w-full h-full rotate-y-180 backface-hidden flex flex-col items-center justify-center bg-white border rounded-xl p-4 gap-4">
              <div className="relative w-[220px] h-[220px]">
                <Image
                  src={`/assets/shops/${currentCard.image}`}
                  alt={currentCard.word}
                  fill
                  className="object-contain rounded"
                />
              </div>
              <p className="text-lg font-semibold text-gray-700 text-center">
                {currentCard.translation}
              </p>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="px-4 py-2 border border-[var(--primary-color)] text-[var(--primary-color)] rounded hover:bg-[var(--primary-color)] hover:text-white"
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 border border-[var(--primary-color)] text-[var(--primary-color)] rounded hover:bg-[var(--primary-color)] hover:text-white"
          >
            Siguiente
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </WorkshopLayout>
  );
};

export default ShopFlashcards;
