'use client';

import { useState } from 'react';
import WorkshopLayout from './WorkshopLayout';

const questions = [
  { id: 1, text: "Would you mind turning down the volume?", correct: "Oh, sorry! I'll lower it now." },
  { id: 2, text: "I’m afraid I can't make it to the meeting.", correct: "That’s okay. We can reschedule." },
  { id: 3, text: "Let’s find a solution that works for both of us.", correct: "Yes, I agree. Let's discuss it calmly." },
  { id: 4, text: "Would you mind not using your phone in the meeting?", correct: "Of course, I’ll put it away." },
  { id: 5, text: "I’m afraid I don’t agree with that approach.", correct: "That’s fair. Let’s hear your idea." },
  { id: 6, text: "Let’s try to compromise here.", correct: "Good idea. I’m open to suggestions." },
  { id: 7, text: "Would you mind helping me with this issue?", correct: "Not at all. I’d be happy to help." },
  { id: 8, text: "I’m afraid we’re going in circles.", correct: "You’re right. Let’s refocus the discussion." },
];

const answers = [
  "Oh, sorry! I'll lower it now.",
  "That’s okay. We can reschedule.",
  "Yes, I agree. Let's discuss it calmly.",
  "Of course, I’ll put it away.",
  "That’s fair. Let’s hear your idea.",
  "Good idea. I’m open to suggestions.",
  "Not at all. I’d be happy to help.",
  "You’re right. Let’s refocus the discussion.",
];

const PoliteNegotiationMatch = () => {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [draggingAnswer, setDraggingAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleDragStart = (answer: string) => setDraggingAnswer(answer);

  const handleDrop = (questionId: number) => {
    if (draggingAnswer) {
      setUserAnswers((prev) => ({ ...prev, [questionId]: draggingAnswer }));
      setDraggingAnswer(null);
    }
  };

  const handleSelect = (questionId: number, value: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const reset = () => {
    setUserAnswers({});
    setDraggingAnswer(null);
    setShowResult(false);
  };

  const isCorrect = (questionId: number) =>
    userAnswers[questionId] === questions.find((q) => q.id === questionId)?.correct;

  const unusedAnswers = answers.filter(
    (a) => !Object.values(userAnswers).includes(a)
  );

  return (
    <WorkshopLayout
     
    >
      {/* Opciones disponibles para arrastrar */}
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {unusedAnswers.map((a, i) => (
          <div
            key={i}
            draggable
            onDragStart={() => handleDragStart(a)}
            className="bg-white border border-gray-300 p-2 rounded shadow text-sm cursor-move max-w-xs text-center"
          >
            {a}
          </div>
        ))}
      </div>

      {/* Preguntas con área de drop o select */}
      <div className="space-y-6">
        {questions.map((q) => (
          <div
            key={q.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(q.id)}
            className="bg-white p-4 rounded shadow"
          >
            <p className="mb-2 font-medium">{q.text}</p>

            <div className="flex flex-col sm:flex-row gap-2 items-center">
              {/* Área de drop */}
              <div
                className={`w-full p-2 min-h-[2.5rem] text-sm border rounded ${
                  showResult
                    ? isCorrect(q.id)
                      ? 'border-green-500'
                      : 'border-red-500'
                    : 'border-gray-300'
                } bg-gray-50 text-center`}
              >
                {userAnswers[q.id] || 'Arrastra aquí o selecciona abajo'}
              </div>

              {/* Dropdown (alternativa accesible) */}
              <select
                value={userAnswers[q.id] || ''}
                onChange={(e) => handleSelect(q.id, e.target.value)}
                className="w-full sm:w-1/2 p-2 border border-gray-300 rounded"
              >
                <option value="">-- Selecciona una respuesta --</option>
                {answers.map((a, i) => (
                  <option key={i} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Botones */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setShowResult(true)}
          className="px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:opacity-90"
        >
          Revisar
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 border border-[var(--primary-color)] text-[var(--primary-color)] rounded hover:bg-[var(--primary-color)] hover:text-white transition"
        >
          Restablecer
        </button>
      </div>
    </WorkshopLayout>
  );
};

export default PoliteNegotiationMatch;
