"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import questionsData from "../data/questions";

const ExamPage = () => {
  const { moduleId } = useParams();
  const router = useRouter();

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Cargar preguntas del módulo
  useEffect(() => {
    const id = Array.isArray(moduleId) ? moduleId[0] : moduleId;
    if (id && questionsData[id]) {
      setQuestions(questionsData[id]);
    } else {
      console.error(`❌ No se encontraron preguntas para el módulo ${id}`);
      setQuestions([]);
    }
    setLoading(false);
  }, [moduleId]);

  // Reproducir audio automáticamente al cambiar de pregunta
  useEffect(() => {
    const url = questions[currentQuestion]?.audioUrl;
    if (url) {
      const newAudio = new Audio(url);
      setAudio(newAudio);
      newAudio.play().catch((err) => {
        console.warn("🔇 No se pudo reproducir el audio automáticamente:", err);
      });
      return () => {
        newAudio.pause();
        newAudio.currentTime = 0;
      };
    }
  }, [currentQuestion, questions]);

  const handleAnswer = (selectedOption: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: selectedOption,
    }));
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      alert("Por favor, selecciona una respuesta.");
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correctCount++;
    });
    const finalScore = (correctCount / questions.length) * 10;
    setScore(finalScore);
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center bg-[var(--background-1)]">
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 px-4 py-2 bg-[var(--background-3)] text-sm rounded hover:opacity-80"
      >
        ⬅ Volver
      </button>

      <h1 className="text-2xl font-bold text-center mt-4 text-[var(--primary-color)]">
        Desafío de Conocimiento
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Cargando preguntas...</p>
      ) : questions.length === 0 ? (
        <p className="text-center text-[var(--danger)] font-semibold">
          ⚠️ No hay preguntas disponibles para este módulo.
        </p>
      ) : (
        <>
          <p className="text-right text-gray-500 mt-2 mb-2">
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>

          <div className="w-full max-w-lg bg-[var(--background-2)] rounded shadow p-6">
            {/* Pregunta */}
            {typeof questions[currentQuestion]?.question === "object" ? (
              <>
                <p className="text-lg text-center font-semibold text-[var(--color-primary-900)]">
                  {questions[currentQuestion].question.en}
                </p>
                <p className="text-sm text-center text-gray-500 italic mt-1">
                  {questions[currentQuestion].question.es}
                </p>
              </>
            ) : (
              <p className="text-lg text-center mb-4 font-medium text-[var(--color-primary-900)]">
                {questions[currentQuestion]?.question || "Pregunta sin título"}
              </p>
            )}

            {/* Audio */}
            {questions[currentQuestion]?.audioUrl && (
              <div className="flex justify-center mb-4">
                <button
                  onClick={() => {
                    if (audio) {
                      audio.currentTime = 0;
                      audio.play();
                    }
                  }}
                  className="px-4 py-2 bg-[var(--background-3)] rounded hover:bg-[var(--color-neutral-200)] text-sm"
                >
                  🔁 Reproducir Audio
                </button>
              </div>
            )}

            {/* Imagen */}
            {questions[currentQuestion]?.imageUrl && (
              <div className="flex justify-center mb-4">
                <img
                  src={questions[currentQuestion].imageUrl}
                  alt="Imagen de apoyo"
                  className="max-h-56 object-contain rounded border"
                />
              </div>
            )}

            {/* Video */}
            {questions[currentQuestion]?.videoUrl && (
              <div className="flex justify-center mb-4">
                <video
                  src={questions[currentQuestion].videoUrl}
                  controls
                  className="w-full max-h-64 rounded"
                />
              </div>
            )}

            {/* Opciones */}
            {questions[currentQuestion]?.options?.map((option: string, idx: number) => {
              const selected = answers[currentQuestion] === option;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className={`block w-full text-left p-3 rounded border mb-2 transition ${
                    selected
                      ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)]"
                      : "bg-white text-gray-800 hover:bg-[var(--background-3)] border-gray-300"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Navegación */}
          <div className="flex justify-between mt-6 w-full max-w-lg">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-4 py-2 border rounded hover:bg-[var(--background-3)]"
            >
              Anterior
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:opacity-90"
            >
              {currentQuestion === questions.length - 1 ? "Finalizar" : "Siguiente"}
            </button>
          </div>

          {/* Puntaje */}
          {score !== null && (
            <p className="mt-6 text-lg font-semibold text-center text-[var(--success)]">
              🎉 Tu puntuación: {score.toFixed(1)} / 10
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ExamPage;
