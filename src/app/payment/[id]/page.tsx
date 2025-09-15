"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  return (
    <div className="py-40 container mx-auto px-4 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 gap-12">
        {/* Title */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800">
            ชำระค่าบริการ
          </h3>
        </div>

        {/* รายละเอียดผู้รับบริการ */}
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
            รายละเอียดผู้รับบริการ
          </h4>
          <div className="space-y-6">
            {/* row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full grid grid-cols-1 gap-2">
                <Label htmlFor="idCard" className="text-xl">
                  เลขประจำตัวประชาชนผู้รับบริการ *
                </Label>
                <Input
                  className="bg-white h-12 text-xl"
                  type="text"
                  id="idCard"
                  placeholder="เลขประจำตัวประชาชนผู้รับบริการ"
                  required
                />
              </div>
              <div className="w-full grid grid-cols-1 gap-2">
                <Label htmlFor="birthDate" className="text-xl">
                  วัน เดือน ปีเกิด (พ.ศ.) *
                </Label>
                <Input
                  className="bg-white h-12 text-xl"
                  type="date"
                  id="birthDate"
                  required
                />
              </div>
            </div>

            {/* row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="w-full grid grid-cols-1 gap-2">
                <Label htmlFor="prefix" className="text-xl">
                  คำนำหน้า *
                </Label>
                <Input
                  className="bg-white h-12 text-xl"
                  type="text"
                  id="prefix"
                  placeholder="คำนำหน้า"
                  required
                />
              </div>
              <div className="w-full grid grid-cols-1 gap-2">
                <Label htmlFor="surName" className="text-xl">
                  ชื่อจริงตามบัตรประชาชน *
                </Label>
                <Input
                  className="bg-white h-12 text-xl"
                  type="text"
                  id="surName"
                  placeholder="ชื่อจริงตามบัตรประชาชน"
                  required
                />
              </div>
              <div className="w-full grid grid-cols-1 gap-2">
                <Label htmlFor="lastName" className="text-xl">
                  นามสกุลตามบัตรประชาชน *
                </Label>
                <Input
                  className="bg-white h-12 text-xl"
                  type="text"
                  id="lastName"
                  placeholder="นามสกุลตามบัตรประชาชน"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* ช่องทางติดต่อ */}
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
            ช่องทางติดต่อ
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full grid grid-cols-1 gap-2">
              <Label htmlFor="email" className="text-xl">
                อีเมล *
              </Label>
              <Input
                className="bg-white h-12 text-xl"
                type="email"
                id="email"
                placeholder="อีเมล"
                required
              />
            </div>
            <div className="w-full grid grid-cols-1 gap-2">
              <Label htmlFor="phone" className="text-xl">
                เบอร์โทรศัพท์ *
              </Label>
              <Input
                className="bg-white h-12 text-xl"
                type="tel"
                id="phone"
                placeholder="เบอร์โทรศัพท์"
                required
                maxLength={10}
              />
            </div>
          </div>
        </div>

        {/* โปรโมชั่น */}
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
            รหัสโปรโมชั่น(ถ้ามี)
          </h4>
          <div className="w-full grid grid-cols-1 gap-2">
            <Input
              className="bg-white h-12 text-xl"
              type="text"
              id="code"
              placeholder="กรอกรหัสโปรโมชั่น"
            />
          </div>
        </div>

        {/* Radio Payment */}
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
            เลือกวิธีการชำระเงิน
          </h4>
          <FormControl>
            <RadioGroup
              row
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value="agree"
                control={<Radio />}
                label={
                  <span className="!font-sans text-lg text-neutral-800 leading-relaxed font-semibold">
                    ฉันได้อ่านและยอมรับ{" "}
                    <span className="text-bright-blue underline cursor-pointer">
                      เงื่อนไขการให้บริการ
                    </span>{" "}
                    และ{" "}
                    <span className="text-bright-blue underline cursor-pointer">
                      นโยบายความเป็นส่วนตัว
                    </span>{" "}
                    แล้ว
                  </span>
                }
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;