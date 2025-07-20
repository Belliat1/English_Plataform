"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const ConnectorsDialogueExercise = () => {
  const words = [
    "area", "snows", "ice", "cool", "windy", "summer", "insects", "outside"
  ];

  const correctAnswers: { [key: number]: string } = {
    0: "area",
    1: "snows",
    2: "ice",
    3: "windy",
    4: "summer",
    5: "cool",
    6: "insects",
    7: "outside"
  };

  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [dragging, setDragging] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleDragStart = (word: string) => setDragging(word);
  const handleDrop = (index: number) => {
    if (!dragging) return;
    setAnswers((prev) => ({ ...prev, [index]: dragging }));
    setDragging(null);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
  };

  const playAudio = () => {
    const audio = new Audio("/assets/audio/connectors-dialogue.mp3");
    audio.play().catch(() => {});
  };

  useEffect(() => {
    playAudio();
  }, []);

  const isCorrect = (index: number) => answers[index] === correctAnswers[index];

  return (
    <WorkshopLayout

    >
      {/* Imagen superior */}
      <div className="w-full max-w-md mx-auto mb-6">
        <Image
          src="/assets/img/weather-conversation.png"
          alt="People talking about weather"
          width={600}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Diálogo */}
      <div className="bg-white dark:bg-gray-800 border p-6 rounded-xl max-w-2xl mx-auto space-y-4 text-lg leading-relaxed">
        <p><strong>Man:</strong> How is the weather in your <DropBox index={0} /></p>
        <p><strong>Woman:</strong> Not great. It <DropBox index={1} /> a lot in winter, so it gets really cold. There is lots of <DropBox index={2} /> on the streets, so it is hard to drive.</p>
        <p><strong>Man:</strong> What about the spring?</p>
        <p><strong>Woman:</strong> The spring is not much better. It rains a lot, and it is really <DropBox index={3} />.</p>
        <p><strong>Man:</strong> Well, what about <DropBox index={4} /> and fall?</p>
        <p><strong>Woman:</strong> The fall is really pretty, actually. The weather is <DropBox index={5} />, and the trees change colors, so it is really beautiful.</p>
        <p><strong>Man:</strong> How about summer?</p>
        <p><strong>Woman:</strong> Summer is not too bad, but it gets really hot, and we have lots of <DropBox index={6} />. It doesn’t rain much though, so summer is great for being <DropBox index={7} />.</p>
      </div>

      {/* Palabras arrastrables */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {words.map((word) => (
          <div
            key={word}
            draggable
            onDragStart={() => handleDragStart(word)}
            className="px-4 py-2 bg-pink-100 hover:bg-pink-200 border border-pink-300 rounded cursor-move text-sm font-medium"
          >
            {word}
          </div>
        ))}
      </div>

      {/* Botones */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setShowResult(true)}
          className="bg-pink-600 text-white px-6 py-2 rounded shadow"
        >
          Revisar
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-200 text-black px-6 py-2 rounded"
        >
          Reiniciar
        </button>
      </div>

      {/* Feedback */}
      {showResult && (
        <div className="mt-4 text-center text-lg font-semibold">
          {Object.keys(correctAnswers).every(
            (key) => answers[+key] === correctAnswers[+key]
          )
            ? "✅ ¡Muy bien! Todos los conectores son correctos."
            : "❌ Algunos conectores no son correctos. Inténtalo de nuevo."}
        </div>
      )}
    </WorkshopLayout>
  );

  function DropBox({ index }: { index: number }) {
    const current = answers[index];
    const correct = isCorrect(index);

    return (
      <span
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDrop(index)}
        className={`inline-block min-w-[90px] border-b-2 mx-1 px-2 pb-0.5 ${
          showResult
            ? correct
              ? "border-green-500 text-green-600 font-semibold"
              : "border-red-500 text-red-600"
            : "border-gray-400"
        }`}
      >
        {current || "_____"}
      </span>
    );
  }
};

export default ConnectorsDialogueExercise;
