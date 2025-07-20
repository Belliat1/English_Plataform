"use client";

import { useState } from "react";
import WorkshopLayout from "./WorkshopLayout";

type Line = {
  textBefore: string;
  options: string[];
  correct: string;
  textAfter: string;
};

const conversationLines: Line[] = [
  {
    textBefore: "A: Hi! How are you? I",
    options: ["have not seen", "did not see"],
    correct: "have not seen",
    textAfter: "you in ages!",
  },
  {
    textBefore: "B: I know! I",
    options: ["traveled", "have traveled"],
    correct: "have traveled",
    textAfter: "a lot recently.",
  },
  {
    textBefore: "A: Where",
    options: ["did you go", "have you gone"],
    correct: "did you go",
    textAfter: "last month?",
  },
  {
    textBefore: "B: I",
    options: ["went", "have gone"],
    correct: "went",
    textAfter: "to Italy for two weeks.",
  },
  {
    textBefore: "A: Wow! That sounds amazing. How long",
    options: ["have you stayed", "did you stay"],
    correct: "did you stay",
    textAfter: "there?",
  },
  {
    textBefore: "B: I",
    options: ["stayed", "have stayed"],
    correct: "stayed",
    textAfter: "there until the end of May.",
  },
  {
    textBefore: "A: And",
    options: ["have you tried", "did you try"],
    correct: "did you try",
    textAfter: "the local food?",
  },
  {
    textBefore: "B: Of course! I",
    options: ["have eaten", "ate"],
    correct: "have eaten",
    textAfter: "so much pasta!",
  },
];

const TenseConversationPractice = () => {
  const [answers, setAnswers] = useState<string[]>(Array(conversationLines.length).fill(""));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const isCorrect = (index: number) => answers[index] === conversationLines[index].correct;

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(conversationLines.length).fill(""));
    setSubmitted(false);
  };

  return (
    <WorkshopLayout title="Tense Conversation Practice" description="Elige entre pasado simple o presente perfecto para completar la conversación.">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 px-4 py-6">
        {conversationLines.map((line, i) => (
          <div key={i} className="text-lg">
            <span>{line.textBefore} </span>
            <select
              className="border rounded px-2 py-1 mx-1"
              value={answers[i]}
              onChange={(e) => handleSelect(i, e.target.value)}
              disabled={submitted}
            >
              <option value="">--</option>
              {line.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span>{line.textAfter}</span>
            {submitted && (
              <span className={`ml-3 font-semibold ${isCorrect(i) ? "text-green-600" : "text-red-500"}`}>
                {isCorrect(i) ? "✔" : `✘ (${line.correct})`}
              </span>
            )}
          </div>
        ))}

        <div className="flex gap-4 mt-6">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="button button--primary"
              disabled={answers.includes("")}
            >
              Revisar respuestas
            </button>
          ) : (
            <button onClick={handleReset} className="button button--secondary">
              Reiniciar
            </button>
          )}
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default TenseConversationPractice;
