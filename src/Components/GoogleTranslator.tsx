import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google?: any;
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="fixed left-0 bottom-0 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow"
    ></div>
  );
};

export default GoogleTranslate;
