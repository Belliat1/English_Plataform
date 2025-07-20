'use client';

import { useState } from 'react';
import WorkshopLayout from './WorkshopLayout';

const dragItems = [
  { id: '1', label: 'Would you mind speaking more quietly?', category: 'polite' },
  { id: '2', label: "I'm afraid I don't agree with you.", category: 'conflict' },
  { id: '3', label: 'Could you give me a few more minutes?', category: 'polite' },
  { id: '4', label: "Let’s try to find a solution together.", category: 'conflict' },
  { id: '5', label: 'Would you mind if I made a suggestion?', category: 'polite' },
  { id: '6', label: "I'm afraid this isn’t working for me.", category: 'conflict' },
  { id: '7', label: "Would you help me resolve this issue?", category: 'polite' },
  { id: '8', label: "I’m sorry, but I see things differently.", category: 'conflict' },
];

const categories = [
  { id: 'polite', label: 'Polite Requests' },
  { id: 'conflict', label: 'Conflict & Resolution' },
];

const PoliteConflictDragDrop = () => {
  const [placedItems, setPlacedItems] = useState<{ [key: string]: string[] }>({
    polite: [],
    conflict: [],
  });

  const [draggingItem, setDraggingItem] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleDragStart = (id: string) => setDraggingItem(id);

  const handleDrop = (categoryId: string) => {
    if (!draggingItem) return;

    setPlacedItems((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((key) => {
        updated[key] = updated[key].filter((itemId) => itemId !== draggingItem);
      });
      updated[categoryId].push(draggingItem);
      return updated;
    });

    setDraggingItem(null);
  };

  const getItemById = (id: string) => dragItems.find((item) => item.id === id);
  const checkCorrect = (category: string, id: string) => getItemById(id)?.category === category;

  const remainingItems = dragItems.filter(
    (item) => !Object.values(placedItems).flat().includes(item.id)
  );

  const resetGame = () => {
    setPlacedItems({
      polite: [],
      conflict: [],
    });
    setShowResult(false);
  };

  return (
    <WorkshopLayout
      title="Drag & Drop: Polite Negotiation"
      description="Arrastra cada frase a la categoría correcta: solicitud educada o frase para resolver conflictos."
    >
      {/* Frases aún no clasificadas */}
      <div className="mb-6 flex flex-wrap gap-3 justify-center">
        {remainingItems.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item.id)}
            className="bg-white border p-3 rounded-md shadow cursor-move text-sm w-fit max-w-sm text-center"
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Categorías de destino */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div key={cat.id}>
            <h3 className="text-center font-semibold text-[var(--primary-color)] mb-2">
              {cat.label}
            </h3>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(cat.id)}
              className="min-h-[160px] bg-[var(--background-2)] border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col gap-2"
            >
              {placedItems[cat.id].map((itemId) => {
                const item = getItemById(itemId);
                const isCorrect = checkCorrect(cat.id, itemId);
                return (
                  <div
                    key={itemId}
                    draggable
                    onDragStart={() => handleDragStart(itemId)}
                    className={`bg-white p-2 rounded-md text-sm shadow border ${
                      showResult
                        ? isCorrect
                          ? 'border-green-500'
                          : 'border-red-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {item?.label}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Botones */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setShowResult(true)}
          className="px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:opacity-90"
        >
          Revisar
        </button>
        <button
          onClick={resetGame}
          className="px-4 py-2 border border-[var(--primary-color)] text-[var(--primary-color)] rounded hover:bg-[var(--primary-color)] hover:text-white transition"
        >
          Restablecer
        </button>
      </div>
    </WorkshopLayout>
  );
};

export default PoliteConflictDragDrop;
