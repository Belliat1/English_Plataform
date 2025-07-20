'use client';

import WorkshopLayout from './WorkshopLayout';

const scenarios = [
  {
    situation: "Your friend has a headache.",
    expected: "You should take a break or drink water.",
    icon: "🤕",
  },
  {
    situation: "It’s cloudy outside.",
    expected: "It might rain.",
    icon: "🌥️",
  },
  {
    situation: "You lost your phone.",
    expected: "You should look for it.",
    icon: "📱",
  },
  {
    situation: "You forgot to do your homework.",
    expected: "You should talk to your teacher.",
    icon: "📚",
  },
  {
    situation: "You're feeling tired after lunch.",
    expected: "You should take a short walk.",
    icon: "😴",
  },
];

const ModalScenariosPractice = () => {
  return (
    <WorkshopLayout
      title="🧠 Práctica de Escenarios con Verbos Modales"
      description="Lee cada situación y reflexiona sobre la mejor respuesta usando modales como should o might."
    >
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 text-gray-800">
        {scenarios.map((s, i) => (
          <section
            key={i}
            className="bg-white border border-gray-200 shadow-sm rounded-lg p-5 hover:shadow-md transition"
          >
            <div className="flex items-start space-x-3">
              <div className="text-3xl">{s.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-pink-600">Escenario {i + 1}</h3>
                <p className="mb-2">{s.situation}</p>
                <p className="text-sm text-gray-600">
                  💡 <strong>Posible respuesta:</strong> <em>{s.expected}</em>
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </WorkshopLayout>
  );
};

export default ModalScenariosPractice;
