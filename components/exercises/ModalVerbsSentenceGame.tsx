"use client";
import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const sentences = [
  { incomplete: "You _____ study more.", correct: "should" },
  { incomplete: "It _____ rain tomorrow.", correct: "might" },
  { incomplete: "You _____ eat junk food every day.", correct: "shouldn't" },
  { incomplete: "He _____ be at work already.", correct: "may" },
];

const options = ["should", "might", "must", "may", "shouldn't"];

const ModalVerbsSentenceGame = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  const current = sentences[index];

  const check = () => {
    if (selected === current.correct) {
      setFeedback("✅ Correcto");
    } else {
      setFeedback(`❌ Incorrecto. Respuesta: ${current.correct}`);
    }
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % sentences.length);
    setSelected(null);
    setFeedback("");
  };

  return (
    <WorkshopLayout title="Juego de Frases con Verbos Modales">
      <div className="max-w-md mx-auto text-center">
        <p className="text-xl mb-4">{current.incomplete.replace("_____", "_____")}</p>

        <div className="grid grid-cols-2 gap-2">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`px-3 py-2 border rounded ${selected === opt ? "bg-blue-100" : "bg-white"}`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <button onClick={check} disabled={!selected} className="button button--primary">
            Revisar
          </button>
          {feedback && (
            <>
              <p className="mt-2">{feedback}</p>
              <button onClick={next} className="button button--secondary mt-2">Siguiente</button>
            </>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default ModalVerbsSentenceGame;
