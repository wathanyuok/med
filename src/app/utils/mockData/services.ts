import { icons } from "@/app/assets/icons/homepageIcons";

type IconKey = keyof typeof icons;

export const services: {
    icon: IconKey;
    th_name: string;
    eng_name: string;
    href: string;
}[] = [
    {
        icon: "VerifyProfileIcon",
        th_name: "ตรวจสุขภาพครบวงจร",
        eng_name: "Advanced Screening & Diagnostics",
        href: "/department/checkup",
    },
    {
        icon: "AdolescentWellnessDevelopment",
        th_name: "พัฒนาการเด็กและวัยรุ่น",
        eng_name: "Adolescent Wellness & Development",
        href: "/department/child",
    },
    {
        icon: "WomenHealthScreening",
        th_name: "สุขภาพสตรี",
        eng_name: "Women’s Health & Screening",
        href: "/department/woman",
    },
    {
        icon: "SportsMedicineRehabilitation",
        th_name: "เวชศาสตร์กีฬาและการฟื้นฟู",
        eng_name: "Sports Medicine & Rehabilitation",
        href: "/department/physical",
    },
    {
        icon: "BoneJoint",
        th_name: "ศูนย์กระดูกและข้อ",
        eng_name: "Bone and Joint Center",
        href: "/department/bone",
    },
    {
        icon: "AestheticDermatology",
        th_name: "สุขภาพและความงาม",
        eng_name: "Aesthetic & Dermatology",
        href: "/department/skin",
    },
    {
        icon: "ComprehensiveDental",
        th_name: "ทันตกรรมครบวงจร",
        eng_name: "Comprehensive Dental",
        href: "/department/dental",
    },
    {
        icon: "SpecializedEye",
        th_name: "ศูนย์จักษุเฉพาะทาง",
        eng_name: "Specialized Eye Care Center",
        href: "/department/eye",
    },
];
