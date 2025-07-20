export interface LevelQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  imageUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
}

export const levelQuestions: Record<"Principiante" | "Intermedio" | "Avanzado", LevelQuestion[]> = {
  Principiante: [
    {
      id: 1,
      question: "¿Cuál es la forma correcta del verbo 'to be' para 'I'?",
      options: ["is", "are", "am", "be"],
      correctAnswer: "am",
    },
    {
      id: 2,
      question: "¿Qué palabra en inglés significa 'Gracias'?",
      options: ["Hello", "Goodbye", "Please", "Thanks"],
      correctAnswer: "Thanks",
      audioUrl: "/assets/audio/thanks.mp3",
    },
    {
      id: 3,
      question: "Selecciona la imagen que representa la palabra 'Apple'.",
      options: ["Manzana", "Plátano", "Naranja", "Uva"],
      correctAnswer: "Manzana",
      imageUrl: "/assets/img/apple-example.png",
    },
  ],

  Intermedio: [
    {
      id: 1,
      question: "¿Cuál es la forma correcta del pasado de 'go'?",
      options: ["goes", "goed", "went", "go"],
      correctAnswer: "went",
    },
    {
      id: 2,
      question: "Elige el conector adecuado: 'I was tired ___ I went to bed.'",
      options: ["but", "so", "because", "and"],
      correctAnswer: "so",
    },
  ],

  Avanzado: [
    {
      id: 1,
      question: "Which sentence is in present perfect?",
      options: [
        "I go to the store.",
        "I have gone to the store.",
        "I will go to the store.",
        "I went to the store.",
      ],
      correctAnswer: "I have gone to the store.",
    },
    {
      id: 2,
      question: "¿Cuál es el sinónimo de 'purchase'?",
      options: ["buy", "sell", "break", "cook"],
      correctAnswer: "buy",
      videoUrl: "/assets/video/purchase.mp4",
    },
  ],
};
