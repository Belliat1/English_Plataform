"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

const buildingsFlashcards = [
  { name: "Airport", image: "airport.png", audio: "airport.mp3", translation: "Aeropuerto" },
  { name: "Apartment", image: "apartment.png", audio: "apartment.mp3", translation: "Apartamento" },
  { name: "Bakery Shop", image: "bakery shop.png", audio: "bakery shop.mp3", translation: "Panadería" },
  { name: "Bank Building", image: "bank building.png", audio: "bank building.mp3", translation: "Banco" },
  { name: "Barbershop", image: "barbershop.png", audio: "barbershop.mp3", translation: "Barbería" },
  { name: "Barn", image: "barn.png", audio: "barn.mp3", translation: "Granero" },
  { name: "Bus Stop", image: "bus stop.png", audio: "bus stop.mp3", translation: "Parada de autobús" },
  { name: "Cinema", image: "cinema.png", audio: "cinema.mp3", translation: "Cine" },
  { name: "Classic House", image: "classic house.png", audio: "classic house.mp3", translation: "Casa clásica" },
  { name: "Coffee Shop", image: "coffee shop.png", audio: "coffee shop.mp3", translation: "Cafetería" },
  { name: "Factory", image: "factory.png", audio: "factory.mp3", translation: "Fábrica" },
  { name: "Gas Station", image: "gas station.png", audio: "gas station.mp3", translation: "Gasolinera" },
  { name: "Hospital", image: "hospital.png", audio: "hospital.mp3", translation: "Hospital" },
  { name: "Hotel", image: "hotel.png", audio: "hotel.mp3", translation: "Hotel" },
  { name: "Mall", image: "mall.png", audio: "mall.mp3", translation: "Centro comercial" },
  { name: "Mosque", image: "mosque.png", audio: "mosque.mp3", translation: "Mezquita" },
  { name: "Park", image: "park.png", audio: "park.mp3", translation: "Parque" },
  { name: "Police Station", image: "police.png", audio: "police.mp3", translation: "Estación de policía" },
  { name: "School", image: "school.png", audio: "school.mp3", translation: "Escuela" },
  { name: "Windmill", image: "windmill.png", audio: "windmill.mp3", translation: "Molino de viento" },
];

const BuildingsFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = buildingsFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % buildingsFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? buildingsFlashcards.length - 1 : prev - 1
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
                src={`/assets/buildings/${currentCard.image}`}
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

export default BuildingsFlashcards;
