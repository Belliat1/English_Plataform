'use client';

import { useState } from 'react';
import WorkshopLayout from './WorkshopLayout';

const prompts = [
  "Plan a future vacation together. What will you do?",
  "Talk about what you are going to do next weekend.",
  "What might happen if both of you get lost in a city?",
  "Discuss your ideal jobs and how you’ll get them.",
  "Plan a business you might start together.",
  "Describe what school will be like in 2050.",
  "Create a futuristic story using 'will' and 'might'.",
  "Imagine you travel to Mars. What would you take?",
  "Predict how transport will change in 30 years.",
  "Imagine you meet again in 10 years. What will your lives be like?",
];

const FuturePairActivity = () => {
  const [index, setIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [show, setShow] = useState(false);

  const current = prompts[index];

  const handleSubmit = () => {
    setShow(true);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % prompts.length);
    setResponse("");
    setShow(false);
  };

  return (
    <WorkshopLayout title="Actividad de Parejas (Simulación)">
      <div className="max-w-xl mx-auto space-y-6">
        <p className="font-semibold">🗣️ Actividad:</p>
        <p>{current}</p>

        <textarea
          rows={4}
          placeholder="Escribe tu respuesta como si conversaras con alguien."
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {!show ? (
          <button onClick={handleSubmit} className="button button--primary">
            Enviar
          </button>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-green-700">✅ Excelente. Recuerda practicar con otra persona si puedes.</p>
            <button onClick={next} className="button button--secondary">
              Siguiente
            </button>
          </div>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default FuturePairActivity;
