import AddressCard from "@/app/components/paymentPage/AddressCard";
import PaymentMethodAddingCard from "@/app/components/paymentPage/PaymentMethodAddingCard";
import PaymentMethodCard from "@/app/components/paymentPage/PaymentMethodCard";
import { AppSidebar } from "@/app/components/ui/Sidebar";
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
            <h1 className="text-3xl text-neutral-800 font-semibold">
              การชำระเงิน
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <PaymentMethodCard />
            <PaymentMethodAddingCard />
          </div>

          <div className="mt-10">
            <div className="mb-6">
              <h1 className="text-3xl text-neutral-800 font-semibold">
                ที่อยู่
              </h1>
            </div>
            <AddressCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;