import React from "react";
import AvatarCard from "./AvatarCard";
import Image from "next/image";
import doctor1 from "@/app/assets/images/doctor1.png";

function AvatarSection() {
  return (
    <div className="py-8">
      {/* 1 คอลัมน์บนมือถือ, 2 คอลัมน์ตั้งแต่ md ขึ้นไป */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* วงกลม gradient + avatar (รูปขึ้นก่อนเสมอ) */}
        <div className="flex justify-center">
          <div className="p-[3px] rounded-full bg-gradient-to-r from-[#FF6FE2] to-[#FFFBFC]">
            <div
              className="
                h-100 w-100
                lg:h-150 lg:w-150
                rounded-full overflow-hidden bg-neutral-100 
                p-4 sm:p-6 md:p-8 lg:p-12"
            >
              <div className="h-full w-full rounded-full overflow-hidden">
                <Image
                  src={doctor1}
                  alt="Doctor"
                  className="h-full w-full object-cover"
                  priority
                  sizes="(min-width: 1024px) 18rem, (min-width: 768px) 14rem, 10rem"
                />
              </div>
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

          <AvatarCard />
        </div>
      </div>
    </div>
  );
}

export default AvatarSection;
