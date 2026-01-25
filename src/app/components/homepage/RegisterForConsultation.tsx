import React from "react";
import Image, { type StaticImageData } from "next/image";
import ExapinkBtn from "../ui/ExapinkBtn";

import RegisterConsultationImg from "@/app/assets/images/register_for_consultation/register_for_consultation_hero_image.jpg";
import Step1 from "@/app/assets/images/register_for_consultation/step1.png";
import Step2 from "@/app/assets/images/register_for_consultation/step2.png";
import Step3 from "@/app/assets/images/register_for_consultation/step3.png";
import Step4 from "@/app/assets/images/register_for_consultation/step4.png";

const stepImageMap: Record<number, StaticImageData> = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
};

type CardProps = {
  stepNumber: 1 | 2 | 3 | 4;
  title: string;
  description: React.ReactNode;
};

const CardComponent = ({ stepNumber, title, description }: CardProps) => {
  return (
    <div className="h-full">
      {/* Image */}
      <div className="mx-auto mb-4 overflow-hidden rounded-2xl">
        {/* ใช้ aspect ratio ให้การ์ดสวยบนทุกจอ */}
        <div className="relative w-full aspect-[259/233]">
          <Image
            src={stepImageMap[stepNumber]}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={stepNumber === 1}
          />
        </div>
      </div>

      {/* Text */}
      <h4 className="mb-2 text-center text-xl md:text-2xl font-semibold text-neutral-800">
        {stepNumber}. {title}
      </h4>
      <p className="text-center text-lg md:text-2xl text-neutral-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const RegisterForConsultation = () => {
  return (
    <section className="w-full">
      {/* Top section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left */}
        <div className="order-2 lg:order-1">
          <h3 className="text-neutral-800 text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            หาหมอออนไลน์
            <br className="hidden sm:block" />
            ปรึกษาได้ใน 15 นาที*
          </h3>

          <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 mb-6 leading-relaxed">
            เข้าถึงการรักษามาตรฐานโรงพยาบาลชั้นนำผ่านมือถือคุณ
            <br className="hidden sm:block" />
            ปรึกษาได้ครอบคลุม รักษาความลับผู้ป่วยสูงสุด
            <br className="hidden sm:block" />
            ตอบโจทย์ชีวิตยุคใหม่ พร้อมบริการส่งยาถึงหน้าบ้านคุณ
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <ExapinkBtn
              label="ปรึกษาแพทย์ออนไลน์"
              classBtn="!w-full sm:!w-[280px] !py-3 !text-lg md:!text-xl"
              href="/"
            />
          </div>

          <p className="text-neutral-600 mt-4 md:mt-6 text-sm md:text-base">
            * ขึ้นอยู่กับตารางการให้บริการของแพทย์ในแต่ละวัน
          </p>
        </div>

        {/* Right */}
        <div className="order-1 lg:order-2 overflow-hidden rounded-2xl">
          <div className="relative w-full aspect-[16/12] sm:aspect-[16/10] lg:aspect-[16/12]">
            <Image
              src={RegisterConsultationImg}
              alt="register-consultation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="mt-12 md:mt-16">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 text-center mb-8 md:mb-12">
          4 ขั้นตอนง่ายๆในการปรึกษาแพทย์ออนไลน์
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <CardComponent
            stepNumber={1}
            title="สมัครสมาชิกกับเรา"
            description={
              <>
                สมัครสมาชิกเว็บไซต์ <br/>
                <a
                  href="https://Exa-med.co/AI"
                  className="text-neutral-800 underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Exa-med.co/AI
                </a>
              </>
            }
          />
          <CardComponent
            stepNumber={2}
            title="ลงทะเบียนข้อมูลผู้รับบริการ"
            description="ลงทะเบียนเลขบัตรประชาชนและข้อมูลชื่อที่อยู่"
          />
          <CardComponent
            stepNumber={3}
            title="จองคิว/ปรึกษาแพทย์"
            description="เลือกเวลานัดหมาย เข้าลิงก์ปรึกษาแพทย์ออนไลน์ผ่าน SMS"
          />
          <CardComponent
            stepNumber={4}
            title="รอรับยา"
            description="เลือกรอรับยาที่บ้านหรือเข้ามารับยาด้วยตัวเอง"
          />
        </div>
      </div>
    </section>
  );
};

export default RegisterForConsultation;
