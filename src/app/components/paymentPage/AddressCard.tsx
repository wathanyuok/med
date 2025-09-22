import React from "react";

function AddressCard() {
  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-white space-y-4 sm:space-y-6 transition duration-200 shadow w-full">
      <div>
        <div className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed break-words">
          <p>WELLNESS PLUS CENTER Co., Ltd., 147 Ngamwongwan Rd.,</p>
          <p>Bangkhen, Muang Nonthaburi,</p>
          <p>Nonthaburi Province, Thailand 11000</p>
        </div>

        <div className="text-sm sm:text-base md:text-lg">
          เลขประจำตัวผู้เสียภาษี 0125561035672
        </div>
      </div>

      <div className="hover:scale-105 transition duration-200 text-center text-sm sm:text-base md:text-lg font-semibold text-bright-blue/80 hover:text-bright-blue/100 cursor-pointer">
        แก้ไขข้อมูล
      </div>
    </div>
  );
}

export default AddressCard;
