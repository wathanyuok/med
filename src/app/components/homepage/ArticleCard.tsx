import { ArrowRight } from "@/app/assets/icons/serviceIcons";
import React from "react";
import Image from "next/image";
import ArticleImage from "@/app/assets/images/article.png";

interface ArticleCardProps {
    image: string;
    title: string;
    detail: string;
}

function ArticleCard({ image, title, detail }: ArticleCardProps) {
    return (
        <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer p-6 flex flex-col justify-between">
            <div className="space-y-4">
                <div className="w-full h-48 md:h-56 relative">
                    <Image
                        src={image || ArticleImage}
                        alt={title}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>

                {/* ข้อความ */}
                <div className="space-y-4">
                    <h4 className="text-lg md:text-xl font-semibold text-neutral-800">
                        {title}
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-gray-500">
                        {detail.length > 70 ? `${detail.slice(0, 70)}...` : detail}
                    </p>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between gap-4 mt-4">
                    <p className="text-bright-blue font-semibold text-md md:text-lg">
                        ดูรายละเอียดเพิ่มเติม
                    </p>
                    <ArrowRight />
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;
