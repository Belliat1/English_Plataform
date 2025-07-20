"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  prompt: string;
  options: string[];
  correct: string;
};

const opinionQuestions: Question[] = [
  {
    prompt: "What do you think of the new movie?",
    options: ["I think it's amazing.", "Let's go shopping.", "He is my brother."],
    correct: "I think it's amazing.",
  },
  {
    prompt: "Do you like living in the city?",
    options: ["In my opinion, it's too noisy.", "Where is the supermarket?", "I am eating lunch."],
    correct: "In my opinion, it's too noisy.",
  },
  {
    prompt: "How do you feel about studying online?",
    options: ["She studies at night.", "I believe it's convenient.", "This is my book."],
    correct: "I believe it's convenient.",
  },
  {
    prompt: "What do you think about fast food?",
    options: ["He is a doctor.", "In my opinion, it's unhealthy.", "I go to work by car."],
    correct: "In my opinion, it's unhealthy.",
  },
  {
    prompt: "Do you enjoy learning English?",
    options: ["I personally love it.", "It's raining outside.", "He plays football."],
    correct: "I personally love it.",
  },
  {
    prompt: "How do you feel about social media?",
    options: ["I think it's a powerful tool.", "He is feeling tired.", "I am going to school."],
    correct: "I think it's a powerful tool.",
  },
  {
    prompt: "Do you like working from home?",
    options: ["Personally, I find it comfortable.", "The dog is barking.", "Where is your phone?"],
    correct: "Personally, I find it comfortable.",
  },
  {
    prompt: "What do you think of this book?",
    options: ["I believe it’s very inspiring.", "This is a pencil.", "She is a doctor."],
    correct: "I believe it’s very inspiring.",
  },
  {
    prompt: "How do you feel about climate change?",
    options: ["In my opinion, it's a serious issue.", "Let's watch TV.", "He is very tall."],
    correct: "In my opinion, it's a serious issue.",
  },
  {
    prompt: "Do you enjoy group projects?",
    options: ["Sometimes, I think they are fun.", "This is a pen.", "Where is my jacket?"],
    correct: "Sometimes, I think they are fun.",
  },
];

const OpinionGame = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const question = opinionQuestions[index];

  const handleCheck = () => {
    if (!selected) return;
    if (selected === question.correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (index + 1 < opinionQuestions.length) {
      setIndex(index + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      alert(`Quiz complete! Your score: ${score} / ${opinionQuestions.length}`);
      setIndex(0);
      setScore(0);
      setSelected(null);
      setShowResult(false);
    }
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 px-4 py-6">
        <p className="text-xl font-semibold text-center text-gray-800">
          {question.prompt}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
          {question.options.map((option) => {
            const isCorrect = option === question.correct;
            const isSelected = option === selected;

            let style =
              "px-4 py-2 border rounded text-sm font-medium transition";

            if (showResult && isSelected) {
              style += isCorrect
                ? " bg-green-100 border-green-500 text-green-700"
                : " bg-red-100 border-red-500 text-red-700";
            } else if (isSelected) {
              style += " bg-blue-100 border-blue-500";
            } else {
              style += " bg-white border-gray-300 hover:bg-pink-50";
            }

            return (
              <button
                key={option}
                onClick={() => setSelected(option)}
                disabled={showResult}
                className={style}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <p className={`mt-4 text-center font-semibold ${selected === question.correct ? "text-green-600" : "text-red-600"}`}>
            {selected === question.correct
              ? "Correct!"
              : `Incorrect. The correct answer is: "${question.correct}"`}
          </p>
        )}

        <div className="flex gap-4 mt-6">
          {!showResult ? (
            <button
              onClick={handleCheck}
              disabled={!selected}
              className="button button--primary"
            >
              Check
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="button button--secondary"
            >
              Next
            </button>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Score: {score} / {opinionQuestions.length}
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default OpinionGame;
