'use client';

import WorkshopLayout from './WorkshopLayout';

const prompts = [
  "Act as a patient. Explain your symptoms to a doctor.",
  "Ask for help at a pharmacy. Describe what you need.",
  "Simulate calling emergency services after an accident.",
  "Act as a nurse giving instructions to a patient.",
  "Pretend you're helping a sick tourist find a clinic.",
  "Act as a doctor explaining test results to a patient.",
  "Roleplay asking a friend to take you to the hospital.",
  "Simulate a dialogue at the reception of a clinic.",
  "Act as someone reacting to a friend's injury.",
  "Ask a stranger in English to help you in an emergency.",
];

const ClinicRoleplayPractice = () => {
  return (
    <WorkshopLayout title="Práctica de Roleplay: En la clínica">
      <div className="max-w-2xl mx-auto space-y-4">
        {prompts.map((prompt, i) => (
          <div key={i} className="p-4 border rounded bg-white shadow-sm">
            <p className="font-semibold">🗣️ Situación {i + 1}</p>
            <p>{prompt}</p>
          </div>
        ))}
      </div>
    </WorkshopLayout>
  );
};

export default ClinicRoleplayPractice;
