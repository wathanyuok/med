import React from "react";
import ExapinkBtn from "../ui/ExapinkBtn";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface PackageCardInterface {
  id: number;
  title: string;
  sub_title: string;
  image_url?: string;
  price: number;
  old_price: number;
  percentage_off: number;
  onDetailClick?: (id: number) => void;
  onBuyClick?: (id: number) => void;
}

function PackageCard({
  id,
  title,
  sub_title,
  image_url,
  price,
  old_price,
  percentage_off,
  onDetailClick,
  onBuyClick,
}: PackageCardInterface) {
  return (
    <div className="flex flex-col rounded-xl shadow-sm transition h-full bg-white">
      {/* รูปภาพ - ลดขนาดเป็น aspect-[4/3] */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-t-xl overflow-hidden">
        {image_url ? (
          <Image
            src={image_url}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* เนื้อหา - ลด padding */}
      <div className="flex flex-col flex-1 p-4 space-y-3">
        <div className="flex-1">
          <h4 className="text-base font-semibold text-neutral-800 line-clamp-2 mb-1">
            {title}
          </h4>
          <p className="text-sm text-neutral-600 line-clamp-1">
            {sub_title}
          </p>
        </div>

        {/* ราคา - กระชับขึ้น */}
        <div className="flex items-center justify-between gap-2 py-2 border-t border-gray-100">
          <div>
            <p className="text-lg font-bold text-neutral-800">
              {price.toLocaleString()} <span className="text-sm font-normal">บาท</span>
            </p>
            <p className="text-xs line-through text-neutral-400">
              {old_price.toLocaleString()} บาท
            </p>
          </div>
          <span className="text-xs font-semibold text-exa-pink bg-pale-lilac px-2 py-0.5 rounded-full whitespace-nowrap">
            ลด {percentage_off}%
          </span>
        </div>

        {/* ปุ่ม - ปรับ layout ให้กระชับ */}
        <div className="flex items-center gap-2 pt-1">
          <div className="flex-1">
            <ExapinkBtn
              label="ซื้อแพคเกจ"
              onClick={() => onBuyClick?.(id)}
            />
          </div>
          <button
            className="flex items-center gap-1 px-2 py-1.5 text-sm cursor-pointer hover:text-exa-pink transition duration-200 text-neutral-700 font-medium whitespace-nowrap"
            onClick={() => onDetailClick?.(id)}
          >
            รายละเอียด <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;