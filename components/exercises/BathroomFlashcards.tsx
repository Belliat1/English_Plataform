"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const bathroomFlashcards = [
  { name: "Bathtub", image: "Bathtub-Bathroom-Words.png", audio: "Bathtub.mp3", translation: "Bañera" },
  { name: "Bucket", image: "Bucket-Bathroom-Words.png", audio: "Bucket.mp3", translation: "Cubo" },
  { name: "Comb", image: "Comb-Bathroom-Words.png", audio: "Comb.mp3", translation: "Peine" },
  { name: "Conditioner Bottle", image: "Conditioner Bottle-Bathroom-Words.png", audio: "Conditioner Bottle.mp3", translation: "Botella de acondicionador" },
  { name: "Doormat", image: "Doormat-Bathroom-Words.png", audio: "Doormat.mp3", translation: "Tapete" },
  { name: "Electric Razor", image: "Electric Razor-Bathroom-Words.png", audio: "Electric Razor.mp3", translation: "Rasuradora eléctrica" },
  { name: "Faucet", image: "Faucet-Bathroom-Words.png", audio: "Faucet.mp3", translation: "Grifo" },
  { name: "Folded Bath Towel", image: "Folded Bath Towel-Bathroom-Words.png", audio: "Folded Bath Towel.mp3", translation: "Toalla de baño doblada" },
  { name: "Hairdryer", image: "Hairdryer-Bathroom-Words.png", audio: "Hairdryer.mp3", translation: "Secadora de cabello" },
  { name: "Hand Mirror", image: "Hand Mirror-Bathroom-Words.png", audio: "Hand Mirror.mp3", translation: "Espejo de mano" },
  { name: "Hand Towel", image: "Hand Towel-Bathroom-Words.png", audio: "Hand Towel.mp3", translation: "Toalla de manos" },
  { name: "Home Slippers", image: "Home Slippers-Bathroom-Words.png", audio: "Home Slippers.mp3", translation: "Pantuflas" },
  { name: "Liquid Soap Bottle", image: "Liquid Soap Bottle-Bathroom-Words.png", audio: "Liquid Soap Bottle.mp3", translation: "Jabón líquido" },
  { name: "Mirror", image: "Mirror-Bathroom-Words.png", audio: "Mirror.mp3", translation: "Espejo" },
  { name: "Moisturizer Cream", image: "Moisturizer Cream-Bathroom-Words.png", audio: "Moisturizer Cream.mp3", translation: "Crema hidratante" },
  { name: "Mouthwash", image: "Mouthwash-Bathroom-Words.png", audio: "Mouthwash.mp3", translation: "Enjuague bucal" },
  { name: "Plug", image: "Plug-Bathroom-Words.png", audio: "Plug.mp3", translation: "Tapón" },
  { name: "Plunger", image: "Plunger-Bathroom-Words.png", audio: "Plunger.mp3", translation: "Desatascador" },
  { name: "Rubber Duck", image: "Rubber Duck-Bathroom-Words.png", audio: "Rubber Duck.mp3", translation: "Patito de goma" },
  { name: "Safety Razor", image: "Safety Razor-Bathroom-Words.png", audio: "Safety Razor.mp3", translation: "Rasuradora de seguridad" },
  { name: "Scrub Brush", image: "Scrub Brush-Bathroom-Words.png", audio: "Scrub Brush.mp3", translation: "Cepillo de fregar" },
  { name: "Shampoo", image: "Shampoo-Bathroom-Words.png", audio: "Shampoo.mp3", translation: "Champú" },
  { name: "Shaving Cream", image: "Shaving Cream-Bathroom-Words.png", audio: "Shaving Cream.mp3", translation: "Crema de afeitar" },
  { name: "Shower Cap", image: "Shower Cap-Bathroom-Words.png", audio: "Shower Cap.mp3", translation: "Gorro de baño" },
  { name: "Shower", image: "Shower-Bathroom-Words.png", audio: "Shower.mp3", translation: "Ducha" },
  { name: "Soap", image: "Soap-Bathroom-Words.png", audio: "Soap.mp3", translation: "Jabón" },
  { name: "Toilet Brush", image: "Toilet Brush-Bathroom-Words.png", audio: "Toilet Brush.mp3", translation: "Cepillo de baño" },
  { name: "Toilet Seat", image: "Toilet Seat-Bathroom-Words.png", audio: "Toilet Seat.mp3", translation: "Asiento de inodoro" },
  { name: "Toothbrush", image: "Toothbrush-Bathroom-Words.png", audio: "Toothbrush.mp3", translation: "Cepillo de dientes" },
  { name: "Toothpaste", image: "Toothpaste-Bathroom-Words.png", audio: "Toothpaste.mp3", translation: "Pasta dental" },
  { name: "Wall Hanger", image: "Wall Hanger-Bathroom-Words.png", audio: "Wall Hanger.mp3", translation: "Colgador de pared" },
  { name: "Wash Basin", image: "Wash Basin-Bathroom-Words.png", audio: "Wash Basin.mp3", translation: "Lavabo" },
  { name: "Weight Scale", image: "Weight Scale-Bathroom-Words.png", audio: "Weight Scale.mp3", translation: "Báscula" },
];

const BathroomFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = bathroomFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bathroomFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? bathroomFlashcards.length - 1 : prev - 1
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
                src={`/assets/bathroom/${currentCard.image}`}
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

export default BathroomFlashcards;
