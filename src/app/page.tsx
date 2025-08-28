"use client";

import Navigation from "./components/homepage/Navigation";
import ServiceSection from "./components/homepage/ServiceSection";
import AdviceSection from "./components/homepage/AdviceSection";
import ArticleSection from "./components/homepage/ArticleSection";
import Footer from "./components/homepage/Footer";
import AvatarSection from "./components/homepage/AvatarSection";
import BenefitSection from "./components/homepage/BenefitSection";
import AnalyzeHealthSection from "./components/homepage/AnalyzeHealthSection";
import LabSection from "./components/homepage/LabSection";

export default function Home() {
    return (
        <div>
            <Navigation />

            <div className=" container mx-auto px-4">
                {/* AnalyzeHealth */}
                <div className="mt-48">
                    <AnalyzeHealthSection />
                </div>

                {/* Lab */}
                <div className=" py-12">
                    <LabSection />
                </div>

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
                <div className="">
                    <AvatarSection />
                </div>

                {/* Article */}
                <div className="">
                    <ArticleSection />
                </div>

                {/* Advice */}
                <div className="mb-12">
                    <AdviceSection />
                </div>
            </div>

            {/* Footer */}
            <div className="bg-neutral-800 text-neutral-100">
                <Footer />
            </div>
        </div>
    );
}
