import { AccordionApp } from "@/app/components/ui/AccordionApp";
import { AppSidebar } from "@/app/components/ui/Sidebar";
import TableApp from "@/app/components/ui/TableApp";
import { mockHistory } from "@/app/utils/mockData/history";
import React from "react";

function Page() {
  return (
    <div className="container mx-auto pt-35 px-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/6 md:mr-12">
          <AppSidebar />
        </div>

        {/* Main content */}
        <div className="w-full md:w-5/6 mb-40">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl text-neutral-800 font-semibold">
              ประวัติการชำระ
            </h1>
          </div>

          {/*  Table (desktop only) */}
          <div className="hidden md:block">
            <TableApp data={mockHistory} />
          </div>

          {/*  Accordion (mobile only) */}
          <div className="block md:hidden">
            <AccordionApp items={mockHistory} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
