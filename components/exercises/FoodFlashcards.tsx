"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const FoodFlashcards = () => {
  const foodFlashcards = [
    {
      category: "Fast Food",
      items: [
        { word: "burger", translation: "hamburguesa", image: "01", audio: "burger.mp3" },
        { word: "pizza", translation: "pizza", image: "02", audio: "pizza.mp3" },
        { word: "hot dog", translation: "perro caliente", image: "03", audio: "hot-dog.mp3" },
        { word: "donut", translation: "dona", image: "04", audio: "donut.mp3" },
        { word: "sandwich", translation: "sándwich", image: "08", audio: "sandwich.mp3" },
        { word: "taco", translation: "taco", image: "09", audio: "taco.mp3" },
        { word: "french fries", translation: "papas fritas", image: "06", audio: "french-fries.mp3" },
      ],
    },
    {
      category: "Fruits & Vegetables",
      items: [
        { word: "apple", translation: "manzana", image: "2 a", audio: "apple.mp3" },
        { word: "strawberry", translation: "fresa", image: "3 a", audio: "strawberry.mp3" },
        { word: "kiwi", translation: "kiwi", image: "8 a", audio: "kiwi.mp3" },
        { word: "pineapple", translation: "piña", image: "10 a", audio: "pineapple.mp3" },
        { word: "mangosteen", translation: "mangostán", image: "5 a", audio: "mangosteen.mp3" },
        { word: "mango", translation: "mango", image: "11 a", audio: "mango.mp3" },
        { word: "potato", translation: "papa", image: "3. Potato", audio: "potato.mp3" },
        { word: "onion", translation: "cebolla", image: "2. Onion", audio: "onion.mp3" },
        { word: "leek", translation: "puerro", image: "5. Leek", audio: "leek.mp3" },
        { word: "cabbage", translation: "repollo", image: "6. Cabbage", audio: "cabbage.mp3" },
        { word: "lychee", translation: "lichi", image: "6 a", audio: "lychee.mp3" },
        { word: "broccoli", translation: "brócoli", image: "7. Broccoli", audio: "broccoli.mp3" },
        { word: "cucumber", translation: "pepino", image: "8. Cucumber", audio: "cucumber.mp3" },
        { word: "grapes", translation: "uvas", image: "7 a", audio: "grapes.mp3" },
        { word: "tomato", translation: "tomate", image: "9. Tomato", audio: "tomato.mp3" },
        { word: "dragon fruit", translation: "pitahaya", image: "9 a", audio: "dragon-fruit.mp3" },
        { word: "bell pepper", translation: "pimentón", image: "10. Bell Pepper", audio: "bell-pepper.mp3" },
        { word: "chili pepper", translation: "ají picante", image: "1. Chili Pepper", audio: "chili-pepper.mp3" },
        { word: "avocado", translation: "aguacate", image: "4 a", audio: "avocado.mp3" },
        { word: "mushroom", translation: "hongo", image: "4. Mushroom", audio: "mushroom.mp3" },
      ],
    },
    {
      category: "Drinks",
      items: [
        { word: "chocolate drink", translation: "bebida de chocolate", image: "Chocolate Drink", audio: "chocolate-drink.mp3" },
        { word: "coconut drink", translation: "bebida de coco", image: "Coconut Drink", audio: "coconut-drink.mp3" },
        { word: "coffee", translation: "café", image: "Coffe Cup ", audio: "coffee.mp3" },
        { word: "juice", translation: "jugo", image: "Juice", audio: "juice.mp3" },
        { word: "chocolate milk", translation: "leche chocolatada", image: "Milk Choco", audio: "chocolate-milk.mp3" },
        { word: "milk", translation: "leche", image: "Milk", audio: "milk.mp3" },
        { word: "mineral water", translation: "agua mineral", image: "Mineral Water", audio: "mineral-water.mp3" },
        { word: "orange juice", translation: "jugo de naranja", image: "Orange Juice", audio: "orange-juice.mp3" },
        { word: "soda", translation: "soda", image: "Soda", audio: "soda.mp3" },
        { word: "soft drink", translation: "refresco", image: "Soft Drink", audio: "soft-drink.mp3" },
        { word: "strawberry milkshake", translation: "malteada de fresa", image: "Strawberry Milkshake", audio: "strawberry-milkshake.mp3" },
        { word: "tea", translation: "té", image: "Tea", audio: "tea.mp3" },
        { word: "wine", translation: "vino", image: "Wine", audio: "wine.mp3" },
      ],
    },
  ];

  const [currentCategory, setCurrentCategory] = useState(foodFlashcards[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = currentCategory.items[currentIndex];

  useEffect(() => {
    if (isFlipped && currentCard.audio) {
      const audio = new Audio(`/assets/audio/${currentCard.audio}`);
      audio.play().catch(() => {});
    }
  }, [isFlipped, currentCard]);

  const handleFlip = () => setIsFlipped(!isFlipped);
 const handleNext = () => {
  setCurrentIndex((prev) => (prev + 1) % currentCategory.items.length);
  setIsFlipped(false); // Reinicia a lado frontal
};

const handlePrev = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? currentCategory.items.length - 1 : prev - 1
  );
  setIsFlipped(false); // Reinicia a lado frontal
};

const handleCategoryChange = (category: string) => {
  const selected = foodFlashcards.find((c) => c.category === category);
  if (selected) {
    setCurrentCategory(selected);
    setCurrentIndex(0);
    setIsFlipped(false); // Reinicia a lado frontal
  }
};


  return (
    <WorkshopLayout>
      <div className="flex flex-col items-center gap-6 px-4 py-6">
        <select
          aria-label="Select a category"
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="mb-4 px-4 py-2 border rounded text-lg"
        >
          {foodFlashcards.map((c) => (
            <option key={c.category} value={c.category}>
              {c.category}
            </option>
          ))}
        </select>

        <div
          className="flashcard-container w-full max-w-sm h-[300px] sm:h-[360px] cursor-pointer"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            <div className="front flex items-center justify-center text-4xl font-bold text-gray-900 bg-white border border-gray-300 rounded-xl h-full">
              {currentCard.word}
            </div>
            <div className="back flex flex-col items-center justify-center gap-4 p-4 bg-white border border-gray-300 rounded-xl h-full">
              <Image
                src={`/assets/food/${currentCard.image}.png`}
                alt={currentCard.word}
                width={140}
                height={140}
                className="object-contain"
              />
              <p className="text-2xl font-semibold text-gray-800">
                {currentCard.translation}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button onClick={handlePrev} className="button button--secondary">
            Anterior
          </button>
          <button onClick={handleNext} className="button button--secondary">
            Siguiente
          </button>
        </div>
      </div>

      <style jsx>{`
        .flashcard {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
          height: 100%;
        }
        .flipped {
          transform: rotateY(180deg);
        }
        .flashcard > div {
          backface-visibility: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .back {
          transform: rotateY(180deg);
        }
      `}</style>
    </WorkshopLayout>
  );
};

export default FoodFlashcards;
