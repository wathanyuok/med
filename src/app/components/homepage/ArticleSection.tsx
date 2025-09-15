import { ArrowRight } from "@/app/assets/icons/homepageIcons";
import React from "react";
import ArticleCard from "./ArticleCard";

function ArticleSection() {
  const articles = [
    {
      image: "",
      title: "เข้าใจร่างกายผ่านข้อมูล: พลังของ Personal Health Data",
      detail:
        "แต่ความเข้าใจที่แท้จริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่...",
    },
    {
      image: "",
      title: "เข้าใจร่างกายผ่านข้อมูล: พลังของ Personal Health Data",
      detail:
        "แต่ความเข้าใจที่แท้จริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่ริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่...",
    },
    {
      image: "",
      title: "เข้าใจร่างกายผ่านข้อมูล: พลังของ Personal Health Data",
      detail:
        "แต่ความเข้าใจที่แท้จริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่...",
    },
    {
      image: "",
      title: "เข้าใจร่างกายผ่านข้อมูล: พลังของ Personal Health Data",
      detail:
        "แต่ความเข้าใจที่แท้จริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่...",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-800 font-semibold leading-snug">
          บทความที่น่าสนใจ
        </h3>
        <div className="cursor-pointer hover:scale-105 transition duration-300">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <p className="text-bright-blue font-semibold text-sm sm:text-base md:text-lg">
              ดูบทความทั้งหมด
            </p>
            <ArrowRight />
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div
        className="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-4 sm:gap-6 lg:gap-8
          mt-6 sm:mt-6 lg:mt-8"
      >
        {articles.map((article, idx) => (
          <ArticleCard
            key={idx}
            image={article.image}
            title={article.title}
            detail={article.detail}
          />
        ))}
      </div>
    </div>
  );
}

export default ArticleSection;