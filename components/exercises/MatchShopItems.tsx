"use client";

import { useState, useMemo } from "react";
import WorkshopLayout from "./WorkshopLayout";
import Image from "next/image";

// Pares base
const originalPairs = [
  { image: "grocery-store.png", answer: "Grocery Store" },
  { image: "bakery.png", answer: "Bakery" },
  { image: "pharmacy.png", answer: "Pharmacy" },
  { image: "bookstore.png", answer: "Bookstore" },
  { image: "gift-shop.png", answer: "Gift Shop" }
];

// Función para mezclar
const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const MatchShopItems = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ [key: string]: string }>({});
  const [showFeedback, setShowFeedback] = useState(false);

  // Mezclar imágenes y respuestas por separado solo una vez al montar
  const shuffledImages = useMemo(() => shuffle(originalPairs), []);
  const shuffledTexts = useMemo(() => shuffle(originalPairs.map(p => p.answer)), []);

  const handleSelectImage = (img: string) => {
    if (Object.keys(matches).includes(img)) return;
    setSelectedImage(img);
  };

  const handleSelectText = (text: string) => {
    if (!selectedImage) return;
    setMatches((prev) => ({ ...prev, [selectedImage]: text }));
    setSelectedImage(null);
  };

  const getCorrectAnswer = (img: string) =>
    originalPairs.find((p) => p.image === img)?.answer;

  const isCorrect = (img: string) =>
    getCorrectAnswer(img) === matches[img];

  const reset = () => {
    setSelectedImage(null);
    setMatches({});
    setShowFeedback(false);
  };

  const usedTexts = Object.values(matches);

  return (
    <WorkshopLayout >
      {/* 🔲 Imágenes (arriba) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
        {shuffledImages.map(({ image }) => {
          const selected = selectedImage === image;
          return (
            <div
              key={image}
              onClick={() => handleSelectImage(image)}
              className={`border rounded-lg p-2 cursor-pointer text-center transition ${
                selected ? "border-pink-500 bg-pink-50" : "border-gray-300"
              }`}
            >
              <Image
                src={`/assets/shops/${image}`}
                alt={image}
                width={120}
                height={120}
                className="mx-auto object-contain"
              />
              <div className="text-sm font-medium mt-2">{matches[image] || "?"}</div>
            </div>
          );
        })}
      </div>

      {/* 📋 Textos disponibles */}
      <div className="flex flex-wrap justify-center gap-3">
        {shuffledTexts.map((answer) => {
          const alreadyUsed = usedTexts.includes(answer);
          const matchedImage = Object.entries(matches).find(
            ([, val]) => val === answer
          )?.[0];
          const correct = matchedImage && isCorrect(matchedImage);

          return (
            <button
              key={answer}
              onClick={() => handleSelectText(answer)}
              disabled={alreadyUsed}
              className={`px-4 py-2 rounded border text-sm font-medium ${
                showFeedback
                  ? correct
                    ? "bg-[var(--success)] text-white border-[var(--success)]"
                    : "bg-[var(--danger)] text-white border-[var(--danger)]"
                  : "border-gray-300 bg-white hover:bg-pink-50"
              }`}
            >
              {answer}
            </button>
          );
        })}
      </div>

      {/* ✅ Botones */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setShowFeedback(true)}
          className="button button--primary"
        >
          Revisar
        </button>
        <button
          onClick={reset}
          className="button button--secondary"
        >
          Reiniciar
        </button>
      </div>
    </WorkshopLayout>
  );
};

export default MatchShopItems;
