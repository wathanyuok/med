// PaymentMethodAddingCard.tsx
import React from "react";

function PaymentMethodAddingCard() {
  return (
    <div className="cursor-pointer h-full w-full sm:min-w-[320px] md:min-w-[400px] lg:min-w-[500px]">
      <div className="py-8 px-6 rounded-2xl bg-white hover:bg-icy-blue/10 hover:border-dashed border-2 border-transparent hover:border-bright-blue/80 transition-all duration-200 shadow h-full flex items-center justify-center">
        <div className="text-base sm:text-lg md:text-xl font-semibold text-bright-blue/80 hover:text-bright-blue/100">
          + เพิ่มวิธีชำระเงิน
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodAddingCard;
