import Link from "next/link";
import React from "react";

interface LogoProps {
  exaColor?: string;
  medColor?: string;
  miniExaMedColor?: string;
  isJustLogoImage?: boolean;
}

function Logo({
  exaColor = "text-exa-pink",
  medColor = "text-gray-primary",
  miniExaMedColor = "text-gray-primary",
  isJustLogoImage = false,
}: LogoProps) {
  const content = (
    <div className="relative">
      <div className="text-5xl font-medium flex gap-4 py-6">
        <div>
          <h1 className={exaColor}>EXA</h1>
        </div>
        <div>
          <h1 className={medColor}>MED+</h1>
        </div>
      </div>

      <div className="absolute top-1 right-0 text-sm">
        <p className={miniExaMedColor}>เอ็กซ์ซ่า เมด</p>
      </div>
    </div>
  );

  return isJustLogoImage ? (
    <div className="inline-block select-none">{content}</div>
  ) : (
    <Link href="/" className="inline-block select-none cursor-pointer">
      {content}
    </Link>
  );
}

export default Logo;