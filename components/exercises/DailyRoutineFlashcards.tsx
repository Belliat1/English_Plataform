"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const routineFlashcards = [
  { image: "Daily routine png-01.png", phrase: "She is waking up", translation: "Ella se está despertando" },
  { image: "Daily routine png-02.png", phrase: "She is using the toilet", translation: "Ella está usando el baño" },
  { image: "Daily routine png-03.png", phrase: "She is taking a bath", translation: "Ella se está bañando" },
  { image: "Daily routine png-04.png", phrase: "She is having breakfast", translation: "Ella está desayunando" },
  { image: "Daily routine png-05.png", phrase: "She is skateboarding", translation: "Ella está patinando" },
  { image: "Daily routine png-06.png", phrase: "She is doing the laundry", translation: "Ella está lavando la ropa" },
  { image: "Daily routine png-07.png", phrase: "She is relaxing", translation: "Ella está relajándose" },
  { image: "Daily routine png-08.png", phrase: "She is cooking", translation: "Ella está cocinando" },
  { image: "Daily routine png-09.png", phrase: "She is playing the guitar", translation: "Ella está tocando la guitarra" },
  { image: "Daily routine png-10.png", phrase: "She is eating lunch", translation: "Ella está almorzando" },
  { image: "Daily routine png-11.png", phrase: "She is watering the plants", translation: "Ella está regando las plantas" },
  { image: "Daily routine png-12.png", phrase: "She is reading", translation: "Ella está leyendo" },
  { image: "Daily routine png-13.png", phrase: "She is working from home", translation: "Ella está trabajando desde casa" },
  { image: "Daily routine png-14.png", phrase: "She is drinking water", translation: "Ella está bebiendo agua" },
  { image: "Daily routine png-15.png", phrase: "She is running", translation: "Ella está corriendo" },
  { image: "Daily routine png-16.png", phrase: "She is exercising", translation: "Ella está haciendo ejercicio" },
  { image: "Daily routine png-17.png", phrase: "She is walking the dog", translation: "Ella está paseando al perro" },
  { image: "Daily routine png-18.png", phrase: "She is taking a picture", translation: "Ella está tomando una foto" },
  { image: "Daily routine png-19.png", phrase: "She is working", translation: "Ella está trabajando" },
  { image: "Daily routine png-20.png", phrase: "She is chatting with friends", translation: "Ella está conversando con amigas" },
  { image: "Daily routine png-21.png", phrase: "She is swimming", translation: "Ella está nadando" },
  { image: "Daily routine png-22.png", phrase: "She is sleeping", translation: "Ella está durmiendo" },
  { image: "Daily routine png-23.png", phrase: "She is studying", translation: "Ella está estudiando" },
  { image: "Daily routine png-24.png", phrase: "She is riding a bicycle", translation: "Ella está montando bicicleta" },
  { image: "Daily routine png-25.png", phrase: "She is grocery shopping", translation: "Ella está haciendo la compra" },
  { image: "Daily routine png-26.png", phrase: "She is commuting", translation: "Ella se está desplazando" },
  { image: "Daily routine png-27.png", phrase: "She is painting", translation: "Ella está pintando" },
  { image: "Daily routine png-28.png", phrase: "She is walking", translation: "Ella está caminando" },
  { image: "Daily routine png-29.png", phrase: "She is drinking coffee", translation: "Ella está tomando café" },
  { image: "Daily routine png-30.png", phrase: "She is ice skating", translation: "Ella está patinando sobre hielo" },
  { image: "Daily routine png-31.png", phrase: "She is vacuuming", translation: "Ella está aspirando" },
  { image: "Daily routine png-32.png", phrase: "She is taking a shower", translation: "Ella se está duchando" },
];

const DailyRoutineFlashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = routineFlashcards[currentIndex];
  const audioFile = `routine${String(currentIndex + 1).padStart(2, "0")}.mp3`;

  useEffect(() => {
    if (isFlipped) {
      const audio = new Audio(`/assets/audio/${audioFile}`);
      audio.play();
    }
  }, [isFlipped, audioFile]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % routineFlashcards.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? routineFlashcards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  return (
    <WorkshopLayout

    >
      <div className="flex flex-col items-center gap-6 px-4">
        <div
          className="relative w-full max-w-md h-[360px] cursor-pointer perspective"
          onClick={handleFlip}
        >
          <div
            className={`w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden flex items-center justify-center text-center bg-white border rounded-xl p-6 text-xl sm:text-2xl font-semibold text-gray-800">
              {currentCard.phrase}
            </div>

            {/* Back */}
            <div className="absolute w-full h-full rotate-y-180 backface-hidden flex flex-col items-center justify-center bg-white border rounded-xl p-4 gap-4">
              <div className="relative w-[220px] h-[220px]">
                <Image
                  src={`/assets/routines/${currentCard.image}`}
                  alt={currentCard.phrase}
                  fill
                  className="object-contain rounded"
                />
              </div>
              <p className="text-xl font-semibold text-gray-700 text-center">
                {currentCard.translation}
              </p>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4 mt-6">
          <button onClick={handlePrev} className="px-4 py-2 border border-pink-500 text-pink-600 rounded hover:bg-pink-50">
            Anterior
          </button>
          <button onClick={handleNext} className="px-4 py-2 border border-pink-500 text-pink-600 rounded hover:bg-pink-50">
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

export default DailyRoutineFlashcards;
