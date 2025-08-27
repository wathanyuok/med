import React from "react";
import Logo from "./Logo";
import { Facebook, TikTok } from "@/app/assets/icons/serviceIcons";

function Footer() {
    const socialLinks = [
        { icon: <Facebook/>, href: "#", label: "Exa-med" },
        { icon: <TikTok/>, href: "#", label: "Exa-med.th" },
    ];

    const services = [
        "แพคเภจสุขภาพ",
        "บทความ",
        "เกี่ยวกับเรา",
        "AI วิเคราะห์ผล",
    ];

    return (
        <footer className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 ">
            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <Logo
                                exaColor="text-primary-100"
                                medColor="text-primary-100"
                                miniExaMedColor="text-primary-100"
                            />
                        </div>
                    </div>

                    {/* Services */}
                    <div className=" lg:col-span-2 space-y-4">
                        <ul className="flex justify-center-safe gap-12">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-xl text-muted-foreground hover:text-primary hover:underline transition duration-300"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center justify-center-safe gap-12">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="rounded-lg medical-glass hover:bg-primary hover:text-white hover:underline transition duration-300 medical-hover flex gap-2"
                                >
                                    <span className="text-xl">
                                        {social.label}
                                    </span>

                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <div >
                            <div className="text-md text-center">
                                Copyright © 2024 Exa-med Co., Ltd. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
