"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const wordBank = [
  "arrive",
  "ask",
  "fly",
  "go",
  "pay",
  "say",
  "stop",
  "take",
  "tell",
  "think",
  "want",
];

const correctAnswers = [
  "went",
  "flew",
  "wanted",
  "arrived",
  "took",
  "told",
  "stopped",
  "said",
  "thought",
  "paid",
];

const PastSimpleFillExercise = () => {
  const [inputs, setInputs] = useState<string[]>(Array(correctAnswers.length).fill(""));
  const [showResult, setShowResult] = useState(false);

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value.trim().toLowerCase();
    setInputs(newInputs);
  };

  const handleCheck = () => {
    setShowResult(true);
  };

  const getInputClass = (i: number) => {
    if (!showResult) return "border border-gray-300";
    return inputs[i] === correctAnswers[i]
      ? "border-green-500 bg-green-50"
      : "border-red-500 bg-red-50";
  };

  return (
    <WorkshopLayout
      title="Past Simple: Fill in the Blanks"
      description="Completa el texto con los verbos en pasado simple."
    >
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <p className="text-sm bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
          Usa los verbos en paréntesis y conviértelos al pasado simple. Recuerda: los verbos
          regulares se forman con <code>-ed</code>, pero los irregulares cambian completamente.
        </p>

        <div className="bg-gray-100 p-3 rounded text-sm border border-gray-300">
          <strong>Verbos:</strong>{" "}
          <code className="text-blue-700">{wordBank.join(" – ")}</code>
        </div>

        <div className="leading-7">
          Two summers ago, we{" "}
          <input
            className={`inline-block w-20 px-2 py-1 text-center rounded ${getInputClass(0)}`}
            onChange={(e) => handleChange(0, e.target.value)}
            disabled={showResult}
          />{" "}
          on a trip to New York. We{" "}
          <input
            className={`inline-block w-20 px-2 py-1 text-center rounded ${getInputClass(1)}`}
            onChange={(e) => handleChange(1, e.target.value)}
            disabled={showResult}
          />{" "}
          from Manchester to JFK. We{" "}
          <input
            className={`inline-block w-20 px-2 py-1 text-center rounded ${getInputClass(2)}`}
            onChange={(e) => handleChange(2, e.target.value)}
            disabled={showResult}
          />{" "}
          to visit a megacity like New York. When we{" "}
          <input
            className={`inline-block w-20 px-2 py-1 text-center rounded ${getInputClass(3)}`}
            onChange={(e) => handleChange(3, e.target.value)}
            disabled={showResult}
          />{" "}
          at our destination, we{" "}
          <input
            className={`inline-block w-20 px-2 py-1 text-center rounded ${getInputClass(4)}`}
            onChange={(e) => handleChange(4, e.target.value)}
            disabled={showResult}
          />{" "}
          a taxi. The driver{" "}
          <input
            className={`inline-block w-20 px-2 py-1 text-center rounded ${getInputClass(5)}`}
            onChange={(e) => handleChange(5, e.target.value)}
            disabled={showResult}
          />{" "}
          us lots of things about the city. I{" "}
          <input
            className={`inline-block w-20 px-2 py-1 text-center rounded ${getInputClass(6)}`}
            onChange={(e) => handleChange(6, e.target.value)}
            disabled={showResult}
          />{" "}
          the driver when he{" "}
          <input
            className={`inline-block w-20 px-2 py-1 text-center rounded ${getInputClass(7)}`}
            onChange={(e) => handleChange(7, e.target.value)}
            disabled={showResult}
          />{" "}
          it was 95 dollars. I{" "}
          <input
            className={`inline-block w-20 px-2 py-1 text-center rounded ${getInputClass(8)}`}
            onChange={(e) => handleChange(8, e.target.value)}
            disabled={showResult}
          />{" "}
          it wasn't possible... but it was! I{" "}
          <input
            className={`inline-block w-20 px-2 py-1 text-center rounded ${getInputClass(9)}`}
            onChange={(e) => handleChange(9, e.target.value)}
            disabled={showResult}
          />{" "}
          95 dollars!
        </div>

        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={handleCheck}
            className="button button--primary"
            disabled={showResult}
          >
            Revisar
          </button>
        </div>

        {showResult && (
          <p className="text-center mt-4 font-semibold text-gray-700">
            Obtuviste {inputs.filter((val, i) => val === correctAnswers[i]).length} de{" "}
            {correctAnswers.length} respuestas correctas.
          </p>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default PastSimpleFillExercise;
