"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const prompts = [
  "What are you going to do this weekend?",
  "Describe a plan you have for tomorrow.",
  "Write about something you think will happen next year.",
  "What is your family going to do for the holidays?",
  "Make a prediction about technology in the future.",
  "What are you going to study or learn this year?",
  "Write about something your best friend is going to do soon.",
  "What do you think the weather will be like next week?",
];

const FutureWritingActivity = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % prompts.length);
    setText("");
    setSubmitted(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <WorkshopLayout
      title="Actividad de Escritura: Planes y Predicciones"
      description="Escribe respuestas usando 'going to' para planes y 'will' para predicciones futuras."
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-6 px-4 py-6">
        {/* Explicación */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-sm text-gray-800">
          <p>
            Usa <strong>“going to”</strong> para hablar de planes que ya tienes:
            <br />
            <em>I’m going to visit my grandma this weekend.</em>
          </p>
          <p className="mt-2">
            Usa <strong>“will”</strong> para hacer predicciones o decisiones
            rápidas:
            <br />
            <em>It will probably rain tomorrow.</em>
          </p>
        </div>

        {/* Prompt */}
        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
          <p className="text-lg font-semibold">{prompts[index]}</p>
        </div>

        {/* Textarea */}
        <textarea
          className="w-full border border-gray-300 rounded-md p-3 text-gray-800"
          rows={6}
          placeholder="Escribe tu respuesta aquí usando 'will' o 'going to'..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Botones */}
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="button button--primary"
            disabled={text.trim().length === 0 || submitted}
          >
            Enviar
          </button>
          <button onClick={handleNext} className="button button--secondary">
            Siguiente
          </button>
        </div>

        {/* Feedback */}
        {submitted && (
          <p className="text-green-600 font-medium">
            ¡Gracias por tu respuesta! Puedes continuar con otra pregunta.
          </p>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default FutureWritingActivity;
