import React from "react";
import Selection from "./Selection";
import { sortSelection } from "@/app/utils/mockData/sorts";

interface SortSelectionProps {
  value: "asc" | "desc";
  onChange: (value: "asc" | "desc") => void;
  labels?: {
    asc?: string;
    desc?: string;
  };
}

function SortSelection({ value, onChange, labels }: SortSelectionProps) {
  const baseOptions = sortSelection.map((s) => ({
    id: s.id,
    value: s.value as "asc" | "desc",
    label: s.label,
  }));

  const options = baseOptions.map((o) => {
    if (o.value === "asc" && labels?.asc) return { ...o, label: labels.asc };
    if (o.value === "desc" && labels?.desc) return { ...o, label: labels.desc };
    return o;
  });

  const currentLabel = options.find((o) => o.value === value)?.label ?? "";

  return (
    <div
      className="
        inline-flex items-center
        [&_svg]:ml-1
        [&_svg]:-mt-0.5
      "
    >
      <Selection
        label=""
        placeholder={currentLabel}
        options={options.map((o) => ({ id: o.id, value: o.label }))}
        value={currentLabel}
        onChange={(selectedLabel: string) => {
          const found = options.find((o) => o.label === selectedLabel);
          if (found) onChange(found.value);
        }}
        classNameSelectTrigger="
          !bg-transparent !border-0 !shadow-none !h-auto
          !p-0 !pr-0 !pl-0
          !text-bright-blue !text-xl !font-semibold
          inline-flex items-center gap-0 hover:underline

          /* ✂️ ตัดขอบ/เงา/ริง ทุกสถานะรวมถึงตอนเมนูเปิดอยู่ */
          ring-0 ring-offset-0 outline-none
          focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none
          focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none
          active:outline-none active:ring-0 active:ring-offset-0 active:shadow-none
          data-[state=open]:ring-0 data-[state=open]:ring-offset-0 data-[state=open]:shadow-none

          [-webkit-tap-highlight-color:transparent]
        "
        classNameSelectionItem="!text-md"
      />
    </div>
  );
}

export default SortSelection;
