import React from "react";
import Logo from "./Logo";
import { Facebook, TikTok } from "@/app/assets/icons/homepageIcons";

function Footer() {
  const socialLinks = [
    { icon: <Facebook />, href: "#", label: "Exa-med" },
    { icon: <TikTok />, href: "#", label: "Exa-med.th" },
  ];

  const services = [
    "แพคเภจสุขภาพ",
    "บทความ",
    "เกี่ยวกับเรา",
    "AI วิเคราะห์ผล",
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/10 via-background to-secondary/5">
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
                  <a
                    href="#"
                    className="text-lg sm:text-xl text-muted-foreground hover:text-primary hover:underline transition duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-12">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="rounded-lg hover:bg-primary hover:text-white hover:underline transition duration-300 flex items-center justify-center gap-2"
                >
                  <span className="text-lg sm:text-xl">{social.label}</span>
                  {social.icon}
                </a>
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
