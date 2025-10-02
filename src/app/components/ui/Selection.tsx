"use client";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectionInterface {
  label?: string;
  placeholder?: string;
  options?: {
    id: number;
    value: string;
  }[];
  classNameSelectTrigger?: string;
  classNameSelectionItem?: string;
  value?: number;                   
  onChange?: (val: number) => void; 
}

function Selection({
  label = "กรุณาเลือก",
  placeholder = "กรุณาเลือก",
  options,
  classNameSelectTrigger,
  classNameSelectionItem,
  value,
  onChange,
}: SelectionInterface) {
  return (
    <div>
      <Select
        value={value !== undefined ? String(value) : undefined}   
        onValueChange={(val) => onChange?.(Number(val))}         
      >
        <SelectTrigger
          className={`w-full cursor-pointer bg-white h-10 ${classNameSelectTrigger}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {label && (
              <SelectLabel className={`${classNameSelectionItem}`}>
                {label}
              </SelectLabel>
            )}
            {options?.map((option) => (
              <SelectItem
                className={`cursor-pointer ${classNameSelectionItem}`}
                value={String(option.id)} 
                key={option.id}
              >
                {option.value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Selection;
