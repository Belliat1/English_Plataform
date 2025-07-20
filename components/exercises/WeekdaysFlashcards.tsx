"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const days = [
  { name: "Monday", image: "monday_hires.png", audio: "monday.mp3", translation: "Lunes" },
  { name: "Tuesday", image: "tuesday_hires.png", audio: "tuesday.mp3", translation: "Martes" },
  { name: "Wednesday", image: "wednesday_hires.png", audio: "wednesday.mp3", translation: "Miércoles" },
  { name: "Thursday", image: "thursday_hires.png", audio: "thursday.mp3", translation: "Jueves" },
  { name: "Friday", image: "friday_hires.png", audio: "friday.mp3", translation: "Viernes" },
  { name: "Saturday", image: "saturday_hires.png", audio: "saturday.mp3", translation: "Sábado" },
  { name: "Sunday", image: "sunday_hires.png", audio: "sunday.mp3", translation: "Domingo" },
];

const WeekdaysFlashcards = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = days[index];

  useEffect(() => {
    if (flipped) {
      const audio = new Audio(`/assets/audio/${card.audio}`);
      audio.play();
    }
  }, [flipped, card]);

  const next = () => {
    setIndex((prev) => (prev + 1) % days.length);
    setFlipped(false);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + days.length) % days.length);
    setFlipped(false);
  };

  return (
    <WorkshopLayout title="Flashcards: Days of the Week" description="Haz clic para ver la imagen del día y escuchar su pronunciación.">
      <div className="flex flex-col items-center gap-6 px-4">
        <div
          onClick={() => setFlipped((prev) => !prev)}
           className="flashcard-container w-full max-w-md sm:max-w-lg md:max-w-xl h-[380px] sm:h-[420px] cursor-pointer"
        >
          <div className={`flashcard ${flipped ? "flipped" : ""}`}>
            <div className="front flex items-center justify-center text-3xl font-bold border rounded-xl p-4 bg-white dark:bg-gray-800">
              {card.name}
            </div>
            <div className="back flex flex-col items-center justify-center gap-4 p-4 border rounded-xl bg-white dark:bg-gray-800">
              <Image
                src={`/assets/days/${card.image}`}
                alt={card.name}
                width={200}
                height={200}
              />
              <p className="text-2xl font-semibold">{card.translation}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button onClick={prev} className="button button--secondary">Anterior</button>
          <button onClick={next} className="button button--secondary">Siguiente</button>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default WeekdaysFlashcards;
