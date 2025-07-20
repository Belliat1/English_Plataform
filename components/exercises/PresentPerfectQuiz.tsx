"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  sentence: string;
  options: string[];
  correct: string;
};

const questions: Question[] = [
  {
    sentence: "She ___ (visit) London many times.",
    options: ["has visited", "visited", "have visited"],
    correct: "has visited",
  },
  {
    sentence: "I ___ (never / eat) sushi before.",
    options: ["have never eaten", "never ate", "has never eaten"],
    correct: "have never eaten",
  },
  {
    sentence: "___ you ___ (finish) your homework yet?",
    options: ["Have / finished", "Did / finish", "Has / finished"],
    correct: "Have / finished",
  },
  {
    sentence: "He ___ (not / see) that movie.",
    options: ["has not seen", "did not see", "have not seen"],
    correct: "has not seen",
  },
  {
    sentence: "They ___ (be) to Paris twice.",
    options: ["have been", "was", "has been"],
    correct: "have been",
  },
  {
    sentence: "We ___ (not / do) the project yet.",
    options: ["have not done", "did not do", "has not done"],
    correct: "have not done",
  },
  {
    sentence: "___ she ever ___ (try) Indian food?",
    options: ["Has / tried", "Did / tried", "Have / tried"],
    correct: "Has / tried",
  },
  {
    sentence: "I ___ (lose) my keys!",
    options: ["have lost", "lost", "has lost"],
    correct: "have lost",
  },
  {
    sentence: "They ___ (live) here since 2015.",
    options: ["have lived", "lived", "has lived"],
    correct: "have lived",
  },
  {
    sentence: "He ___ (never / play) tennis before.",
    options: ["has never played", "never played", "have never played"],
    correct: "has never played",
  },
];

const PresentPerfectQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number>(0);

  const question = questions[currentIndex];

  const handleCheck = () => {
    if (!selected) return;
    if (selected === question.correct) {
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
      alert(`Tu puntaje final es ${score}/${questions.length}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
       {/* Explicación (solo se muestra al inicio) */}
{currentIndex === 0 && (
  <div className="bg-blue-50 border border-blue-300 rounded p-4 text-sm text-gray-700">
    <h3 className="text-lg font-bold mb-2">¿Cómo se forma el present perfect?</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>
        El <strong>Present Perfect</strong> se usa para hablar de acciones que han ocurrido en algún momento del pasado,
        pero que tienen relación con el presente o no se menciona exactamente cuándo sucedieron.
      </li>
      <li>
        <strong>Forma:</strong> <code>sujeto + have/has + participio pasado</code> (past participle).
      </li>
      <li>
        Usamos <code>have</code> con: <strong>I, you, we, they</strong>.<br />
        Usamos <code>has</code> con: <strong>he, she, it</strong>.
      </li>
      <li>
        El <strong>participio pasado</strong> puede ser:
        <ul className="list-disc list-inside ml-5">
          <li>Regular: se forma con <code>-ed</code> (ej: play → played, watch → watched).</li>
          <li>Irregular: cambia completamente (ej: go → gone, eat → eaten). Estos deben memorizarse.</li>
        </ul>
      </li>
      <li>
        <strong>Ejemplos:</strong><br />
        ✅ <code>She has visited London.</code><br />
        ✅ <code>I have never eaten sushi.</code>
      </li>
    </ul>
  </div>
)}


        {/* Pregunta */}
        <p className="text-xl font-medium">{question.sentence}</p>

        {/* Opciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {question.options.map((option) => {
            const isCorrect = option === question.correct;
            const isSelected = selected === option;

            let style = "px-4 py-2 border rounded text-left";

            if (showResult && isSelected) {
              style += isCorrect
                ? " bg-green-100 border-green-500 text-green-700"
                : " bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              style += " bg-blue-100 border-blue-400";
            } else {
              style += " hover:bg-gray-50";
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
        <div className="flex gap-4">
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
      </div>
    </WorkshopLayout>
  );
};

export default PresentPerfectQuiz;
