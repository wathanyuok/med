"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CardCarousel } from "@/app/components/ui/Carousel";
import PackageCard from "@/app/components/packagePage/PackageCard";
import Selection from "@/app/components/ui/Selection";
import ChipSelector from "@/app/components/ui/ChipSelector";
import { packages } from "../utils/mockData/packages";
import SortSelection from "../components/ui/SortSelection";

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

    const handleDetailClick = (id: number) => {
        router.push(`/package/${id}`);
    };

    const handleBuyPackage = (id: number) => {
        router.push(`/payment/${id}`);
    };

    const packagesData = packages.map((pkg) => {
        return {
            id: pkg.id,
            title: pkg.title,
            image_url: pkg.images[0]
        };
    });

    return (
        <div className="py-40">
            <CardCarousel items={packagesData} />

            <div className=" container mx-auto px-4">
            {/* Carousel */}
            

            {/* Title */}
            <h3 className="text-neutral-800 text-3xl font-semibold mb-6">
                แพคเกจสุขภาพ
            </h3>

            {/* Responsive Filter */}
            <div className="my-6">
                {/* Mobile = Dropdown */}
                <div className="block md:hidden">
                    <Selection
                        label=""
                        placeholder="แผนกทั้งหมด"
                        options={options}
                        classNameSelectTrigger="!text-lg"
                    />
                </div>

                {/* Tablet+ = Chips */}
                <div className="hidden md:block">
                    <ChipSelector options={options} defaultSelectedId={9} />
                </div>
            </div>

            <div className=" mb-8 flex items-center gap-4">
                <p className="text-md md:text-lg lg:text-xl font-semibold text-bright-blue">
                    เรียงตาม
                </p>
                <div className="min-w-[250px]">
                    <SortSelection />
                </div>
            </div>

            {/* Grid Packages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {packages.map((pkg) => (
                    <PackageCard
                        key={pkg.id}
                        image_url={pkg.images[0]}
                        {...pkg}
                        onDetailClick={() => handleDetailClick(pkg.id)}
                        onBuyClick={() => handleBuyPackage(pkg.id)}
                    />
                ))}
            </div>
        </div>
        </div>
        
    );
}

export default PackageListPage;
