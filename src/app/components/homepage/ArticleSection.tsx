"use client";

import { ArrowRight } from "@/app/assets/icons/homepageIcons";
import React from "react";
import ArticleCard from "./ArticleCard";
import { articles } from "@/app/utils/mockData/articles";
import { useRouter } from "next/navigation";

function ArticleSection() {
    const router = useRouter();

    const handleOnDetail = (id: number) => {
        router.push(`/blog/${id}`);
    };

    const handleOnAllBlog = () => router.push("/blog");

    return (
        <div>
            {/* Header */}
            <div className="flex sm:flex-row justify-between items-start sm:items-center gap-4">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-800 font-semibold leading-snug text-center sm:text-left">
                    บทความที่น่าสนใจ
                </h3>

                {/* Button */}
                <div
                    className="cursor-pointer hover:scale-105 transition duration-300 self-center sm:self-auto"
                    onClick={handleOnAllBlog}
                >
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
                {articles.slice(0, 4).map((article) => (
                    <ArticleCard
                        key={article.id}
                        id={article.id}
                        image={article.imageUrl}
                        title={article.title}
                        detail={article.excerpt}
                        onDetail={() => handleOnDetail(article.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ArticleSection;
