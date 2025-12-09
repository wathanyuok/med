"use client";
import { useState } from "react";

function LanguageSwitcher() {
  const [showDropdown, setShowDropdown] = useState(false);

  const translatePage = (lang: string) => {
    const currentUrl = window.location.href;
    
    if (lang === "en") {
      // เปิดหน้าแปลใน tab เดิม
      window.location.href = `https://translate.google.com/translate?sl=th&tl=en&u=${encodeURIComponent(currentUrl.replace('https://translate.google.com/translate?sl=th&tl=en&u=', ''))}`;
    } else {
      // กลับหน้าเดิม (ภาษาไทย)
      const originalUrl = currentUrl.includes('translate.google')
        ? decodeURIComponent(currentUrl.split('&u=')[1] || '')
        : currentUrl;
      
      if (originalUrl && originalUrl !== currentUrl) {
        window.location.href = originalUrl;
      }
    }
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-neutral-300 hover:border-exa-pink transition-colors"
      >
        <span className="text-sm font-medium">🌐 ภาษา</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showDropdown && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden z-50">
          <button
            onClick={() => translatePage("th")}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-100 transition-colors"
          >
            🇹🇭 ไทย
          </button>
          <button
            onClick={() => translatePage("en")}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-100 transition-colors"
          >
            🇺🇸 English
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;