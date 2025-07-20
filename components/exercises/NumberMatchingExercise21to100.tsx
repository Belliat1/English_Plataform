"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

// ✅ Lista de números del 21 al 100 (selección representativa)
const numberPairs = [
  { number: 21, word: "twenty-one" },
  { number: 25, word: "twenty-five" },
  { number: 30, word: "thirty" },
  { number: 35, word: "thirty-five" },
  { number: 40, word: "forty" },
  { number: 45, word: "forty-five" },
  { number: 50, word: "fifty" },
  { number: 60, word: "sixty" },
  { number: 70, word: "seventy" },
  { number: 80, word: "eighty" },
  { number: 90, word: "ninety" },
  { number: 100, word: "one hundred" }
];

// Mezclar palabras para el juego
const shuffleArray = (arr: any[]) => [...arr].sort(() => Math.random() - 0.5);

const NumberMatchingExercise = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [matches, setMatches] = useState<{ [key: number]: string }>({});
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ [key: number]: boolean } | null>(null);

  useEffect(() => {
    setShuffledWords(shuffleArray(numberPairs.map((p) => p.word)));
  }, []);

  const handleNumberClick = (num: number) => {
    if (matches[num]) return;
    setSelectedNumber(num);
  };

  const handleWordClick = (word: string) => {
    if (selectedNumber !== null) {
      setMatches((prev) => ({
        ...prev,
        [selectedNumber]: word,
      }));
      setSelectedNumber(null);
    }
  };

  const handleCheck = () => {
    const result: { [key: number]: boolean } = {};
    numberPairs.forEach(({ number, word }) => {
      result[number] = matches[number] === word;
    });
    setFeedback(result);
  };

  const handleReset = () => {
    setMatches({});
    setFeedback(null);
    setSelectedNumber(null);
    setShuffledWords(shuffleArray(numberPairs.map((p) => p.word)));
  };

  const matchedNumbers = Object.keys(matches).map((n) => parseInt(n));
  const availableNumbers = numberPairs.filter(n => !matchedNumbers.includes(n.number));

  return (
    <WorkshopLayout
      title="Empareja los Números con su Nombre"
      description="Haz clic en una imagen de número y luego en la palabra correspondiente. Después haz clic en 'Revisar'."
    >
      {/* 🔢 Sección de selección de número */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3 text-center">Selecciona un número</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {availableNumbers.map(({ number }) => {
            const isSelected = selectedNumber === number;

            return (
              <button
                key={number}
                onClick={() => handleNumberClick(number)}
                className={`p-3 rounded-xl border transition duration-200 flex flex-col items-center justify-center w-[100px] h-[100px]
                  ${isSelected ? "ring-2 ring-blue-500" : ""}
                  bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600`}
              >
                <Image
                  src={`/assets/numbers/${number}.png`}
                  alt={`Número ${number}`}
                  width={60}
                  height={60}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* 🔠 Sección de palabras */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-3 text-center">Palabras</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {shuffledWords.map((word) => {
            const matchedNumber = Object.entries(matches).find(
              ([, val]) => val === word
            )?.[0];
            const isMatched = Boolean(matchedNumber);
            const isCorrect =
              matchedNumber && feedback
                ? feedback[parseInt(matchedNumber)]
                : null;

            const baseStyle = "button transition min-w-[80px] text-center px-4 py-2 rounded border font-semibold";
            const stateStyle = isCorrect === true
              ? "bg-green-100 border-green-500"
              : isCorrect === false
              ? "bg-red-100 border-red-500"
              : isMatched
              ? "bg-blue-100 dark:bg-blue-900 border-blue-400 dark:border-blue-500"
              : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600";

            return (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                disabled={isMatched && feedback !== null}
                className={`${baseStyle} ${stateStyle}`}
              >
                {word}
              </button>
            );
          })}
        </div>
      </div>

      {/* 🧩 Números emparejados */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-3 text-center">Números emparejados</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {matchedNumbers.map((number) => {
            const word = matches[number];
            const isCorrect = feedback?.[number];

            return (
              <div
                key={number}
                className={`p-3 w-[100px] h-[120px] rounded-xl border flex flex-col items-center justify-center
                  ${
                    isCorrect === true
                      ? "bg-green-100 border-green-500"
                      : isCorrect === false
                      ? "bg-red-100 border-red-500"
                      : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  }`}
              >
                <Image
                  src={`/assets/numbers/${number}.png`}
                  alt={`Número ${number}`}
                  width={60}
                  height={60}
                />
                <span className="mt-2 font-medium text-sm text-center text-black dark:text-white">
                  {word}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🎯 Botones de acción */}
      <div className="flex justify-center gap-4 mt-8">
        <button onClick={handleCheck} className="bg-pink-500 text-white px-6 py-2 rounded font-semibold">
          Revisar
        </button>
        <button onClick={handleReset} className="bg-gray-300 text-black px-6 py-2 rounded font-semibold">
          Reiniciar
        </button>
      </div>
    </WorkshopLayout>
  );
};

export default NumberMatchingExercise;
