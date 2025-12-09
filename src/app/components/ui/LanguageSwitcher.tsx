"use client";
import { useState } from "react";

function LanguageSwitcher() {
  const [lang, setLang] = useState("th");

  return (
    <div className="flex gap-1">
      <button
        onClick={() => setLang("th")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          lang === "th"
            ? "bg-exa-pink text-white"
            : "bg-neutral-200 text-neutral-600 hover:bg-neutral-300"
        }`}
      >
        TH
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          lang === "en"
            ? "bg-exa-pink text-white"
            : "bg-neutral-200 text-neutral-600 hover:bg-neutral-300"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;