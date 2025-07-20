"use client";

import WorkshopLayout from "./WorkshopLayout";

const AdvancedDescriptionGuide = () => {
  return (
    <WorkshopLayout

    >
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-bold mb-2 text-pink-600">🎯 Objetivo</h2>
          <p>
            Esta guía te enseñará a utilizar adjetivos avanzados, estructuras útiles y frases modelo para
            describir personas, lugares y cosas con más precisión y riqueza en inglés.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-pink-600">👤 Describiendo personas</h2>
          <ul className="list-disc ml-5">
            <li><strong>Aspecto físico:</strong> tall, short, curly-haired, well-dressed, dark-skinned</li>
            <li><strong>Personalidad:</strong> outgoing, shy, kind, confident, moody</li>
            <li><strong>Frases útiles:</strong> "She has a bright smile and always wears colorful clothes."</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-pink-600">🏞️ Describiendo lugares</h2>
          <ul className="list-disc ml-5">
            <li><strong>Ambiente:</strong> peaceful, crowded, historic, modern, cozy</li>
            <li><strong>Ubicación:</strong> in the city center, by the sea, in the countryside</li>
            <li><strong>Frases útiles:</strong> "It's a quiet village surrounded by green hills."</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-pink-600">📦 Describiendo objetos</h2>
          <ul className="list-disc ml-5">
            <li><strong>Forma y tamaño:</strong> rectangular, tiny, huge, oval</li>
            <li><strong>Material:</strong> wooden, plastic, metallic, ceramic</li>
            <li><strong>Frases útiles:</strong> "It’s a small leather bag with golden buckles."</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-pink-600">🛠️ Consejos para mejorar tus descripciones</h2>
          <ul className="list-disc ml-5">
            <li>Usa <strong>adjetivos sensoriales</strong>: que describan lo que ves, oyes, tocas.</li>
            <li>Agrega <strong>comparaciones</strong>: "Her voice is softer than a whisper."</li>
            <li>Evita repeticiones. En lugar de “nice”, usa palabras más específicas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-pink-600">📚 Práctica recomendada</h2>
          <p>
            Describe una persona que admires, un lugar que te gusta visitar o un objeto que usas todos los días. Usa
            al menos 5 adjetivos y una estructura clara.
          </p>
        </section>
      </div>
    </WorkshopLayout>
  );
};

export default AdvancedDescriptionGuide;
