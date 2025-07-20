"use client";
import WorkshopLayout from "./WorkshopLayout";

const ModalPossibilityWorksheet = () => {
  return (
    <WorkshopLayout title="Hoja de Trabajo: Posibilidades" description="Ejercicios para practicar los verbos modales que expresan posibilidad.">
      <div className="max-w-2xl mx-auto space-y-4 text-gray-800">
        <p>
          Completa las oraciones usando <strong>may</strong> o <strong>might</strong>:
        </p>

        <ul className="list-disc pl-6">
          <li>I __________ go to the party tonight.</li>
          <li>It __________ rain later, take an umbrella.</li>
          <li>She __________ be at home now.</li>
        </ul>

        <p className="mt-6">
          Escribe tus propias oraciones con <strong>may</strong> y <strong>might</strong> para expresar posibilidad.
        </p>
      </div>
    </WorkshopLayout>
  );
};

export default ModalPossibilityWorksheet;
