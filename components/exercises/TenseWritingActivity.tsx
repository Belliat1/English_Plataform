"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const prompts = [
  {
    id: 1,
    prompt: "Describe a place you visited last year. Use past simple.",
    example: "I went to the beach with my family. We stayed in a small hotel and ate delicious food.",
  },
  {
    id: 2,
    prompt: "Talk about something you have done recently. Use present perfect.",
    example: "I have started a new book. It's very interesting, and I've already read three chapters.",
  },
  {
    id: 3,
    prompt: "Write about a movie you saw last weekend.",
    example: "I saw a comedy last weekend. It was really funny and I laughed a lot.",
  },
  {
    id: 4,
    prompt: "Mention something new you have learned this month.",
    example: "I have learned how to cook pasta. I’ve tried it three times already!",
  },
  {
    id: 5,
    prompt: "Write about a trip you have taken in your life.",
    example: "I have visited Paris. It was amazing, and I have seen the Eiffel Tower.",
  },
];

const TenseWritingActivity = () => {
  const [index, setIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const current = prompts[index];

  const handleSubmit = () => {
    if (!response.trim()) return;
    setSubmitted(true);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % prompts.length);
    setResponse("");
    setSubmitted(false);
  };

  return (
    <WorkshopLayout
      title="Writing Activity: Past Simple & Present Perfect"
      description="Practica escribiendo frases usando pasado simple y presente perfecto."
    >
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-6">
        <div>
          <p className="text-lg font-medium text-gray-800 mb-1">{current.prompt}</p>
          <p className="text-sm text-gray-500 italic">Ejemplo: {current.example}</p>
        </div>

        <textarea
          rows={5}
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-800"
          placeholder="Escribe tu respuesta aquí..."
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          disabled={submitted}
        />

        {submitted && (
          <div className="p-4 bg-green-100 text-green-800 border border-green-300 rounded">
            ¡Respuesta enviada! Puedes continuar al siguiente ejercicio.
          </div>
        )}

        <div className="flex gap-4">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="button button--primary"
              disabled={!response.trim()}
            >
              Enviar
            </button>
          ) : (
            <button onClick={handleNext} className="button button--secondary">
              Siguiente
            </button>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default TenseWritingActivity;