'use client';

import { useState } from 'react';
import WorkshopLayout from './WorkshopLayout';

const situations = [
  "You hear a siren nearby.",
  "The lights suddenly go out.",
  "Your friend is smiling mysteriously.",
  "You see people running toward a store.",
  "Someone is holding a bunch of balloons.",
  "Your class is unusually quiet today.",
  "Your teacher looks angry.",
  "There's a big box on your desk.",
  "It smells like cake in the hallway.",
  "You hear people clapping in another room.",
];

const SpeculationGame = () => {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const current = situations[index];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % situations.length);
    setGuess("");
    setSubmitted(false);
  };

  return (
    <WorkshopLayout title="Especula sobre lo que podría pasar">
      <div className="max-w-xl mx-auto space-y-6">
        <p className="font-semibold">🔍 Escenario:</p>
        <p>{current}</p>

        <textarea
          rows={3}
          placeholder="Especula usando: It might..., I think..., Maybe..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {!submitted ? (
          <button onClick={handleSubmit} className="button button--primary">
            Enviar
          </button>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-green-700">¡Bien! Estás practicando especulación en inglés.</p>
            <button onClick={next} className="button button--secondary">
              Siguiente
            </button>
          </div>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default SpeculationGame;
