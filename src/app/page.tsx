"use client";

import ServiceSection from "./components/homepage/ServiceSection";
import ArticleSection from "./components/homepage/ArticleSection";
import AvatarSection from "./components/homepage/AvatarSection";
import BenefitSection from "./components/homepage/BenefitSection";
import AnalyzeHealthSection from "./components/homepage/AnalyzeHealthSection";
import PackageSection from "./components/homepage/PackageSection";

export default function Home() {
    return (
        <div>

            <div className="container mx-auto px-4">
                {/* AnalyzeHealth */}
                <div className="mt-40">
                    <AnalyzeHealthSection />
                </div>

                <div className="pb-10 pt-18">
                    <PackageSection/>
                </div>

                {/* Lab */}
                {/* <div className="py-12">
                    <LabSection />
                </div> */}

                {/* Benefit */}
                <div className="">
                    <BenefitSection />
                </div>
            </div>

            {/* Service */}
            <div className=" bg-sky py-12 ">
                <div className="container mx-auto px-4">
                    <ServiceSection />
                </div>
            </div>

            <div className="space-y-12 container mx-auto px-4">
                {/* Avatar */}
                <div className="mt-12">
                    <AvatarSection />
                </div>

                {/* Article */}
                <div className="mb-12">
                    <ArticleSection />
                </div>

                {/* Advice */}
                {/* <div className="mb-12">
                    <AdviceSection />
                </div> */}
            </div>

           
        </div>
    );
}
