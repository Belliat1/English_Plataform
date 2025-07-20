"use client";

import { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

// Datos base
const avatarData = [
  { image: "Avatars-01.png", correct: "He's got straight hair" },
  { image: "Avatars-02.png", correct: "He's got curly hair" },
  { image: "Avatars-03.png", correct: "She's got short hair" },
  { image: "Avatars-04.png", correct: "He's got a beard" },
  { image: "Avatars-05.png", correct: "She's got blond hair" },
  { image: "Avatars-06.png", correct: "She's got a ponytail" },
  { image: "Avatars-07.png", correct: "He's got a mustache" },
  { image: "Avatars-08.png", correct: "She's got a bun" },
  { image: "Avatars-09.png", correct: "She's got a headscarf" },
  { image: "Avatars-10.png", correct: "He's bald" },
  { image: "Avatars-11.png", correct: "He's got glasses" },
  { image: "Avatars-12.png", correct: "She's got earrings" },
];

const descriptions = avatarData.map((d) => d.correct);
const shuffleArray = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const MatchAvatarDescriptions = () => {
  const [matches, setMatches] = useState<{ [key: number]: string }>({});
  const [shuffledDescriptions, setShuffledDescriptions] = useState(() => shuffleArray(descriptions));
  const [feedback, setFeedback] = useState<{ [key: number]: boolean } | null>(null);

  const handleSelect = (avatarIndex: number, description: string) => {
    setMatches((prev) => ({
      ...prev,
      [avatarIndex]: description,
    }));
  };

  const handleCheck = () => {
    const result: { [key: number]: boolean } = {};
    avatarData.forEach((avatar, i) => {
      result[i] = matches[i] === avatar.correct;
    });
    setFeedback(result);
  };

  const handleReset = () => {
    setMatches({});
    setFeedback(null);
    setShuffledDescriptions(shuffleArray(descriptions));
  };

  const getStatusIcon = (correct?: boolean) => {
    if (correct === true) return "✅";
    if (correct === false) return "❌";
    return "";
  };

  return (
    <WorkshopLayout
   >
      <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {avatarData.map((avatar, index) => {
            const selected = matches[index];
            const correct = feedback?.[index];
            const borderStyle =
              correct === true
                ? "border-green-400 bg-green-50"
                : correct === false
                ? "border-red-400 bg-red-50"
                : "border-gray-300 bg-white";

            return (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-center gap-4 border-2 rounded-xl p-4 shadow-sm ${borderStyle} transition-all`}
              >
                <div className="w-32 h-32 relative">
                  <Image
                    src={`/assets/avatars/${avatar.image}`}
                    alt={`Avatar ${index + 1}`}
                    fill
                    className="rounded-full object-contain border shadow-md"
                  />
                </div>
                <div className="flex-1 w-full">
                  <select
                  aria-label="Select a category"
                    value={selected || ""}
                    onChange={(e) => handleSelect(index, e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm shadow-sm focus:ring-pink-400 focus:outline-none"
                  >
                    <option value="">Selecciona una descripción...</option>
                    {shuffledDescriptions.map((desc) => (
                      <option key={desc} value={desc}>
                        {desc}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-2xl">
                  {getStatusIcon(correct)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Botones */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={handleCheck}
            className="bg-pink-500 text-white px-6 py-2 rounded font-semibold shadow"
          >
            Revisar
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-200 text-black px-6 py-2 rounded font-semibold shadow"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default MatchAvatarDescriptions;
