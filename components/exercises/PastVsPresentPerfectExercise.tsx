"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  sentence: string;
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    sentence: "I ___ my homework already.",
    options: ["did", "have done", "was doing"],
    answer: "have done",
  },
  {
    sentence: "She ___ to the supermarket yesterday.",
    options: ["has gone", "went", "goes"],
    answer: "went",
  },
  {
    sentence: "They ___ in Paris since 2020.",
    options: ["lived", "have lived", "live"],
    answer: "have lived",
  },
  {
    sentence: "He ___ a new car last month.",
    options: ["bought", "has bought", "buys"],
    answer: "bought",
  },
  {
    sentence: "We ___ already ___ lunch.",
    options: ["have / eaten", "ate / have", "eating / have"],
    answer: "have / eaten",
  },
  {
    sentence: "She ___ her keys this morning.",
    options: ["lost", "has lost", "loses"],
    answer: "has lost",
  },
  {
    sentence: "___ you ever ___ to London?",
    options: ["Did / go", "Have / been", "Do / go"],
    answer: "Have / been",
  },
  {
    sentence: "We ___ that movie last weekend.",
    options: ["have seen", "saw", "see"],
    answer: "saw",
  },
  {
    sentence: "He ___ to bed early last night.",
    options: ["went", "has gone", "goes"],
    answer: "went",
  },
  {
    sentence: "They ___ their homework yet.",
    options: ["haven't finished", "didn't finish", "don't finish"],
    answer: "haven't finished",
  },
];


const PastVsPresentPerfectExercise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = questions[currentIndex];

  const handleCheck = () => {
    if (!selected) return;
    if (selected === current.answer) {
      setScore((prev) => prev + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`¡Ejercicio finalizado! Tu puntaje es ${score}/${questions.length}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout
      title="Ejercicio: Past Simple vs Present Perfect"
      description="Elige la forma correcta del verbo para completar cada oración."
    >
      <div className="max-w-xl mx-auto flex flex-col gap-6 px-4 py-6">
        {/* Explicación */}
        <div className="bg-yellow-50 border border-yellow-300 p-4 rounded text-sm text-gray-800">
          <p>
            <strong>Past Simple</strong> se usa para acciones completadas en un momento específico del pasado. Ej: <em>I visited London last year.</em><br />
            <strong>Present Perfect</strong> se usa para acciones con relevancia en el presente o experiencias sin un tiempo definido. Ej: <em>I have visited London.</em>
          </p>
        </div>

        {/* Pregunta */}
        <h2 className="text-lg font-medium">{current.sentence}</h2>

        {/* Opciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {current.options.map((option) => {
            const isCorrect = option === current.answer;
            const isSelected = selected === option;
            let style = "px-4 py-2 rounded border text-sm font-medium";

            if (showResult && isSelected) {
              style += isCorrect
                ? " bg-green-100 border-green-500 text-green-700"
                : " bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              style += " bg-blue-100 border-blue-400";
            } else {
              style += " bg-white border-gray-300 hover:bg-pink-50";
            }

            return (
              <button
                key={option}
                onClick={() => setSelected(option)}
                disabled={showResult}
                className={style}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Resultado */}
        {showResult && (
          <p
            className={`mt-4 text-center font-semibold ${
              selected === current.answer ? "text-green-600" : "text-red-600"
            }`}
          >
            {selected === current.answer
              ? "¡Correcto!"
              : `Incorrecto. La respuesta correcta es: "${current.answer}"`}
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
            <button onClick={handleNext} className="button button--secondary">
              Siguiente
            </button>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Puntaje: {score} / {questions.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default PastVsPresentPerfectExercise;
