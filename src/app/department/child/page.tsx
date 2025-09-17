"use client";

import React from "react";
import ExapinkBtn from "../../components/ui/ExapinkBtn";
import { useRouter } from "next/navigation";
import ArticleSection from "../../components/homepage/ArticleSection";
import TechnologyCard from "../../components/departmentPage/TechnologyCard";
import { technologyCards } from "../../utils/mockData/technologies";
import TriSection from "../../components/departmentPage/TriSection";
import ClearCArdHero from "@/app/assets/images/department_child/department_child_hero_clear_card.png"
import Item1 from "@/app/assets/images/department_child/department_child_item_1.png"
import Item2 from "@/app/assets/images/department_child/department_child_item_2.png"
import Item3 from "@/app/assets/images/department_child/department_child_item_3.png"
import Item4 from "@/app/assets/images/department_child/department_child_item_4.png"
import Hero1 from "@/app/assets/images/department_child/department_child_hero_1.png"
import Hero2 from "@/app/assets/images/department_child/department_child_hero_2.png"
import Hero3 from "@/app/assets/images/department_child/department_child_hero_3.png"
import Image from "next/image";
import ClearCardSection from "@/app/components/departmentPage/ClearCardSection";
import { departmentChildClearCardData } from "@/app/utils/mockData/department";

function DepartmentPage() {
    const router = useRouter();

    return (
        <div className="py-40 ">
            <div className="container mx-auto px-4 space-y-6 mb-20">
                <TriSection
                    images={[
                        Hero1,Hero2, Hero3
                    ]}
                />
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 py-8">
                    {/* Title & Subtitle */}
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-800">
                            Next Gen Health
                        </h1>
                        <h2 className="text-base sm:text-lg lg:text-xl text-neutral-800 mt-2">
                            ส่งเสริมศักยภาพวัยรุ่น ให้เติบโตอย่างสมดุลตามพันธุกรรมของแต่ละบุคคลคล <br />
                            Empowering teens to grow strong and balanced — guided by genetic blueprint.
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

                <div className="grid grid-cols-4 gap-4">
                    <div className="relative aspect-square border-2 rounded-2xl overflow-hidden">
                        <Image
                            alt="child1"
                            src={Item1}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-square border-2 rounded-2xl overflow-hidden">
                        <Image
                            alt="child2"
                            src={Item2}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-square border-2 rounded-2xl overflow-hidden">
                        <Image
                            alt="child3"
                            src={Item3}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-square border-2 rounded-2xl overflow-hidden">
                        <Image
                            alt="child4"
                            src={Item4}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <div>
                <ClearCardSection
                    imageHeroUrl={ClearCArdHero}
                    cardItems={departmentChildClearCardData}
                    reverse={true}
                />
            </div>

            <div className="container mx-auto px-4 pt-12 space-y-12">
                <div>
                    <div className="text-center mb-6 space-y-2">
                        <h3 className="text-neutral-800 text-2xl sm:text-3xl">
                            เทคโนโลยเพื่อการดูแลเด็กและวัยรุ่นให้เติบโตอย่างเหมาะสม
                        </h3>
                        <h2 className="text-neutral-800/80 text-lg sm:text-2xl">
                            Advanced technology to support healthy growth in children and adolescents.
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
