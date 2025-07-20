"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const months = [
  { name: "January", image: "january_hires.png", audio: "january.mp3", translation: "Enero" },
  { name: "February", image: "february_hires.png", audio: "february.mp3", translation: "Febrero" },
  { name: "March", image: "march_hires.png", audio: "march.mp3", translation: "Marzo" },
  { name: "April", image: "april_hires.png", audio: "april.mp3", translation: "Abril" },
  { name: "May", image: "may_hires.png", audio: "may.mp3", translation: "Mayo" },
  { name: "June", image: "june_hires.png", audio: "june.mp3", translation: "Junio" },
  { name: "July", image: "july_hires.png", audio: "july.mp3", translation: "Julio" },
  { name: "August", image: "august_hires.png", audio: "august.mp3", translation: "Agosto" },
  { name: "September", image: "september_hires.png", audio: "september.mp3", translation: "Septiembre" },
  { name: "October", image: "october_hires.png", audio: "october.mp3", translation: "Octubre" },
  { name: "November", image: "november_hires.png", audio: "november.mp3", translation: "Noviembre" },
  { name: "December", image: "december_hires.png", audio: "december.mp3", translation: "Diciembre" },
];

const MonthsFlashcards = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = months[index];

  useEffect(() => {
    if (flipped) {
      const audio = new Audio(`/assets/audio/${card.audio}`);
      audio.play();
    }
  }, [flipped, card]);

  const next = () => {
    setIndex((prev) => (prev + 1) % months.length);
    setFlipped(false);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + months.length) % months.length);
    setFlipped(false);
  };

  return (
    <WorkshopLayout title="Flashcards: Months" description="Haz clic para ver la imagen del mes y escuchar su pronunciación.">
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
                src={`/assets/months/${card.image}`}
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

export default MonthsFlashcards;
