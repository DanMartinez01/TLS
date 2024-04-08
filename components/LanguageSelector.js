// LanguageSelector.js
import React, { useState } from "react";
import useCustomTranslation from "../utils/useCustomTranslation";

function LanguageSelector() {
  const { changeLanguage } = useCustomTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = (locale) => {
    changeLanguage(locale);
    toggleDropdown(); // Close the dropdown after selecting a language
  };

  return (
    <div className="relative inline-block text-left">
      {/* Desktop version with dropdown */}
      <div className="hidden lg:block">
        <div>
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full rounded-md border border-gray-100 shadow-sm px-4 py-2 bg-white-500 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Language
            {/* Toggle arrow */}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM10 4a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white-500 ring-1 ring-black ring-opacity-5 z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <button
                onClick={() => handleChangeLanguage("en")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                English
              </button>
              <button
                onClick={() => handleChangeLanguage("es")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                Spanish
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile version with flag buttons */}
      <div className="block lg:hidden">
        <button onClick={() => handleChangeLanguage("en")} className="mr-2">
          <img
            src="/assets/uk-flag.png" // Replace with your actual USA flag image path
            alt="UK Flag"
            className="w-8 h-8"
          />
        </button>
        <button onClick={() => handleChangeLanguage("es")}>
          <img
            src="/assets/spain-flag.png" // Replace with your actual Spain flag image path
            alt="Spain Flag"
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
}

export default LanguageSelector;
