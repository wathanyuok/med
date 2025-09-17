"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaymentPageInterface } from "@/app/payment/[id]/page";

interface Props {
  formData: PaymentPageInterface;
  onChange: (field: string, value: string) => void;
  errors?: Partial<Record<keyof PaymentPageInterface, string>>; 
}

function FormField({
  label,
  htmlFor,
  children,
  error,
}: {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="w-full grid grid-cols-1 gap-2">
      <Label htmlFor={htmlFor} className="text-xl">
        {label}
      </Label>
      {children}
      <p className="text-red-500 text-sm min-h-[20px]">{error || ""}</p>
    </div>
  );
}

function ContactForm({ formData, onChange, errors }: Props) {
  return (
    <div>
      <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
        ช่องทางติดต่อ
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <FormField label="อีเมล *" htmlFor="email" error={errors?.email}>
          <Input
            placeholder="ใส่อีเมลของคุณ"
            className={`bg-white h-12 !text-lg ${errors?.email ? "border-red-500" : ""}`}
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            required
          />
        </FormField>

        {/* Phone */}
        <FormField label="เบอร์โทรศัพท์ *" htmlFor="phone" error={errors?.phone}>
          <Input
            placeholder="กรอกเบอร์โทรศัพท์"
            className={`bg-white h-12 !text-lg ${errors?.phone ? "border-red-500" : ""}`}
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            required
            maxLength={10}
          />
        </FormField>
      </div>
    </div>
  );
}

export default ContactForm;
