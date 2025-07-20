'use client';

import { useState } from 'react';
import WorkshopLayout from './WorkshopLayout';

const exercises = [
  { sentence: "Look at those clouds. It ___ rain soon.", correct: "is going to" },
  { sentence: "I think they ___ win the match.", correct: "will" },
  { sentence: "She ___ visit her grandma next weekend.", correct: "is going to" },
  { sentence: "I’m sure he ___ love the gift.", correct: "will" },
  { sentence: "We ___ have pizza tonight. It's already planned.", correct: "are going to" },
  { sentence: "You look tired. You ___ fall asleep in class!", correct: "are going to" },
  { sentence: "I think I ___ stay home today.", correct: "will" },
  { sentence: "He ___ start his new job on Monday.", correct: "is going to" },
  { sentence: "Maybe it ___ snow tomorrow.", correct: "will" },
  { sentence: "They ___ move to a new flat next month.", correct: "are going to" },
];

const FuturePredictionExercise = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  const current = exercises[index];

  const checkAnswer = () => {
    setFeedback(
      selected === current.correct
        ? "✅ ¡Correcto!"
        : `❌ Incorrecto. Respuesta: ${current.correct}`
    );
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % exercises.length);
    setSelected(null);
    setFeedback("");
  };

  return (
    <WorkshopLayout title="Explorando el Futuro: Will vs Going To">
      <div className="max-w-xl mx-auto space-y-6 text-center">
        <p className="text-lg">{current.sentence.replace("___", "______")}</p>

        <div className="flex justify-center gap-4">
          {["will", "is going to", "are going to"].map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`px-4 py-2 border rounded ${
                selected === opt ? "bg-blue-100 border-blue-400" : "hover:bg-gray-100"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {selected && (
          <div className="space-y-3">
            <button onClick={checkAnswer} className="button button--primary mt-4">
              Revisar
            </button>
            {feedback && <p>{feedback}</p>}
            {feedback && (
              <button onClick={next} className="button button--secondary">
                Siguiente
              </button>
            )}
          </div>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default FuturePredictionExercise;
