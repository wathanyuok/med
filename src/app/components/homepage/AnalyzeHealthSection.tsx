import React from "react";
import PinkDna from "@/app/assets/images/pink-dna.png";
import HeartBeat from "@/app/assets/images/heart-beat.png";
import Doctor from "@/app/assets/images/doctor.png";
import Image from "next/image";

function AnalyzeHealth() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <div className="md:col-span-2 shadow-md rounded-2xl bg-neutral-100 relative h-[462px] overflow-hidden">
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
                            {/* ซ้าย 2/3 */}
                            <div className="md:col-span-2 text-lg sm:text-lg md:text-xl text-neutral-800 text-center sm:text-center md:text-left">
                                ประเมินความเสี่ยงจากผลตรวจสุขภาพ
                                พร้อมแนะนำแนวทางดูแลเฉพาะบุคคล ด้วย AI
                            </div>

                            {/* ขวา 1/3 */}
                            <div
                                className="text-neutral-100 flex items-center justify-center col-span-1 rounded-[40px] 
      bg-[linear-gradient(270deg,#EE8DD9_0%,#F639BD_50%,#EE8DD9_100%)] py-2 px-4 cursor-pointer hover:scale-105 transition duration-300"
                            >
                                <p className="text-center text-sm sm:text-base md:text-base">
                                    วิเคราะห์ผลตรวจ สุขภาพด้วย AI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: stack 2 rows */}
                <div className="grid grid-rows-2 gap-6 h-[462px]">
                    <div className="relative bg-[linear-gradient(157deg,#E7EEFE_15.12%,#D1DCF4_114.38%)] p-8 rounded-xl overflow-hidden">
                        {/* ข้อความอยู่ซ้ายล่าง */}
                        <div className="absolute left-0 bottom-0 p-6 text-left text-xl font-semibold text-neutral-800 z-10 space-y-4">
                            <div className="text-neutral-800">
                                แพทย์ผู้เชี่ยวชาญ
                            </div>
                            <div className="text-exa-pink text-3xl">
                                ทั้ง 8 สาขา
                            </div>
                        </div>

                        {/* รูปอยู่ขวาล่าง */}
                        <Image
                            src={Doctor}
                            alt="doctor"
                            className="absolute right-0 -bottom-2 h-full w-auto object-contain"
                        />
                    </div>

                    <div className=" bg-bright-pink p-8 rounded-xl space-y-4">
                        <div className="text-left text-xl font-semibold text-neutral-800">
                            Measured Wellness <br />
                            สุขภาพดีแบบที่{" "}
                            <span className="text-exa-pink">วัดผลได้</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={HeartBeat}
                                alt="heart beat"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalyzeHealth;
