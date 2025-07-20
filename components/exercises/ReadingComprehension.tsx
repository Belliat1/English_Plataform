'use client';

import { useState } from 'react';
import WorkshopLayout from './WorkshopLayout';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Reading = {
  title: string;
  text: string;
  questions: Question[];
};

const readings: Reading[] = [
  {
    title: 'A Rainy Day',
    text: `It was raining all day. Sarah didn’t want to go outside, so she stayed in and read a book. Around noon, the power went out. She lit some candles and continued reading. Despite the rain, she enjoyed the quiet time.`,
    questions: [
      {
        question: 'Why did Sarah stay inside?',
        options: ['Because it was raining.', 'Because she was sick.', 'Because she had no book.'],
        answer: 'Because it was raining.',
      },
      {
        question: 'What did she do when the power went out?',
        options: [
          'She stopped reading.',
          'She went outside.',
          'She lit some candles and continued reading.',
        ],
        answer: 'She lit some candles and continued reading.',
      },
    ],
  },
  {
    title: 'The Lost Wallet',
    text: `Tom was walking to the park when he found a wallet on the ground. He picked it up and checked for ID. He called the number on a business card inside. A few minutes later, a man arrived and thanked Tom for being honest.`,
    questions: [
      {
        question: 'Where was Tom going?',
        options: ['To school', 'To the park', 'To the bank'],
        answer: 'To the park',
      },
      {
        question: 'How did he return the wallet?',
        options: ['He took it to the police.', 'He called the owner.', 'He left it there.'],
        answer: 'He called the owner.',
      },
      {
        question: 'How did the man react?',
        options: ['He was angry.', 'He ignored Tom.', 'He thanked Tom.'],
        answer: 'He thanked Tom.',
      },
    ],
  },
  {
    title: 'The New Cafe',
    text: `A new café opened on Main Street last week. They serve organic coffee, pastries, and sandwiches. Emily went there on Saturday and loved the cozy atmosphere. She said it was the perfect place to study and relax.`,
    questions: [
      {
        question: 'When did the café open?',
        options: ['Last month', 'Last week', 'Yesterday'],
        answer: 'Last week',
      },
      {
        question: 'Why did Emily like the café?',
        options: [
          'Because it was noisy',
          'Because it had good music',
          'Because it was cozy and relaxing',
        ],
        answer: 'Because it was cozy and relaxing',
      },
    ],
  },
];

const ReadingComprehensionExercise = () => {
  const totalQuestions = readings.reduce((sum, r) => sum + r.questions.length, 0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(totalQuestions).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleChange = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const correctCount = answers.reduce((count, answer, i) => {
    const flatQuestions = readings.flatMap((r) => r.questions);
    return answer === flatQuestions[i].answer ? count + 1 : count;
  }, 0);

  return (
    <WorkshopLayout>
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-10">
        {readings.map((reading, rIndex) => (
          <div key={rIndex} className="space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">📘 {reading.title}</h2>
            <p className="text-gray-800 leading-relaxed">{reading.text}</p>

            {reading.questions.map((q, qIndex) => {
              const globalIndex =
                readings
                  .slice(0, rIndex)
                  .reduce((sum, r) => sum + r.questions.length, 0) + qIndex;

              const selected = answers[globalIndex];
              const correct = q.answer;

              const isCorrect = selected === correct;
              const feedbackStyle = showResults
                ? isCorrect
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50'
                : 'border-gray-300';

              return (
                <div
                  key={qIndex}
                  className={`border rounded p-4 ${feedbackStyle}`}
                >
                  <p className="mb-2 text-base font-medium">{q.question}</p>
                  <div className="flex gap-3 flex-wrap">
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleChange(globalIndex, opt)}
                        disabled={showResults}
                        className={`px-4 py-2 border rounded text-sm font-medium ${
                          selected === opt
                            ? 'bg-blue-100 border-blue-400'
                            : 'bg-white hover:bg-pink-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {showResults && (
                    <p className="mt-2 text-sm italic">
                      {isCorrect
                        ? '✅ Correcto'
                        : `❌ Incorrecto. La respuesta correcta era: ${correct}`}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        <div className="text-center mt-8">
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
              Tu puntaje: {correctCount} / {totalQuestions}
            </p>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default ReadingComprehensionExercise;
