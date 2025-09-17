import React from "react";
import Selection from "./Selection";
import { sortSelection } from "@/app/utils/mockData/sorts";

function SortSelection() {

  const options = sortSelection.map(selection => (
    {
      id: selection.id,
      value: selection.label
    }
  ))
  return (
    <div>
      <Selection
        label="เรียงลำดับ"
        placeholder="เลือกการเรียง"
        options={options}
        classNameSelectTrigger="!text-md"
        classNameSelectionItem="!text-md"
        value={options[0].value}
      />
    </div>
  );
}

export default SortSelection;