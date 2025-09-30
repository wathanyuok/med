"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CardCarousel } from "@/app/components/ui/Carousel";
import PackageCard from "@/app/components/packagePage/PackageCard";
import Selection from "@/app/components/ui/Selection";
import ChipSelector from "@/app/components/ui/ChipSelector";
import SortSelection from "@/app/components/ui/SortSelection";

import { packages } from "../utils/mockData/packages";


const options = [
  { id: 9, value: "แผนกทั้งหมด" },
  { id: 1, value: "ตรวจสุขภาพครบวงจร" },
  { id: 2, value: "พัฒนาการเด็กและวัยรุ่น" },
  { id: 3, value: "สุขภาพสตรี" },
  { id: 4, value: "เวชศาสตร์กีฬาและการฟื้นฟู" },
  { id: 5, value: "ศูนย์กระดูกและข้อ" },
  { id: 6, value: "ศูนย์ดูแลความงาม" },
  { id: 7, value: "แผนกจักษุ" },
  { id: 8, value: "ทันตกรรมครบวงจร" },
];

function PackageListPage() {
  const router = useRouter();

  const [selectedId, setSelectedId] = useState<number>(9);
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const toNumber = (val: any): number => {
    if (typeof val === "number") return val;

    if (typeof val === "string") {
      const num = Number(val);
      if (!Number.isNaN(num)) return num; 
      const found = options.find((o) => o.value === val); 
      return found ? found.id : 9;
    }

    if (val && typeof val === "object") {
      if (typeof val.id === "number") return val.id;
      if (typeof val.id === "string") {
        const num = Number(val.id);
        if (!Number.isNaN(num)) return num;
      }
      if ("value" in val) {
        const found = options.find((o) => o.value === (val as any).value);
        if (found) return found.id;
      }
    }
    return 9;
  };

  const handleCategoryChange = (v: any) => setSelectedId(toNumber(v));

  const filteredPackages = useMemo(() => {
    let data =
      selectedId === 9
        ? [...packages]
        : packages.filter((p) => Number(p.categoryId) === Number(selectedId));

    data.sort((a, b) => {
      const priceA = Number(a.price ?? 0);
      const priceB = Number(b.price ?? 0);
      return sortOrder === "desc" ? priceB - priceA : priceA - priceB;
    });

    return data;
  }, [selectedId, sortOrder]);

  const handleDetailClick = (id: number) => router.push(`/package/${id}`);
  const handleBuyPackage = (id: number) => router.push(`/payment/${id}`);

  // 👉 label ปัจจุบันสำหรับ mobile Selection
  const currentCategoryLabel =
    options.find((o) => o.id === selectedId)?.value ?? "แผนกทั้งหมด";

  return (
    <div className="py-40">
      <CardCarousel
        items={filteredPackages.map((pkg) => ({
          id: pkg.id,
          title: pkg.title,
          image_url: pkg.images[0],
        }))}
      />

      <div className="container mx-auto px-4">
        <h3 className="text-neutral-800 text-3xl font-semibold mb-6">
          แพคเกจสุขภาพ
        </h3>

        {/* Filter */}
        <div className="my-6">
          {/* Mobile = Dropdown */}
          <div className="block md:hidden">
            <Selection
              label=""
              placeholder="แผนกทั้งหมด"
              options={options}
              value={currentCategoryLabel}
              onChange={handleCategoryChange}
              classNameSelectTrigger="!text-lg"
            />
          </div>

          {/* Tablet+ = Chips */}
          <div className="hidden md:block">
            <ChipSelector
              options={options}
              value={selectedId}
              onChange={handleCategoryChange}
              defaultSelectedId={9}
            />
          </div>
        </div>

        {/* Sort */}
        <div className="mb-8 flex items-center gap-4">
          <p className="text-md md:text-lg lg:text-xl font-semibold text-bright-black">
            เรียงตาม
          </p>
          <div className="min-w-[250px]">
            <SortSelection
              value={sortOrder}
              onChange={(val) => setSortOrder(val)}
              labels={{
                asc: "เรียงจากเก่า - ใหม่",
                desc: "เรียงจากใหม่ - เก่า",
              }}
            />
          </div>
        </div>

        {/* Grid Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPackages.length === 0 ? (
            <div className="col-span-full py-10 text-center text-gray-500">
              ไม่พบแพคเกจในหมวดนี้
            </div>
          ) : (
            filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                image_url={pkg.images[0]}
                {...pkg}
                onDetailClick={() => handleDetailClick(pkg.id)}
                onBuyClick={() => handleBuyPackage(pkg.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PackageListPage;
