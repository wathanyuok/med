"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaymentPageInterface } from "@/app/payment/[id]/page";

interface Props {
    formData: PaymentPageInterface;
    onChange: (field: string, value: string) => void;
}

function ContactForm({ formData, onChange }: Props) {
    return (
        <div>
            <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
                ช่องทางติดต่อ
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full grid grid-cols-1 gap-2">
                    <Label htmlFor="email" className="text-xl">
                        อีเมล *
                    </Label>
                    <Input
                        placeholder="ใส่อีเมลของคุณ"
                        className="bg-white h-12 !text-lg"
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        required
                    />
                </div>
                <div className="w-full grid grid-cols-1 gap-2">
                    <Label htmlFor="phone" className="text-xl">
                        เบอร์โทรศัพท์ *
                    </Label>
                    <Input
                        placeholder="กรอกเบอร์โทรศัพท์"
                        className="bg-white h-12 !text-lg"
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => onChange("phone", e.target.value)}
                        required
                        maxLength={10}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactForm;