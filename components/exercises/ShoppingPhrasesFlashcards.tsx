"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const shoppingFlashcards = [
  {
    image: "can-i-help-you.webp",
    phrase: "Can I help you?",
    translation: "¿Puedo ayudarte?",
    audio: "phrase01.mp3",
  },
  {
    image: "how-much-is-it.png",
    phrase: "How much is it?",
    translation: "¿Cuánto cuesta?",
    audio: "phrase02.mp3",
  },
  {
    image: "i-would-like.png",
    phrase: "I would like a coffee, please.",
    translation: "Me gustaría un café, por favor.",
    audio: "phrase03.mp3",
  },
  {
    image: "anything-else.png",
    phrase: "Would you like anything else?",
    translation: "¿Desea algo más?",
    audio: "phrase04.mp3",
  },
  {
    image: "that-will-be.png",
    phrase: "That will be five dollars.",
    translation: "Serán cinco dólares.",
    audio: "phrase05.mp3",
  },
  {
    image: "to-go-or-here.png",
    phrase: "To go or for here?",
    translation: "¿Para llevar o para consumir aquí?",
    audio: "phrase06.mp3",
  },
  {
    image: "cash-or-card.png",
    phrase: "Cash or card?",
    translation: "¿Efectivo o tarjeta?",
    audio: "phrase07.mp3",
  },
  {
    image: "have-a-nice-day.png",
    phrase: "Have a nice day!",
    translation: "¡Que tengas un buen día!",
    audio: "phrase08.mp3",
  }
];

const ShoppingPhrasesFlashcards = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = shoppingFlashcards[index];

  const handleFlip = () => setFlipped(!flipped);
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % shoppingFlashcards.length);
    setFlipped(false);
  };
  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? shoppingFlashcards.length - 1 : prev - 1
    );
    setFlipped(false);
  };

  useEffect(() => {
    if (flipped && card.audio) {
      const audio = new Audio(`/assets/audio/${card.audio}`);
      audio.play().catch(() => {});
    }
  }, [flipped, card]);

  return (
    <WorkshopLayout>
      <div className="flex flex-col items-center gap-6 px-4">
        <div
          className="relative w-full max-w-md h-[340px] cursor-pointer perspective"
          onClick={handleFlip}
        >
          <div
            className={`w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center bg-white border rounded-xl p-6 text-center text-xl font-semibold text-gray-800">
              <p>{card.phrase}</p>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full rotate-y-180 backface-hidden flex flex-col items-center justify-center bg-white border rounded-xl p-4 gap-4">
              <Image
                src={`/assets/shopping/${card.image}`}
                alt={card.phrase}
                width={220}
                height={220}
                className="object-contain"
              />
              <p className="text-lg font-semibold text-gray-700 text-center">
                {card.translation}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
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

export default ShoppingPhrasesFlashcards;
