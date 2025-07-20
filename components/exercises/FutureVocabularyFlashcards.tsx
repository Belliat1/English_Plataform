"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type Flashcard = {
  word: string;
  translation: string;
  image?: string;
  audio?: string;
};

type Category = {
  title: string;
  items: Flashcard[];
};

const futureVocabulary: Category[] = [
  {
    title: "Verbos para planes personales",
    items: [
      { word: "travel", translation: "viajar", audio: "travel.mp3" },
      { word: "study", translation: "estudiar", audio: "study.mp3" },
      { word: "visit", translation: "visitar", audio: "visit.mp3" },
      { word: "meet", translation: "encontrarse", audio: "meet.mp3" },
      { word: "cook", translation: "cocinar", audio: "cook.mp3" },
      { word: "watch", translation: "ver", audio: "watch.mp3" },
      { word: "clean", translation: "limpiar", audio: "clean.mp3" },
      { word: "go out", translation: "salir", audio: "go out.mp3" },
      { word: "stay", translation: "quedarse", audio: "stay.mp3" },
      { word: "move", translation: "mudarse", audio: "move.mp3" },
    ],
  },
  {
    title: "Vocabulario para predicciones",
    items: [
      { word: "rain", translation: "llover", audio: "rain.mp3" },
      { word: "snow", translation: "nevar", audio: "snow.mp3" },
      { word: "fall", translation: "caer", audio: "fall.mp3" },
      { word: "break", translation: "romperse", audio: "break.mp3" },
      { word: "win", translation: "ganar", audio: "win.mp3" },
      { word: "lose", translation: "perder", audio: "lose.mp3" },
      { word: "change", translation: "cambiar", audio: "change.mp3" },
      { word: "grow", translation: "crecer", audio: "grow.mp3" },
    ],
  },
  {
    title: "Frases útiles para planes",
    items: [
      { word: "tomorrow", translation: "mañana", audio: "tomorrow.mp3" },
      { word: "next week", translation: "la próxima semana", audio: "next week.mp3" },
      { word: "next year", translation: "el próximo año", audio: "next year.mp3" },
      { word: "this afternoon", translation: "esta tarde", audio: "this afternoon.mp3" },
      { word: "later", translation: "más tarde", audio: "later.mp3" },
      { word: "soon", translation: "pronto", audio: "soon.mp3" },
      { word: "in a few days", translation: "en unos días", audio: "in a few days.mp3" },
      { word: "tonight", translation: "esta noche", audio: "tonight.mp3" },
    ],
  },
];

const FutureVocabularyFlashcards = () => {
  const [currentCategory, setCurrentCategory] = useState(futureVocabulary[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = currentCategory.items[currentIndex];

  const handleFlip = () => setFlipped(!flipped);

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % currentCategory.items.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prev) =>
      prev === 0 ? currentCategory.items.length - 1 : prev - 1
    );
  };

  const handleCategoryChange = (catTitle: string) => {
    const selected = futureVocabulary.find((c) => c.title === catTitle);
    if (selected) {
      setCurrentCategory(selected);
      setCurrentIndex(0);
      setFlipped(false);
    }
  };

  const playAudio = () => {
    if (card.audio) {
      const audio = new Audio(`/assets/audio/${card.audio}`);
      audio.play().catch(() => {});
    }
  };

  return (
    <WorkshopLayout

    >
      <div className="flex flex-col items-center gap-6 px-4 py-6">
        {/* Selector */}
        <select
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="mb-4 px-4 py-2 border rounded text-lg"
        >
          {futureVocabulary.map((c) => (
            <option key={c.title} value={c.title}>
              {c.title}
            </option>
          ))}
        </select>

        {/* Flashcard */}
        <div
          onClick={() => {
            handleFlip();
            playAudio();
          }}
          className="w-full max-w-sm h-[300px] cursor-pointer relative"
        >
          <div className={`flashcard ${flipped ? "flipped" : ""}`}>
            <div className="front flex items-center justify-center text-4xl font-bold text-gray-900 bg-white border border-gray-300 rounded-xl h-full">
              {card.word}
            </div>
            <div className="back flex items-center justify-center text-2xl text-gray-800 bg-white border border-gray-300 rounded-xl h-full">
              {card.translation}
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

export default FutureVocabularyFlashcards;
