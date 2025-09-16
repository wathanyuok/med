"use client";

import { ArrowRight } from "@/app/assets/icons/homepageIcons";
import React from "react";
import Image from "next/image";
import ArticleImage from "@/app/assets/images/article.png";

interface ArticleCardProps {
    id: number;
    image: string;
    title: string;
    detail: string;
    onDetail?: () => void;
}

function ArticleCard({ image, title, detail, onDetail }: ArticleCardProps) {
    return (
        <div
            className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col justify-between"
            onClick={onDetail}
        >
            <div className="space-y-4">
                <div className="w-full h-48 md:h-56 relative">
                    <Image
                        src={image || ArticleImage}
                        alt={title}
                        fill
                        className="object-cover rounded-t-2xl"
                    />
                </div>

                <div className="space-y-4 py-2 px-6">
                    <h4 className="text-lg md:text-xl font-semibold text-neutral-800">
                        {title}
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-gray-500">
                        {detail.length > 70
                            ? `${detail.slice(0, 70)}...`
                            : detail}
                    </p>
                </div>
            </div>

            {/* ปุ่มดูรายละเอียด */}
            <div
                className="flex items-center justify-between gap-4 mt-4 m-6"
                onClick={(e) => {
                    e.stopPropagation();
                    onDetail?.();
                }}
            >
                <p className="text-bright-blue font-semibold text-md md:text-lg">
                    ดูรายละเอียดเพิ่มเติม
                </p>
                <ArrowRight />
            </div>
        </div>
    );
}

export default ArticleCard;
