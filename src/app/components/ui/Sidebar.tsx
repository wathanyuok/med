"use client";

import { usePathname, useRouter } from "next/navigation";
import { CreditCard, CircleUserRound, ClockFading } from "lucide-react";
import PathSwitcher from "./PathSwitcher";
import Link from "next/link";

const items = [
    { id: 1, title: "โปรไฟล์", url: "/profile", icon: CircleUserRound },
    {
        id: 2,
        title: "ข้อมูลการชำระเงิน",
        url: "/profilePayment",
        icon: CreditCard,
    },
    {
        id: 3,
        title: "ประวัติการชำระ",
        url: "/profileHistory",
        icon: ClockFading,
    },
];

export function AppSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="flex flex-col">
            {/* ✅ Mobile (dropdown) */}
            <div className="block md:hidden mb-4">
                <PathSwitcher
                    label="ไปที่"
                    placeholder="เลือกหน้า"
                    options={items}
                    classNameSelectTrigger="border rounded-lg"
                />
            </div>

            {/* ✅ Desktop (sidebar list) */}
            <div className="hidden md:block w-64 h-screen flex flex-col border-r-2 pr-6 border-neutral-800/10">
                <nav className="flex-1 py-4">
                    <ul className="space-y-2">
                        {items.map((item) => {
                            const isActive = pathname === item.url;
                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.url}
                                        className={`flex items-center gap-3 py-3 px-4 rounded-lg transition duration-200 font-semibold hover:bg-bright-blue/10 hover:text-bright-blue  ${
                                            isActive &&
                                            "bg-bright-blue/10 text-bright-blue"
                                        }`}
                                    >
                                        <item.icon className="h-6 w-6" />
                                        <span className="text-lg">
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}