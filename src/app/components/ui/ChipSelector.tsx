"use client";

import React, { useState } from "react";

interface Option {
  id: number;
  value: string;
}

interface ChipSelectorProps {
  options: Option[];
  defaultSelectedId?: number;
  value?: number;
  onChange?: (id: number) => void;
}

function ChipSelector({
  options,
  defaultSelectedId,
  value,
  onChange,
}: ChipSelectorProps) {
  const [internalValue, setInternalValue] = useState<number | null>(
    defaultSelectedId ?? null
  );

  const selectedId = value ?? internalValue;

  const handleSelect = (option: Option) => {
    if (onChange) onChange(option.id);     
    if (value === undefined) setInternalValue(option.id);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isActive = selectedId === option.id;
        return (
          <button
            key={option.id}
            type="button"
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
