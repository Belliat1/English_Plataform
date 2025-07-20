"use client";

import { useParams } from "next/navigation";
import levels from "../../progress/module/[id]/data/modules";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import BackButton from "../../progress/components/BackButton"; // Ajusta la ruta si es distinta

const ResourcePage = () => {
  const { id } = useParams();
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const foundResource = levels
      .flatMap(level => level.modules.flatMap(module => module.resources))
      .find(resource => resource.id === Number(id));

    setResource(foundResource);
  }, [id]);

  if (!resource) {
    return <p className="text-center text-red-500">⚠️ Recurso no encontrado</p>;
  }

  const DynamicComponent = dynamic(
    () =>
      import(`../../../../components/exercises/${resource.component}`).then(
        (mod) => mod.default
      ),
    { ssr: false }
  );

  return (
    <div className="p-6 space-y-4">
      <BackButton label="Volver al Módulo" />

      <h1 className="h32">{resource.name}</h1>
      <p className="p16">{resource.description}</p>

      <Suspense fallback={<p className="text-center">Cargando recurso...</p>}>
        <div>
          <DynamicComponent />
        </div>
      </Suspense>
    </div>
  );
};

export default ResourcePage;
