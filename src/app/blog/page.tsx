'use client';

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import Selection from "../components/ui/Selection";
import ChipSelector from "../components/ui/ChipSelector";
import SortSelection from "../components/ui/SortSelection";
import BlogCard from "../components/homepage/BlogCard";
import { articles } from "../utils/mockData/articles";

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
  const router = useRouter();

  const [selectedId, setSelectedId] = useState<number>(9);
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc"); 

  const toNumber = (val: any): number => {
    if (typeof val === "number") return val;

    if (typeof val === "string") {
      const asNum = Number(val);
      if (!Number.isNaN(asNum)) return asNum;        
      const byLabel = options.find((o) => o.value === val);
      return byLabel ? byLabel.id : 9;                
    }

    if (val && typeof val === "object") {
      if (typeof val.id === "number") return val.id;
      if (typeof val.id === "string") {
        const asNum = Number(val.id);
        if (!Number.isNaN(asNum)) return asNum;
      }
      if ("value" in val) {
        const byValue = options.find((o) => o.value === (val as any).value);
        if (byValue) return byValue.id;
      }
    }

    return 9;
  };

  const handleChange = (v: any) => setSelectedId(toNumber(v));

  const filteredArticles = useMemo(() => {
    let data =
      selectedId === 9
        ? [...articles]
        : articles.filter((a) => Number(a.categoryId) === Number(selectedId));

    data.sort((a, b) => {
      const dateA = new Date(a.publishedAt || 0).getTime();
      const dateB = new Date(b.publishedAt || 0).getTime();
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

    return data;
  }, [selectedId, sortOrder]);

  const handleDetail = (id: number) => {
    router.push(`blog/${id}`);
  };

  const currentCategoryLabel =
    options.find((o) => o.id === selectedId)?.value ?? "แผนกทั้งหมด";

  return (
    <div className="pt-40 container mx-auto px-4 mb-20">
      <h3 className="text-neutral-800 text-3xl font-semibold mb-8">
        บทความที่น่าสนใจ
      </h3>

      {/* Filter */}
      <div className="my-6">
        {/* Mobile Dropdown */}
        <div className="block md:hidden">
          <Selection
            label=""
            placeholder="แผนกทั้งหมด"
            options={options}
            value={currentCategoryLabel}     
            onChange={handleChange}
            classNameSelectTrigger="!text-lg"
          />
        </div>

        {/* Desktop Chips */}
        <div className="hidden md:block">
          <ChipSelector
            options={options}
            value={selectedId}
            onChange={handleChange}
            defaultSelectedId={9}
          />
        </div>
      </div>

      {/* Sort */}
      <div className="mb-8 flex items-center gap-4">
        <p className="text-md md:text-lg lg:text-xl font-semibold text-bright-black">
          เรียงตาม
        </p>
        <div className="min-w-[250px]">
          <SortSelection
            value={sortOrder}
            onChange={(val) => setSortOrder(val)}
            labels={{
              desc: "เรียงจากใหม่ - เก่า",
              asc: "เรียงจากเก่า - ใหม่",
            }}
          />
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
        {filteredArticles.length === 0 ? (
          <div className="col-span-full py-10 text-center text-gray-500">
            ไม่พบบทความในหมวดนี้
          </div>
        ) : (
          filteredArticles.map((article) => (
            <BlogCard
              key={article.id}
              id={article.id}
              image={article.imageUrl}
              title={article.title}
              detail={article.excerpt}
              onDetail={() => handleDetail(article.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default BlogPage;
