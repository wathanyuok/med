"use client";

import React from "react";
import ExaBlueBtn from "../components/ui/ExaBlueBtn";
import Image from "next/image";
import FeedbackImage from "@/app/assets/images/feedback/feedback.png"

function FeedBackPage() {
  const email = "feedback@exa-med.co";
  const subject = "ข้อเสนอแนะจากผู้ใช้";
  const body = "กรุณาพิมพ์ข้อเสนอแนะของคุณที่นี่...";

  const handleSendEmail = () => {
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");
  };

  return (
    <div className="py-40 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="border rounded-2xl flex items-center justify-center bg-neutral-300 min-h-[240px] md:min-h-[472px] text-neutral-800 relative overflow-hidden">
          <Image
            src={FeedbackImage}
            alt="feedback image"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-4">
          {/* Heading */}
          <div>
            <h1 className="text-neutral-800 font-semibold text-2xl md:text-3xl mb-2">
              ความเห็นของท่าน คือพลังขับเคลื่อนของเรา
            </h1>
            <h2 className="text-neutral-800 text-lg md:text-xl">
              เสียงตอบรับจากท่าน คือส่วนสำคัญที่จะช่วยให้เราพัฒนาและปรับปรุงอย่างไม่หยุดยั้ง
            </h2>
          </div>

          {/* List */}
          <div className="text-neutral-800 text-lg md:text-xl space-y-2">
            <h2>ร่วมเป็นส่วนหนึ่งของการพัฒนาคุณภาพ</h2>
            <h2>
              ไม่ว่าจะเป็นคำชื่นชม ข้อเสนอแนะ หรือข้อร้องเรียนเกี่ยวกับบริการของเราในทุกด้าน:
            </h2>

            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              <li>คุณภาพการรักษาพยาบาล: การดูแลของแพทย์และพยาบาล</li>
              <li>การบริการโดยรวม: เจ้าหน้าที่ต้อนรับ, แผนกต่างๆ, ความรวดเร็วในการบริการ</li>
              <li>สิ่งอำนวยความสะดวก: ความสะอาด, บรรยากาศ, และความสะดวกสบายของโรงพยาบาล</li>
            </ul>
          </div>

          {/* Closing text */}
          <h2 className="text-neutral-800 text-lg md:text-xl">
            เรายินดีรับฟังทุกความคิดเห็นด้วยความเคารพและจริงใจ ข้อมูลของท่านจะได้รับการดูแลและนำไปพิจารณาเพื่อปรับปรุงกระบวนการและยกระดับมาตรฐานการบริการของเราต่อไป
          </h2>

          {/* Button */}
          <div>
            <ExaBlueBtn
              label="ส่งข้อเสนอแนะ"
              classBtn="w-full md:!w-1/2"
              onClick={handleSendEmail}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBackPage;
