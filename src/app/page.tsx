"use client";

import Navigation from "./components/homepage/Navigation";
import PinkDna from "@/app/assets/images/pink-dna.png";
import Image from "next/image";
import ServiceSection from "./components/homepage/ServiceSection";
import AdviceSection from "./components/homepage/AdviceSection";
import ArticleSection from "./components/homepage/ArticleSection";
import Footer from "./components/homepage/Footer";
import AvatarSection from "./components/homepage/AvatarSection";
import BenefitSection from "./components/homepage/BenefitSection";

export default function Home() {
    return (
        <div>
            <Navigation />

            <div className="space-y-12">
                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-48 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56">
                    {/* Left: ใช้ col-span-2 บน desktop */}
                    <div className="md:col-span-2 shadow-md rounded-3xl bg-neutral-100 relative h-[462px] overflow-hidden">
                        {/* Background image */}
                        <Image
                            src={PinkDna}
                            alt="DNA"
                            fill
                            className="object-cover object-center absolute top-0 left-0 z-0"
                        />

                        {/* Overlay content */}
                        <div className="relative z-10 h-full flex flex-col justify-between p-6">
                            {/* Header */}
                            <div>
                                <h3 className="text-neutral-800 text-2xl md:text-3xl font-medium">
                                    ผู้นำด้านเวชศาสตร์ป้องกันเหนือระดับ
                                    <br />
                                    เพื่อสุขภาพสมบูรณ์อย่างครบวงจร
                                </h3>
                            </div>

                            {/* Footer */}
                            <div className="bg-neutral-100 grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl px-4 md:px-8 py-4 mx-0 md:mx-6 mt-6">
                                {/* ซ้าย 2/3 */}
                                <div className="md:col-span-2 text-lg md:text-xl text-neutral-800">
                                    ประเมินความเสี่ยงจากผลตรวจสุขภาพ
                                    พร้อมแนะนำแนวทางดูแลเฉพาะบุคคล ด้วย AI
                                </div>

                                {/* ขวา 1/3 */}
                                <div
                                    className="text-neutral-100 flex items-center justify-center col-span-1 rounded-[40px] 
                                bg-[linear-gradient(270deg,#EE8DD9_0%,#F639BD_50%,#EE8DD9_100%)] py-2 px-4"
                                >
                                    <p className="text-center text-sm md:text-base">
                                        วิเคราะห์ผลตรวจ สุขภาพด้วย AI
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: stack 2 rows */}
                    <div className="grid grid-rows-2 border gap-6 h-[462px]">
                        <div className="border bg-gray-200 flex flex-col items-center justify-center p-4 text-center">
                            <div>แพทย์ผู้เชี่ยวชาญ</div>
                            <div className="text-exa-pink">ทั้ง 8 สาขา</div>
                        </div>
                        <div className="border bg-gray-300 flex items-center justify-center p-4 text-center">
                            <div>
                                Measured Wellness <br />
                                สุขภาพดีแบบที่{" "}
                                <span className="text-exa-pink">วัดผลได้</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefit */}
                <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56">
                    <BenefitSection />
                </div>

                {/* Service */}
                <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 bg-sky py-12">
                    <ServiceSection />
                </div>

                {/* Avatar */}
                <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56">
                    <AvatarSection />
                </div>

                {/* Article */}
                <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56">
                    <ArticleSection />
                </div>

                {/* Advice */}
                <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56">
                    <AdviceSection />
                </div>

                {/* Footer */}
                <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 bg-neutral-800 text-neutral-100">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
