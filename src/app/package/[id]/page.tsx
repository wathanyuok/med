"use client";

import React from "react";
import { use } from "react";
import { useRouter } from "next/navigation";
import ExapinkBtn from "@/app/components/ui/ExapinkBtn";
import ProductGallery from "@/app/components/ui/ProductGallery";
import PackageCard from "@/app/components/packagePage/PackageCard";
import { mockData } from "../utils/mockData";
import { Landmark } from "lucide-react";

interface PackagePageProps {
  params: Promise<{ id: string }>;
}

function PackageDetailPage({ params }: PackagePageProps) {
  const router = useRouter();
  const { id } = use(params);

  const handleChangePageId = (id: number) => {
    router.push(`/package/${id}`);
  };

  const packageData = mockData.find((pkg) => pkg.id === Number(id));

  if (!packageData) {
    return (
      <div className="py-20 container mx-auto px-4 text-center">
        ไม่พบแพคเกจนี้
      </div>
    );
  }

  return (
    <div className="py-40 container mx-auto px-4 md:px-12 lg:px-24">
      {/* Main Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Gallery */}
        <div className="w-full">
          <ProductGallery />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col gap-8 items-start">
          {/* Title */}
          <div>
            <p className="text-sm text-neutral-500">สุขภาพสตรี</p>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800">
              {packageData.title}
            </h3>
            <h4 className="text-base md:text-lg text-neutral-700">
              Golden Years Women Health Package
            </h4>
          </div>

          {/* Price */}
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <p className="text-xl md:text-2xl font-bold text-neutral-800">
                {packageData.price.toLocaleString()} บาท
              </p>
              <p className="line-through text-neutral-600/60">
                {packageData.old_price.toLocaleString()} บาท
              </p>
            </div>
            <span className="text-sm text-exa-pink bg-pale-lilac px-3 py-1 rounded-full">
              ลด {packageData.percentage_off}%
            </span>
          </div>

          {/* Button */}
          <div className="w-full">
            <ExapinkBtn label="ซื้อแพคเกจ" />
          </div>

          {/* Payment */}
          <div>
            <h4 className="text-sm md:text-md text-neutral-500 font-semibold mb-2">
              ช่องทางชำระเงินที่รองรับ
            </h4>
            <div className="flex gap-4 flex-wrap">
              <Landmark className="w-6 h-6" />
              <Landmark className="w-6 h-6" />
              <Landmark className="w-6 h-6" />
              <Landmark className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="my-12">
        <h3 className="text-lg md:text-xl font-semibold mb-4">รายละเอียด</h3>
        <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
          ช่วงเวลาแห่งชีวิต...ที่ควรเปล่งประกายอย่างสง่างาม …
          (รายละเอียดแพคเกจ)
        </p>
      </div>

      {/* Suggestion */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          แพคเกจอื่นที่คุณอาจสนใจ
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockData
            .filter((pkg) => pkg.id !== Number(id))
            .slice(0, 3)
            .map((pkg) => (
              <PackageCard
                key={pkg.id}
                {...pkg}
                onDetailClick={handleChangePageId}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default PackageDetailPage;
