"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const AdjectiveFlashcards = () => {
  const adjectiveFlashcards = [
    {
      category: "Size & Shape",
      items: [
        { word: "big", translation: "grande", image: "big.jpg", audio: "big.mp3" },
        { word: "small", translation: "pequeño", image: "big.jpg", audio: "small.mp3" },
        { word: "tall", translation: "alto", image: "tall.jpg", audio: "tall.mp3" },
        { word: "short", translation: "bajo", image: "tall.jpg", audio: "short.mp3" },
      ],
    },
    {
      category: "Condition & State",
      items: [
        { word: "broken", translation: "roto", image: "broken.png", audio: "broken.mp3" },
        { word: "clean", translation: "limpio", image: "clean.png", audio: "clean.mp3" },
        { word: "dirty", translation: "sucio", image: "dirty.png", audio: "dirty.mp3" },
      ],
    },
    {
      category: "Texture & Material",
      items: [
        { word: "soft", translation: "suave", image: "soft.png", audio: "soft.mp3" },
        { word: "hard", translation: "duro", image: "soft.png", audio: "hard.mp3" },
        { word: "rough", translation: "áspero", image: "", audio: "rough.mp3" },
      ],
    },
    {
      category: "Temperature",
      items: [
        { word: "hot", translation: "caliente", image: "hot.png", audio: "hot.mp3" },
        { word: "cold", translation: "frío", image: "cold.png", audio: "cold.mp3" },
        { word: "warm", translation: "templado", image: "warm.png", audio: "warm.mp3" },
      ],
    },
    {
      category: "Value & Usefulness",
      items: [
        { word: "expensive", translation: "caro", image: "", audio: "expensive.mp3" },
        { word: "cheap", translation: "barato", image: "", audio: "cheap.mp3" },
        { word: "useful", translation: "útil", image: "", audio: "useful.mp3" },
      ],
    },
    {
      category: "Opinion & Quality",
      items: [
        { word: "good", translation: "bueno", image: "good.png", audio: "good.mp3" },
        { word: "bad", translation: "malo", image: "bad.png", audio: "bad.mp3" },
        { word: "funny", translation: "divertido", image: "funny.png", audio: "funny.mp3" },
      ],
    },
    {
      category: "Personality Traits",
      items: [
        { word: "friendly", translation: "amigable", image: "friendly.png", audio: "friendly.mp3" },
        { word: "shy", translation: "tímido", image: "shy.png", audio: "shy.mp3" },
        { word: "brave", translation: "valiente", image: "brave.png", audio: "brave.mp3" },
        { word: "kind", translation: "amable", image: "kind.png", audio: "kind.mp3" },
        { word: "polite", translation: "educado", image: "polite.png", audio: "polite.mp3" },
        { word: "rude", translation: "grosero", image: "rude.png", audio: "rude.mp3" },
        { word: "lazy", translation: "perezoso", image: "lazy.png", audio: "lazy.mp3" },
        { word: "hardworking", translation: "trabajador", image: "hardworking.png", audio: "hardworking.mp3" },
        { word: "honest", translation: "honesto", image: "honest.png", audio: "honest.mp3" },
        { word: "generous", translation: "generoso", image: "generous.png", audio: "generous.mp3" },
        { word: "selfish", translation: "egoísta", image: "selfish.png", audio: "selfish.mp3" },
        { word: "cheerful", translation: "alegre", image: "cheerful.png", audio: "cheerful.mp3" },
        { word: "moody", translation: "malhumorado", image: "moody.png", audio: "moody.mp3" }
      ],
    },
    {
      category: "Feelings & Physical State",
      items: [
        { word: "happy", translation: "feliz", image: "1.png", audio: "happy.mp3" },
        { word: "sad", translation: "triste", image: "2.png", audio: "sad.mp3" },
        { word: "confused", translation: "confundido", image: "3.png", audio: "confused.mp3" },
        { word: "worried", translation: "preocupado", image: "5.png", audio: "worried.mp3" },
        { word: "frustrated", translation: "frustrado", image: "6.png", audio: "frustrated.mp3" },
        { word: "confident", translation: "seguro", image: "7.png", audio: "confident.mp3" },
        { word: "angry", translation: "enojado", image: "8.png", audio: "angry.mp3" },
        { word: "surprised", translation: "sorprendido", image: "9.png", audio: "surprised.mp3" },
        { word: "sick", translation: "enfermo", image: "10.png", audio: "sick.mp3" },
        { word: "grateful", translation: "agradecido", image: "12.png", audio: "grateful.mp3" },
        { word: "laughing", translation: "riendo", image: "13.png", audio: "laughing.mp3" },
        { word: "cool", translation: "genial", image: "14.png", audio: "cool.mp3" },
        { word: "irritated", translation: "irritado", image: "15.png", audio: "irritated.mp3" },
        { word: "sleepy", translation: "soñoliento", image: "16.png", audio: "sleepy.mp3" },
        { word: "in love", translation: "enamorado", image: "17.png", audio: "love.mp3" },
        { word: "furious", translation: "furioso", image: "18.png", audio: "furious.mp3" },
        { word: "hopeful", translation: "esperanzado", image: "19.png", audio: "hopeful.mp3" },
        { word: "excited", translation: "emocionado", image: "20.png", audio: "excited.mp3" }
      ],
    },
  ];

 const [currentCategory, setCurrentCategory] = useState(adjectiveFlashcards[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = currentCategory.items[currentIndex];

  useEffect(() => {
    if (isFlipped && currentCard.audio) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play();
    }
  }, [isFlipped, currentCard]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % currentCategory.items.length
    );
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentCategory.items.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  const handleCategoryChange = (categoryName: string) => {
    const selected = adjectiveFlashcards.find(c => c.category === categoryName);
    if (selected) {
      setCurrentCategory(selected);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  return (
    <WorkshopLayout
    
    >
      <div className="flex flex-col items-center gap-6 px-4 py-6">
        {/* Selector de categoría */}
        <select
          aria-label="Select a category"
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="mb-4 px-4 py-2 border rounded text-lg"
        >
          {adjectiveFlashcards.map((c) => (
            <option key={c.category} value={c.category}>
              {c.category}
            </option>
          ))}
        </select>

        {/* Flashcard */}
        <div
          className="flashcard-container w-full max-w-sm h-[300px] sm:h-[360px] cursor-pointer"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            <div className="front flex items-center justify-center text-4xl font-bold text-gray-900 bg-white border border-gray-300 rounded-xl h-full">
              {currentCard.word}
            </div>
            <div className="back flex flex-col items-center justify-center gap-4 p-4 bg-white border border-gray-300 rounded-xl h-full">
              {currentCard.image?.trim() ? (
                  <div className="w-full max-w-[240px] max-h-[240px]">
                    <Image
                      src={`/assets/adjectives/${currentCard.image}`}
                      alt={currentCard.word}
                      width={240}
                      height={240}
                      className="object-contain w-full h-auto"
                      unoptimized
                    />
                  </div>
                ) : null}
              <p className="text-2xl font-semibold text-gray-800">
                {currentCard.translation}
              </p>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <button onClick={handlePrev} className="button button--secondary">
            Anterior
          </button>
          <button onClick={handleNext} className="button button--secondary">
            Siguiente
          </button>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default AdjectiveFlashcards;