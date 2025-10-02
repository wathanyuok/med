"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { services } from "@/app/utils/mockData/services";
import { usePathname } from "next/navigation";
import { useState } from "react";

type DropdownMenuAppProps = {
  label: string;
};

export function DropdownMenuApp({ label }: DropdownMenuAppProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // ถ้าอยู่หน้า department/* หรือ dropdown กำลังเปิด
  const isActive = pathname.startsWith("/department") || open;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <span
          className={`
            transition duration-300 relative cursor-pointer
            ${isActive
              ? "text-exa-pink font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-exa-pink after:scale-x-100 after:origin-left after:transition-transform"
              : "text-foreground hover:text-exa-pink font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-exa-pink after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
            }
          `}
        >
          {label}
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 mt-4 py-4 px-0" align="start">
        <DropdownMenuGroup>
          {services.map((service) => {
            const isActiveSub = pathname.startsWith(service.href);
            return (
              <DropdownMenuItem
                key={service.href}
                asChild
                className="!mx-0 data-[highlighted]:bg-neutral-300 data-[highlighted]:text-neutral-800"
              >
                <Link
                  href={service.href}
                  className={`
                    w-full flex items-center gap-2 cursor-pointer text-neutral-800 px-3 rounded-b-none rounded-t-none
                  `}
                >
                  <span className="flex flex-col w-full">
                    <span className="text-sm font-medium">{service.th_name}</span>
                  </span>
                </Link>
              </DropdownMenuItem>

            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
