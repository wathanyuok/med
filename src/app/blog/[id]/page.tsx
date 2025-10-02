"use client";

import React from "react";
import { Eye } from "lucide-react";
import { formatThaiDate } from "@/app/utils/formatDate";
import ArticleSection from "@/app/components/homepage/ArticleSection";
import Image from "next/image";
import { articles } from "@/app/utils/mockData/articles";
import Link from "next/link";

interface BlogDetailPageProps {
    params: Promise<{ id: string }>;
}

function BlogDetailPage({ params }: BlogDetailPageProps) {
    // ✅ unwrap params
    const { id } = React.use(params);
    const article = articles.find((a) => a.id === Number(id));

    if (!article) {
        return <div className="p-10 text-center text-lg">ไม่พบบทความนี้</div>;
    }

    return (
        <div className="pt-32 sm:pt-40 pb-16 sm:pb-20 container mx-auto px-4">
            {/* Category link */}
            <div className="pb-4 text-base sm:text-xl text-neutral-800 text-center sm:text-left">
                <Link className="hover:underline cursor-pointer" href={"/blog"}>
                    บทความทั้งหมด
                </Link>{" "}
                /{" "}
                <Link className="hover:underline cursor-pointer" href={"/blog"}>
                    {article.category}
                </Link>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4 sm:mb-6 leading-snug text-center sm:text-left">
                {article.title}
            </h1>

            {/* Meta Info */}
            <div className="text-neutral-800 text-sm sm:text-base md:text-lg flex flex-col mb-6">
                <h2 className="font-medium text-center sm:text-left">
                    โดย {article.authorName}
                </h2>

                <div className="flex justify-center sm:justify-start gap-4 text-neutral-600">
                    <h2>{formatThaiDate(article.publishedAt)}</h2>
                    <h2 className="flex items-center gap-1">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{article.viewCount}</span>
                    </h2>
                </div>
            </div>

            {/* Cover Image */}
            {article.imageUrl ? (
                <div className="w-full aspect-[16/9] md:aspect-[16/6] relative rounded-xl sm:rounded-2xl overflow-hidden shadow mb-6 ">
                    <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        priority
                        className="object-cover object-top"
                    />
                </div>
            ) : (
                <div className="shadow bg-white/70 w-full aspect-[16/9] md:aspect-[16/6] rounded-xl sm:rounded-2xl flex items-center justify-center text-neutral-400 mb-8 sm:mb-12">
                    ภาพประกอบ {article.title}
                </div>
            )}

            {/* Excerpt */}
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
                {article.excerpt}
            </p>

            {/* TOC */}
            {article.topics && (
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-neutral-800">
                        สารบัญของเนื้อหา
                    </h2>
                    <ul className="list-decimal list-inside space-y-1 mt-2 text-bright-blue">
                        {article.topics.map((topic) => (
                            <li key={topic.id}>
                                <a
                                    href={`#topic-${topic.id}`}
                                    className="hover:underline text-base md:text-lg"
                                >
                                    {topic.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Content Topics */}
            <div className="space-y-12">
                {article.topics?.map((topic, idx) => (
                    <div
                        key={topic.id}
                        id={`topic-${topic.id}`}
                        className="scroll-mt-40" // เพิ่ม scroll margin top (พอดีกับ navbar)
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-800 mb-2">
                            {idx + 1}. {topic.title}
                        </h3>

                        {topic.imageUrl && (
                            <div className="w-full aspect-[16/9] md:aspect-[16/6] relative rounded-xl sm:rounded-2xl overflow-hidden shadow mb-6">
                                <Image
                                    src={topic.imageUrl}
                                    alt={topic.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                            {topic.detail}
                        </p>
                    </div>
                ))}
            </div>

            {/* References */}
            {article.refers && (
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-neutral-800">
                        อ้างอิงเนื้อหา
                    </h2>
                    <div className="space-y-2 mt-2 flex flex-col">
                        {article.refers.map((refer, idx) => (
                            <a
                                key={idx}
                                href={refer}
                                target="_blank" // เปิดแท็บใหม่
                                rel="noopener noreferrer" // security
                                className="text-bright-blue hover:underline break-words text-base md:text-xl"
                            >
                                {idx + 1}. {refer}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <div className="mb-24" />

            {/* Related Articles */}
            <div className="mb-12">
                <ArticleSection />
            </div>
        </div>
    );
}

export default BlogDetailPage;