"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const clothesFlashcards = [
  { name: "Baby Clothes", image: "baby clothes.png", audio: "baby clothes.mp3", translation: "Ropa de bebé" },
  { name: "Beret", image: "beret.png", audio: "beret.mp3", translation: "Boina" },
  { name: "Bowtie", image: "bow tie.png", audio: "bow tie.mp3", translation: "Corbatín" },
  { name: "Bra", image: "bra.png", audio: "bra.mp3", translation: "Sostén" },
  { name: "Dress", image: "dress.png", audio: "dress.mp3", translation: "Vestido" },
  { name: "Hat", image: "hat.png", audio: "hat.mp3", translation: "Sombrero" },
  { name: "High Heels", image: "high heels.png", audio: "high heels.mp3", translation: "Tacones" },
  { name: "Jacket", image: "jacket.png", audio: "jacket.mp3", translation: "Chaqueta" },
  { name: "Overall", image: "overall.png", audio: "overall.mp3", translation: "Overol" },
  { name: "Pajamas", image: "pajamas.png", audio: "pajamas.mp3", translation: "Pijama" },
  { name: "Pants", image: "pants.png", audio: "pants.mp3", translation: "Pantalones" },
  { name: "Pullover", image: "pullover.png", audio: "pullover.mp3", translation: "Jersey" },
  { name: "Scarf", image: "Scarf.png", audio: "Scarf.mp3", translation: "Bufanda" },
  { name: "Shirt", image: "shirt.png", audio: "shirt.mp3", translation: "Camisa" },
  { name: "Shoes", image: "shoes.png", audio: "shoes.mp3", translation: "Zapatos" },
  { name: "Shorts", image: "shorts.png", audio: "shorts.mp3", translation: "Pantalones cortos" },
  { name: "Skirt", image: "skirt.png", audio: "skirt.mp3", translation: "Falda" },
  { name: "Socks", image: "socks.png", audio: "socks.mp3", translation: "Calcetas" },
  { name: "Sport Bra", image: "sport bra.png", audio: "sport bra.mp3", translation: "Top deportivo" },
  { name: "Sweater", image: "sweater.png", audio: "sweater.mp3", translation: "Suéter" },
  { name: "Tanktop", image: "tanktop.png", audio: "tanktop.mp3", translation: "Camiseta sin mangas" },
  { name: "Vest", image: "vest.png", audio: "vest.mp3", translation: "Chaleco" },
  { name: "Watch", image: "watch.png", audio: "watch.mp3", translation: "Reloj" },
  { name: "Winter Gloves", image: "Winter Gloves.png", audio: "Winter Gloves.mp3", translation: "Guantes de invierno" },
  { name: "Winter Hat", image: "winter hat.png", audio: "winter hat.mp3", translation: "Gorro de invierno" },
  { name: "Winter Jacket", image: "Winter Jacket.png", audio: "Winter Jacket.mp3", translation: "Abrigo de invierno" },
  { name: "Winter Socks", image: "Winter Socks.png", audio: "Winter Socks.mp3", translation: "Calcetas de invierno" },
];


const ClothesFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = clothesFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clothesFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? clothesFlashcards.length - 1 : prev - 1
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
                src={`/assets/clothes/${currentCard.image}`}
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

export default ClothesFlashcards;
