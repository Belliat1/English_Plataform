"use client";

import React, { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const questions = [
  { en: "What is your complete name?", es: "¿Cuál es tu nombre completo?" },
  { en: "How old are you?", es: "¿Cuántos años tienes?" },
  { en: "Where do you live?", es: "¿Dónde vives?" },
  { en: "What is your telephone number?", es: "¿Cuál es tu número de teléfono?" },
  { en: "Where are you from?", es: "¿De dónde eres?" },
  { en: "Who do you live with?", es: "¿Con quién vives?" },
  { en: "Do you live in a flat or a house?", es: "¿Vives en un apartamento o en una casa?" },
  { en: "Why are you studying English?", es: "¿Por qué estudias inglés?" },
  { en: "What do you do?", es: "¿A qué te dedicas?" },
  { en: "What do you like?", es: "¿Qué te gusta?" },
  { en: "What type of music do you like?", es: "¿Qué tipo de música te gusta?" },
  { en: "What days do you study English?", es: "¿Qué días estudias inglés?" },
  { en: "What do you do at the weekend?", es: "¿Qué haces los fines de semana?" },
  { en: "What is your email address?", es: "¿Cuál es tu dirección de correo electrónico?" },
  { en: "What is your favorite animal?", es: "¿Cuál es tu animal favorito?" },
  { en: "What is your favorite color?", es: "¿Cuál es tu color favorito?" },
  { en: "What is your favorite drink?", es: "¿Cuál es tu bebida favorita?" },
  { en: "What is your favorite food?", es: "¿Cuál es tu comida favorita?" },
  { en: "What do you do in your free time?", es: "¿Qué haces en tu tiempo libre?" },
  { en: "What is your favorite country?", es: "¿Cuál es tu país favorito?" },
];

const NumberedBoard = () => {
  const [revealed, setRevealed] = useState(Array(20).fill(false));

  const handleClick = (index: number) => {
    const updated = [...revealed];
    updated[index] = true; // No se puede cerrar de nuevo
    setRevealed(updated);
  };

  return (
    <WorkshopLayout
      title="Interactive Question Board"
      description="Haz clic en un número para revelar una pregunta en inglés y español."
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-4 max-w-6xl mx-auto">
        {questions.map((q, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer flex flex-col items-center justify-center h-32 sm:h-36 md:h-40 p-4 rounded-xl border-4 transition-all text-center font-bold shadow-md select-none
              ${
                revealed[index]
                  ? "bg-[#aefcf8] text-black border-[#28c9c4]"
                  : "bg-[#00557f] text-white border-[#0082ca] hover:bg-[#0074b6]"
              }
            `}
          >
            {!revealed[index] ? (
              <span className="text-3xl">{index + 1}</span>
            ) : (
              <>
                <p className="text-sm">{q.en}</p>
                <p className="text-sm italic text-gray-700">{q.es}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </WorkshopLayout>
  );
};

export default NumberedBoard;
