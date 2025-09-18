"use client";

import React from "react";
import { use } from "react";
import { useRouter } from "next/navigation";
import ExapinkBtn from "@/app/components/ui/ExapinkBtn";
import ProductGallery, {
    GalleryImage,
} from "@/app/components/ui/ProductGallery";
import PackageCard from "@/app/components/packagePage/PackageCard";
import {
    Landmark,
    HandCoins,
    BanknoteArrowDown,
    CreditCard,
} from "lucide-react";

import { packages } from "@/app/utils/mockData/packages";

interface PackagePageProps {
    params: Promise<{ id: string }>;
}

function PackageDetailPage({ params }: PackagePageProps) {
    const router = useRouter();
    const { id } = use(params);

    const handleChangePageId = (id: number) => {
        router.push(`/package/${id}`);
    };

    const handleBuyPackage = (id: number) => {
        router.push(`/payment/${id}`);
    };

    const packageData = packages.find((pkg) => pkg.id === Number(id));

    const images: GalleryImage[] = Array.isArray(packageData?.images)
        ? packageData.images.map((src, index) => ({
              id: index,
              src,
              label: `${packageData.title} - รูปที่ ${index + 1}`,
          }))
        : [];

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
                    <ProductGallery images={images} />
                </div>

                {/* Right: Details */}
                <div className="flex flex-col gap-8 items-start">
                    {/* Title */}
                    <div>
                        <p className="text-sm text-neutral-500">
                            {packageData.category}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
                            {packageData.title}
                        </h3>
                        <h4 className="text-md md:text-xl text-neutral-700">
                            {packageData.sub_title}
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
                        <ExapinkBtn
                            label="ซื้อแพคเกจ"
                            onClick={() => handleBuyPackage(packageData.id)}
                            classBtn="!py-3"
                        />
                    </div>

                    {/* Payment */}
                    <div>
                        <h4 className="text-lg md:text-md text-neutral-500 font-semibold mb-2">
                            ช่องทางชำระเงินที่รองรับ
                        </h4>
                        <div className="flex gap-4 flex-wrap">
                            <Landmark className="w-6 h-6" />
                            <HandCoins className="w-6 h-6" />
                            <BanknoteArrowDown className="w-6 h-6" />
                            <CreditCard className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="my-12">
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                    รายละเอียด
                </h3>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                    {packageData.detail}
                </p>
            </div>
            <div className="my-12">
                <h4 className="text-lg md:text-xl font-semibold mb-4">
                    เหมาะสำหรับ
                </h4>
                <ul className="list-disc pl-5 text-neutral-700 leading-relaxed text-sm md:text-base">
                    {packageData.suitable?.map((item, idx) => (
                        <li key={idx + 1}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="my-12">
                <h4 className="text-lg md:text-xl font-semibold mb-4">
                    รายการตรวจสุขภาพ
                </h4>
                <div className=" mb-4">
                    {packageData.health_check_list?.map((list, idx) => (
                        <div key={idx + 1} className="mb-4">
                            <h3 className="text-lg md:text-xl font-semibold">
                                {list.title}
                            </h3>
                            <ul className="list-disc pl-5 text-neutral-700 leading-relaxed text-sm md:text-base">
                                {list.list?.map((item, idx) => (
                                    <li key={idx + 1}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-12">
                <h4 className="text-lg md:text-xl font-semibold mb-4">
                    สิ่งที่คุณจะได้รับ...เหนือกว่าแค่ผลตรวจ
                </h4>
                <ul className="list-disc pl-5 text-neutral-700 leading-relaxed text-sm md:text-base">
                    {packageData.result?.map((item, idx) => (
                        <li key={idx + 1}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="my-12">
                <h3 className="text-lg md:text-xl font-semibold">
                    ระยะเวลาในการตรวจ
                </h3>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                    {packageData.period}
                </p>
            </div>

            <div className="my-12">
                <h4 className="text-lg md:text-xl font-semibold mb-4">
                    ข้อแนะนำก่อนเข้ารับบริการ
                </h4>
                <ul className="list-disc pl-5 text-neutral-700 leading-relaxed text-sm md:text-base">
                    {packageData.recommendation?.map((item, idx) => (
                        <li key={idx + 1}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="my-12">
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                    {packageData.summary}
                </p>
            </div>

            {/* Suggestion */}
            <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    แพคเกจอื่นที่คุณอาจสนใจ
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {packages
                        .filter((pkg) => pkg.id !== Number(id))
                        .slice(0, 3)
                        .map((pkg) => (
                            <PackageCard
                                key={pkg.id}
                                image_url={pkg.images[0]}
                                {...pkg}
                                onDetailClick={handleChangePageId}
                                onBuyClick={handleBuyPackage}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default PackageDetailPage;
