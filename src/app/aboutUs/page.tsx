"use client";

import React from "react";
import AboutUsCard from "../components/aboutUsPage/AboutUsCard";
import ContactUs from "../components/aboutUsPage/ContactUs";
import Image from "next/image";
import { doctors } from "../utils/mockData/doctors";



function AboutUsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="pt-28 sm:pt-36 lg:pt-40 container mx-auto px-4">
        <div className="mb-12">
          <div className="rounded-xl sm:rounded-2xl mb-8 sm:mb-12 shadow overflow-hidden">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
              <Image
                src="https://media.istockphoto.com/id/2179714888/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%94%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%97%E0%B8%B1%E0%B8%A5%E0%B9%83%E0%B8%99%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%84%E0%B8%95.jpg?s=2048x2048&w=is&k=20&c=KeGS5kMbzJJUYHU8zvBnKCruWDtd9Vhb6fQeun5GjLQ="
                alt="รูปภาพ exa"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900">
              โรงพยาบาล เอ็กซา-เมด (EXA-MED HOSPITAL)
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-neutral-800/80 mt-4">
              "เราคือผู้นำด้านเวชศาสตร์ป้องกันเหนือระดับ เพื่อสุขภาพสมบูรณ์อย่างครบวงจร"
            </h2>
            <h2 className="text-lg sm:text-xl md:text-2xl text-neutral-800/80">
              "Excellence in Preventive Medicine, Complete in Wellness Care"
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl text-neutral-800/70 mt-6 sm:mt-8 leading-relaxed">
              เพราะอาหาร วิถีชีวิต สภาพแวดล้อม และมลพิษ ล้วนเร่งให้เกิดปัญหาสุขภาพก่อนวัยอันควร
              แต่โชคดีที่เทคโนโลยีการแพทย์ก้าวหน้าอย่างมาก เราจึงควรใช้ประโยชน์จากสิ่งเหล่านี้เพื่อป้องกันโรค
              รักษาอย่างทันท่วงที ติดตามสุขภาพอย่างต่อเนื่อง และมีชีวิตที่เต็มเปี่ยมด้วยคุณภาพและสุขภาวะที่ยั่งยืน
            </h3>
          </div>
        </div>
      </div>

      {/* Doctor Team Section */}
      <div className="bg-neutral-300">
        <div className="py-8 sm:py-12 container mx-auto px-4">
          <h3 className="text-neutral-800 text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-center sm:text-left">
            รู้จักทีมแพทย์และผู้เชี่ยวชาญด้านสุขภาพของเรา
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {doctors.map((person) => (
              <AboutUsCard
                key={person.id}
                name={person.name}
                imageUrl={person.imageUrl}
                position={person.position}
                detail={person.detail}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-8 sm:py-12 container mx-auto px-4">
        <h3 className="text-neutral-800 text-md sm:text-xl md:text-2xl font-semibold mb-6 text-center sm:text-left">
          ติดต่อเรา
        </h3>
        <ContactUs />
      </div>
    </div>
  );
}

export default AboutUsPage;