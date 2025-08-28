import React from "react";

function AdviceSection() {
    return (
        <div className="mt-12 py-6 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-56 bg-white rounded-2xl">
            {/* Heading section */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-exa-pink">
                    ต้องการคำแนะนำด้านสุขภาพหรือเปล่า? <br />
                    ให้เราช่วยเหลือคุณทันที
                </h3>

                <div className="mt-6 text-neutral-600">
                    <h4 className="text-lg md:text-xl font-medium mb-4">
                        ให้เราช่วยดูแลคุณ ด้วยคำแนะนำจากผู้เชี่ยวชาญและ AI
                        อัจฉริยะ ที่เข้าใจสุขภาพของคุณ
                    </h4>
                    <ul className="text-base sm:text-lg md:text-xl list-disc list-inside space-y-2 text-left">
                        <li>
                            ปรึกษาผ่าน LINE — พูดคุยกับทีมของเราแบบเรียลไทม์
                            ดูแพคเกจที่เหมาะกับคุณ
                        </li>
                        <li>
                            วิเคราะห์ผลตรวจสุขภาพด้วย AI — ผู้ช่วยด้านสุขภาพ
                            ให้คุณเข้าใจร่างกายลึกขึ้นในไม่กี่คลิก
                        </li>
                    </ul>
                </div>
            </div>

            {/* Buttons section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
                <div className="text-lg md:text-xl border py-4 px-4 shadow bg-neutral-600 text-neutral-100 rounded-full text-center cursor-pointer transition-transform hover:scale-105 duration-300">
                    ติดต่อเราผ่าน LINE
                </div>

                <div
                    className="text-lg md:text-xl border py-4 px-4 shadow text-neutral-100 rounded-full text-center cursor-pointer transition-transform hover:scale-105 duration-300"
                    style={{ background: "var(--color-exa-tab)" }}
                >
                    วิเคราะห์ผลตรวจสุขภาพด้วย AI
                </div>
            </div>

        </div>
    );
}

export default AdviceSection;
