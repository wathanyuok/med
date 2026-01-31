"use client";

import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { DropdownMenuApp } from "./DropdownMenuApp";
import { services } from "@/app/utils/mockData/services";
import { useLanguage } from "@/contexts/LanguageContext";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.package"), href: "/package" },
    { label: t("nav.register_for_consultation"), href: "/register_for_consultation" },
    { label: t("nav.department"), href: "/department", type: "dropdown" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.ai"), href: "/ai" },
    { label: t("nav.about"), href: "/aboutUs" },
    { label: t("nav.feedback"), href: "/feedback" },
    { label: t("nav.login"), href: "/login", type: "login-btn" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-100 shadow-lg border-b border-white/10 p-6 lg:p-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-exa-pink transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300 scale-110" />
            )}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => {

              if (item.type === "dropdown") {
                return (
                  <DropdownMenuApp
                    label={t("nav.department")}
                    key={item.label}
                  />
                );
              }

              if (item.type === "login-btn") {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="bg-neutral-300 text-neutral-800 rounded-full px-8 py-2 hover:bg-exa-pink/80 hover:text-white hover:scale-105 transition duration-300 font-medium"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    transition duration-300 font-medium relative 
                    ${
                      isActive
                        ? "text-exa-pink font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-exa-pink after:scale-x-100"
                        : "text-foreground hover:text-exa-pink after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-exa-pink after:scale-x-0 hover:after:scale-x-100"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 h-screen w-2/3 max-w-xs bg-neutral-100 shadow-lg z-40 transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex flex-col h-full">

              {/* Logo */}
              <div className="px-6 pt-4 pb-2 border-b border-neutral-200">
                <Logo />
              </div>

              {/* Menu Middle */}
              <div className="flex-1 flex flex-col space-y-4 p-6">
                {navItems
                  .filter((item) => item.type !== "login-btn")
                  .map((item) => {

                    if (item.type === "dropdown") {
                      return (
                        <div key={item.label}>
                          <button
                            onClick={() => setIsDeptOpen(!isDeptOpen)}
                            className="flex items-center justify-between w-full font-medium text-foreground hover:text-exa-pink transition duration-200"
                          >
                            {item.label}
                            {isDeptOpen ? (
                              <ChevronUp className="w-4 h-4 cursor-pointer" />
                            ) : (
                              <ChevronDown className="w-4 h-4 cursor-pointer" />
                            )}
                          </button>

                          {isDeptOpen && (
                            <div className="mt-2 ml-4 flex flex-col space-y-2">
                              {services.map((service) => {
                                const isActiveSub =
                                  pathname.startsWith(service.href);
                                return (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`
                                      text-sm transition-colors
                                      ${
                                        isActiveSub
                                          ? "text-exa-pink"
                                          : "text-neutral-700 hover:text-exa-pink"
                                      }
                                    `}
                                  >
                                    {service.th_name}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    const isActive = pathname === item.href;

                    return (
                      <Link
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
                      </Link>
                    );
                  })}
              </div>

              {/* Bottom login */}
              <div className="p-6 border-t border-neutral-200 space-y-4">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-exa-pink text-white font-semibold text-center py-3 rounded-xl hover:bg-exa-pink/80 transition-transform hover:scale-105"
                >
                  {t("nav.login")}
                </Link>
              </div>
              
            </div>
          </div>
        )}

        {/* Overlay */}
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
