import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className={`inline-flex w-full justify-center gap-2 ${
          isOpen
            ? "underline underline-offset-8 text-[#DF371E] decoration-2"
            : ""
        }`}
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        Nos solutions
        <svg
          className={`-mr-1 h-5 w-5 ${
            isOpen ? "text-[#DF371E]" : "text-gray-400"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className=" p-4 text-base">
            <Link href="/chauffage">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/chauffage.gif"
                  alt="logo-brico"
                  width={20}
                  height={20}
                />
                <p className="pt-1">Chauffage</p>
              </div>
            </Link>
            <Link href="/chauffage/pompe-a-chaleur">
              <div className="flex items-center pl-7 py-2">
                <Image
                  width="8"
                  height="8"
                  src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
                  alt="expand-arrow--v1"
                  style={{ transform: "rotate(270deg)" }}
                />
                <p className="text-sm pl-3  ">Pompe à chaleur</p>
              </div>
            </Link>
            <Link href="/solaire">
              <div className="flex items-center gap-2 ">
                <Image
                  src="/images/solaire.gif"
                  alt="logo-brico"
                  width={20}
                  height={20}
                />
                <p>Solaire</p>
              </div>
            </Link>
            <Link href="/solaire/photovoltaique">
              <div className="flex items-center pl-7 py-2">
                <Image
                  width="8"
                  height="8"
                  src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
                  alt="expand-arrow--v1"
                  style={{ transform: "rotate(270deg)" }}
                />
                <p className="text-sm pl-3 ">Photovoltaique</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
