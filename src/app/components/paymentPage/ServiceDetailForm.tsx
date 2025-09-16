"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaymentPageInterface } from "@/app/payment/[id]/page";
import Selection from "../ui/Selection";
import { DatePicker } from "../ui/DatePicker";


interface Props {
    formData: PaymentPageInterface;
    onChange: (field: string, value: string) => void;
}

const options = [
    { id: 1, value: "นาย" },
    { id: 2, value: "นางสาว" },
    { id: 3, value: "ดร." },
];

function ServiceDetailForm({ formData, onChange }: Props) {
    return (
        <div>
            <div className="space-y-6">
                <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
                    รายละเอียดผู้รับบริการ
                </h4>
                {/* row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full grid grid-cols-1 gap-2">
                        <Label htmlFor="idCard" className="text-xl">
                            เลขประจำตัวประชาชนผู้รับบริการ *
                        </Label>
                        <Input
                            placeholder="กรอกเลขประจำตัวประชาชน"
                            className="bg-white h-12 !text-lg"
                            type="text"
                            id="idCard"
                            value={formData.idCard}
                            onChange={(e) => onChange("idCard", e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2">
                        <Label htmlFor="birthDate" className="text-xl">
                            วัน เดือน ปีเกิด (พ.ศ.) *
                        </Label>

                        <DatePicker
                            value={formData.birthDate}
                            onChange={(val) => onChange("birthDate", val)}
                        />
                    </div>
                </div>

                {/* row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="w-full grid grid-cols-1 gap-2">
                        <Label htmlFor="prefix" className="text-xl">
                            คำนำหน้า *
                        </Label>
                        <div className="block">
                            <Selection
                                label="เลือกคำนำหน้า"
                                placeholder="คำนำหน้า"
                                options={options}
                                classNameSelectTrigger="!h-12 !text-lg"
                                value={formData.prefix}
                                onChange={(val) => onChange('prefix', val)}
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2">
                        <Label htmlFor="surName" className="text-xl">
                            ชื่อจริงตามบัตรประชาชน *
                        </Label>
                        <Input
                            placeholder="กรอกชื่อจริงของคุณ"
                            className="bg-white h-12 !text-lg"
                            type="text"
                            id="surName"
                            value={formData.surName}
                            onChange={(e) =>
                                onChange("surName", e.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2">
                        <Label htmlFor="lastName" className="text-xl">
                            นามสกุลตามบัตรประชาชน *
                        </Label>
                        <Input
                            placeholder="กรอกนามสกุล"
                            className="bg-white h-12 !text-lg"
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                                onChange("lastName", e.target.value)
                            }
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetailForm;
