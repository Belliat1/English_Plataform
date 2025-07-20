"use client";

import { useState, useEffect } from "react";
import WorkshopLayout from "./WorkshopLayout";

type PhrasalVerb = {
  verb: string;
  definition: string;
  example: string;
  translation: string;
  audio: string;
};

const phrasalVerbs: PhrasalVerb[] = [
  {
    verb: "turn on",
    definition: "to activate or start a device or machine",
    example: "She turned on the TV.",
    translation: "encender",
    audio: "turn-on.mp3",
  },
  {
    verb: "turn off",
    definition: "to deactivate a device or machine",
    example: "Please turn off the lights.",
    translation: "apagar",
    audio: "turn-off.mp3",
  },
  {
    verb: "look for",
    definition: "to search for something",
    example: "I'm looking for my keys.",
    translation: "buscar",
    audio: "look-for.mp3",
  },
  {
    verb: "give up",
    definition: "to stop doing something",
    example: "He gave up smoking last year.",
    translation: "rendirse / dejar de hacer algo",
    audio: "give-up.mp3",
  },
  {
    verb: "pick up",
    definition: "to collect someone or something",
    example: "Can you pick me up at 7 p.m.?",
    translation: "recoger",
    audio: "pick-up.mp3",
  },
  {
    verb: "wake up",
    definition: "to stop sleeping",
    example: "I wake up at 7 a.m. every day.",
    translation: "despertarse",
    audio: "wake-up.mp3",
  },
  {
    verb: "get up",
    definition: "to get out of bed",
    example: "He gets up early to go to work.",
    translation: "levantarse",
    audio: "get-up.mp3",
  },
  {
    verb: "put on",
    definition: "to place clothes or accessories on your body",
    example: "She put on her jacket.",
    translation: "ponerse (ropa)",
    audio: "put-on.mp3",
  },
  {
    verb: "take off",
    definition: "to remove clothes or to leave the ground (plane)",
    example: "The plane took off at 3 p.m.",
    translation: "quitarse (ropa) / despegar",
    audio: "take-off.mp3",
  },
  {
    verb: "check in",
    definition: "to register at a hotel or airport",
    example: "We checked in at the hotel at 2 p.m.",
    translation: "registrarse / hacer check-in",
    audio: "check-in.mp3",
  },
  {
    verb: "check out",
    definition: "to leave and pay for your stay at a hotel",
    example: "They checked out this morning.",
    translation: "salir / hacer check-out",
    audio: "check-out.mp3",
  },
  {
    verb: "find out",
    definition: "to discover or learn something",
    example: "She found out the truth.",
    translation: "descubrir / averiguar",
    audio: "find-out.mp3",
  },
  {
    verb: "run out of",
    definition: "to have no more of something",
    example: "We ran out of milk.",
    translation: "quedarse sin",
    audio: "run-out-of.mp3",
  },
  {
    verb: "call back",
    definition: "to return a phone call",
    example: "I'll call you back in a few minutes.",
    translation: "devolver la llamada",
    audio: "call-back.mp3",
  },
  {
    verb: "hang up",
    definition: "to end a phone call",
    example: "She hung up before I could say goodbye.",
    translation: "colgar (una llamada)",
    audio: "hang-up.mp3",
  },
  {
    verb: "throw away",
    definition: "to dispose of something",
    example: "Don’t throw away that paper!",
    translation: "botar / tirar",
    audio: "throw-away.mp3",
  },
  {
    verb: "write down",
    definition: "to write something on paper",
    example: "Please write down your address.",
    translation: "anotar",
    audio: "write-down.mp3",
  },
  {
    verb: "turn up",
    definition: "to increase the volume or intensity",
    example: "Turn up the music, please.",
    translation: "subir (el volumen)",
    audio: "turn-up.mp3",
  },
  {
    verb: "turn down",
    definition: "to reduce the volume or intensity / to reject",
    example: "He turned down the offer.",
    translation: "bajar (el volumen) / rechazar",
    audio: "turn-down.mp3",
  },
  {
    verb: "break down",
    definition: "to stop working (machine or vehicle)",
    example: "My car broke down on the way home.",
    translation: "averiarse",
    audio: "break-down.mp3",
  },
];


const PhrasalVerbsFlashcards = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const current = phrasalVerbs[index];

  const playAudio = () => {
    const audio = new Audio(`/assets/audio/${current.audio}`);
    audio.play().catch(() => {});
  };

  useEffect(() => {
    setIsFlipped(false);
    playAudio(); // 🔊 Reproducir automáticamente al cambiar de tarjeta
  }, [index]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    playAudio(); // 🔊 Reproducir también al voltear la tarjeta
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % phrasalVerbs.length);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? phrasalVerbs.length - 1 : prev - 1
    );
  };

  return (
    <WorkshopLayout>
      <div className="flex flex-col items-center gap-6 px-4 py-6">
        {/* Flashcard */}
        <div
          className="flashcard-container w-full max-w-md h-[320px] sm:h-[360px] cursor-pointer"
          onClick={handleFlip}
        >
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            {/* Front */}
            <div className="front flex flex-col items-center justify-center gap-4 bg-white border border-gray-300 rounded-xl h-full p-4 text-center">
              <p className="text-3xl font-bold capitalize text-gray-800">
                {current.verb}
              </p>
              <p className="text-sm text-gray-500 italic">
                (Haz clic para ver más)
              </p>
            </div>

            {/* Back */}
            <div className="back flex flex-col items-center justify-center gap-3 bg-white border border-gray-300 rounded-xl h-full p-4 text-center">
              <p className="text-sm text-gray-500 italic">
                {current.definition}
              </p>
              <p className="text-md font-medium text-gray-800">
                <span className="text-pink-600">Example:</span> {current.example}
              </p>
              <p className="text-md text-gray-700 font-semibold">
                <span className="text-pink-500">Traducción:</span> {current.translation}
              </p>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4 mt-4">
          <button onClick={handlePrev} className="button button--secondary">
            Anterior
          </button>
          <button onClick={handleNext} className="button button--secondary">
            Siguiente
          </button>
        </div>
      </div>

      {/* Estilos */}
      <style jsx>{`
        .flashcard {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flipped {
          transform: rotateY(180deg);
        }

        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .back {
          transform: rotateY(180deg);
        }
      `}</style>
    </WorkshopLayout>
  );
};

export default PhrasalVerbsFlashcards;