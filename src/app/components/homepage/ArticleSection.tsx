"use client";

import React from "react";
import { articles } from "@/app/utils/mockData/articles";
import { useRouter } from "next/navigation";
import BlogCard from "./BlogCard";
import Link from "next/link";

function ArticleSection() {
  const router = useRouter();

  const handleOnDetail = (id: number) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-800 font-semibold leading-snug text-center sm:text-left">
          บทความที่น่าสนใจ
        </h3>
      </div>

      {/* Articles grid */}
      <div
        className="
            grid grid-cols-2
            md:grid-cols-4
            lg:grid-cols-4
            gap-2 sm:gap-2 lg:gap-2
            mt-6 sm:mt-6 lg:mt-8
            mb-6 sm:mb-6 lg:mb-8"
      >
        {articles.slice(0, 4).map((article) => (
          <BlogCard
            key={article.id}
            id={article.id}
            image={article.thumbnailImage || article.imageUrl}
            title={article.title}
            onDetail={() => handleOnDetail(article.id)}
          />
        ))}
      </div>

      {/* Button */}
      <div className="flex items-center justify-center">
        <Link
          href="/blog"
          className="py-2 px-24 text-bright-blue text-lg sm:text-xl lg:text-2xl font-semibold rounded-full bg-white hover:bg-icy-blue shadow hover:shadow-md hover:scale-105 transition duration-200"
        >
          ดูบทความทั้งหมด
        </Link>
      </div>
    </div>
  );
}

export default ArticleSection;
