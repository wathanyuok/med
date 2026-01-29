"use client"

import { CardCarousel } from "../ui/Carousel";
import { ArrowRight } from "@/app/assets/icons/homepageIcons";
import { packages } from "@/app/utils/mockData/packages";
import { useRouter } from "next/navigation";


function PackageSection() {
    const router = useRouter()

    const handleAllPackage = () => {
        router.push('/package')
    }

    const packagesData = packages.map((pkg) => {
            return {
                id: pkg.id,
                title: pkg.title,
                image_url: pkg.images[0]
            };
        });
    
    return (
        <div>
            <div className="flex-row md:flex justify-between items-start container mx-auto px-4">
                <div className="pb-8">
                    <h3 className="text-2xl md:text-3xl text-neutral-800 font-semibold text-start">
                        แพคเกจสุขภาพสำหรับคุณ
                    </h3>
                    <p className="text-lg md:text-xl pt-6  text-neutral-800 ">
                        ไม่ได้ดูแลแค่เวลาป่วย แต่ใส่ใจบริการอย่างครอบคลุม
                        เพื่อให้คุณมีสุขภาพแข็งแรงและใช้ชีวิตได้อย่างที่คุณต้องการ
                    </p>
                </div>
                <div className="cursor-pointer hover:scale-105 transition duration-300" onClick={handleAllPackage}>
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <p className="text-bright-blue font-semibold text-sm sm:text-base md:text-lg">
                            ดูแพคเกจทั้งหมด
                        </p>
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <div>
                <CardCarousel items={packagesData}/>
            </div>
        </div>
    );
}

export default PackageSection;
