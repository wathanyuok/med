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
    errors?: Partial<Record<keyof PaymentPageInterface, string>>;
}

const options = [
    { id: 1, value: "นาย" },
    { id: 2, value: "นาง" },
    { id: 3, value: "นางสาว" },
];

// Component ย่อยสำหรับ Field มี Label + Input + Error
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
            {/* ✅ เว้นพื้นที่ error ไว้เสมอ */}
            <p className="text-red-500 text-sm min-h-[20px]">{error || ""}</p>
        </div>
    );
}

function ServiceDetailForm({ formData, onChange, errors }: Props) {
    return (
        <div>
            <div className="space-y-6">
                <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
                    รายละเอียดผู้รับบริการ
                </h4>

                {/* row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        label="เลขประจำตัวประชาชนผู้รับบริการ *"
                        htmlFor="idCard"
                        error={errors?.idCard}
                    >
                        <Input
                            placeholder="กรอกเลขประจำตัวประชาชน"
                            className={`bg-white h-12 !text-lg ${
                                errors?.idCard ? "border-red-500" : ""
                            }`}
                            type="text"
                            id="idCard"
                            value={formData.idCard}
                            onChange={(e) => onChange("idCard", e.target.value)}
                            required
                        />
                    </FormField>

                    <FormField
                        label="วัน เดือน ปีเกิด (พ.ศ.) *"
                        htmlFor="birthDate"
                        error={errors?.birthDate}
                    >
                        <DatePicker
                            value={formData.birthDate}
                            onChange={(val) => onChange("birthDate", val)}
                        />
                    </FormField>
                </div>

                {/* row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                        label="คำนำหน้า *"
                        htmlFor="prefix"
                        error={errors?.prefix}
                    >
                        <Selection
                            label="เลือกคำนำหน้า"
                            placeholder="คำนำหน้า"
                            options={options}
                            classNameSelectTrigger={`!h-12 !text-lg ${errors?.prefix ? "border-red-500" : ""}`}
                            value={options.find((o) => o.value === formData.prefix)?.id}
                            onChange={(val) => {
                                const found = options.find((o) => o.id === val);
                                onChange("prefix", found ? found.value : "");
                            }}
                        />
                    </FormField>

                    <FormField
                        label="ชื่อจริงตามบัตรประชาชน *"
                        htmlFor="surName"
                        error={errors?.surName}
                    >
                        <Input
                            placeholder="กรอกชื่อจริงของคุณ"
                            className={`bg-white h-12 !text-lg ${
                                errors?.surName ? "border-red-500" : ""
                            }`}
                            type="text"
                            id="surName"
                            value={formData.surName}
                            onChange={(e) =>
                                onChange("surName", e.target.value)
                            }
                            required
                        />
                    </FormField>

                    <FormField
                        label="นามสกุลตามบัตรประชาชน *"
                        htmlFor="lastName"
                        error={errors?.lastName}
                    >
                        <Input
                            placeholder="กรอกนามสกุล"
                            className={`bg-white h-12 !text-lg ${
                                errors?.lastName ? "border-red-500" : ""
                            }`}
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                                onChange("lastName", e.target.value)
                            }
                            required
                        />
                    </FormField>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetailForm;