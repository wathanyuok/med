"use client";

import React from "react";
import AboutUsCard from "../components/aboutUsPage/AboutUsCard";
import ContactUs from "../components/aboutUsPage/ContactUs";
import Image from "next/image";
import { doctors } from "../utils/mockData/doctors";
import AboutUs1 from "@/app/assets/images/about_us/about_us_1.png"
import AboutUs2 from "@/app/assets/images/about_us/about_us_2.png"

function AboutUsPage() {
    return (
        <div>
            {/* Hero Section */}
            <div className="pt-28 sm:pt-36 lg:pt-40 container mx-auto px-4">
                <div className="mb-12">
                    <div className="mb-8 sm:mb-12 overflow-hidden">
                        <div className="flex flex-col gap-6 md:flex-row">
                            <div className="relative w-full md:w-1/2 aspect-[16/9] shadow rounded overflow-hidden">
                                <Image
                                    src={AboutUs1}
                                    alt="รูปภาพ exa 1"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full md:w-1/2 aspect-[16/9] shadow rounded overflow-hidden">
                                <Image
                                    src={AboutUs2}
                                    alt="รูปภาพ exa 2"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900">
                            โรงพยาบาล เอ็กซา-เมด (EXA-MED HOSPITAL)
                        </h1>
                        <h2 className="text-lg sm:text-xl md:text-2xl text-neutral-800/80 mt-4">
                            &quot;เราคือผู้นำด้านเวชศาสตร์ป้องกันเหนือระดับ
                            เพื่อสุขภาพสมบูรณ์อย่างครบวงจร&quot;
                        </h2>
                        <h2 className="text-lg sm:text-xl md:text-2xl text-neutral-800/80">
                            &quot;Excellence in Preventive Medicine, Complete in
                            Wellness Care&quot;
                        </h2>
                        <h3 className="text-base sm:text-lg md:text-xl text-neutral-800/70 mt-6 sm:mt-8 leading-relaxed">
                            เพราะอาหาร วิถีชีวิต สภาพแวดล้อม และมลพิษ
                            ล้วนเร่งให้เกิดปัญหาสุขภาพก่อนวัยอันควร
                            แต่โชคดีที่เทคโนโลยีการแพทย์ก้าวหน้าอย่างมาก
                            เราจึงควรใช้ประโยชน์จากสิ่งเหล่านี้เพื่อป้องกันโรค
                            รักษาอย่างทันท่วงที ติดตามสุขภาพอย่างต่อเนื่อง
                            และมีชีวิตที่เต็มเปี่ยมด้วยคุณภาพและสุขภาวะที่ยั่งยืน
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