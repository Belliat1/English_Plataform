"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const conversation = [
  { speaker: "Daisy", text: "Do you like watching TV?" },
  { speaker: "Jay", text: "Yes, I do. I think watching TV is a great way to relax." },
  { speaker: "Daisy", text: "I agree. What kind of programmes do you like?" },
  { speaker: "Jay", text: "I like watching documentaries. I think they're really interesting." },
  { speaker: "Daisy", text: "Really? I don’t like documentaries. I think they’re a bit boring." },
  { speaker: "Jay", text: "Oh, I don’t think so. What do you like watching?" },
  { speaker: "Daisy", text: "I like watching comedies. I think they’re fun to watch." },
  { speaker: "Jay", text: "Yes, comedies are fun too." },
];

const comprehensionQuestions = [
  {
    question: "What does Jay think about watching TV?",
    options: ["It's boring.", "It's relaxing.", "It's a waste of time."],
    correct: "It's relaxing.",
  },
  {
    question: "What kind of programmes does Jay like?",
    options: ["Comedies", "Documentaries", "Reality shows"],
    correct: "Documentaries",
  },
  {
    question: "What kind of programmes does Daisy like?",
    options: ["Drama", "Reality shows", "Comedies"],
    correct: "Comedies",
  },
];

const opinionQuestions = [
  "Do you like watching TV? Why or why not?",
  "What kind of TV programmes do you like and why?",
  "Do you think watching TV is good or bad for people? Explain.",
  "Do you agree with Daisy or Jay? Why?",
];

const GivingOpinionLesson = () => {
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(comprehensionQuestions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const score = answers.reduce((acc, val, i) => {
    if (val === comprehensionQuestions[i].correct) return acc + 1;
    return acc;
  }, 0);

  const playAudio = () => {
    const audio = new Audio("/assets/audio/giving-opinion-dialogue.mp3");
    setIsPlaying(true);
    audio.play().catch(() => {});
    audio.onended = () => setIsPlaying(false);
  };

  return (
    <WorkshopLayout

    >
      <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col gap-6">
        {/* 🔊 Botón para reproducir el audio */}
        <div className="flex items-center gap-3">
          <button
            onClick={playAudio}
            className="bg-pink-500 text-white px-4 py-2 rounded font-medium"
            disabled={isPlaying}
          >
            {isPlaying ? "Reproduciendo..." : "Escuchar el diálogo"}
          </button>
          <span className="text-sm text-gray-600">(Audio completo del diálogo)</span>
        </div>

        {/* 🗣️ Diálogo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Diálogo</h2>
          <div className="border rounded-lg bg-white shadow p-4 space-y-2">
            {conversation.map((line, idx) => (
              <p key={idx}>
                <strong>{line.speaker}:</strong> {line.text}
              </p>
            ))}
          </div>
        </div>

        {/* ✅ Comprensión */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Comprensión</h2>
          {comprehensionQuestions.map((q, i) => (
            <div key={i} className="mb-4">
              <p className="font-medium">{q.question}</p>
              <div className="flex flex-col gap-2 mt-2">
                {q.options.map((opt) => {
                  const isCorrect = opt === q.correct;
                  const isSelected = answers[i] === opt;
                  const feedbackStyle =
                    submitted && isSelected
                      ? isCorrect
                        ? "bg-green-100 border-green-500"
                        : "bg-red-100 border-red-500"
                      : "bg-white border-gray-300";

                  return (
                    <button
                      key={opt}
                      className={`border rounded px-3 py-1 text-left ${feedbackStyle}`}
                      onClick={() => {
                        const newAnswers = [...answers];
                        newAnswers[i] = opt;
                        setAnswers(newAnswers);
                      }}
                      disabled={submitted}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          {!submitted && (
            <button
              onClick={() => setSubmitted(true)}
              className="button button--primary mt-4"
            >
              Revisar respuestas
            </button>
          )}
          {submitted && (
            <p className="mt-4 font-semibold text-green-600">
              Tu puntaje: {score}/{comprehensionQuestions.length}
            </p>
          )}
        </div>

        {/* 💬 Opinión */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Practica: Da tu opinión</h2>
          <ul className="list-disc pl-5 space-y-2">
            {opinionQuestions.map((q, idx) => (
              <li key={idx}>{q}</li>
            ))}
          </ul>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default GivingOpinionLesson;
