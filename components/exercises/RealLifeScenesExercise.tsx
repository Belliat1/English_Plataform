"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  image: string;
  options: string[];
  correct: string;
};

const sceneQuestions: Question[] = [
  {
    image: "health (1).png",
    options: ["He is running", "He is lifting weights", "He is sleeping"],
    correct: "He is lifting weights",
  },
  {
    image: "health (2).png",
    options: ["They are running", "They are cooking", "They are sleeping"],
    correct: "They are running",
  },
  {
    image: "health (3).png",
    options: ["They are cooking", "They are reading", "They are dancing"],
    correct: "They are cooking",
  },
  {
    image: "health (4).png",
    options: ["They are eating", "They are meditating", "They are playing tennis"],
    correct: "They are meditating",
  },
  {
    image: "health (5).png",
    options: ["They are walking", "They are cycling", "They are painting"],
    correct: "They are cycling",
  },
  {
    image: "tour (4).png",
    options: ["She is relaxing at the beach", "She is shopping", "She is hiking"],
    correct: "She is relaxing at the beach",
  },
  {
    image: "tour (5).png",
    options: ["They are sightseeing", "They are cooking", "They are exercising"],
    correct: "They are sightseeing",
  },
  {
    image: "daily (1).png",
    options: ["She is drinking tea", "She is dancing", "She is painting"],
    correct: "She is drinking tea",
  },
  {
    image: "daily (2).png",
    options: ["He is sleeping", "He is reading", "He is exercising"],
    correct: "He is reading",
  },
  {
    image: "daily (6).png",
    options: ["She is doing yoga", "She is jumping", "She is washing the dishes"],
    correct: "She is doing yoga",
  },
];

const RealLifeScenesHealthTourDaily = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = sceneQuestions[index];

  const handleCheck = () => {
    if (!selected) return;
    if (selected === current.correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (index + 1 < sceneQuestions.length) {
      setIndex(index + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      alert(`Quiz completo. Tu puntaje final es ${score} / ${sceneQuestions.length}`);
      setIndex(0);
      setScore(0);
      setSelected(null);
      setShowResult(false);
    }
  };

  return (
    <WorkshopLayout>
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        
        {/* Imagen contenedor fijo */}
        <div className="w-[400px] h-[250px] relative border rounded overflow-hidden">
          <Image
            src={`/assets/scenes2/${current.image}`}
            alt="Scene"
            fill
            className="object-contain"
          />
        </div>

        {/* Opciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {current.options.map((option) => {
            const isCorrect = option === current.correct;
            const isSelected = option === selected;
            let baseClass = "px-4 py-2 border rounded text-sm font-medium";
            let feedbackStyle = "";

            if (showResult && isSelected) {
              feedbackStyle = isCorrect
                ? "bg-green-100 border-green-500 text-green-700"
                : "bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              feedbackStyle = "bg-blue-100 border-blue-400";
            } else {
              feedbackStyle = "bg-white border-gray-300 hover:bg-pink-50";
            }

            return (
              <button
                key={option}
                className={`${baseClass} ${feedbackStyle}`}
                onClick={() => setSelected(option)}
                disabled={showResult}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Resultado textual */}
        {showResult && (
          <p className={`mt-4 text-center font-semibold ${selected === current.correct ? "text-green-600" : "text-red-600"}`}>
            {selected === current.correct
              ? "¡Correcto!"
              : `Incorrecto. La respuesta correcta es: "${current.correct}"`}
          </p>
        )}

        {/* Botones */}
        <div className="mt-6 flex gap-4">
          {!showResult ? (
            <button
              onClick={handleCheck}
              disabled={!selected}
              className="button button--primary"
            >
              Revisar
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="button button--secondary"
            >
              Siguiente
            </button>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Puntaje: {score} / {sceneQuestions.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default RealLifeScenesHealthTourDaily;
