import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface HistoryItem {
    id: number;
    title: string;
    date: string;
    total: number;
    receipt: string;
}

interface TableAppProps {
    data: HistoryItem[];
}

function formatThaiDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("th-TH", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

function formatCurrency(amount: number) {
    return amount.toLocaleString("th-TH") + " บาท";
}

function TableApp({ data }: TableAppProps) {
    return (
        <div className="px-6 py-8 shadow bg-white rounded-2xl overflow-x-auto">
            <Table className="min-w-[500px] border-separate border-spacing-y-6">
                {/* Header */}
                <TableHeader className="text-sm md:text-base lg:text-lg">
                    <TableRow>
                        <TableHead className="min-w-[150px] text-left">
                            วันที่
                        </TableHead>
                        <TableHead className="min-w-[250px] text-left">
                            คำอธิบาย
                        </TableHead>
                        <TableHead className="min-w-[120px] text-center">
                            ยอดรวม
                        </TableHead>
                        <TableHead className="min-w-[180px] text-center">
                            ใบเสร็จรับเงิน
                        </TableHead>
                    </TableRow>
                </TableHeader>

                {/* Body */}
                <TableBody className="text-sm md:text-base lg:text-lg">
                    {data.map((item) => (
                        <TableRow key={item.id} className="border-2 my-4">
                            <TableCell>{formatThaiDate(item.date)}</TableCell>
                            <TableCell className="truncate max-w-[250px]">
                                {item.title}
                            </TableCell>
                            <TableCell className="text-center">
                                {formatCurrency(item.total)}
                            </TableCell>
                            <TableCell className="text-bright-blue underline text-center">
                                {item.receipt}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default TableApp;
