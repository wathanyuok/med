// PaymentMethodCard.tsx
import { Visa } from "@/app/assets/icons/paymentIcons";
import React from "react";

function PaymentMethodCard() {
  return (
    <div className="transition duration-200 w-full sm:min-w-[320px] md:min-w-[400px] lg:min-w-[500px]">
      <div className="py-8 px-6 rounded-2xl bg-white shadow h-full">
        {/* หัวข้อ */}
        <h3 className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold mb-4">
          วิธีการชำระเงิน
        </h3>

        {/* รายละเอียดบัตร */}
        <div className="flex mb-6">
          <div className="w-1/4">
            <Visa />
          </div>
          <div className="w-3/4">
            <p className="text-base sm:text-lg md:text-xl font-semibold">
              Visa ลงท้ายด้วย 0000
            </p>
            <p className="text-base sm:text-lg md:text-xl">หมดอายุ 19/28</p>
          </div>
        </div>

        {/* ปุ่มล่าง */}
        <div className="flex items-center justify-end gap-6 cursor-pointer">
          <div className="hover:scale-105 transition duration-200 text-sm sm:text-base md:text-lg font-semibold text-error/80 hover:text-error/100">
            ลบการชำระเงิน
          </div>
          <div className="hover:scale-105 transition duration-200 text-sm sm:text-base md:text-lg font-semibold text-bright-blue/80 hover:text-bright-blue/100">
            แก้ไขข้อมูล
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodCard;