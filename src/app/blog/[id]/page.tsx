import React from "react";
import { Eye } from "lucide-react";
import { formatThaiDate } from "@/app/utils/formatDate";
import ArticleSection from "@/app/components/homepage/ArticleSection";
import Image from "next/image";
import { articles } from "@/app/utils/mockData/articles";

interface BlogDetailPageProps {
    params: {
        id: string;
    };
}

function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { id } = params;
    const article = articles.find((a) => a.id === Number(id));

    if (!article) {
        return <div className="p-10">ไม่พบบทความนี้</div>;
    }

    return (
        <div className="pt-40 pb-20 container mx-auto px-4">
            <h1 className="text-4xl font-bold text-neutral-800 mb-6">
                {article.title}
            </h1>
            <div className="text-neutral-800 text-xl">
                <h2>โดย {article.authorName}</h2>
                <div className="inline-flex gap-4">
                    <h2>{formatThaiDate(article.publishedAt)}</h2>
                    <h2 className="inline-flex gap-2">
                        <Eye /> <span>{article.viewCount}</span>
                    </h2>
                </div>
            </div>
            <div className="mb-12" />
            <div>
                <div className="w-full aspect-[16/6] relative rounded-2xl overflow-hidden shadow">
                    <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="mb-12" />
                <p className="text-neutral-600 text-lg leading-relaxed">
                    {article.excerpt}
                </p>
            </div>
            <div className="mb-20" />

            {/* Article */}
            <div className="mb-12">
                <ArticleSection />
            </div>
        </div>
    );
}

export default BlogDetailPage;
