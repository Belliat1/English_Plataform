"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

const debateTopics = [
  {
    topic: "Should school uniforms be mandatory?",
    pros: "Uniforms promote equality and reduce peer pressure.",
    cons: "Uniforms limit personal expression and can be uncomfortable.",
  },
  {
    topic: "Is technology making us less social?",
    pros: "People spend more time online than in real life.",
    cons: "Technology helps us stay connected over long distances.",
  },
  {
    topic: "Should animals be kept in zoos?",
    pros: "Zoos protect endangered species and educate the public.",
    cons: "Animals in zoos are not in their natural habitat.",
  },
  {
    topic: "Is it better to study online or in person?",
    pros: "Online learning is flexible and accessible.",
    cons: "In-person learning offers more social interaction.",
  },
  {
    topic: "Should students have homework every day?",
    pros: "Homework reinforces learning and builds discipline.",
    cons: "Too much homework causes stress and limits free time.",
  },
  {
    topic: "Is social media good for society?",
    pros: "It spreads information quickly and connects people.",
    cons: "It can cause misinformation and mental health issues.",
  },
  {
    topic: "Should fast food be banned in schools?",
    pros: "Fast food is unhealthy and causes obesity.",
    cons: "It’s convenient and gives students choices.",
  },
  {
    topic: "Is it better to live in the city or the countryside?",
    pros: "Cities have more opportunities and services.",
    cons: "Countryside offers peace and better air quality.",
  },
  {
    topic: "Should students use smartphones in class?",
    pros: "They can be used as educational tools.",
    cons: "They are distracting and reduce focus.",
  },
  {
    topic: "Is climate change the biggest threat to humanity?",
    pros: "It affects every country and leads to disasters.",
    cons: "Other issues like war and poverty are just as urgent.",
  },
];

const DebateActivity = () => {
  const [index, setIndex] = useState(0);
  const topic = debateTopics[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % debateTopics.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? debateTopics.length - 1 : prev - 1));
  };

  return (
    <WorkshopLayout
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-6 px-4 py-6">
        <h2 className="text-2xl font-bold text-center text-pink-600">
          Topic {index + 1}: {topic.topic}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-green-400 p-4 rounded bg-green-50">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Pros</h3>
            <p className="text-gray-800">{topic.pros}</p>
          </div>
          <div className="border border-red-400 p-4 rounded bg-red-50">
            <h3 className="text-lg font-semibold text-red-700 mb-2">Cons</h3>
            <p className="text-gray-800">{topic.cons}</p>
          </div>
        </div>

        <p className="text-center mt-4 text-sm text-gray-500">
          Use phrases like: <span className="italic">"In my opinion..."</span>,{" "}
          <span className="italic">"I believe that..."</span>,{" "}
          <span className="italic">"Some people think..."</span>
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button onClick={handlePrev} className="button button--secondary">
            Anterior
          </button>
          <button onClick={handleNext} className="button button--secondary">
            Siguiente
          </button>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default DebateActivity;
