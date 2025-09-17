"use client";

import React from "react";
import ExapinkBtn from "../components/ui/ExapinkBtn";
import { useRouter } from "next/navigation";
import { packages } from "../utils/mockData/packages";
import { CardCarousel } from "../components/ui/Carousel";
import ClearCardSection from "../components/departmentPage/ClearCardSection";
import ArticleSection from "../components/homepage/ArticleSection";
import TechnologyCard from "../components/departmentPage/TechnologyCard";
import { technologyCards } from "../utils/mockData/technologies";
import TriSection from "../components/departmentPage/TriSection";

function DepartmentPage() {
    const router = useRouter();

    const packagesData = packages.map((pkg) => {
        return {
            id: pkg.id,
            title: pkg.title,
            image_url: pkg.images[0],
        };
    });

    return (
        <div className="py-40 ">
            <div className="container mx-auto px-4 space-y-6 mb-20">
                <TriSection
                    images={[
                        "https://media.istockphoto.com/id/1054573988/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5%E0%B8%94%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%AD%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=swAVkPDUv-8tLm1hVitLQoYp6zJ4bnt2N3RcEl7CZ3Y=", // รูปใหญ่ซ้าย
                        "https://media.istockphoto.com/id/1313086914/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5-ppe-%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%81%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%88%E0%B8%A1%E0%B8%B9%E0%B8%81%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A-coronavirus-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%A2.jpg?s=2048x2048&w=is&k=20&c=jncY4xHUFUBTpBntApXHxzHwD37jwgcBeetkJWWJDMY=", // รูปขวาบน
                        "https://media.istockphoto.com/id/1288717194/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B8%A7%E0%B8%B1%E0%B8%84%E0%B8%8B%E0%B8%B5%E0%B8%99-coronavirus-%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%98%E0%B8%AD-%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E-covid-19.jpg?s=2048x2048&w=is&k=20&c=fdY5Sbbs9LiRkjVhasICVEBhpoHfQ38ms18B-mjLRTA=", // รูปขวาล่าง
                    ]}
                />
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 py-8">
                    {/* Title & Subtitle */}
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-800">
                            Skin & Wellness
                        </h1>
                        <h2 className="text-base sm:text-lg lg:text-xl text-neutral-800 mt-2">
                            ออกแบบความงามอย่างยั่งยืนจากความเข้าใจในตัวคุณ
                            ถึงระดับพันธุกรรม <br />
                            Personalized sustainable beauty, rooted in your
                            unique genetics.
                        </h2>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center sm:justify-end">
                        <ExapinkBtn
                            label="ดูแพคเกจ"
                            classBtn="!w-[160px] sm:!w-[200px] py-2"
                            onClick={() => router.push("/package")}
                        />
                    </div>
                </div>

                <div >
                    <CardCarousel items={packagesData} doNotShowTitle={true} />
                </div>
            </div>

            <div>
                <ClearCardSection />
            </div>

            <div className="container mx-auto px-4 pt-12 space-y-12">
                <div>
                    <div className="text-center mb-6 space-y-2">
                        <h3 className="text-neutral-800 text-2xl sm:text-3xl">
                            เทคโนโลยีล้ำหน้าเพื่อการดูแลผิวและชะลอวัยอย่างตรงจุด
                        </h3>
                        <h2 className="text-neutral-800/80 text-lg sm:text-2xl">
                            Advanced Skin & Wellness Solutions
                        </h2>
                    </div>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {technologyCards &&
                            technologyCards.map((item) => (
                                <TechnologyCard
                                    key={item.id}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    imageUrl={item.imageUrl}
                                    onClick={() => console.log("go to detail")}
                                />
                            ))}
                    </div>
                </div>

                <ArticleSection />
            </div>
        </div>
    );
}

export default DepartmentPage;
