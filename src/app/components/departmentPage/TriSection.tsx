import React from "react";
import Image, { StaticImageData } from "next/image";

interface TriSectionProps {
    images: (string | StaticImageData)[];
    reverse?: boolean;
}

function TriSection({ images, reverse = false }: TriSectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            {/* รูปใหญ่ */}
            <div
                className={`relative w-full aspect-[4/3] md:aspect-auto md:h-[500px] overflow-hidden md:col-span-2
          ${
              reverse
                  ? "md:order-2 md:rounded-r-2xl"
                  : "md:order-1 md:rounded-l-2xl"
          }
          rounded-t-2xl md:rounded-t-none`}
            >
                <Image
                    src={images[0]}
                    alt="Main section"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
            </div>

            {/* ฝั่งเล็ก (2 รูป) */}
            <div
                className={`grid grid-rows-2 ${
                    reverse ? "md:order-1" : "md:order-2"
                }`}
            >
                {/* บน */}
                <div
                    className={`relative w-full aspect-[16/9] md:h-[250px] overflow-hidden
            ${reverse ? "md:rounded-tl-2xl" : "md:rounded-tr-2xl"}
            rounded-none`}
                >
                    <Image
                        src={images[1]}
                        alt="Top section"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                </div>
                {/* ล่าง */}
                <div
                    className={`relative w-full aspect-[16/9] md:h-[250px] overflow-hidden
            ${reverse ? "md:rounded-bl-2xl" : "md:rounded-br-2xl"}
            rounded-b-2xl md:rounded-b-none`}
                >
                    <Image
                        src={images[2]}
                        alt="Bottom section"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
}

export default TriSection;
