'use client';

import { useState } from 'react';
import WorkshopLayout from './WorkshopLayout';

const scenarios = [
  { question: "What if you lost your wallet?", sample: "I would call my bank." },
  { question: "What if it starts raining during your picnic?", sample: "We might move inside." },
  { question: "What if your bike tire goes flat?", sample: "I would walk it home." },
  { question: "What if you won the lottery?", sample: "I would travel the world." },
  { question: "What if your phone gets stolen?", sample: "I would report it." },
  { question: "What if your friend fails a test?", sample: "I might help them study." },
  { question: "What if there’s a blackout?", sample: "We might use candles." },
  { question: "What if you’re late to a meeting?", sample: "I would apologize." },
  { question: "What if you forget your homework?", sample: "I might talk to the teacher." },
  { question: "What if your internet stops working?", sample: "I would call the provider." },
];

const WhatIfScenarios = () => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const current = scenarios[index];

  const check = () => {
    setFeedback(`💡 Ejemplo: ${current.sample}`);
  };

  const next = () => {
    setAnswer("");
    setFeedback("");
    setIndex((prev) => (prev + 1) % scenarios.length);
  };

  return (
    <WorkshopLayout title="¿Qué pasaría si...? (Responde tú mismo)">
      <div className="max-w-xl mx-auto space-y-6">
        <p className="text-lg font-semibold">{current.question}</p>

        <textarea
          rows={3}
          placeholder="Escribe tu respuesta aquí..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button onClick={check} className="button button--primary">
          Ver sugerencia
        </button>

        {feedback && (
          <div className="space-y-2">
            <p className="text-sm text-gray-700">{feedback}</p>
            <button onClick={next} className="button button--secondary">
              Siguiente
            </button>
          </div>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default WhatIfScenarios;
