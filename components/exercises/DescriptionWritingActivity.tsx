"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type WritingPrompt = {
  image: string;
  instruction: string;
};

const prompts: WritingPrompt[] = [
  {
    image: "tall-building.jpg",
    instruction: "Describe this building. What does it look like? Where is it? What happens inside?",
  },
  {
    image: "happy-girl.jpg",
    instruction: "Describe the girl in the image. What is she doing? How does she look?",
  },
  {
    image: "blue-car.jpeg",
    instruction: "Describe the car. What color is it? How would you describe it to someone?",
  },
  {
    image: "cozy-room.jpeg",
    instruction: "Describe the room. What objects can you see? How does it make you feel?",
  },
  {
    image: "school.jpg",
    instruction: "Describe the place. What do people do here? How is it different from other places?",
  },
];

const DescriptionWritingActivity = () => {
  const [index, setIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const prompt = prompts[index];

  const handleNext = () => {
    if (index + 1 < prompts.length) {
      setIndex(index + 1);
      setResponse("");
      setSubmitted(false);
    } else {
      alert("Actividad finalizada. ¡Buen trabajo!");
      setIndex(0);
      setResponse("");
      setSubmitted(false);
    }
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        <Image
          src={`/assets/descriptions/${prompt.image}`}
          alt="Descripción"
          width={400}
          height={260}
          className="rounded border object-contain"
        />

        <p className="text-md text-center font-medium text-gray-800">
          {prompt.instruction}
        </p>

        <textarea
          className="w-full border rounded p-3 text-sm text-gray-700"
          rows={5}
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Escribe tu descripción aquí..."
          disabled={submitted}
        />

        {!submitted ? (
          <button
            className="button button--primary mt-2"
            disabled={!response.trim()}
            onClick={() => setSubmitted(true)}
          >
            Enviar respuesta
          </button>
        ) : (
          <div className="text-green-600 text-sm font-semibold text-center">
            ¡Respuesta enviada!
          </div>
        )}

        {submitted && (
          <button
            onClick={handleNext}
            className="button button--secondary mt-4"
          >
            Siguiente
          </button>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default DescriptionWritingActivity;
