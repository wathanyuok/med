import Link from "next/link";
import React from "react";

interface ExapinkBtnInterface {
  label: string;
  href?: string;
  onClick?: () => void;
  btnType?: "submit" | "button";
  classBtn?: string;
}

function ExapinkBtn({ label, href, onClick, btnType = "submit",classBtn }: ExapinkBtnInterface) {
  const className =
    `${classBtn} font-semibold w-full inline-block text-md border py-1 shadow text-neutral-100 rounded-full text-center transition-transform hover:scale-105 duration-300 cursor-pointer`;

  if (href) {
    return (
      <Link href={href} className={className} style={{ background: "var(--color-exa-tab)" }}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type={btnType}
      onClick={onClick}
      className={className}
      style={{ background: "var(--color-exa-tab)" }}
    >
      {label}
    </button>
  );
}

export default ExapinkBtn;