"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type RoleCard = {
  scenario: string;
  roleA: string;
  roleB: string;
  promptA: string;
  promptB: string;
};

const rolePlays: RoleCard[] = [
  {
    scenario: "In a restaurant",
    roleA: "Customer",
    roleB: "Waiter",
    promptA: "Ask for the menu and order a drink.",
    promptB: "Offer the menu and recommend a drink.",
  },
  {
    scenario: "At the airport",
    roleA: "Traveler",
    roleB: "Airport staff",
    promptA: "Ask where gate 25 is and what time the flight leaves.",
    promptB: "Give directions and tell the boarding time.",
  },
  {
    scenario: "At the doctor",
    roleA: "Patient",
    roleB: "Doctor",
    promptA: "Say you have a headache and ask for help.",
    promptB: "Ask about symptoms and suggest treatment.",
  },
  {
    scenario: "Making plans",
    roleA: "Friend A",
    roleB: "Friend B",
    promptA: "Suggest going to the cinema this weekend.",
    promptB: "Agree and ask what time.",
  },
];

const RolePlayGame = () => {
  const [index, setIndex] = useState(0);

  const current = rolePlays[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % rolePlays.length);
  };

  return (
    <WorkshopLayout
      title="Juego de Roles"
      description="Practica situaciones reales en inglés asumiendo diferentes papeles."
    >
      <div className="max-w-xl mx-auto flex flex-col gap-6 px-4 py-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-600">{current.scenario}</h2>
          <p className="mt-2 text-gray-700">
            Interpreta ambos papeles o hazlo con un compañero.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border rounded p-4 shadow bg-white">
            <h3 className="text-lg font-semibold text-blue-700">Role: {current.roleA}</h3>
            <p className="mt-2 text-gray-700">{current.promptA}</p>
          </div>
          <div className="border rounded p-4 shadow bg-white">
            <h3 className="text-lg font-semibold text-green-700">Role: {current.roleB}</h3>
            <p className="mt-2 text-gray-700">{current.promptB}</p>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="button button--secondary self-center"
        >
          Siguiente Escenario
        </button>
      </div>
    </WorkshopLayout>
  );
};

export default RolePlayGame;
