"use client";
import React from "react";
import ExaBlueBtn from "@/app/components/ui/ExaBlueBtn";

interface Props {
  onConfirm: () => void;
}

function PaymentConfirm({ onConfirm }: Props) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-1/3">
        <ExaBlueBtn label="ยืนยัน" onClick={onConfirm} />
      </div>
    </div>
  );
}

export default PaymentConfirm;
