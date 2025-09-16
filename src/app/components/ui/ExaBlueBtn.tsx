import Link from "next/link";
import React from "react";

interface ExaBlueBtnInterface {
  label: string;
  href?: string;
  onClick?: () => void;
  btnType?: "submit" | "button";
}

function ExaBlueBtn({ label, href, onClick, btnType='submit' }: ExaBlueBtnInterface) {
  const className =
    "font-semibold w-full inline-block text-lg md:text-xl border py-4 px-6 shadow bg-neutral-600 text-neutral-100 rounded-full text-center transition-transform hover:scale-105 duration-300 cursor-pointer";

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button type={btnType} onClick={onClick} className={className}>
      {label}
    </button>
  );
}

export default ExaBlueBtn;