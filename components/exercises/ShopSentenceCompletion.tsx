"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";
import Image from "next/image";


const questions = [
  {
    sentence: "I bought some groceries at the ___",
    answer: "Grocery Store",
    image: "grocery-store.png",
  },
  {
    sentence: "She got a fresh loaf of bread at the ___",
    answer: "Bakery",
    image: "bakery.png",
  },
  {
    sentence: "He got medicine at the ___",
    answer: "Pharmacy (US) / Chemist's (UK)",
    image: "pharmacy.png",
  },
  {
    sentence: "I found a great novel at the ___",
    answer: "Bookstore",
    image: "bookstore.png",
  },
  {
    sentence: "He bought a ring at the ___",
    answer: "Jewelry Store",
    image: "jewelry-store.png",
  },
  {
    sentence: "They bought flowers at the ___",
    answer: "Flower Shop / Florist",
    image: "flower-shop.png",
  },
  {
    sentence: "We got a new sofa at the ___",
    answer: "Furniture Store",
    image: "furniture-store.png",
  },
  {
    sentence: "She picked up a gift at the ___",
    answer: "Gift Shop",
    image: "gift-shop.png",
  }
];


const options = [
  "Grocery store",
  "Bakery",
  "Pharmacy",
  "Bookstore",
  "Toy store",
  "Shoe store",
  "Clothing store",
];

const ShopSentenceCompletion = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const handleChange = (index: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const checkCorrect = (index: number) =>
    answers[index] === questions[index].answer;

  const reset = () => {
    setAnswers({});
    setShowResult(false);
  };

  return (
    <WorkshopLayout

    >
      <div className="flex flex-col items-center gap-6">
        {questions.map((q, i) => {
          const correct = checkCorrect(i);
          return (
            <div
              key={i}
              className="w-full max-w-xl bg-white border rounded-xl p-4 shadow-sm flex gap-4 items-center"
            >
              <Image
                src={`/assets/shops/${q.image}`}
                alt={q.answer}
                width={80}
                height={80}
                className="rounded object-contain"
              />
              <div className="flex-1">
                <p className="font-medium mb-2">{q.sentence}</p>
                <select
                aria-label="Select a category"
                  value={answers[i] || ""}
                  onChange={(e) => handleChange(i, e.target.value)}
                  className={`w-full p-2 rounded border text-sm ${
                    showResult
                      ? correct
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Selecciona una tienda...</option>
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setShowResult(true)}
            className="button button--primary"
          >
            Revisar
          </button>
          <button onClick={reset} className="button button--secondary">
            Reiniciar
          </button>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default ShopSentenceCompletion;
