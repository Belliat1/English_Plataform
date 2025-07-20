'use client';

import { useState, useEffect, useRef } from 'react';
import WorkshopLayout from './WorkshopLayout';

const flashcards = [
  {
    symptom: "I have a headache.",
    advice: "You should take some medicine.",
    image: "/assets/health/headache.jpg",
    symptomAudio: "/assets/audio/ha-01.mp3",
    adviceAudio: "/assets/audio/ha-02.mp3",
  },
  {
    symptom: "I feel very tired.",
    advice: "You should get some rest.",
    image: "/assets/health/tired.png",
    symptomAudio: "/assets/audio/ha-03.mp3",
    adviceAudio: "/assets/audio/ha-04.mp3",
  },
  {
    symptom: "I have a sore throat.",
    advice: "You should drink warm tea.",
    image: "/assets/health/throat.jpg",
    symptomAudio: "/assets/audio/ha-05.mp3",
    adviceAudio: "/assets/audio/ha-06.mp3",
  },
  {
    symptom: "I’m coughing a lot.",
    advice: "You should see a doctor.",
    image: "/assets/health/cough.jpg",
    symptomAudio: "/assets/audio/ha-07.mp3",
    adviceAudio: "/assets/audio/ha-08.mp3",
  },
  {
    symptom: "I have a fever.",
    advice: "You should stay home and hydrate.",
    image: "/assets/health/fever.jpeg",
    symptomAudio: "/assets/audio/ha-09.mp3",
    adviceAudio: "/assets/audio/ha-10.mp3",
  },
  {
    symptom: "I twisted my ankle.",
    advice: "You should put some ice on it.",
    image: "/assets/health/ankle.jpeg",
    symptomAudio: "/assets/audio/ha-11.mp3",
    adviceAudio: "/assets/audio/ha-12.mp3",
  },
  {
    symptom: "I feel dizzy.",
    advice: "You should sit down and rest.",
    image: "/assets/health/dizzy.jpg",
    symptomAudio: "/assets/audio/ha-13.mp3",
    adviceAudio: "/assets/audio/ha-14.mp3",
  },
  {
    symptom: "My stomach hurts.",
    advice: "You should avoid solid food.",
    image: "/assets/health/stomach.jpeg",
    symptomAudio: "/assets/audio/ha-15.mp3",
    adviceAudio: "/assets/audio/ha-16.mp3",
  },
  {
    symptom: "I have allergies.",
    advice: "You should take an antihistamine.",
    image: "/assets/health/allergy.jpeg",
    symptomAudio: "/assets/audio/ha-17.mp3",
    adviceAudio: "/assets/audio/ha-18.mp3",
  },
  {
    symptom: "I can't sleep well.",
    advice: "You should relax before bed.",
    image: "/assets/health/sleep.jpeg",
    symptomAudio: "/assets/audio/ha-19.mp3",
    adviceAudio: "/assets/audio/ha-20.mp3",
  },
];


const HealthAdviceFlashcards = () => {
  const [index, setIndex] = useState(0);
  const [showAdvice, setShowAdvice] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const current = flashcards[index];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = showAdvice ? current.adviceAudio : current.symptomAudio;
      audioRef.current.play().catch(() => {});
    }
  }, [index, showAdvice]);

  const flipCard = () => {
    setShowAdvice((prev) => !prev);
  };

  const next = () => {
    setShowAdvice(false);
    setIndex((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <WorkshopLayout title="Flashcards: Síntomas y Consejos (con imagen y sonido)">
      <div className="max-w-xl mx-auto flex flex-col items-center space-y-6">

        {/* Imagen individual */}
        <img
          src={current.image}
          alt="Health condition"
          className="w-48 h-48 object-contain"
        />

        {/* Tarjeta */}
        <div
          onClick={flipCard}
          className="w-full bg-white border rounded-lg shadow-md cursor-pointer text-center py-6 px-4 transition hover:shadow-lg"
        >
          <p className="text-lg font-semibold">
            {showAdvice ? `💡 ${current.advice}` : `🤒 ${current.symptom}`}
          </p>
          <p className="text-sm mt-2 text-gray-500 italic">
            {showAdvice ? "Haz clic para ver el síntoma" : "Haz clic para ver el consejo"}
          </p>
        </div>

        {/* Audio */}
        <audio ref={audioRef} preload="auto" />

        {/* Botón siguiente */}
        <button onClick={next} className="button button--secondary">
          Siguiente tarjeta
        </button>
      </div>
    </WorkshopLayout>
  );
};

export default HealthAdviceFlashcards;
