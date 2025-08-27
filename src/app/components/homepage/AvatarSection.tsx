import React from "react";
import AvatarCard from "./AvatarCard";
import Image from "next/image";
import doctor1 from "@/app/assets/images/doctor1.png";

function AvatarSection() {
    return (
        <div className="py-8">
            <div className="grid grid-cols-2 gap-8 items-center">
                {/* วงกลม gradient + avatar */}
                <div className="col-span-1 flex justify-center">
                    {/* outer: gradient border */}
                    <div className="p-0.5 min-h-150 min-w-150 rounded-full bg-gradient-to-r from-[#FF6FE2] to-[#FFFBFC]">
                        {/* inner: white background */}
                        <div className="h-full w-full rounded-full overflow-hidden bg-neutral-100 p-12">
                            {/* buffer space ด้วย p-2 */}
                            <div className="h-full w-full rounded-full overflow-hidden">
                                <Image
                                    src={doctor1}
                                    alt="Doctor"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ข้อความ + AvatarCard */}
                <div className="col-span-1 space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl text-neutral-800 font-semibold">
                            ให้บริการโดยแพทย์ผู้เชี่ยวชาญระดับประเทศ
                        </h3>
                        <h2 className="text-xl md:text-2xl text-neutral-800">
                            นำทีมโดย ศ.นพ. ธีรวัฒน์ กิจรุ่งเรืองไพศาล
                            <br />
                            แพทย์ผู้เชี่ยวชาญด้านอายุรศาสตร์
                        </h2>
                    </div>

                    <AvatarCard />
                </div>
            </div>
        </div>
    );
}

export default AvatarSection;
