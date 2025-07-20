"use client";

import React, { useState } from "react";
import Image from "next/image";

const questions = [
  {
    text: "The cinema is on North Street.",
    translation: "El cine está en la calle North.",
    answer: true,
  },
  {
    text: "The hospital is next to the mall.",
    translation: "El hospital está junto al centro comercial.",
    answer: true,
  },
  {
    text: "The bakery is between the cinema and the police station.",
    translation: "La panadería está entre el cine y la estación de policía.",
    answer: false,
  },
  {
    text: "The coffee shop is on South Street.",
    translation: "La cafetería está en la calle South.",
    answer: true,
  },
  {
    text: "The barbershop is opposite the mall.",
    translation: "La barbería está frente al centro comercial.",
    answer: true,
  },
  {
    text: "The airport is near the hospital.",
    translation: "El aeropuerto está cerca del hospital.",
    answer: false,
  },
  {
    text: "The police station is on East Avenue.",
    translation: "La estación de policía está en la avenida East.",
    answer: true,
  },
  {
    text: "The bank is on Center Street.",
    translation: "El banco está en la calle Center.",
    answer: false,
  },
  {
    text: "The mall is between the hospital and the bakery.",
    translation: "El centro comercial está entre el hospital y la panadería.",
    answer: true,
  },
  {
    text: "The barbershop is next to the bank.",
    translation: "La barbería está junto al banco.",
    answer: true,
  },
];

const DirectionsExercise = () => {
  const [userAnswers, setUserAnswers] = useState<(boolean | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index: number, value: string) => {
    const updated = [...userAnswers];
    updated[index] = value === "true";
    setUserAnswers(updated);
  };

  const checkAnswers = () =>
    userAnswers.map((answer, i) => answer === questions[i].answer);

  const results = checkAnswers();

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center">Directions – True or False</h2>

      {/* Imagen actualizada del nuevo mapa */}
      <Image
        src="/assets/img/directions-map.png"
        alt="City map"
        width={600}
        height={600}
        className="mx-auto rounded border"
      />

      {/* Preguntas */}
      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={i} className="flex items-start gap-4">
            <select
            aria-label="Select a category"
              value={userAnswers[i] === null ? "" : String(userAnswers[i])}
              onChange={(e) => handleChange(i, e.target.value)}
              className="border border-gray-300 p-2 rounded min-w-[100px]"
            >
              <option value="">Selecciona</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <span
              title={q.translation}
              className="cursor-help text-lg leading-snug"
            >
              {q.text}
            </span>
            {submitted && userAnswers[i] !== null && (
              <span className="ml-2 text-xl">
                {results[i] ? "✅" : "❌"}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Botón revisar */}
      <div className="mt-6 text-center">
        <button
          onClick={() => setSubmitted(true)}
          className="px-6 py-2 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition"
        >
          Revisar
        </button>
      </div>

      {/* Resultado final */}
      {submitted && (
        <div className="mt-4 text-lg font-medium text-center">
          Obtuviste {results.filter(Boolean).length} de {questions.length} correctas.
        </div>
      )}
    </div>
  );
};

export default DirectionsExercise;
