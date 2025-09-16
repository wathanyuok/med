"use client";
import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

interface Props {
  acceptRule: string;
  setAcceptRule: (val: string) => void;
}

function PaymentAgreement({ acceptRule, setAcceptRule }: Props) {
  return (
    <div>
      <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
        รหัสโปรโมชั่น(ถ้ามี)
      </h4>
      <FormControl>
        <RadioGroup
          row
          value={acceptRule}
          onChange={(e) => setAcceptRule(e.target.value)}
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
  );
}

export default PaymentAgreement;
