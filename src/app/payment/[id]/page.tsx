"use client";

import React, { useState } from "react";
import PaymentSuccess from "@/app/components/paymentPage/PaymentSuccess";
import ServiceDetailForm from "@/app/components/paymentPage/ServiceDetailForm";
import ContactForm from "@/app/components/paymentPage/ContactForm";
import PromotionForm from "@/app/components/paymentPage/PromotionForm";
import PaymentAgreement from "@/app/components/paymentPage/PaymentAgreement";
import PaymentConfirm from "@/app/components/paymentPage/PaymentConfirm";
import { packages } from "@/app/utils/mockData/packages";
import Image from "next/image";
import { showToast } from "@/app/utils/showTast";
import { validateForm } from "@/app/utils/validator";

export interface PaymentPageInterface {
  idCard: string;
  birthDate: string;
  prefix: string;
  surName: string;
  lastName: string;
  email: string;
  phone: string;
  code: string;
}

interface PaymentPageProps {
  params: Promise<{ id: string }>;
}

function PaymentPage({ params }: PaymentPageProps) {
  const { id } = React.use(params);
  const [acceptRule, setAcceptRule] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState<PaymentPageInterface>({
    idCard: "",
    birthDate: "",
    prefix: "",
    surName: "",
    lastName: "",
    email: "",
    phone: "",
    code: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof PaymentPageInterface | "general", string>>
  >({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // เคลียร์ error ถ้ากรอกใหม่
  };

  const handleConfirm = () => {
    const requiredFields: (keyof PaymentPageInterface)[] = [
      "idCard",
      "birthDate",
      "prefix",
      "surName",
      "lastName",
      "email",
      "phone",
    ];

    const validationErrors = validateForm(formData, requiredFields, [
      () =>
        acceptRule !== "agree"
          ? { general: "กรุณาอ่านและยอมรับเงื่อนไขการให้บริการ และนโยบายความเป็นส่วนตัว" }
          : null,
      () =>
        formData.email && !/\S+@\S+\.\S+/.test(formData.email)
          ? { email: "กรุณากรอกอีเมลให้ถูกต้อง" }
          : null,
    ]);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      if (validationErrors.general) {
        showToast.error("ไม่สามารถดำเนินการได้", validationErrors.general);
      } else {
        showToast.error("ไม่สามารถดำเนินการได้", "กรุณากรอกข้อมูลให้ครบถ้วน");
      }
      return;
    }

    console.log("ส่งข้อมูลสำเร็จ", formData);
    setIsSuccess(true);
  };

  const packageData = packages.find((pkg) => pkg.id === Number(id));

  return (
    <div className="py-40 container mx-auto px-4 md:px-12 lg:px-24">
      {isSuccess ? (
        <PaymentSuccess />
      ) : (
        <div className="grid grid-cols-1 gap-12">
          {/* Package Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
              ชำระค่าบริการ
            </h3>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 bg-white/70 p-4 md:p-8 shadow rounded-2xl">
              <div className="w-full md:w-1/3 h-56 shadow rounded-2xl bg-icy-blue overflow-hidden aspect-[4/3] relative">
                {packageData?.images?.[0] && (
                  <Image
                    src={packageData.images[0]}
                    alt={packageData.title}
                    fill
                    className="rounded-2xl object-cover"
                  />
                )}
              </div>
              <div className="w-full md:w-2/3 space-y-6 md:space-y-8">
                <div>
                  <h5 className="text-neutral-800 text-xl md:text-2xl font-semibold">
                    {packageData?.title || ""}
                  </h5>
                  <p className="text-neutral-600 text-base md:text-xl">
                    {packageData?.detail || ""}
                  </p>
                </div>
                <div className="flex gap-24 items-start text-neutral-800 text-lg md:text-xl">
                  <p>{packageData?.price?.toLocaleString()} บาท</p>
                  <p>x1</p>
                </div>
              </div>
            </div>
          </div>

          <ServiceDetailForm
            formData={formData}
            onChange={handleChange}
            errors={errors}
          />
          <ContactForm
            formData={formData}
            onChange={handleChange}
            errors={errors}
          />
          <PromotionForm formData={formData} onChange={handleChange} />
          <PaymentAgreement
            acceptRule={acceptRule}
            setAcceptRule={setAcceptRule}
          />
          <PaymentConfirm onConfirm={handleConfirm} />
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
