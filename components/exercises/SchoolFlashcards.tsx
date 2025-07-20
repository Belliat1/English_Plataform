"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import WorkshopLayout from "./WorkshopLayout";
import "../../styles/globals.css";

// Lista completa de objetos escolares
const schoolFlashcards = [
  { name: "Abacus", image: "abacus.png", audio: "Abacus.mp3", translation: "Ábaco" },
  { name: "Apple", image: "apple.png", audio: "Apple.mp3", translation: "Manzana" },
  { name: "Artist Palette", image: "artist palette.png", audio: "Artist Palette.mp3", translation: "Paleta de artista" },
  { name: "Bag", image: "bag.png", audio: "Bag.mp3", translation: "Bolso" },
  { name: "Basketball", image: "basketball.png", audio: "Basketball.mp3", translation: "Baloncesto" },
  { name: "Beaker", image: "beaker.png", audio: "Beaker.mp3", translation: "Vaso de precipitados" },
  { name: "Blue Crayon", image: "blue crayon.png", audio: "Blue Crayon.mp3", translation: "Crayón azul" },
  { name: "Book", image: "book.png", audio: "Book.mp3", translation: "Libro" },
  { name: "Calculator", image: "calculator.png", audio: "Calculator.mp3", translation: "Calculadora" },
  { name: "Clock", image: "clock.png", audio: "Clock.mp3", translation: "Reloj" },
  { name: "Crayon", image: "crayon.png", audio: "Crayon.mp3", translation: "Crayones" },
  { name: "Earth Globe", image: "earth globe.png", audio: "Earth Globe.mp3", translation: "Globo terráqueo" },
  { name: "Flask", image: "flask.png", audio: "Flask.mp3", translation: "Tubo de ensayo" },
  { name: "Football", image: "football.png", audio: "Football.mp3", translation: "Fútbol" },
  { name: "Glue", image: "glue.png", audio: "Glue.mp3", translation: "Pegamento" },
  { name: "Graduation Cap", image: "graduation cap.png", audio: "Graduation Cap.mp3", translation: "Birrete" },
  { name: "Half Circle Ruler", image: "half circle ruler.png", audio: "Half Circle Ruler.mp3", translation: "Transportador" },
  { name: "Idea", image: "idea.png", audio: "Idea.mp3", translation: "Idea" },
  { name: "Lamp", image: "lamp.png", audio: "Lamp.mp3", translation: "Lámpara" },
  { name: "Magnifying Glass", image: "magnifying glass.png", audio: "Magnifying Glass.mp3", translation: "Lupa" },
  { name: "Musical Note", image: "musical note.png", audio: "Musical Note.mp3", translation: "Nota musical" },
  { name: "Paint Brush", image: "paint brush.png", audio: "Paint Brush.mp3", translation: "Pincel" },
  { name: "Pencil", image: "pencil.png", audio: "Pencil.mp3", translation: "Lápiz" },
  { name: "Ruler", image: "ruler.png", audio: "Ruler.mp3", translation: "Regla" },
  { name: "Scissors", image: "scissors.png", audio: "Scissors.mp3", translation: "Tijeras" },
  { name: "Triangle Ruler", image: "triangle ruler.png", audio: "Triangle Ruler.mp3", translation: "Escuadra" },
  { name: "Trophy", image: "trophy.png", audio: "Trophy.mp3", translation: "Trofeo" },
];
const SchoolFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { theme } = useTheme();

  const currentCard = schoolFlashcards[currentIndex];

  useEffect(() => {
    if (isFlipped && currentCard.audio) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % schoolFlashcards.length);
    setIsFlipped(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? schoolFlashcards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <WorkshopLayout

    >
      <div className="flex flex-col items-center gap-6 px-4">
        {/* Flashcard container */}
        <div
          className="flashcard-container w-full max-w-sm sm:max-w-md h-[340px] sm:h-[400px] cursor-pointer"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            {/* Front side */}
            <div className="front flex items-center justify-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl h-full">
              {currentCard.name}
            </div>

            {/* Back side */}
            <div className="back flex flex-col items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl h-full">
              <div className="relative w-[200px] h-[200px]">
                <Image
                  key={currentCard.image}
                  src={`/assets/school/${currentCard.image}`}
                  alt={currentCard.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-xl font-semibold text-center text-gray-800 dark:text-white">
                {currentCard.translation}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4 mt-4">
          <button onClick={goPrev} className="button button--secondary">
            Anterior
          </button>
          <button onClick={goNext} className="button button--secondary">
            Siguiente
          </button>
        </div>
      </div>

      {/* Flip styles */}
      <style jsx>{`
        .flashcard-container {
          perspective: 1000px;
        }
        .flashcard {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .flipped {
          transform: rotateY(180deg);
        }
        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        .back {
          transform: rotateY(180deg);
        }
      `}</style>
    </WorkshopLayout>
  );
};

export default SchoolFlashcards;
