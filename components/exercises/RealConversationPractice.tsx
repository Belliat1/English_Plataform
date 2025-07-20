"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Conversation = {
  question: string;
  answer: string;
  translation: string;
  audio?: string;
};

const conversations: Conversation[] = [
  {
    question: "Hi! How are you doing?",
    answer: "I'm doing well, thank you! And you?",
    translation: "¡Estoy bien, gracias! ¿Y tú?",
    audio: "greeting.mp3",
  },
  {
    question: "What are you doing this weekend?",
    answer: "I'm going to the beach with some friends.",
    translation: "Voy a la playa con algunos amigos.",
    audio: "weekend.mp3",
  },
  {
    question: "Do you like your job?",
    answer: "Yes, I enjoy it a lot.",
    translation: "Sí, lo disfruto mucho.",
    audio: "job.mp3",
  },
  {
    question: "Where are you from?",
    answer: "I'm from Colombia.",
    translation: "Soy de Colombia.",
    audio: "from.mp3",
  },
  {
    question: "What do you usually do after work?",
    answer: "I usually cook dinner and watch TV.",
    translation: "Normalmente cocino la cena y veo televisión.",
    audio: "after-work.mp3",
  },
];

const RealConversationPractice = () => {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = conversations[index];

  const handleNext = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % conversations.length);
  };

  const handlePlayAudio = () => {
    if (current.audio) {
      const audio = new Audio(`/assets/audio/${current.audio}`);
      audio.play().catch(() => {});
    }
  };

  return (
    <WorkshopLayout title="Conversaciones Reales" description="Practica frases comunes con respuestas naturales en inglés.">
      <div className="max-w-xl mx-auto flex flex-col gap-6 px-4 py-6 items-center text-center">
        <p className="text-lg font-semibold text-gray-800">{current.question}</p>

        <button
          onClick={handlePlayAudio}
          className="text-sm text-pink-600 hover:text-pink-800"
        >
          ▶️ Escuchar
        </button>

        <button
          onClick={() => setShowAnswer(true)}
          className="button button--primary"
        >
          Mostrar respuesta
        </button>

        {showAnswer && (
          <div className="mt-4 bg-gray-50 border rounded-lg p-4 w-full">
            <p className="text-base font-medium text-green-700">{current.answer}</p>
            <p className="text-sm text-gray-500 mt-1 italic">{current.translation}</p>
          </div>
        )}

        <button
          onClick={handleNext}
          className="button button--secondary mt-6"
        >
          Siguiente
        </button>
      </div>
    </WorkshopLayout>
  );
};

export default RealConversationPractice;
