"use client";

import { useEffect, useState } from "react";

const clearGoogleTranslateCookies = () => {
  const hostname = window.location.hostname.replace(/^www\./, "");
  const domains = ["", "." + hostname];

  domains.forEach((domain) => {
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;" +
      (domain ? ` domain=${domain};` : "");
  });
};

export default function LanguageSwitcher() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkReady = () => {
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        setIsReady(true);
        return true;
      }
      return false;
    };

    if (checkReady()) return;

    const interval = setInterval(() => {
      if (checkReady()) clearInterval(interval);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const switchToThai = () => {
    if (!isReady) return;
    clearGoogleTranslateCookies();
    window.location.reload();
  };

  const switchToEnglish = () => {
    if (!isReady) return;
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) return;
    select.value = "en";
    select.dispatchEvent(new Event("change"));
  };

  return (
    <div className="flex items-center gap-2">
      <div
        id="google_translate_element"
        className="absolute -left-[9999px] top-0 opacity-0 pointer-events-none"
      />
      <button
        type="button"
        onClick={switchToThai}
        disabled={!isReady}
        className={`px-3 py-1 rounded-full text-sm transition ${
          isReady
            ? "bg-neutral-300 hover:bg-neutral-500 text-neutral-800 cursor-pointer"
            : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
        }`}
      >
        TH
      </button>
      <button
        type="button"
        onClick={switchToEnglish}
        disabled={!isReady}
        className={`px-3 py-1 rounded-full text-sm transition ${
          isReady
            ? "bg-neutral-300 hover:bg-neutral-500 text-neutral-800 cursor-pointer"
            : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
        }`}
      >
        EN
      </button>
    </div>
  );
}
