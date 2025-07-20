"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type DirectionQuestion = {
  image: string;
  correct: string;
  options: string[];
};
const questions: DirectionQuestion[] = [
  {
    image: "traffic-light-stop.png",
    correct: "stop",
    options: ["go", "stop", "slow down"],
  },
  {
    image: "go-straight.png",
    correct: "go straight",
    options: ["turn right", "go straight", "on the left"],
  },
  {
    image: "turn-left.png",
    correct: "turn left",
    options: ["turn right", "go straight", "turn left"],
  },
  {
    image: "turn-right.png",
    correct: "turn right",
    options: ["stop", "turn right", "slow down"],
  },
  {
    image: "on-the-left.png",
    correct: "on the left",
    options: ["on the left", "on the right", "opposite"],
  },
  {
    image: "take-second-left.png",
    correct: "take the second turning on the left",
    options: [
      "take the first turning to the right",
      "take the second turning on the left",
      "go straight",
    ],
  },
];


const TrafficSignsQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const current = questions[currentIndex];
  const isCorrect = selected === current.correct;

  const handleCheck = () => {
    if (!selected) return;
    setShowResult(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <WorkshopLayout>
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        <div className="border p-4 rounded-xl bg-white">
          <Image
            src={`/assets/directions/${current.image}`}
            alt="Traffic sign"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {current.options.map((option) => {
            const base = "px-4 py-2 text-sm rounded border font-medium text-center transition";
            let style = base + " bg-white border-gray-300 hover:bg-blue-50";

            if (showResult) {
              if (option === current.correct) {
                style = base + " bg-green-100 border-green-500 text-green-800";
              } else if (option === selected) {
                style = base + " bg-red-100 border-red-500 text-red-800";
              }
            } else if (selected === option) {
              style = base + " bg-blue-100 border-blue-400";
            }

            return (
              <button key={option} className={style} onClick={() => setSelected(option)} disabled={showResult}>
                {option}
              </button>
            );
          })}
        </div>

        <div className="flex gap-4 mt-6">
          {!showResult && (
            <button onClick={handleCheck} disabled={!selected} className="button button--primary">
              Revisar
            </button>
          )}
          {showResult && (
            <button onClick={handleNext} className="button button--secondary">
              Siguiente
            </button>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default TrafficSignsQuiz;
