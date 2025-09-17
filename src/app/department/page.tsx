import React from "react";
import ServiceCard from "../components/homepage/ServiceCard";
import { services } from "../utils/mockData/services";

function page() {
    return (
        <div className="my-40 container mx-auto px-4 md:px-4 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
                    {services.map((service, idx) => {
                        return (
                            <ServiceCard
                                key={idx}
                                icon={service.icon}
                                th_name={service.th_name}
                                eng_name={service.eng_name}
                                href={service.href}
                                classNameCard="!bg-white"
                            />
                        );
                    })}
                </div>
        </div>
    );
}

export default page;
