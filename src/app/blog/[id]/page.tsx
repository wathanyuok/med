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
    return <div className="p-10 text-center text-lg">ไม่พบบทความนี้</div>;
  }

  return (
    <div className="pt-32 sm:pt-40 pb-16 sm:pb-20 container mx-auto px-4">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4 sm:mb-6 leading-snug text-center sm:text-left">
        {article.title}
      </h1>

      {/* Meta Info */}
      <div className="text-neutral-800 text-sm sm:text-base md:text-lg flex flex-col  mb-6">
        <h2 className="font-medium text-center sm:text-left">
          โดย {article.authorName}
        </h2>

        <div className="flex justify-center sm:justify-start gap-4 text-neutral-600">
          <h2>{formatThaiDate(article.publishedAt)}</h2>
          <h2 className="flex items-center gap-1">
            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />{" "}
            <span>{article.viewCount}</span>
          </h2>
        </div>
      </div>

      {/* Cover Image */}
      <div className="w-full aspect-[16/9] md:aspect-[16/6] relative rounded-xl sm:rounded-2xl overflow-hidden shadow mb-8 sm:mb-12">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-12 sm:mb-16">
        {article.excerpt}
      </p>

      {/* Related Articles */}
      <div className="mb-12">
        <ArticleSection />
      </div>
    </div>
  );
}

export default BlogDetailPage;