import React from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" },
];

export default function TranslationButton() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-pink-100 bg-pink-50/60 p-1">
      {LANGS.map(({ code, label }, idx) => {
        const isActive = i18n.language === code;

        return (
          <React.Fragment key={code}>
            <button
              onClick={() => changeLanguage(code)}
              className={[
                "rounded-full px-3 py-1 text-[12px] font-semibold tracking-wide transition-all duration-200",
                isActive
                  ? "bg-pink-100 text-pink-700"
                  : "text-pink-300 hover:text-pink-500",
              ].join(" ")}
            >
              {label}
            </button>

            {/* Separator */}
            {idx < LANGS.length - 1 && (
              <span className="h-3 w-px bg-pink-200" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
