"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const irregularVerbs = [
  { base: "be", past: "was/were", translation: "ser/estar", image: "be.png", audioBase: "be.mp3", audioPast: "was-were.mp3" },
  { base: "become", past: "became", translation: "convertirse", image: "become.png", audioBase: "become.mp3", audioPast: "became.mp3" },
  { base: "begin", past: "began", translation: "empezar", image: "begin.png", audioBase: "begin.mp3", audioPast: "began.mp3" },
  { base: "break", past: "broke", translation: "romper", image: "break.png", audioBase: "break.mp3", audioPast: "broke.mp3" },
  { base: "bring", past: "brought", translation: "traer", image: "bring.png", audioBase: "bring.mp3", audioPast: "brought.mp3" },
  { base: "build", past: "built", translation: "construir", image: "build.png", audioBase: "build.mp3", audioPast: "built.mp3" },
  { base: "buy", past: "bought", translation: "comprar", image: "buy.png", audioBase: "buy.mp3", audioPast: "bought.mp3" },
  { base: "catch", past: "caught", translation: "atrapar", image: "catch.png", audioBase: "catch.mp3", audioPast: "caught.mp3" },
  { base: "choose", past: "chose", translation: "elegir", image: "choose.png", audioBase: "choose.mp3", audioPast: "chose.mp3" },
  { base: "come", past: "came", translation: "venir", image: "come.png", audioBase: "come.mp3", audioPast: "came.mp3" },
  { base: "cut", past: "cut", translation: "cortar", image: "cut.png", audioBase: "cut.mp3", audioPast: "cut.mp3" },
  { base: "do", past: "did", translation: "hacer", image: "do.png", audioBase: "do.mp3", audioPast: "did.mp3" },
  { base: "drink", past: "drank", translation: "beber", image: "drink.png", audioBase: "drink.mp3", audioPast: "drank.mp3" },
  { base: "drive", past: "drove", translation: "conducir", image: "drive.png", audioBase: "drive.mp3", audioPast: "drove.mp3" },
  { base: "eat", past: "ate", translation: "comer", image: "eat.png", audioBase: "eat.mp3", audioPast: "ate.mp3" },
  { base: "fall", past: "fell", translation: "caer", image: "fall.png", audioBase: "fall.mp3", audioPast: "fell.mp3" },
  { base: "feel", past: "felt", translation: "sentir", image: "feel.png", audioBase: "feel.mp3", audioPast: "felt.mp3" },
  { base: "find", past: "found", translation: "encontrar", image: "find.png", audioBase: "find.mp3", audioPast: "found.mp3" },
  { base: "fly", past: "flew", translation: "volar", image: "fly.png", audioBase: "fly.mp3", audioPast: "flew.mp3" },
  { base: "forget", past: "forgot", translation: "olvidar", image: "forget.png", audioBase: "forget.mp3", audioPast: "forgot.mp3" },
  { base: "get", past: "got", translation: "obtener", image: "get.png", audioBase: "get.mp3", audioPast: "got.mp3" },
  { base: "give", past: "gave", translation: "dar", image: "give.png", audioBase: "give.mp3", audioPast: "gave.mp3" },
  { base: "go", past: "went", translation: "ir", image: "go.png", audioBase: "go.mp3", audioPast: "went.mp3" },
  { base: "have", past: "had", translation: "tener", image: "have.png", audioBase: "have.mp3", audioPast: "had.mp3" },
  { base: "hear", past: "heard", translation: "oír", image: "hear.png", audioBase: "hear.mp3", audioPast: "heard.mp3" },
  { base: "know", past: "knew", translation: "saber", image: "know.png", audioBase: "know.mp3", audioPast: "knew.mp3" },
  { base: "leave", past: "left", translation: "dejar", image: "leave.png", audioBase: "leave.mp3", audioPast: "left.mp3" },
  { base: "make", past: "made", translation: "hacer", image: "make.png", audioBase: "make.mp3", audioPast: "made.mp3" },
  { base: "meet", past: "met", translation: "conocer", image: "meet.png", audioBase: "meet.mp3", audioPast: "met.mp3" },
  { base: "put", past: "put", translation: "poner", image: "put.png", audioBase: "put.mp3", audioPast: "put.mp3" },
  { base: "read", past: "read", translation: "leer", image: "read.png", audioBase: "read.mp3", audioPast: "read-past.mp3" },
  { base: "run", past: "ran", translation: "correr", image: "run.png", audioBase: "run.mp3", audioPast: "ran.mp3" },
  { base: "say", past: "said", translation: "decir", image: "say.png", audioBase: "say.mp3", audioPast: "said.mp3" },
  { base: "see", past: "saw", translation: "ver", image: "see.png", audioBase: "see.mp3", audioPast: "saw.mp3" },
  { base: "sell", past: "sold", translation: "vender", image: "sell.png", audioBase: "sell.mp3", audioPast: "sold.mp3" },
  { base: "send", past: "sent", translation: "enviar", image: "send.png", audioBase: "send.mp3", audioPast: "sent.mp3" },
  { base: "sit", past: "sat", translation: "sentarse", image: "sit.png", audioBase: "sit.mp3", audioPast: "sat.mp3" },
  { base: "sleep", past: "slept", translation: "dormir", image: "sleep.png", audioBase: "sleep.mp3", audioPast: "slept.mp3" },
  { base: "speak", past: "spoke", translation: "hablar", image: "speak.png", audioBase: "speak.mp3", audioPast: "spoke.mp3" },
  { base: "swim", past: "swam", translation: "nadar", image: "swim.png", audioBase: "swim.mp3", audioPast: "swam.mp3" },
  { base: "take", past: "took", translation: "tomar", image: "take.png", audioBase: "take.mp3", audioPast: "took.mp3" },
  { base: "teach", past: "taught", translation: "enseñar", image: "teach.png", audioBase: "teach.mp3", audioPast: "taught.mp3" },
  { base: "tell", past: "told", translation: "contar/decir", image: "tell.png", audioBase: "tell.mp3", audioPast: "told.mp3" },
  { base: "think", past: "thought", translation: "pensar", image: "think.png", audioBase: "think.mp3", audioPast: "thought.mp3" },
  { base: "understand", past: "understood", translation: "entender", image: "understand.png", audioBase: "understand.mp3", audioPast: "understood.mp3" },
  { base: "write", past: "wrote", translation: "escribir", image: "write.png", audioBase: "write.mp3", audioPast: "wrote.mp3" },
];

const IrregularVerbsFlashcards = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const current = irregularVerbs[index];

  useEffect(() => {
    const audio = new Audio(
      `/assets/audio/${isFlipped ? current.audioPast : current.audioBase}`
    );
    audio.play().catch(() => {});
  }, [isFlipped, index]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % irregularVerbs.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? irregularVerbs.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  return (
    <WorkshopLayout

    >
      <div className="flex flex-col items-center gap-6 px-4 py-6">
        {/* Tarjeta */}
        <div
          className="flashcard-container w-full max-w-md md:max-w-lg h-[420px] md:h-[500px] cursor-pointer perspective"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            {/* Front - Base form */}
<div className="front flashcard-face">
  <p className="text-sm uppercase tracking-wide text-pink-500">Presente</p>
  <h2 className="text-5xl font-bold capitalize text-gray-800">{current.base}</h2>
  <div className="relative w-48 h-48">
    <Image
      src={`/assets/verbs/${current.image}`}
      alt={current.base}
      fill
      className="object-contain"
    />
  </div>
  <p className="text-xl text-gray-500">{current.translation}</p>
</div>

{/* Back - Past form */}
<div className="back flashcard-face">
  <p className="text-sm uppercase tracking-wide text-pink-500">Pasado</p>
  <h2 className="text-5xl font-bold capitalize text-pink-700">{current.past}</h2>
  <div className="relative w-48 h-48">
    
  </div>
  <p className="text-xl text-gray-500">{current.translation}</p>
</div>

          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <button onClick={handlePrev} className="button button--secondary">Anterior</button>
          <button onClick={handleNext} className="button button--secondary">Siguiente</button>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        .flashcard {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flipped {
          transform: rotateY(180deg);
        }

        .flashcard-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: white;
          border: 2px solid #ddd;
          border-radius: 1rem;
          padding: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .back {
          transform: rotateY(180deg);
        }
      `}</style>
    </WorkshopLayout>
  );
};

export default IrregularVerbsFlashcards;