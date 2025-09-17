import { ArrowRight } from "@/app/assets/icons/homepageIcons";
import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import { doctors } from "@/app/utils/mockData/doctors"; // 👈 import data

interface AvatarCardProps {
    onDetail?: () => void;
}

function AvatarCard({ onDetail }: AvatarCardProps) {
    return (
        <div
            onClick={onDetail}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer p-6 flex flex-col justify-between"
        >
            <div className="flex flex-col items-start gap-4">
                {/* AvatarGroup */}
                <AvatarGroup max={5}>
                    {doctors.map((doc) => (
                        <Avatar
                            key={doc.id}
                            src={doc.imageUrl}
                            alt={doc.name}
                        />
                    ))}
                </AvatarGroup>

                {/* Description */}
                <p className="mt-2 text-sm md:text-base text-gray-500">
                    และทีมผู้เชี่ยวชาญทางการแพทย์ที่มีประสบการณ์ในหลากหลายสาขา
                    เพื่อการออกแบบแผนดูแลสุขภาพ ที่ดีที่สุดสำหรับคุณ
                </p>
            </div>

            {/* Footer */}
            <div
                className="flex items-center justify-between gap-4 mt-4"
                onClick={onDetail}
            >
                <p className="text-bright-blue font-semibold text-md md:text-lg">
                    ดูรายละเอียดเพิ่มเติม
                </p>
                <ArrowRight />
            </div>
        </div>
    );
}

export default AvatarCard;