"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { th } from "date-fns/locale/th";
import { formatDate } from "@/app/utils/formatDate";

interface DatePickerProps {
    value?: string; //  รับค่า string (เช่น "2568-06-01") จาก formData
    onChange?: (val: string) => void; //  ส่งค่ากลับไป parent
}

export function DatePicker({ value, onChange }: DatePickerProps) {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(
        value ? new Date(value) : new Date()
    );
    const [month, setMonth] = React.useState<Date | undefined>(date);
    const [display, setDisplay] = React.useState(formatDate(date));

    return (
        <div className="flex flex-col gap-3">
            <div className="relative flex gap-2">
                <Input
                    id="date"
                    value={display}
                    placeholder="01 มกราคม 2568"
                    className="bg-white h-12 !text-lg pr-10"
                    readOnly
                />
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            id="date-picker"
                            variant="ghost"
                            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                        >
                            <CalendarIcon className="size-4" />
                            <span className="sr-only">Select date</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="end"
                        alignOffset={-8}
                        sideOffset={10}
                    >
                        <Calendar
                            className="h-[370px] border-2 w-[300px]"
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            month={month}
                            onMonthChange={setMonth}
                            locale={th}
                            onSelect={(date) => {
                                setDate(date);
                                setDisplay(formatDate(date));

                                // ส่งค่าเป็น string กลับไป parent
                                if (onChange && date) {
                                    onChange(date.toISOString().split("T")[0]);
                                    // => "2025-06-01"
                                }

                                setOpen(false);
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}
