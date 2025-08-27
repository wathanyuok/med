import { ArrowRight } from "@/app/assets/icons/serviceIcons";
import React from "react";
import ArticleCard from "./ArticleCard";

function ArticleSection() {
    const articles = [
        {
            image: "",
            title: "เข้าใจร่างกายผ่านข้อมูล: พลังของ Personal Health Data",
            detail: "แต่ความเข้าใจที่แท้จริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่...",
        },
        {
            image: "",
            title: "เข้าใจร่างกายผ่านข้อมูล: พลังของ Personal Health Data",
            detail: "แต่ความเข้าใจที่แท้จริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่ริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่ริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่ริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่...",
        },
        {
            image: "",
            title: "เข้าใจร่างกายผ่านข้อมูล: พลังของ Personal Health Data",
            detail: "แต่ความเข้าใจที่แท้จริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่...",
        },
        {
            image: "",
            title: "เข้าใจร่างกายผ่านข้อมูล: พลังของ Personal Health Data",
            detail: "แต่ความเข้าใจที่แท้จริง ไม่ใช่แค่รู้น้ำหนักหรือดูว่าออกกำลังกายบ่อยแค่ไหน แต่...",
        },
        
    ];

    return (
        <div>
            <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl text-neutral-800 font-semibold">
                    บทความที่น่าสนใจ
                </h3>
                <div className="cursor-pointer hover:scale-105 transition duration-300">
                    <div className="flex items-center gap-4">
                        <p className="text-bright-blue font-semibold text-md md:text-lg">
                            ดูบทความทั้งหมด
                        </p>
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
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
