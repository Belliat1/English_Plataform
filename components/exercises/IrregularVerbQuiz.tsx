"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type IrregularVerb = {
  base: string;
  past: string;
  participle: string;
  translation: string;
};

const irregularVerbs: IrregularVerb[] = [
  { base: "go", past: "went", participle: "gone", translation: "ir" },
  { base: "eat", past: "ate", participle: "eaten", translation: "comer" },
  { base: "see", past: "saw", participle: "seen", translation: "ver" },
  { base: "take", past: "took", participle: "taken", translation: "tomar / llevar" },
  { base: "write", past: "wrote", participle: "written", translation: "escribir" },
  { base: "come", past: "came", participle: "come", translation: "venir" },
  { base: "drink", past: "drank", participle: "drunk", translation: "beber" },
  { base: "begin", past: "began", participle: "begun", translation: "empezar" },
  { base: "break", past: "broke", participle: "broken", translation: "romper" },
  { base: "choose", past: "chose", participle: "chosen", translation: "elegir" },
  { base: "do", past: "did", participle: "done", translation: "hacer" },
  { base: "have", past: "had", participle: "had", translation: "tener" },
  { base: "make", past: "made", participle: "made", translation: "hacer / fabricar" },
  { base: "buy", past: "bought", participle: "bought", translation: "comprar" },
  { base: "teach", past: "taught", participle: "taught", translation: "enseñar" },
];

const IrregularVerbQuiz = () => {
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState({ past: "", participle: "" });
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const current = irregularVerbs[index];

  const handleCheck = () => {
    const correctPast = userInput.past.toLowerCase().trim() === current.past;
    const correctParticiple = userInput.participle.toLowerCase().trim() === current.participle;
    if (correctPast && correctParticiple) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setUserInput({ past: "", participle: "" });
    setShowResult(false);
    setIndex((prev) => (prev + 1) % irregularVerbs.length);
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        {/* Explicación */}
        {index === 0 && (
          <div className="bg-yellow-50 border border-yellow-400 rounded p-4 text-sm text-gray-800">
            <strong>Recuerda:</strong> los verbos irregulares no siguen la regla del <code>-ed</code>. Debes memorizar sus formas en pasado y participio.
            <br />Por ejemplo: <code>go → went → gone</code>
          </div>
        )}

        {/* Pregunta */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">
            {index + 1}. ¿Cuál es la forma en pasado y participio de <span className="text-blue-600 italic">{current.base}</span>?
          </h2>
          <p className="text-gray-600 mb-4">(Traducción: {current.translation})</p>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Past"
              value={userInput.past}
              onChange={(e) => setUserInput({ ...userInput, past: e.target.value })}
              disabled={showResult}
              className="border px-4 py-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Past participle"
              value={userInput.participle}
              onChange={(e) => setUserInput({ ...userInput, participle: e.target.value })}
              disabled={showResult}
              className="border px-4 py-2 rounded w-full"
            />
          </div>

          {/* Resultado */}
          {showResult && (
            <div className="mt-4 text-sm text-center">
              {userInput.past.toLowerCase() === current.past &&
              userInput.participle.toLowerCase() === current.participle ? (
                <p className="text-green-600 font-semibold">✅ ¡Correcto!</p>
              ) : (
                <p className="text-red-600">
                  ❌ Respuesta incorrecta. <br />
                  Pasado: <strong>{current.past}</strong> / Participio: <strong>{current.participle}</strong>
                </p>
              )}
            </div>
          )}
        </div>

        {/* Botones */}
        <div className="flex gap-4 mt-6">
          {!showResult ? (
            <button
              onClick={handleCheck}
              className="button button--primary"
              disabled={!userInput.past || !userInput.participle}
            >
              Revisar
            </button>
          ) : (
            <button onClick={handleNext} className="button button--secondary">
              Siguiente
            </button>
          )}
        </div>

        {/* Puntaje */}
        <div className="text-sm text-gray-600 mt-4">
          Puntaje: {score}/{irregularVerbs.length}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default IrregularVerbQuiz;
