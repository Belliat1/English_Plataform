"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type ConnectorCard = {
  connector: string;
  meaning: string;
  example: string;
};

const connectorFlashcards: ConnectorCard[] = [
  {
    connector: "and",
    meaning: "y (suma ideas similares)",
    example: "I like pizza and pasta.",
  },
  {
    connector: "but",
    meaning: "pero (contraste entre ideas)",
    example: "She is tired but happy.",
  },
  {
    connector: "because",
    meaning: "porque (da una razón)",
    example: "He is crying because he is sad.",
  },
  {
    connector: "so",
    meaning: "así que / por eso (resultado)",
    example: "It was raining, so we stayed inside.",
  },
  {
    connector: "or",
    meaning: "o (opciones/alternativas)",
    example: "Would you like tea or coffee?",
  },
  {
    connector: "although",
    meaning: "aunque (concesión)",
    example: "Although it was cold, he went swimming.",
  },
  {
    connector: "when",
    meaning: "cuando (tiempo)",
    example: "I called her when I got home.",
  },
  {
    connector: "if",
    meaning: "si (condición)",
    example: "If it rains, we will cancel the picnic.",
  },
  {
    connector: "because of",
    meaning: "debido a (razón)",
    example: "The game was canceled because of the weather.",
  },
  {
    connector: "however",
    meaning: "sin embargo (contraste formal)",
    example: "I wanted to go; however, I was too tired.",
  },
];

const ConnectorsFlashcards = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const current = connectorFlashcards[index];

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % connectorFlashcards.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? connectorFlashcards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  return (
    <WorkshopLayout
      title="Connectors Flashcards"
      description="Aprende a usar conectores para construir oraciones más largas y complejas."
    >
      <div className="flex flex-col items-center gap-6 px-4 py-6">
        <div
          className="flashcard-container w-full max-w-md h-[280px] sm:h-[300px] cursor-pointer"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            {/* Front */}
            <div className="front flex flex-col items-center justify-center text-4xl font-bold text-gray-900 bg-white border border-gray-300 rounded-xl h-full">
              {current.connector}
            </div>

            {/* Back */}
            <div className="back flex flex-col items-center justify-center gap-2 px-6 text-center bg-white border border-gray-300 rounded-xl h-full">
              <p className="text-lg text-pink-700 font-semibold">{current.meaning}</p>
              <p className="text-md text-gray-700 italic">"{current.example}"</p>
            </div>
          </div>
        </div>

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

export default ConnectorsFlashcards;
