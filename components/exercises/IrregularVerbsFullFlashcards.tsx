"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

type VerbCard = {
  base: string;
  past: string;
  participle: string;
  translation: string;
  image: string;
  audioBase: string;
  audioPast: string;
  audioParticiple: string;
};

const irregularVerbs: VerbCard[] = [
  {
    base: "be",
    past: "was / were",
    participle: "been",
    translation: "ser / estar",
    image: "be.png",
    audioBase: "be.mp3",
    audioPast: "was-were.mp3",
    audioParticiple: "been.mp3",
  },
  {
    base: "begin",
    past: "began",
    participle: "begun",
    translation: "empezar",
    image: "begin.png",
    audioBase: "begin.mp3",
    audioPast: "began.mp3",
    audioParticiple: "begun.mp3",
  },
  {
    base: "break",
    past: "broke",
    participle: "broken",
    translation: "romper",
    image: "break.png",
    audioBase: "break.mp3",
    audioPast: "broke.mp3",
    audioParticiple: "broken.mp3",
  },
  {
    base: "bring",
    past: "brought",
    participle: "brought",
    translation: "traer",
    image: "bring.png",
    audioBase: "bring.mp3",
    audioPast: "brought.mp3",
    audioParticiple: "brought.mp3",
  },
  {
    base: "build",
    past: "built",
    participle: "built",
    translation: "construir",
    image: "build.png",
    audioBase: "build.mp3",
    audioPast: "built.mp3",
    audioParticiple: "built.mp3",
  },
  {
    base: "buy",
    past: "bought",
    participle: "bought",
    translation: "comprar",
    image: "buy.png",
    audioBase: "buy.mp3",
    audioPast: "bought.mp3",
    audioParticiple: "bought.mp3",
  },
  {
    base: "come",
    past: "came",
    participle: "come",
    translation: "venir",
    image: "come.png",
    audioBase: "come.mp3",
    audioPast: "came.mp3",
    audioParticiple: "come.mp3",
  },
  {
    base: "do",
    past: "did",
    participle: "done",
    translation: "hacer",
    image: "do.png",
    audioBase: "do.mp3",
    audioPast: "did.mp3",
    audioParticiple: "done.mp3",
  },
  {
    base: "eat",
    past: "ate",
    participle: "eaten",
    translation: "comer",
    image: "eat.png",
    audioBase: "eat.mp3",
    audioPast: "ate.mp3",
    audioParticiple: "eaten.mp3",
  },
  {
    base: "find",
    past: "found",
    participle: "found",
    translation: "encontrar",
    image: "find.png",
    audioBase: "find.mp3",
    audioPast: "found.mp3",
    audioParticiple: "found.mp3",
  },
  {
    base: "go",
    past: "went",
    participle: "gone",
    translation: "ir",
    image: "go.png",
    audioBase: "go.mp3",
    audioPast: "went.mp3",
    audioParticiple: "gone.mp3",
  },
  {
    base: "have",
    past: "had",
    participle: "had",
    translation: "tener",
    image: "have.png",
    audioBase: "have.mp3",
    audioPast: "had.mp3",
    audioParticiple: "had.mp3",
  },
  {
    base: "know",
    past: "knew",
    participle: "known",
    translation: "saber / conocer",
    image: "know.png",
    audioBase: "know.mp3",
    audioPast: "knew.mp3",
    audioParticiple: "known.mp3",
  },
  {
    base: "make",
    past: "made",
    participle: "made",
    translation: "hacer / fabricar",
    image: "make.png",
    audioBase: "make.mp3",
    audioPast: "made.mp3",
    audioParticiple: "made.mp3",
  },
  {
    base: "run",
    past: "ran",
    participle: "run",
    translation: "correr",
    image: "run.png",
    audioBase: "run.mp3",
    audioPast: "ran.mp3",
    audioParticiple: "run.mp3",
  },
  {
    base: "see",
    past: "saw",
    participle: "seen",
    translation: "ver",
    image: "see.png",
    audioBase: "see.mp3",
    audioPast: "saw.mp3",
    audioParticiple: "seen.mp3",
  },
  {
    base: "speak",
    past: "spoke",
    participle: "spoken",
    translation: "hablar",
    image: "speak.png",
    audioBase: "speak.mp3",
    audioPast: "spoke.mp3",
    audioParticiple: "spoken.mp3",
  },
  {
    base: "take",
    past: "took",
    participle: "taken",
    translation: "tomar / llevar",
    image: "take.png",
    audioBase: "take.mp3",
    audioPast: "took.mp3",
    audioParticiple: "taken.mp3",
  },
  {
    base: "write",
    past: "wrote",
    participle: "written",
    translation: "escribir",
    image: "write.png",
    audioBase: "write.mp3",
    audioPast: "wrote.mp3",
    audioParticiple: "written.mp3",
  },
];


const IrregularVerbsFullFlashcards = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = irregularVerbs[index];

  const playAudio = (file: string) => {
    const audio = new Audio(`/assets/audio/${file}`);
    audio.play().catch(() => {});
  };

  useEffect(() => {
    setFlipped(false);
  }, [index]);

  return (
    <WorkshopLayout

    >
      <div className="flex flex-col items-center gap-6 px-4 py-6">
        {/* Flashcard */}
        <div
          className="flashcard-container w-full max-w-sm h-[320px] sm:h-[380px] cursor-pointer"
          onClick={() => setFlipped(!flipped)}
        >
          <div className={`flashcard ${flipped ? "flipped" : ""}`}>
            {/* Front */}
            <div className="front flex flex-col justify-center items-center bg-white border rounded-xl h-full text-3xl font-bold text-gray-800">
              {current.base}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio(current.audioBase);
                }}
                className="mt-2 text-sm bg-pink-100 text-pink-800 px-3 py-1 rounded"
              >
                🔊 Escuchar
              </button>
            </div>

            {/* Back */}
            <div className="back flex flex-col items-center justify-center gap-3 bg-white border rounded-xl p-4 h-full">
              <Image
                src={`/assets/verbs/${current.image}`}
                alt={current.base}
                width={180}
                height={180}
                className="object-contain"
              />
              <p className="text-lg font-semibold">Traducción: {current.translation}</p>
              <div className="text-center">
                <p className="font-bold">
                  Past: {current.past}{" "}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(current.audioPast);
                    }}
                    className="ml-2 text-sm text-blue-600"
                  >
                    🔊
                  </button>
                </p>
                <p className="font-bold mt-1">
                  Participle: {current.participle}{" "}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(current.audioParticiple);
                    }}
                    className="ml-2 text-sm text-blue-600"
                  >
                    🔊
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <button
            onClick={() => setIndex((prev) => (prev === 0 ? irregularVerbs.length - 1 : prev - 1))}
            className="button button--secondary"
          >
            Anterior
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % irregularVerbs.length)}
            className="button button--secondary"
          >
            Siguiente
          </button>
        </div>
      </div>

      {/* Estilos */}
      <style jsx>{`
        .flashcard-container {
          perspective: 1000px;
        }
        .flashcard {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
        }
        .flipped {
          transform: rotateY(180deg);
        }
        .flashcard > div {
          backface-visibility: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .back {
          transform: rotateY(180deg);
        }
      `}</style>
    </WorkshopLayout>
  );
};

export default IrregularVerbsFullFlashcards;
