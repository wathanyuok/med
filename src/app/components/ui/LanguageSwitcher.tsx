"use client";
import { useEffect, useState } from "react";

function LanguageSwitcher() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // เช็คว่าโหลด script แล้วหรือยัง
    if (document.getElementById("google-translate-script")) {
      setIsLoaded(true);
      return;
    }

    // สร้าง function init
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "th",
          includedLanguages: "th,en",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setIsLoaded(true);
    };

    // โหลด script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex items-center">
      <div id="google_translate_element"></div>
      {!isLoaded && (
        <span className="text-sm text-neutral-500">Loading...</span>
      )}
    </div>
  );
}

export default LanguageSwitcher;