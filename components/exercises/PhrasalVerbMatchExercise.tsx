"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type MatchPair = {
  verb: string;
  definition: string;
};

const matchPairs: MatchPair[] = [
  { verb: "turn on", definition: "encender" },
  { verb: "look for", definition: "buscar" },
  { verb: "give up", definition: "rendirse" },
  { verb: "pick up", definition: "recoger" },
  { verb: "wake up", definition: "despertarse" },
  { verb: "take off", definition: "quitarse / despegar" },
  { verb: "write down", definition: "anotar" },
  { verb: "check in", definition: "registrarse" },
];

const shuffleArray = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const PhrasalVerbMatchExercise = () => {
  const [selectedVerb, setSelectedVerb] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ [verb: string]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const shuffledVerbs = shuffleArray(matchPairs);
  const shuffledDefs = shuffleArray(matchPairs);

  const handleSelectVerb = (verb: string) => {
    setSelectedVerb(verb);
  };

  const handleSelectDef = (def: string) => {
    if (!selectedVerb) return;

    setMatches((prev) => ({
      ...prev,
      [selectedVerb]: def,
    }));

    setSelectedVerb(null);
  };

  const checkAnswer = (verb: string) => {
    const correctDef = matchPairs.find((p) => p.verb === verb)?.definition;
    return matches[verb] === correctDef;
  };

  const handleReset = () => {
    setSelectedVerb(null);
    setMatches({});
    setShowResult(false);
  };

  return (
    <WorkshopLayout

    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 py-6">
        {/* Columna 1: Verbos */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold mb-2 text-pink-600">Phrasal Verbs</h2>
          {shuffledVerbs.map(({ verb }) => {
            const isSelected = selectedVerb === verb;
            const matchedDef = matches[verb];
            const correct = showResult && checkAnswer(verb);

            return (
              <div
                key={verb}
                onClick={() => handleSelectVerb(verb)}
                className={`p-2 rounded border cursor-pointer ${
                  isSelected
                    ? "bg-blue-100 border-blue-500"
                    : matchedDef
                    ? showResult
                      ? correct
                        ? "bg-green-100 border-green-500"
                        : "bg-red-100 border-red-500"
                      : "bg-gray-100 border-gray-300"
                    : "bg-white border-gray-300"
                }`}
              >
                {verb}
              </div>
            );
          })}
        </div>

        {/* Columna 2: Definiciones */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold mb-2 text-pink-600">Traducciones</h2>
          {shuffledDefs.map(({ definition }) => {
            const alreadyUsed = Object.values(matches).includes(definition);

            return (
              <div
                key={definition}
                onClick={() => !alreadyUsed && handleSelectDef(definition)}
                className={`p-2 rounded border cursor-pointer ${
                  alreadyUsed
                    ? "bg-gray-200 border-gray-400 text-gray-500 cursor-not-allowed"
                    : "bg-white hover:bg-pink-50 border-gray-300"
                }`}
              >
                {definition}
              </div>
            );
          })}
        </div>
      </div>

      {/* Botones */}
      <div className="flex justify-center gap-4 mt-6">
        {!showResult && (
          <button
            onClick={() => setShowResult(true)}
            className="button button--primary"
            disabled={Object.keys(matches).length < matchPairs.length}
          >
            Revisar
          </button>
        )}
        {showResult && (
          <button onClick={handleReset} className="button button--secondary">
            Reiniciar
          </button>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default PhrasalVerbMatchExercise;
