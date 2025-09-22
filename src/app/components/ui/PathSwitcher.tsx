"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PathSwitcherProps {
  label?: string;
  placeholder?: string;
  options: {
    id: number;
    title: string;
    url: string;
    icon?: React.ElementType; // 👈 เพิ่ม icon type
  }[];
  classNameSelectTrigger?: string;
  classNameSelectionItem?: string;
}

export default function PathSwitcher({
  label = "เมนู",
  placeholder = "เลือกเมนู",
  options,
  classNameSelectTrigger,
  classNameSelectionItem,
}: PathSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select value={pathname} onValueChange={(val) => router.push(val)}>
      <SelectTrigger
        className={`w-full cursor-pointer bg-white h-10 ${classNameSelectTrigger}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map((option) => {
            const Icon = option.icon;
            return (
                <SelectItem
                    key={option.id}
                    value={option.url}
                    className={`cursor-pointer flex items-center gap-2 
                  data-[highlighted]:bg-neutral-100 
                  data-[state=checked]:bg-neutral-100 
                  data-[state=checked]:text-bright-blue
                  ${classNameSelectionItem}`}
                >
                    <div className="flex gap-2">
                        {Icon && <Icon className="h-4 w-4" />}
                        {option.title}
                    </div>
                </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}