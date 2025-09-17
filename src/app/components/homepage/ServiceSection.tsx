import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/app/utils/mockData/services";

function ServiceSection() {


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
                                href={service.href}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
