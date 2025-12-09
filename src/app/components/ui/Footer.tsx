import React from "react";
import Logo from "./Logo";
import Link from "next/link"; 
import { Facebook, TikTok } from "@/app/assets/icons/homepageIcons";

function Footer() {
  const socialLinks = [
    { icon: <Facebook />, href: "https://www.facebook.com/share/1A45bVK3Wr/?mibextid=wwXIfr", label: "Exa-med" },
    { icon: <TikTok />, href: "#", label: "Exa-med.th" },
  ];

  const services = [
    { label: "แพคเภจสุขภาพ", href: "/package" },
    { label: "บทความ", href: "/blog" },
    { label: "เกี่ยวกับเรา", href: "/aboutUs" },
    { label: "AI วิเคราะห์ผล", href: "/ai" }
  ];

  return (
    <footer className="bg-neutral-800 text-neutral-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
            <Logo
              exaColor="text-primary-100"
              medColor="text-primary-100"
              miniExaMedColor="text-primary-100"
            />
          </div>

          {/* Services & Social */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start space-y-6">
            {/* Services */}
            <ul className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-12 text-center lg:text-left">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href || ""}
                    className="text-lg sm:text-xl hover:underline transition duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-12">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="rounded-lg hover:bg-primary hover:text-white hover:underline transition duration-300 flex items-center justify-center gap-2"
                >
                  <span className="text-lg sm:text-xl">{social.label}</span>
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm sm:text-md text-center lg:text-left mt-4">
              Copyright © 2024 Exa-med Co., Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
