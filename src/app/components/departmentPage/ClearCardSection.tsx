import React from "react";
import Image from "next/image";
import heroImg from "@/app/assets/images/department-page-hero-image.png";


const clearCardDatas = [
  {
    id: 1,
    title: "ดูดีในแบบคุณ พิสูจน์ได้ตามหลักวิทยาศาสตร์",
    detail:
      "เพราะร่างกายของแต่ละคนมีความเฉพาะตัว เราจึงใช้ข้อมูลพันธุกรรม (Genetic-based Personalization)...",
  },
  {
    id: 2,
    title: "วางแผนอย่างรอบด้าน ตั้งแต่เหตุการณ์การถึงการใช้ชีวิต",
    detail:
      "ออกแบบแผนดูแลความงามให้คุณทั้งระบบอย่างยั่งยืน ทั้งแผนพฤติกรรมสุขภาพ...",
  },
  {
    id: 3,
    title: "Sustainable Beauty – ดูดีและสุขภาพดีอย่างยั่งยืน",
    detail:
      "ดูแลคุณแบบองค์รวม ด้วยแนวทางที่มีศาสตร์ด้านผิวพรรณ เวชศาสตร์ชะลอวัย...",
  },
];

function ClearCardSection() {
  return (
    <div className="relative w-full">
      {/* 🔹 พื้นหลัง */}
      <div className="relative w-full h-[600px]">
        <Image
          src={heroImg}
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay Card */}
      <div className="absolute inset-0 flex items-center justify-end px-6 md:px-16">
        <div className="flex flex-col gap-6 max-w-lg w-full">
          {clearCardDatas.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white/70 shadow-lg backdrop-blur-sm"
            >
              <h3 className="text-lg md:text-xl font-semibold text-neutral-800">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-700 mt-2">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClearCardSection;
