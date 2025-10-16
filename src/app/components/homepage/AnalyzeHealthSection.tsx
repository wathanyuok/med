'use client'

import React from "react";
import PinkDna from "@/app/assets/images/pink-dna.png";
import { DiscoveryCard, RiskCard } from "@/app/assets/icons/homepageIcons";
import Image from "next/image";
import Lab from "@/app/assets/images/lab.png";
import { useRouter } from "next/navigation";

function AnalyzeHealth() {
    const router = useRouter()

    const handleGoToAiPage = () => {
        router.push('/ai')
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {/* left content */}
                <div className="md:col-span-2 shadow-md rounded-2xl bg-neutral-100 relative h-[500px] overflow-hidden">
                    {/* Background image */}
                    <Image
                        src={PinkDna}
                        alt="DNA"
                        fill
                        className="object-cover object-center absolute top-0 left-0 z-0"
                    />

                    {/* Overlay content */}
                    <div className="relative z-10 h-full flex flex-col justify-between lg:pb-4">
                        {/* Header */}
                        <div className="w-full lg:w-5/6 bg-neutral-100/50 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-br-none lg:rounded-br-2xl">
                            <h3 className="text-neutral-800 text-3xl md:text-3xl lg:text-4xl font-semibold break-words max-w-full sm:max-w-lg md:max-w-xl text-center md:text-left">
                                ผู้นำด้านเวชศาสตร์ป้องกันเหนือระดับ
                                <br />
                                เพื่อสุขภาพสมบูรณ์อย่างครบวงจร
                            </h3>
                        </div>

                        {/* Footer */}
                        <div className="bg-neutral-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl px-4 sm:px-6 md:px-8 py-4 lg:mx-4 mt-6">
                            <div className="md:col-span-2 text-lg sm:text-lg md:text-xl text-neutral-800 text-center sm:text-center md:text-left">
                                ประเมินความเสี่ยงจากผลตรวจสุขภาพ
                                พร้อมแนะนำแนวทางดูแลเฉพาะบุคคล ด้วย AI
                            </div>

                            <div onClick={handleGoToAiPage} className="text-neutral-100 flex items-center justify-center col-span-1 rounded-[40px] bg-[linear-gradient(270deg,#EE8DD9_0%,#F639BD_50%,#EE8DD9_100%)] py-2 px-4 cursor-pointer hover:scale-105 transition duration-300">
                                <p className="font-semibold text-center text-sm sm:text-base md:text-base">
                                    วิเคราะห์ผลตรวจ สุขภาพด้วย AI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right content */}
                <div className="grid grid-rows-2 gap-6 h-[500px]">
                    <div className="relative p-8 rounded-xl overflow-hidden">
                        {/* Overlay ไล่สีจากขาวทึบ → โปร่งใส */}
                        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-white/90 via-white/60 to-transparent p-6 text-left text-xl font-semibold text-neutral-800 z-10 space-y-4">
                            <div className="text-neutral-800 text-2xl">
                                ด้วย Lab และเครื่องวิเคราะห์ <br />
                                ที่ได้รับ{" "}
                                <span className="text-exa-pink text-2xl">
                                    มาตราฐานสูงสุด*
                                </span>
                            </div>
                            <div className="text-neutral-800 text-2xl font-light">
                                เทคโนโลยี จาก Illumina และอื่นๆ
                            </div>
                        </div>

                        <Image
                            src={Lab}
                            alt="doctor"
                            className="absolute right-0 top-0 bottom-0 h-full object-cover"
                        />
                    </div>

                    <div className="relative bg-icy-blue p-8 rounded-xl overflow-hidden">
                        <div className="absolute top-8 left-8 z-30">
                            <div className="text-neutral-800 text-2xl font-semibold mb-2 leading-snug">
                                Measured Wellness <br />
                                สุขภาพดี
                            </div>
                            <div className="text-exa-pink text-2xl font-semibold">
                                วัดผลได้
                            </div>
                        </div>

                        <div className="absolute top-36 right-2 flex items-center justify-center">
                            <div className="relative flex items-start">
                                <div className="relative z-10 scale-80 translate-x-70 -translate-y-40">
                                    <DiscoveryCard />
                                </div>
                                <div className="relative z-20 -translate-x-12 -translate-y-36 scale-80">
                                    <RiskCard />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AnalyzeHealth;
