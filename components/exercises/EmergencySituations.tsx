'use client';

import { useState } from 'react';
import WorkshopLayout from './WorkshopLayout';

const emergencies = [
  { scenario: "Someone fainted.", correct: "Call emergency services and check their breathing." },
  { scenario: "There’s a fire in the building.", correct: "Evacuate immediately and call 911." },
  { scenario: "A person is choking.", correct: "Perform the Heimlich maneuver." },
  { scenario: "You see a car accident.", correct: "Call 911 and stay at a safe distance." },
  { scenario: "Someone has a nosebleed.", correct: "Pinch their nose and lean them forward." },
  { scenario: "You feel chest pain.", correct: "Call emergency services immediately." },
  { scenario: "There’s a cut with heavy bleeding.", correct: "Apply pressure and call for help." },
  { scenario: "Someone had a seizure.", correct: "Protect their head and wait it out." },
  { scenario: "You smell gas.", correct: "Leave the place and call the gas company." },
  { scenario: "A person is unconscious.", correct: "Check for breathing and call emergency services." },
];

const EmergencySituations = () => {
  const [index, setIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [show, setShow] = useState(false);

  const next = () => {
    setResponse("");
    setShow(false);
    setIndex((i) => (i + 1) % emergencies.length);
  };

  return (
    <WorkshopLayout title="Emergencias: ¿Qué hacer?">
      <div className="max-w-xl mx-auto space-y-6">
        <p className="text-lg font-semibold">🚨 {emergencies[index].scenario}</p>

        <textarea
          rows={3}
          placeholder="¿Qué harías en esta situación?"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button onClick={() => setShow(true)} className="button button--primary">Ver sugerencia</button>

        {show && (
          <>
            <p className="text-sm text-gray-600 mt-2">
              💡 Sugerencia: <em>{emergencies[index].correct}</em>
            </p>
            <button onClick={next} className="button button--secondary mt-2">Siguiente</button>
          </>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default EmergencySituations;
    