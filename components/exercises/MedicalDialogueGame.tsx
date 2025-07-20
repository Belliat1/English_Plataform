'use client';

import { useState, useEffect, useRef } from 'react';
import WorkshopLayout from './WorkshopLayout';

// Diálogos + ruta al audio de cada uno
const dialogues = [
  {
    prompt: "Doctor: What's wrong?\nPatient: __________",
    correct: "I have a stomachache.",
    audio: "/assets/audio/md-01.mp3",
  },
  {
    prompt: "Doctor: How long have you felt this way?\nPatient: __________",
    correct: "Since yesterday.",
    audio: "/assets/audio/md-02.mp3",
  },
  {
    prompt: "Doctor: Do you have any allergies?\nPatient: __________",
    correct: "Yes, I'm allergic to penicillin.",
    audio: "/assets/audio/md-03.mp3",
  },
  {
    prompt: "Doctor: Let me take your temperature.\nPatient: __________",
    correct: "Okay, thank you.",
    audio: "/assets/audio/md-04.mp3",
  },
  {
    prompt: "Doctor: I’ll prescribe some medicine.\nPatient: __________",
    correct: "Thank you, doctor.",
    audio: "/assets/audio/md-05.mp3",
  },
  {
    prompt: "Doctor: You should rest.\nPatient: __________",
    correct: "I will. Thanks.",
    audio: "/assets/audio/md-06.mp3",
  },
  {
    prompt: "Doctor: Are you taking any medications?\nPatient: __________",
    correct: "Yes, just aspirin.",
    audio: "/assets/audio/md-07.mp3",
  },
  {
    prompt: "Doctor: You might have the flu.\nPatient: __________",
    correct: "Oh no, what should I do?",
    audio: "/assets/audio/md-08.mp3",
  },
  {
    prompt: "Doctor: Drink plenty of water.\nPatient: __________",
    correct: "I will, thank you.",
    audio: "/assets/audio/md-09.mp3",
  },
  {
    prompt: "Doctor: Come back next week.\nPatient: __________",
    correct: "Alright, I will.",
    audio: "/assets/audio/md-10.mp3",
  },
];

// Función para normalizar textos (elimina signos y mayúsculas)
const normalize = (str: string) =>
  str
    .toLowerCase()
    .replace(/[.,!?']/g, '') // eliminar puntuación
    .replace(/\s+/g, ' ')     // espacios dobles
    .trim();

const MedicalDialogueGame = () => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  const current = dialogues[index];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [index]);

  const check = () => {
    const userAnswer = normalize(answer);
    const correctAnswer = normalize(current.correct);
    const isCorrect = userAnswer === correctAnswer;
    setFeedback(isCorrect ? "✅ Correcto" : `❌ Incorrecto. Respuesta: ${current.correct}`);
  };

  const next = () => {
    setAnswer("");
    setFeedback("");
    setIndex((i) => (i + 1) % dialogues.length);
  };

  const replayAudio = () => {
    audioRef.current?.play().catch(() => {});
  };

  return (
    <WorkshopLayout title="Juego de Diálogos Médicos (con audio)">
      <div className="max-w-xl mx-auto space-y-6">
        <pre className="whitespace-pre-wrap text-gray-800">{current.prompt}</pre>

        <audio ref={audioRef} preload="auto">
          <source src={current.audio} type="audio/mp3" />
          Tu navegador no soporta audio.
        </audio>

        <button onClick={replayAudio} className="text-sm underline text-blue-600">
          🔊 Reproducir diálogo
        </button>

        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Escribe la respuesta del paciente"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button onClick={check} className="button button--primary mt-2">
          Revisar
        </button>

        {feedback && (
          <>
            <p>{feedback}</p>
            <button onClick={next} className="button button--secondary mt-2">
              Siguiente
            </button>
          </>
        )}
      </div>
    </WorkshopLayout>
  );
};

export default MedicalDialogueGame;
