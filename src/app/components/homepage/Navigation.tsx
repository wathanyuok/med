'use client'
import { Heart, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Logo from './Logo';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "แพคเกจสุขภาพ", href: "#home" },
    { label: "แผนก", href: "#services" },
    { label: "บทความ", href: "#doctors" },
    { label: "AI วิเคราะห์ผล", href: "#about" },
    { label: "เกี่ยวกับเรา", href: "#contact" },
    { label: "ติชมบริการ", href: "#contact" },
    { label: "เข้าสู่ระบบ", href: "#contact", type: "login-btn" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 medical-glass border-b border-white/10 p-6 md:p-8 shadow-lg bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-12">

          {/* Mobile Menu Button (ซ้ายบน mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6 cursor-pointer scale-110" /> : <Menu className="w-6 h-6 cursor-pointer scale-110" />}
          </button>

          {/* Logo (กลาง mobile, ซ้าย desktop) */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition duration-300 font-medium
                  ${item.type === "login-btn" 
                    ? "bg-neutral-300 text-neutral-800 rounded-full px-8 py-2 hover:bg-primary/90 hover:scale-105"
                    : "text-foreground hover:text-primary"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium py-2 text-center
                    ${item.type === "login-btn" 
                      ? "text-gray-primary px-4 py-2 hover:bg-primary/90"
                      : "text-foreground hover:text-primary"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navigation;