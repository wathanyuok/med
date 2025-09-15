import React from "react";
import { CardCarousel } from "./Carousel";
import { ArrowRight } from "@/app/assets/icons/homepageIcons";


function PackageSection() {
    return (
        <div>
            <div className="flex justify-between items-start">
                <div className="pb-8">
                    <h3 className="text-2xl md:text-3xl text-neutral-800 font-semibold text-start">
                        แพคเกจสุขภาพสำหรับคุณ
                    </h3>
                    <p className="text-lg md:text-xl  text-neutral-800 ">
                        ไม่ได้ดูแลแค่เวลาป่วย แต่ใส่ใจบริการอย่างครอบคลุม
                        เพื่อให้คุณมีสุขภาพแข็งแรงและใช้ชีวิตได้อย่างที่คุณต้องการ
                    </p>
                </div>
                <div className="cursor-pointer hover:scale-105 transition duration-300">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <p className="text-bright-blue font-semibold text-sm sm:text-base md:text-lg">
                            ดูแพคเกจทั้งหมด
                        </p>
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <div>
                <CardCarousel />
            </div>
        </div>
    );
}

export default PackageSection;
