"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout"; // Ajusta la ruta si es necesario

const numbersAudioList = [
  { number: "1", file: "a-1.mp3" },
  { number: "2", file: "a-2.mp3" },
  { number: "3", file: "a-3.mp3" },
  { number: "4", file: "a-4.mp3" },
  { number: "5", file: "a-5.mp3" },
  { number: "6", file: "a-6.mp3" },
  { number: "7", file: "a-7.mp3" },
  { number: "8", file: "a-8.mp3" },
  { number: "9", file: "a-9.mp3" },
  { number: "10", file: "a-10.mp3" },
];

const NumbersPractice = () => {
  const [answers, setAnswers] = useState<string[]>(Array(numbersAudioList.length).fill(""));
  const [feedback, setFeedback] = useState<(boolean | null)[]>(Array(numbersAudioList.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  const playAudio = (file: string) => {
    const audio = new Audio(`/assets/audio/${file}`);
    audio.play();
  };

  const handleChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);

    if (submitted) {
      const isCorrect = value.trim() === numbersAudioList[index].number;
      const updatedFeedback = [...feedback];
      updatedFeedback[index] = isCorrect;
      setFeedback(updatedFeedback);
    }
  };

  const handleSubmit = () => {
    const newFeedback = answers.map(
      (val, i) => val.trim() === numbersAudioList[i].number
    );
    setFeedback(newFeedback);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(numbersAudioList.length).fill(""));
    setFeedback(Array(numbersAudioList.length).fill(null));
    setSubmitted(false);
  };

  return (
    <WorkshopLayout

    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {numbersAudioList.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <button
              onClick={() => playAudio(item.file)}
              className="hover:opacity-80"
              aria-label={`Reproducir número ${index + 1}`}
            >
              <Image
                src={`/assets/${theme === "dark" ? "dark" : "light"}/play.svg`}
                alt="Reproducir"
                width={24}
                height={24}
              />
            </button>

            <input
              type="text"
              maxLength={2}
              value={answers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className="border rounded-md px-2 py-1 text-center w-12"
              aria-label={`Respuesta número ${index + 1}`}
            />

            {feedback[index] !== null && (
              <Image
                src={`/assets/${theme === "dark" ? "dark" : "light"}/${feedback[index] ? "correct.svg" : "wrong.svg"}`}
                alt={feedback[index] ? "Correcto" : "Incorrecto"}
                width={20}
                height={20}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <button onClick={handleSubmit} className="button--primary button">
          Revisar
        </button>
        <button onClick={handleReset} className="button--secondary button">
          Reiniciar
        </button>
      </div>
    </WorkshopLayout>
  );
};

export default NumbersPractice;
