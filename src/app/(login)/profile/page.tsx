import { AppSidebar } from "@/app/components/ui/Sidebar";
import React from "react";

function Page() {
    return (
        <div className="container mx-auto pt-35 px-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <div className="md:w-1/6 w-full md:mr-12">
                    <AppSidebar />
                </div>

                {/* Main content */}
                <div className="md:w-5/6 w-full mb-40">
                    <div className="mb-6">
                        <h1 className="text-3xl text-neutral-800 font-semibold">
                            Profile Page
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
