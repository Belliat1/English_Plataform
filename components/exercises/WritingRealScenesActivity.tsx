"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type Scene = {
  image: string;
  prompt: string;
};

const writingScenes: Scene[] = [
  {
    image: "health (1).png",
    prompt: "Describe what the person is doing at the gym.",
  },
  {
    image: "health (3).png",
    prompt: "Describe what the family is doing in the kitchen.",
  },
  {
    image: "tour (4).png",
    prompt: "Describe what the woman is doing at the beach.",
  },
  {
    image: "daily (2).png",
    prompt: "Describe what the man is doing in the evening.",
  },
  {
    image: "daily (5).png",
    prompt: "Describe what the girl is doing with the dog.",
  },
];

const WritingRealScenesActivity = () => {
  const [index, setIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const current = writingScenes[index];

  const handleSubmit = () => {
    if (response.trim() !== "") {
      setSubmitted(true);
    }
  };

  const handleNext = () => {
    setResponse("");
    setSubmitted(false);
    setIndex((prev) => (prev + 1) % writingScenes.length);
  };

  return (
    <WorkshopLayout
      title="Actividad de Escritura: Escenarios Reales"
      description="Observa la imagen y escribe una oración en presente continuo."
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        <Image
          src={`/assets/scenes2/${current.image}`}
          alt="Escenario"
          width={400}
          height={300}
          className="rounded border object-contain"
        />

        <p className="text-lg font-medium text-center text-gray-800">{current.prompt}</p>

        <textarea
          className="w-full border border-gray-300 rounded-md p-3 text-sm"
          rows={3}
          placeholder="Ej: He is lifting weights."
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />

        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={response.trim() === ""}
            className="button button--primary"
          >
            Enviar
          </button>
        ) : (
          <>
            <p className="text-green-700 font-medium">¡Tu respuesta ha sido registrada!</p>
            <button
              onClick={handleNext}
              className="button button--secondary"
            >
              Siguiente
            </button>
          </>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default WritingRealScenesActivity;
