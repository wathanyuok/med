import React from "react";
import { icons } from "@/app/assets/icons/homepageIcons";
import ServiceCard from "./ServiceCard";

type IconKey = keyof typeof icons;

function ServiceSection() {
    const services: { icon: IconKey; th_name: string; eng_name: string }[] = [
        {
            icon: "VerifyProfileIcon",
            th_name: "ตรวจสุขภาพครบวงจร",
            eng_name: "Advanced Screening & Diagnostics",
        },
        {
            icon: "AdolescentWellnessDevelopment",
            th_name: "พัฒนาการเด็กและวัยรุ่น",
            eng_name: "Adolescent Wellness & Development",
        },
        {
            icon: "WomenHealthScreening",
            th_name: "สุขภาพสตรี",
            eng_name: "Women’s Health & Screening",
        },
        {
            icon: "SportsMedicineRehabilitation",
            th_name: "เวชศาสตร์กีฬาและการฟื้นฟู",
            eng_name: "Sports Medicine & Rehabilitation",
        },
        {
            icon: "BoneJoint",
            th_name: "ศูนย์กระดูกและข้อ",
            eng_name: "Bone and Joint Center",
        },
        {
            icon: "AestheticDermatology",
            th_name: "สุขภาพและความงาม",
            eng_name: "Aesthetic & Dermatology",
        },
        {
            icon: "ComprehensiveDental",
            th_name: "ทันตกรรมครบวงจร",
            eng_name: "Comprehensive Dental",
        },
        {
            icon: "SpecializedEye",
            th_name: "ศูนย์จักษุเฉพาะทาง",
            eng_name: "Specialized Eye Care Center",
        },
    ];

    return (
        <div className="bg-sky">
            <div>
                <h3 className="text-2xl md:text-3xl text-neutral-800 font-semibold text-center">
                    บริการของเรา
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 mt-8">
                    {services.map((service, idx) => {
                        return (
                            <ServiceCard
                                key={idx}
                                icon={service.icon}
                                th_name={service.th_name}
                                eng_name={service.eng_name}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
