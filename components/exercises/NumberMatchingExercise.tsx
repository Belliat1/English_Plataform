"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const numberPairs = [
  { number: 1, word: "one" },
  { number: 2, word: "two" },
  { number: 3, word: "three" },
  { number: 4, word: "four" },
  { number: 5, word: "five" },
  { number: 6, word: "six" },
  { number: 7, word: "seven" },
  { number: 8, word: "eight" },
  { number: 9, word: "nine" },
  { number: 10, word: "ten" },
];

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
    if (matches[num]) return; // ya emparejado
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

    >
      {/* 🔢 Sección de selección */}
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

      {/* 🔠 Palabras */}
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

            const baseStyle = "button transition min-w-[80px] text-center";
            const stateStyle = isCorrect === true
              ? "bg-green-100 border-green-500"
              : isCorrect === false
              ? "bg-red-100 border-red-500"
              : isMatched
              ? "bg-blue-100 dark:bg-blue-900 border-blue-400 dark:border-blue-500"
              : "";

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

      {/* 🎯 Botones */}
      <div className="flex justify-center gap-4 mt-8">
  <button onClick={handleCheck} className="button button--primary">
    Revisar
  </button>
  <button onClick={handleReset} className="button button--secondary">
    Reiniciar
  </button>
</div>

    </WorkshopLayout>
  );
};

export default NumberMatchingExercise;
