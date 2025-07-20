"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  subject: string;
  verb: string;
  options: string[];
  correct: string;
};

const presentSimpleQuestions: Question[] = [
  { subject: "She", verb: "like", options: ["like", "likes"], correct: "likes" },
  { subject: "They", verb: "play", options: ["play", "plays"], correct: "play" },
  { subject: "He", verb: "eat", options: ["eat", "eats"], correct: "eats" },
  { subject: "I", verb: "go", options: ["go", "goes"], correct: "go" },
  { subject: "It", verb: "run", options: ["run", "runs"], correct: "runs" },
  { subject: "We", verb: "watch", options: ["watch", "watches"], correct: "watch" },
  { subject: "He", verb: "study", options: ["study", "studies"], correct: "studies" },
  { subject: "They", verb: "want", options: ["want", "wants"], correct: "want" },
];

const PresentSimpleSQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(true);

  const current = presentSimpleQuestions[currentIndex];
  const isCorrect = selected === current.correct;

  const handleCheck = () => {
    if (!selected) return;
    setShowResult(true);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    if (currentIndex + 1 < presentSimpleQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert(`Quiz terminado. Tu puntaje: ${score}/${presentSimpleQuestions.length}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout
      title="Present Simple: Verb + 's'"
      description="¿Cuándo usamos la 's' en los verbos? ¡Practiquémoslo!"
    >
      <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-6 items-center text-center">

        {showExplanation && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left rounded">
            <h3 className="font-bold text-lg mb-2">📘 Reglas del presente simple:</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>
                Con <strong>he / she / it</strong>, el verbo lleva <strong>"s"</strong>: <em>She likes apples.</em>
              </li>
              <li>
                Con <strong>I / you / we / they</strong>, el verbo va sin <strong>"s"</strong>: <em>They like apples.</em>
              </li>
              <li>
                Verbos que terminan en <strong>-y</strong> después de consonante cambian a <strong>-ies</strong>: <em>He studies</em>.
              </li>
              <li>
                Algunos verbos agregan <strong>es</strong>: go → goes, watch → watches, do → does.
              </li>
            </ul>
            <button
              className="mt-3 text-pink-600 underline text-sm"
              onClick={() => setShowExplanation(false)}
            >
              Ocultar explicación
            </button>
          </div>
        )}

        {/* Pregunta */}
        <p className="text-xl font-medium">
          {current.subject} ___ {current.verb}
        </p>

        {/* Opciones */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
          {current.options.map((option) => {
            const baseStyle = "px-4 py-2 rounded border text-sm font-medium";
            let style = baseStyle + " ";

            if (showResult && selected === option) {
              style += option === current.correct
                ? "bg-green-100 border-green-500 text-green-700"
                : "bg-red-100 border-red-500 text-red-700";
            } else if (selected === option) {
              style += "bg-blue-50 border-blue-400";
            } else {
              style += "bg-white border-gray-300 hover:bg-pink-50";
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

        {/* Botones */}
        <div className="flex gap-4 mt-4">
          {!showResult && (
            <button
              onClick={handleCheck}
              className="button button--primary"
              disabled={!selected}
            >
              Revisar
            </button>
          )}
          {showResult && (
            <button
              onClick={handleNext}
              className="button button--secondary"
            >
              Siguiente
            </button>
          )}
        </div>

        <div className="text-lg font-semibold text-gray-700">
          Puntaje: {score}/{presentSimpleQuestions.length}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default PresentSimpleSQuiz;
