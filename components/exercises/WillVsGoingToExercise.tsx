"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Question = {
  sentence: string;
  options: string[];
  answer: string;
};

const willVsGoingToQuestions: Question[] = [
  {
    sentence: "Look at those clouds! It ___ rain soon.",
    options: ["will", "is going to"],
    answer: "is going to",
  },
  {
    sentence: "I'm so tired. I ___ go to bed early tonight.",
    options: ["will", "am going to"],
    answer: "am going to",
  },
  {
    sentence: "Don't worry, I ___ help you with your homework.",
    options: ["will", "am going to"],
    answer: "will",
  },
  {
    sentence: "He ___ study medicine at university next year. He has already applied.",
    options: ["is going to", "will"],
    answer: "is going to",
  },
  {
    sentence: "They ___ get married in June. Everything is planned.",
    options: ["are going to", "will"],
    answer: "are going to",
  },
  {
    sentence: "I think it ___ snow tomorrow.",
    options: ["will", "is going to"],
    answer: "will",
  },
  {
    sentence: "Watch out! You ___ drop that glass.",
    options: ["will", "are going to"],
    answer: "are going to",
  },
  {
    sentence: "I’m sure he ___ pass the exam. He studied a lot.",
    options: ["will", "is going to"],
    answer: "will",
  },
  {
    sentence: "She ___ call you later. She told me already.",
    options: ["will", "is going to"],
    answer: "is going to",
  },
  {
    sentence: "I think we ___ travel to Japan next year.",
    options: ["will", "are going to"],
    answer: "will",
  },
];

const WillVsGoingToExercise = () => {
  const [answers, setAnswers] = useState<(string | null)[]>(Array(willVsGoingToQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const correctCount = answers.reduce((count, answer, i) => {
    return answer === willVsGoingToQuestions[i].answer ? count + 1 : count;
  }, 0);

  return (
    <WorkshopLayout

    >
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-sm">
          💡 <strong>Explicación:</strong><br />
          Usa <strong>will</strong> para decisiones rápidas, promesas y predicciones sin evidencia.<br />
          Usa <strong>be going to</strong> para planes decididos previamente o predicciones con evidencia.
        </div>

        {willVsGoingToQuestions.map((q, i) => {
          const selected = answers[i];
          const correct = q.answer;

          const isCorrect = selected === correct;
          const feedbackStyle = showResults
            ? isCorrect
              ? "border-green-500 bg-green-50"
              : "border-red-500 bg-red-50"
            : "border-gray-300";

          return (
            <div key={i} className={`border rounded p-4 ${feedbackStyle}`}>
              <p className="mb-2 text-base font-medium">
                {q.sentence.replace("___", "______")}
              </p>
              <div className="flex gap-3 flex-wrap">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleChange(i, opt)}
                    disabled={showResults}
                    className={`px-4 py-2 border rounded text-sm font-medium ${
                      selected === opt
                        ? "bg-blue-100 border-blue-400"
                        : "bg-white hover:bg-pink-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {showResults && (
                <p className="mt-2 text-sm italic">
                  {isCorrect ? "✅ Correcto" : `❌ Incorrecto. La respuesta correcta era: ${correct}`}
                </p>
              )}
            </div>
          );
        })}

        <div className="text-center mt-6">
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              className="button button--primary"
              disabled={answers.includes(null)}
            >
              Revisar respuestas
            </button>
          ) : (
            <p className="text-lg font-semibold text-center">
              Tu puntaje: {correctCount} / {willVsGoingToQuestions.length}
            </p>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default WillVsGoingToExercise;
