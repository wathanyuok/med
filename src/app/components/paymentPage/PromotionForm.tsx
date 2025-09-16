"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { PaymentPageInterface } from "@/app/payment/[id]/page";

interface Props {
  formData: PaymentPageInterface;
  onChange: (field: string, value: string) => void;
}

function PromotionForm({ formData, onChange }: Props) {
  return (
    <div>
      <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
        รหัสโปรโมชั่น(ถ้ามี)
      </h4>
      <div className="w-full grid grid-cols-1 gap-2">
        <Input
          className="bg-white h-12 !text-lg"
          type="text"
          id="code"
          value={formData.code}
          onChange={(e) => onChange("code", e.target.value)}
          placeholder="กรอกรหัสโปรโมชั่น"
        />
      </div>
    </div>
  );
}

export default PromotionForm;
