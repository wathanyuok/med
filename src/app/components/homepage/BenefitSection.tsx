import { CompleteCareApproach } from "@/app/assets/icons/homepageIcons";
import Image from "next/image";
import React from "react";
import skeleton from "@/app/assets/images/skeleton.png";

function BenefitSection() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left side: benefits */}
                <div className="relative">
                    {/* skeleton background เมื่อจอเล็ก */}
                    <div className="absolute inset-0 -z-10 md:hidden">
                        <Image
                            src={skeleton}
                            alt="skeleton background"
                            fill
                            className="object-cover object-top opacity-40"
                            priority
                        />
                    </div>

                    <div className="relative space-y-4 py-8">
                        <IconWithTitleDetail />
                        <IconWithTitleDetail />
                        <IconWithTitleDetail />
                        <IconWithTitleDetail />
                    </div>
                </div>

                {/* Right side: image สำหรับ desktop */}
                <div className="relative w-full h-[625px] rounded-2xl overflow-hidden hidden md:block">
                    <Image
                        src={skeleton}
                        alt="skeleton"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

const IconWithTitleDetail = () => (
    <div
        className="flex items-start sm:items-center gap-4 rounded-2xl
               bg-gradient-to-r from-white/30 via-white/20 to-white/10 backdrop-blur-md
               px-4 py-6 shadow transition hover:shadow-lg"
    >
        <div className="flex-shrink-0">
            <CompleteCareApproach />
        </div>
        <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-neutral-800">
                Complete Care Approach
            </h4>
            <p className="mt-1 text-sm sm:text-lg text-neutral-800">
                ครบทั้งการวินิจฉัย รักษา ป้องกัน และฟื้นฟู ทุกมิติสุขภาพ
            </p>
        </div>
    </div>
);

export default BenefitSection;
