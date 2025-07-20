'use client';

import WorkshopLayout from './WorkshopLayout';

const ModalVerbsGuide = () => {
  return (
    <WorkshopLayout
      title="Guía de Verbos Modales"
      description="Aprende a usar verbos modales en inglés para expresar posibilidad, obligación y dar consejos."
    >
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8 text-gray-800">
        
        <section>
          <h2 className="text-2xl font-bold mb-2 text-pink-600">❓ ¿Qué son los verbos modales?</h2>
          <p>
            Los verbos modales como <strong>may</strong>, <strong>might</strong>, <strong>should</strong>, 
            <strong> must</strong> y <strong>can</strong> se usan para expresar posibilidad, necesidad, consejo, permiso o habilidad.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-pink-600">🌦️ Expresar posibilidad</h2>
          <ul className="list-disc ml-5">
            <li>
              <strong>may / might</strong>: Puede que algo ocurra. <br />
              <em>Ejemplo:</em> <span className="italic text-gray-700">It might rain later.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-pink-600">💡 Dar consejos</h2>
          <ul className="list-disc ml-5">
            <li>
              <strong>should</strong>: Es recomendable hacer algo. <br />
              <em>Ejemplo:</em> <span className="italic text-gray-700">You should see a doctor.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-pink-600">⚠️ Obligación</h2>
          <ul className="list-disc ml-5">
            <li>
              <strong>must</strong>: Algo que es necesario u obligatorio. <br />
              <em>Ejemplo:</em> <span className="italic text-gray-700">You must wear a helmet.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-pink-600">📝 Consejo práctico</h2>
          <p>
            Intenta escribir oraciones usando cada uno de los verbos modales. Por ejemplo, habla sobre reglas en tu país, recomendaciones de salud o situaciones hipotéticas.
          </p>
        </section>

      </div>
    </WorkshopLayout>
  );
};

export default ModalVerbsGuide;
