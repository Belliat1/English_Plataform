"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Prompt = {
  id: number;
  type: "person" | "place" | "object";
  prompt: string;
  hint: string;
};

const prompts: Prompt[] = [
  {
    id: 1,
    type: "person",
    prompt: "Describe a friend or relative you admire.",
    hint: "Mention their appearance and personality using 3–5 adjectives.",
  },
  {
    id: 2,
    type: "place",
    prompt: "Describe your favorite place to relax.",
    hint: "Talk about the location, environment, and why you like it.",
  },
  {
    id: 3,
    type: "object",
    prompt: "Describe an object you use every day.",
    hint: "Mention its shape, size, color, and material.",
  },
  {
    id: 4,
    type: "person",
    prompt: "Describe a famous person and what makes them special.",
    hint: "Include personality traits and accomplishments.",
  },
  {
    id: 5,
    type: "place",
    prompt: "Describe a city or country you want to visit.",
    hint: "Include environmental features and cultural elements.",
  },
  {
    id: 6,
    type: "object",
    prompt: "Describe your favorite item of clothing.",
    hint: "Mention when you wear it and how it makes you feel.",
  },
  {
    id: 7,
    type: "person",
    prompt: "Describe a teacher or mentor who influenced you.",
    hint: "Mention their behavior, values, and how they helped you.",
  },
  {
    id: 8,
    type: "place",
    prompt: "Describe a place in nature that you enjoy.",
    hint: "Talk about sights, sounds, smells, and sensations.",
  },
  {
    id: 9,
    type: "object",
    prompt: "Describe a gift you received and why it was special.",
    hint: "Explain who gave it to you and your feelings about it.",
  },
  {
    id: 10,
    type: "place",
    prompt: "Describe your home or room.",
    hint: "Mention size, color, objects, and atmosphere.",
  },
];

const DescriptionExpressionExercises = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userText, setUserText] = useState("");
  const [submittedText, setSubmittedText] = useState<string | null>(null);

  const current = prompts[currentIndex];

  const handleSubmit = () => {
    if (userText.trim() !== "") {
      setSubmittedText(userText.trim());
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % prompts.length);
    setUserText("");
    setSubmittedText(null);
  };

  return (
    <WorkshopLayout
      title="Ejercicios de Expresión Descriptiva"
      description="Practica cómo describir personas, lugares y objetos con mayor detalle y vocabulario."
    >
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6 text-gray-800">
        <h2 className="text-xl font-semibold text-pink-600">{current.prompt}</h2>
        <p className="text-sm italic text-gray-600">{current.hint}</p>

        <textarea
          rows={6}
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mt-4 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          placeholder="Escribe tu descripción aquí..."
        />

        {!submittedText ? (
          <button
            onClick={handleSubmit}
            className="button button--primary"
            disabled={!userText.trim()}
          >
            Enviar respuesta
          </button>
        ) : (
          <>
            <div className="bg-green-50 border border-green-400 text-green-700 rounded p-4">
              <p className="font-semibold">Tu descripción:</p>
              <p className="mt-2 whitespace-pre-line">{submittedText}</p>
            </div>

            <button onClick={handleNext} className="button button--secondary mt-4">
              Siguiente ejercicio
            </button>
          </>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default DescriptionExpressionExercises;