"use client";

import React, { useState } from "react";

interface Option {
  id: number;
  value: string;
}

interface ChipSelectorProps {
  options: Option[];
  defaultSelectedId?: number;
  onChange?: (selected: Option) => void;
}

function ChipSelector({ options, defaultSelectedId, onChange }: ChipSelectorProps) {
  const [selectedId, setSelectedId] = useState<number | null>(
    defaultSelectedId ?? null
  );

  const handleSelect = (option: Option) => {
    setSelectedId(option.id);
    if (onChange) onChange(option);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isActive = selectedId === option.id;
        return (
          <button
            key={option.id}
            onClick={() => handleSelect(option)}
            className={`px-4 py-2 rounded-full border transition hover:bg-blue-100 text-neutral-800 hover:scale-105 cursor-pointer
              ${
                isActive
                  ? "bg-white border-bright-blue font-semibold"
                  : "bg-white border-neutral-300 hover:bg-neutral-50"
              }
            `}
          >
            {option.value}
          </button>
        );
      })}
    </div>
  );
}

export default ChipSelector;
