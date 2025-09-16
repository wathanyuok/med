"use client";

import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // กัน hydration mismatch (SSR vs CSR)
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: "แพคเกจสุขภาพ", href: "/package" },
    { label: "แผนก", href: "/department" },
    { label: "บทความ", href: "/blog" },
    { label: "AI วิเคราะห์ผล", href: "/ai" },
    { label: "เกี่ยวกับเรา", href: "/aboutUs" },
    { label: "ติชมบริการ", href: "/feedback" },
    { label: "เข้าสู่ระบบ", href: "/login", type: "login-btn" },
  ];

  // render หลัง client mount เท่านั้น
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-100 shadow-lg border-b border-white/10 p-6 md:p-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-exa-pink transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300 scale-110" />
            )}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    transition duration-300 font-medium relative cursor-pointer
                    ${
                      item.type === "login-btn"
                        ? "bg-neutral-300 text-neutral-800 rounded-full px-8 py-2 hover:bg-exa-pink/80 hover:text-white hover:scale-105"
                        : isActive
                        ? "text-exa-pink font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-exa-pink after:scale-x-100 after:origin-left after:transition-transform"
                        : "text-foreground hover:text-exa-pink after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-exa-pink after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
                    }
                  `}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* ✅ Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed top-0 left-0 h-screen w-2/3 max-w-xs bg-neutral-100 shadow-lg z-40 transform transition-transform duration-300 ease-in-out translate-x-0"
          >
            <div className="flex flex-col h-full">
              {/* Logo ด้านบน */}
              <div className="px-6 pt-4 pb-2 border-b border-neutral-200">
                <Logo />
              </div>

              {/* เมนูกลาง */}
              <div className="flex-1 flex flex-col space-y-4 p-6">
                {navItems
                  .filter((item) => item.type !== "login-btn")
                  .map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <a
                        href={item.href}
                        key={item.label}
                        onClick={() => setIsMenuOpen(false)}
                        className={`
                          transition-colors duration-200 font-medium
                          ${
                            isActive
                              ? "text-exa-pink font-semibold"
                              : "text-foreground hover:text-exa-pink"
                          }
                        `}
                      >
                        {item.label}
                      </a>
                    );
                  })}
              </div>

              {/* ปุ่ม login ล่างสุด */}
              <div className="p-6 border-t border-neutral-200">
                <a
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-exa-pink text-white font-semibold text-center py-3 rounded-xl hover:bg-exa-pink/80 transition-transform hover:scale-105"
                >
                  เข้าสู่ระบบ
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Overlay (กดปิดเมนู) */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 animate-fadeIn"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}

export default Navigation;