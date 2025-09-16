import { SuccessExa } from "@/app/assets/icons/paymentIcons";
import React from "react";
import Logo from "../ui/Logo";
import ExaBlueBtn from "../ui/ExaBlueBtn";

function PaymentSuccess() {
    return (
        <div className="bg-white shadow rounded-2xl flex flex-col items-center justify-between mb-20 md:mb-40 p-6 md:p-12 lg:p-24">
            {/* Logo */}
            <Logo isJustLogoImage={true} />

            {/* Success icon */}
            <div className="mt-6 md:mt-10">
                <SuccessExa />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center justify-center gap-2 mt-8 md:mt-12 text-center">
                <h1 className="text-neutral-800 text-2xl md:text-4xl font-semibold">
                    ชำระเงินสำเร็จ!
                </h1>
                <h2 className="text-neutral-800 text-lg md:text-2xl font-semibold">
                    ขอบคุณที่เลือกใช้บริการโรงพยาบาลเอ็กซา-เมดค่ะ
                </h2>
            </div>

            {/* Description */}
            <div className="mt-8 md:mt-12">
                <p className="text-neutral-800 text-base md:text-xl lg:text-2xl text-center max-w-3xl">
                    ท่านสามารถตรวจสอบใบเสร็จรับเงินและรายละเอียดการนัดหมายได้ทางอีเมลที่ได้ลงทะเบียนไว้
                    หากมีข้อสงสัยหรือต้องการความช่วยเหลือ กรุณาติดต่อ Line
                    Official: @ExamedHealth
                </p>
            </div>

            {/* Button */}
            <div className="mt-8 md:mt-12 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                <ExaBlueBtn label="กลับหน้าแพคเกจ" href="/package" />
            </div>
        </div>
    );
}

export default PaymentSuccess;