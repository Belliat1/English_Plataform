'use client';

import { useState, useMemo } from 'react';
import WorkshopLayout from './WorkshopLayout';

// Preguntas (ahora con 8, como pediste)
const questions = [
  {
    question: "I'm sick.",
    correct: "You should rest.",
    image: "/assets/advice/sick.jpg",
  },
  {
    question: "I have a headache.",
    correct: "You should take some medicine.",
    image: "/assets/advice/headache.jpg",
  },
  {
    question: "I'm late for school.",
    correct: "You should hurry up.",
    image: "/assets/advice/late.jpg",
  },
  {
    question: "I'm tired every morning.",
    correct: "You should sleep earlier.",
    image: "/assets/advice/tired.jpg",
  },
  {
    question: "I feel stressed all the time.",
    correct: "You should take a break.",
    image: "/assets/advice/stressed.jpg",
  },
  {
    question: "I can't see the board clearly.",
    correct: "You should get your eyes checked.",
    image: "/assets/advice/vision.jpeg",
  },
  {
    question: "I want to lose weight.",
    correct: "You should exercise regularly.",
    image: "/assets/advice/exercise.jpg",
  },
  {
    question: "I have a toothache.",
    correct: "You should see a dentist.",
    image: "/assets/advice/dentist.jpg",
  },
];

// Todas las posibles opciones
const allOptions = [
  "You should rest.",
  "You should eat more.",
  "You should take some medicine.",
  "You should run faster.",
  "You should sleep earlier.",
  "You should hurry up.",
  "You should take a break.",
  "You should get your eyes checked.",
  "You should exercise regularly.",
  "You should see a dentist.",
];

// Función para mezclar un array
const shuffle = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const ModalAdviceExercise = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  const current = questions[index];

  // Opciones aleatorias (5 incluyendo la correcta)
  const options = useMemo(() => {
    const incorrect = allOptions
      .filter((opt) => opt !== current.correct)
      .sort(() => 0.5 - Math.random()) // mezcla
      .slice(0, 4); // 4 incorrectas
    const mixed = shuffle([current.correct, ...incorrect]);
    return mixed;
  }, [index]);

  const handleCheck = () => {
    if (selected === current.correct) {
      setFeedback('✅ ¡Correcto!');
    } else {
      setFeedback(`❌ Incorrecto. Respuesta: ${current.correct}`);
    }
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % questions.length);
    setSelected(null);
    setFeedback('');
  };

  return (
    <WorkshopLayout>
      <div className="max-w-xl mx-auto text-center space-y-4">
        {/* Imagen */}
        <img
          src={current.image}
          alt="Contexto visual de la pregunta"
          className="w-full h-48 object-cover rounded"
        />

        {/* Pregunta */}
        <p className="text-lg font-medium">{current.question}</p>

        {/* Opciones aleatorias */}
        <div className="grid grid-cols-1 gap-3">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`border px-4 py-2 rounded transition ${
                selected === opt ? 'bg-blue-100 border-blue-400' : 'hover:bg-gray-100'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Feedback y navegación */}
        <div className="mt-4 space-y-3">
          <button
            onClick={handleCheck}
            disabled={!selected}
            className="button button--primary"
          >
            Revisar
          </button>

          {feedback && <p className="text-lg">{feedback}</p>}

          {feedback && (
            <button onClick={handleNext} className="button button--secondary">
              Siguiente
            </button>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default ModalAdviceExercise;
