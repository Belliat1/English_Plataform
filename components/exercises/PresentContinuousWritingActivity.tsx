"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type WritingPrompt = {
  image: string;
  expected: string; // La respuesta sugerida
};

const prompts: WritingPrompt[] = [
  {
    image: "father-son-and-daughter-2.png",
    expected: "They are shopping together.",
  },
  {
    image: "father-son-and-daughter-3.png",
    expected: "They are singing together.",
  },
  {
    image: "flat-creativity-concept-illustration-2.png",
    expected: "The boy is sculpting a statue.",
  },
  {
    image: "flat-creativity-concept-illustration-3.png",
    expected: "The girl is playing the piano.",
  },
  {
    image: "flat-creativity-concept-illustration-4.png",
    expected: "The woman is cooking.",
  },
  {
    image: "flat-creativity-concept-illustration-22.png",
    expected: "The man is playing tennis.",
  },
  {
    image: "sports-activity.png",
    expected: "The boys are playing soccer.",
  },
];

const PresentContinuousWritingActivity = () => {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const current = prompts[index];

  const handleCheck = () => {
    const normalizedInput = input.trim().toLowerCase();
    const normalizedExpected = current.expected.trim().toLowerCase();
    if (normalizedInput === normalizedExpected) {
      setFeedback("✅ ¡Muy bien! Tu respuesta es correcta.");
    } else {
      setFeedback(`❌ Revisa tu oración. Sugerencia: "${current.expected}"`);
    }
  };

  const handleNext = () => {
    setInput("");
    setFeedback(null);
    setIndex((prev) => (prev + 1) % prompts.length);
  };

  return (
    <WorkshopLayout
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        {/* Imagen */}
        <div className="w-full h-[240px] sm:h-[300px] relative border rounded shadow">
          <Image
            src={`/assets/scenes/${current.image}`}
            alt="Scene"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Input */}
        <textarea
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu oración aquí..."
          className="w-full border rounded px-4 py-2 text-lg"
        />

        {/* Botones */}
        <div className="flex gap-4">
          <button onClick={handleCheck} className="button button--primary">
            Revisar
          </button>
          {feedback && (
            <button onClick={handleNext} className="button button--secondary">
              Siguiente
            </button>
          )}
        </div>

        {/* Feedback */}
        {feedback && (
          <p className="text-lg font-medium text-gray-700 mt-2 text-center">
            {feedback}
          </p>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default PresentContinuousWritingActivity;
