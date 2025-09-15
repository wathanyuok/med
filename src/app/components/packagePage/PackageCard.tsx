import React from "react";
import ExapinkBtn from "../ui/ExapinkBtn";
import { ArrowRight } from "lucide-react";

interface PackageCardInterface {
  id: number;
  title: string;
  detail: string;
  price: number;
  old_price: number;
  percentage_off: number;
  onDetailClick?: (id: number) => void;
}

function PackageCard({
  id,
  title,
  detail,
  price,
  old_price,
  percentage_off,
  onDetailClick,
}: PackageCardInterface) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-6 shadow-sm transition h-full">
      {/* Placeholder รูป */}
      <div className="h-100 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
        img
      </div>

      {/* เนื้อหา */}
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-neutral-800">{title}</h4>
          <p className="text-sm text-neutral-600">{detail}</p>
        </div>

        {/* ราคา */}
        <div className="flex items-start justify-start gap-8">
          <div>
            <p className="text-xl font-bold text-neutral-800">
              {price.toLocaleString()} บาท
            </p>
            <p className="line-through text-neutral-600/70">
              {old_price.toLocaleString()} บาท
            </p>
          </div>
          <div>
            <span className="text-sm text-exa-pink bg-pale-lilac px-4 rounded-full">
              ลด {percentage_off}%
            </span>
          </div>
        </div>

        {/* ปุ่ม */}
        <div className="flex justify-between items-start gap-4">
          <ExapinkBtn label="ซื้อแพคเกจ" />

          <button
            className="flex gap-2 py-2 cursor-pointer hover:scale-105 transition duration-200 text-neutral-800"
            onClick={() => onDetailClick?.(id)}
          >
            ดูรายละเอียด <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
