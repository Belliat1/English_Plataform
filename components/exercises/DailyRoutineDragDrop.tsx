"use client";

import React, { useState } from "react";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout";

const dragItems = [
  {
    id: "wake-up",
    label: "She is waking up",
    image: "Daily routine png-01.png",
    category: ["morning"],
  },
  {
    id: "breakfast",
    label: "She is having breakfast",
    image: "Daily routine png-04.png",
    category: ["morning"],
  },
  {
    id: "working",
    label: "She is working",
    image: "Daily routine png-19.png",
    category: ["morning", "afternoon"],
  },
  {
    id: "lunch",
    label: "She is eating lunch",
    image: "Daily routine png-10.png",
    category: ["afternoon"],
  },
  {
    id: "relaxing",
    label: "She is relaxing",
    image: "Daily routine png-07.png",
    category: ["afternoon", "evening"],
  },
  {
    id: "reading",
    label: "She is reading",
    image: "Daily routine png-12.png",
    category: ["evening", "night"],
  },
  {
    id: "bath",
    label: "She is taking a bath",
    image: "Daily routine png-03.png",
    category: ["morning", "night"],
  },
  {
    id: "sleeping",
    label: "She is sleeping",
    image: "Daily routine png-22.png",
    category: ["night"],
  },
];

const categories = [
  { id: "morning", label: "In the morning" },
  { id: "afternoon", label: "In the afternoon" },
  { id: "evening", label: "In the evening" },
  { id: "night", label: "At night" },
];

const DailyRoutineDragDrop = () => {
  const [placedItems, setPlacedItems] = useState<{ [key: string]: string[] }>({
    morning: [],
    afternoon: [],
    evening: [],
    night: [],
  });

  const [draggingItem, setDraggingItem] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleDragStart = (id: string) => setDraggingItem(id);

  const handleDrop = (category: string) => {
    if (!draggingItem) return;

    setPlacedItems((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((cat) => {
        updated[cat] = updated[cat].filter((i) => i !== draggingItem);
      });
      updated[category].push(draggingItem);
      return updated;
    });

    setDraggingItem(null);
  };

  const getItemById = (id: string) => dragItems.find((item) => item.id === id);

  const checkCorrect = (category: string, id: string) => {
    const item = getItemById(id);
    if (!item) return false;
    return item.category.includes(category);
  };

  const remainingItems = dragItems.filter(
    (item) => !Object.values(placedItems).flat().includes(item.id)
  );

  const resetGame = () => {
    setPlacedItems({
      morning: [],
      afternoon: [],
      evening: [],
      night: [],
    });
    setShowResult(false);
  };

  return (
    <WorkshopLayout
      title="Daily Routine: Drag & Drop"
      description="Arrastra cada actividad al momento del día correcto. Algunas tienen más de una opción válida."
    >
      {/* Actividades no colocadas */}
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        {remainingItems.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item.id)}
            className="w-28 p-2 rounded-md border shadow cursor-move bg-white text-center"
          >
            <Image
              src={`/assets/routines/${item.image}`}
              alt={item.label}
              width={100}
              height={100}
              className="object-contain mx-auto"
            />
            <span className="text-xs font-medium mt-1 block">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Categorías */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat.id}>
            <h3 className="text-center font-semibold mb-2 text-[var(--primary-color)]">
              {cat.label}
            </h3>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(cat.id)}
              className="min-h-[180px] bg-[var(--background-2)] border-2 border-dashed border-[var(--color-neutral-200)] rounded-md p-2 flex flex-wrap gap-2 justify-center"
            >
              {placedItems[cat.id].map((itemId) => {
                const item = getItemById(itemId);
                const isCorrect = checkCorrect(cat.id, itemId);
                return (
                  <div
                    key={itemId}
                    draggable
                    onDragStart={() => handleDragStart(itemId)}
                    className={`w-24 p-1 rounded-md border ${
                      showResult
                        ? isCorrect
                          ? "border-green-500"
                          : "border-red-500"
                        : "border-gray-300"
                    } bg-white text-center cursor-move`}
                  >
                    <Image
                      src={`/assets/routines/${item?.image}`}
                      alt={item?.label}
                      width={90}
                      height={90}
                      className="object-contain mx-auto"
                    />
                    <span className="text-xs font-medium block mt-1">{item?.label}</span>
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
          className="px-4 py-2 bg-[var(--primary-color)] text-white rounded shadow hover:opacity-90"
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

export default DailyRoutineDragDrop;
