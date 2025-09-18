'use client'

import React from "react";
import Selection from "../components/ui/Selection";
import ChipSelector from "../components/ui/ChipSelector";
import ArticleCard from "../components/homepage/ArticleCard";
import { useRouter } from "next/navigation";
import { articles } from "../utils/mockData/articles";
import SortSelection from "../components/ui/SortSelection";
import BlogCard from "../components/homepage/BlogCard";

const options = [
    { id: 9, value: "แผนกทั้งหมด" },
    { id: 1, value: "ตรวจสุขภาพครบวงจร" },
    { id: 2, value: "พัฒนาการเด็กและวัยรุ่น" },
    { id: 3, value: "สุขภาพสตรี" },
    { id: 4, value: "เวชศาสตร์กีฬาและการฟื้นฟู" },
    { id: 5, value: "ศูนย์กระดูกและข้อ" },
    { id: 6, value: "ศูนย์ดูแลความงาม" },
    { id: 7, value: "แผนกจักษุ" },
    { id: 8, value: "ทันตกรรมครบวงจร" },
];

function BlogPage() {

    const router = useRouter()

    const handleDetail = (id: number) => {
        router.push(`blog/${id}`)
    } 

    return (
        <div>
            <div className="pt-40 container mx-auto px-4 mb-20">
                <div>
                    <h3 className="text-neutral-800 text-3xl font-semibold mb-8">
                        บทความที่น่าสนใจ
                    </h3>
                </div>

                <div>
                    {/* Responsive Filter */}
                    <div className="my-6">
                        {/* Mobile = Dropdown */}
                        <div className="block md:hidden">
                            <Selection
                                label=""
                                placeholder="แผนกทั้งหมด"
                                options={options}
                                classNameSelectTrigger="!text-lg"
                            />
                        </div>

                        {/* Tablet+ = Chips */}
                        <div className="hidden md:block">
                            <ChipSelector
                                options={options}
                                defaultSelectedId={9}
                            />
                        </div>
                    </div>
                </div>

                <div className=" mb-8 flex items-center gap-4">
                    <p className="text-md md:text-lg lg:text-xl font-semibold text-bright-blue">
                        เรียงตาม
                    </p>
                    <div className="min-w-[250px]">
                        <SortSelection />
                    </div>
                </div>

                {/* Articles grid */}
                <div
                    className="
                    grid grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-2 sm:gap-4 lg:gap-4
                    mt-6 sm:mt-6 lg:mt-8"
                >
                    {articles.map((article, idx) => (
                        <BlogCard
                            key={idx}
                            id={article.id}
                            image={article.imageUrl}
                            title={article.title}
                            detail={article.excerpt}
                            onDetail={() => handleDetail(article.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
