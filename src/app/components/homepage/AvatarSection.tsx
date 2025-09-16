import React from "react";
import AvatarCard from "./AvatarCard";
import Image from "next/image";
import doctor1 from "@/app/assets/images/doctor1.png";
import { useRouter } from "next/navigation";

function AvatarSection() {
    const router = useRouter()

    const handleGoToAboutUsPage = () => {
        router.push('/aboutUs')
    }
    return (
        <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* วงกลม gradient + avatar (responsive) */}
                <div className="relative flex justify-center">
                    {/* วงกลม gradient + รูป */}
                    <div className="p-[3px] rounded-full bg-gradient-to-r from-[#FF6FE2] to-[#FFFBFC]">
                        <div
                            className="
                              h-100 w-100
                              lg:h-150 lg:w-150
                              rounded-full overflow-hidden bg-neutral-100
                              p-3 sm:p-4 md:p-6 lg:p-8"
                        >
                            <Image
                                src={doctor1}
                                alt="Doctor"
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Badge (ซ้ายบน) */}
                    <div
                        className="
                            absolute
                            top-0 left-0
                            sm:-top-4 sm:-left-3
                            md:-top-5 md:-left-4
                            lg:-top-6 lg:-left-5
                            z-20
                            rounded-md bg-white/20 backdrop-blur-xl shadow
                            px-3 py-2
                            sm:px-4 sm:py-3
                            md:px-6 md:py-4
                            lg:px-8 lg:py-5
                            text-center md:text-left
                            max-w-[80%] sm:max-w-none"
                    >
                        <div className="text-base sm:text-lg md:text-xl">
                            ประสบการณ์ด้านการ
                            <br />
                            วินิจฉัยโรคร้ายแรง
                        </div>
                        <div className="text-exa-pink font-semibold text-2xl sm:text-3xl md:text-4xl">
                            25 ปี
                        </div>
                    </div>
                </div>

                {/* ข้อความ + การ์ด */}
                <div className="space-y-6">
                    <div className="space-y-3 md:space-y-4">
                        <h3 className="text-xl sm:text-2xl md:text-3xl text-neutral-800 font-semibold">
                            ให้บริการโดยแพทย์ผู้เชี่ยวชาญระดับประเทศ
                        </h3>
                        <h2 className="text-lg sm:text-xl md:text-2xl text-neutral-800 leading-snug">
                            นำทีมโดย ศ.นพ. ธีรวัฒน์ กิจรุ่งเรืองไพศาล
                            <br />
                            แพทย์ผู้เชี่ยวชาญด้านอายุรศาสตร์
                        </h2>
                    </div>

                    <AvatarCard onDetail={handleGoToAboutUsPage}/>
                </div>
            </div>
        </div>
    );
}

export default AvatarSection;